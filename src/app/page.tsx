import Image from "next/image";
import { InquiryForm } from "./components/inquiry-form";
import { cases, faq, process, reasons, services } from "@/content/ko";

const kmongProfile = "https://kmong.com/@데브머신";
const soomgoProfile = "https://soomgo.com/profile/users/15837480";
const githubProfile = "https://github.com/kangbeomjoon";

export default function Home() {
  return (
    <main id="top" className="site-shell">
      <a className="skip-link" href="#main-content">
        본문으로 바로가기
      </a>

      <div className="announcement" role="status">
        <strong>PROJECT DESK</strong>
        <span>한국어 프로젝트 상담을 받고 있습니다.</span>
        <a href="#inquiry">상담 범위 확인하기</a>
      </div>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="데브머신 홈">
          <span>DEV</span>MACHINE
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#services">서비스</a>
          <a href="#work">작업 사례</a>
          <a href="#process">진행 방식</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="header-status" aria-label="프로젝트 상담 상태">
          <span><i className="status-dot online" />상담 접수</span>
          <span><i className="status-dot review" />일정 협의</span>
          <span><i className="status-dot neutral" />KO 우선</span>
        </div>
        <a className="header-cta" href="#inquiry">PROJECT 문의</a>
      </header>

      <section id="main-content" className="hero" aria-labelledby="hero-title">
        <figure className="hero-visual">
          <Image
            src="/images/devmachine-operator-v6.png"
            alt="정면을 바라보는 근육질 데브머신 게임 캐릭터 일러스트"
            fill
            priority
            sizes="(max-width: 760px) 100vw, (max-width: 1100px) 55vw, 50vw"
          />
          <figcaption>FIELD OPERATOR / WEB &amp; AUTOMATION</figcaption>
        </figure>

        <article className="hero-copy">
          <span className="section-code">DM / 001 — INTRO</span>
          <h1 id="hero-title">
            사업 아이디어를<br />
            <em>작동하는 웹사이트와</em><br />
            자동화로 만듭니다.
          </h1>
          <p>
            랜딩 페이지부터 비즈니스 홈페이지, 반복 업무 자동화까지.
            기획·개발·배포를 한 사람이 끝까지 책임집니다.
          </p>
          <div className="hero-actions">
            <a className="action-primary" href="#inquiry">프로젝트 문의하기</a>
            <a className="action-secondary" href="#work">작업 사례 보기</a>
          </div>
          <div className="availability">
            <span>AVAILABLE FOR PROJECTS</span>
            <p>지원 여부와 일정은 상담 후 명확하게 안내합니다.</p>
          </div>
        </article>

        <aside className="hero-rail" aria-label="데브머신 요약 정보">
          <section className="rail-block now-block">
            <span className="rail-title">NOW</span>
            <h2>작고 명확하게 시작해서, 운영 가능한 결과로.</h2>
            <p>필요한 기능과 제외 범위를 먼저 정리한 뒤 견적과 일정을 안내합니다.</p>
            <a href="#process">진행 방식 읽기</a>
          </section>
          <section className="rail-block dossier-block">
            <span className="rail-title">SERVICE FIELD NOTE</span>
            <Image
              src="/images/devmachine-dossier.png"
              alt="웹사이트와 업무 자동화 설계도가 담긴 데브머신 서비스 노트 일러스트"
              width={1200}
              height={900}
              sizes="(max-width: 1100px) 38vw, 20vw"
            />
            <a href="#services">세 가지 서비스 확인</a>
          </section>
          <section className="rail-block platform-block">
            <span className="rail-title">PUBLIC PROFILES</span>
            <a href={kmongProfile} target="_blank" rel="noreferrer">크몽 공개 프로필</a>
            <a href={soomgoProfile} target="_blank" rel="noreferrer">숨고 공개 프로필</a>
          </section>
        </aside>
      </section>

      <section id="services" className="section-wrap" aria-labelledby="services-title">
        <div className="section-heading">
          <span className="section-code">DM / 010 — SERVICES</span>
          <h2 id="services-title">세 가지 임무, 한 명의 책임자.</h2>
          <p>필요한 결과에 맞춰 범위를 정하고, 과도한 기능 없이 운영 가능한 형태로 완성합니다.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article key={service.number} className="service-item">
              <span className="item-number">{service.number}</span>
              <p className="eyebrow">{service.for}</p>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.includes.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="section-wrap work-section" aria-labelledby="work-title">
        <div className="section-heading work-heading">
          <span className="section-code">DM / 020 — SELECTED WORK</span>
          <h2 id="work-title">문제와 해결 방식으로 보는 작업 사례.</h2>
          <p>확인되지 않은 고객명, 성과 수치, 후기는 사용하지 않았습니다.</p>
        </div>
        <div className="case-grid">
          {cases.map((project, index) => (
            <article key={project.title} className="case-item">
              <div className="case-index">CASE {String(index + 1).padStart(2, "0")}</div>
              <h3>{project.title}</h3>
              <dl>
                <div><dt>문제</dt><dd>{project.problem}</dd></div>
                <div><dt>해결</dt><dd>{project.solution}</dd></div>
                <div><dt>결과물</dt><dd>{project.output}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="section-wrap" aria-labelledby="process-title">
        <div className="section-heading compact-heading">
          <span className="section-code">DM / 030 — PROCESS</span>
          <h2 id="process-title">처음부터 끝까지, 같은 사람이 설명합니다.</h2>
        </div>
        <ol className="process-grid">
          {process.map((step, index) => (
            <li key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="principles" aria-labelledby="principles-title">
        <div className="principles-intro">
          <span className="section-code">DM / 040 — PRINCIPLES</span>
          <h2 id="principles-title">보이는 화면보다, 운영 이후까지.</h2>
        </div>
        <div className="reason-grid">
          {reasons.map((reason, index) => (
            <article key={reason.title}>
              <span>{index + 1}</span>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="section-wrap faq-section" aria-labelledby="faq-title">
        <div className="section-heading compact-heading">
          <span className="section-code">DM / 050 — FAQ</span>
          <h2 id="faq-title">자주 묻는 질문.</h2>
        </div>
        <div className="faq-list">
          {faq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="inquiry" className="inquiry-section" aria-labelledby="inquiry-title">
        <div className="inquiry-intro">
          <span className="section-code">DM / 060 — PROJECT REQUEST</span>
          <h2 id="inquiry-title">당신의 프로젝트를<br />정리해 볼까요?</h2>
          <p>알고 있는 내용만 적어도 괜찮습니다. 필요한 범위는 상담 과정에서 함께 정리합니다.</p>
          <div className="contact-note">
            <strong>DIRECT CONTACT</strong>
            <span>전화 또는 이메일로도 상담할 수 있습니다.</span>
            <a href="tel:+821077637698">010-7763-7698</a>
            <a href="mailto:kobe7698@gmail.com">kobe7698@gmail.com</a>
          </div>
        </div>
        <InquiryForm />
      </section>

      <footer>
        <a className="wordmark footer-mark" href="#top"><span>DEV</span>MACHINE</a>
        <p>사업 아이디어를 실제로 작동하는 웹사이트와 자동화 시스템으로 만듭니다.</p>
        <address className="footer-contact">
          <span className="footer-contact-label">CONTACT</span>
          <strong>데브머신 연락처</strong>
          <span>강범준 · 대표 / Full-Stack Developer</span>
          <div className="footer-contact-links">
            <a href="tel:+821077637698">TEL 010-7763-7698</a>
            <a href="mailto:kobe7698@gmail.com">MAIL kobe7698@gmail.com</a>
            <a href={githubProfile} target="_blank" rel="noreferrer">GITHUB kangbeomjoon</a>
          </div>
        </address>
        <nav aria-label="보조 링크">
          <a href={kmongProfile} target="_blank" rel="noreferrer">크몽</a>
          <a href={soomgoProfile} target="_blank" rel="noreferrer">숨고</a>
          <a href={githubProfile} target="_blank" rel="noreferrer">GitHub</a>
          <a href="#inquiry">프로젝트 문의</a>
          <a href="#privacy-notice">개인정보 안내</a>
        </nav>
        <small>© {new Date().getFullYear()} DevMachine. All rights reserved.</small>
      </footer>
    </main>
  );
}
