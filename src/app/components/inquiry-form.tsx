"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success";

export function InquiryForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "");
    const service = String(data.get("service") ?? "");
    const purpose = String(data.get("purpose") ?? "").trim();

    if (!name || !service || !purpose) {
      setError("별표로 표시된 필수 항목을 모두 입력해 주세요.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("연락 가능한 이메일 주소를 확인해 주세요.");
      return;
    }

    setError("");
    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 500);
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <span>REQUEST CHECKED</span>
        <h3>입력 내용이 확인되었습니다.</h3>
        <p>
          현재는 실제 전송 채널 연결 전입니다. 최종 이메일 또는 카카오톡 채널이
          확정되면 이 단계에서 바로 상담 요청이 전송됩니다.
        </p>
        <button type="button" onClick={() => setStatus("idle")}>
          내용 다시 작성하기
        </button>
      </div>
    );
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit} noValidate>
      <div className="field-row">
        <label>
          이름 또는 회사명 <b>*</b>
          <input name="name" autoComplete="name" required placeholder="성함이나 회사명을 입력해 주세요" />
        </label>
        <label>
          이메일 <b>*</b>
          <input name="email" type="email" autoComplete="email" required placeholder="reply@example.com" />
        </label>
      </div>
      <div className="field-row">
        <label>
          필요한 서비스 <b>*</b>
          <select name="service" required defaultValue="">
            <option value="" disabled>서비스를 선택해 주세요</option>
            <option>랜딩 페이지</option>
            <option>비즈니스 홈페이지</option>
            <option>업무 자동화</option>
            <option>상담 후 결정</option>
          </select>
        </label>
        <label>
          희망 일정
          <select name="schedule" defaultValue="">
            <option value="">일정을 선택해 주세요</option>
            <option>가능한 빠르게</option>
            <option>1개월 이내</option>
            <option>2~3개월 이내</option>
            <option>협의 가능</option>
          </select>
        </label>
      </div>
      <label>
        프로젝트 목적 <b>*</b>
        <input name="purpose" required placeholder="예: 신규 서비스 소개와 상담 문의 수집" />
      </label>
      <label>
        필요한 기능
        <textarea name="features" rows={3} placeholder="필요한 화면, 기능, 연동할 서비스가 있다면 적어 주세요" />
      </label>
      <div className="field-row">
        <label>
          예산 범위
          <select name="budget" defaultValue="">
            <option value="">예산 범위를 선택해 주세요</option>
            <option>아직 정하지 못함</option>
            <option>100만 원 미만</option>
            <option>100만~300만 원</option>
            <option>300만~500만 원</option>
            <option>500만 원 이상</option>
          </select>
        </label>
        <label>
          참고 자료
          <input name="reference" type="url" placeholder="https://" />
        </label>
      </div>
      <label>
        추가 설명
        <textarea name="details" rows={5} placeholder="현재 상황과 궁금한 점을 자유롭게 적어 주세요" />
      </label>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="submit-button" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "내용 확인 중..." : "상담 신청 내용 확인하기"}
      </button>
      <p id="privacy-notice" className="form-disclaimer">
        실제 연락처 확정 전까지 내용은 외부로 전송되거나 저장되지 않습니다.
      </p>
    </form>
  );
}
