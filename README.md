# DevMachine Homepage

데브머신의 랜딩 페이지·비즈니스 홈페이지·업무 자동화 서비스를 소개하고 직접 프로젝트 상담으로 연결하는 한국어 랜딩 페이지입니다.

## 기술 구성

- Next.js App Router
- TypeScript
- Tailwind CSS v4와 프로젝트 전용 CSS
- React Client Component 기반 문의폼 상태 처리

## 로컬 실행

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

## 검증

```bash
npm run lint
npm run build
```

## 배포 전에 필요한 실제 정보

- 문의를 받을 이메일 또는 카카오톡 채널
- 문의 전송 방식과 개인정보 보관 정책
- 운영 도메인과 `NEXT_PUBLIC_SITE_URL`
- 사업자 또는 브랜드 푸터 표기 정보

현재 문의폼은 입력·오류·처리·완료 상태만 구현되어 있으며, 위 정보가 확정되기 전에는 외부로 내용을 전송하거나 저장하지 않습니다.
