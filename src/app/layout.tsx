import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "데브머신 | 웹사이트와 업무 자동화 개발",
  description: "랜딩 페이지부터 비즈니스 홈페이지, 반복 업무 자동화까지. 기획·개발·배포를 한 사람이 끝까지 책임집니다.",
  keywords: ["데브머신", "랜딩 페이지 개발", "비즈니스 홈페이지", "업무 자동화", "1인 개발 스튜디오"],
  openGraph: {
    title: "데브머신 | 웹사이트와 업무 자동화 개발",
    description: "사업 아이디어를 실제로 작동하는 웹사이트와 자동화 시스템으로 만듭니다.",
    locale: "ko_KR",
    type: "website",
    images: [{ url: "/images/devmachine-operator-v6.png", width: 1122, height: 1402, alt: "데브머신 시네마틱 게임 캐릭터" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "데브머신 | 웹사이트와 업무 자동화 개발",
    description: "사업 아이디어를 실제로 작동하는 웹사이트와 자동화 시스템으로 만듭니다.",
    images: ["/images/devmachine-operator-v6.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
