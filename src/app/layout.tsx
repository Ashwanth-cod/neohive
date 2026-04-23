import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NeoHive Technologies - Innovative Web, App & Robotics Solutions",
  description:
    "NeoHive Technologies is a student-led start-up focused on merging creativity with technology. We craft experiences across web, app, and robotics — empowering ideas to become reality.",
  keywords: [
    "NeoHive Technologies",
    "web development",
    "app development",
    "robotics",
    "AI",
    "Next.js",
    "React",
  ],
  authors: [{ name: "NeoHive Technologies" }],
  creator: "NeoHive Technologies",
  metadataBase: new URL("https://neohive.in"),
  openGraph: {
    title: "NeoHive Technologies - Innovative Web, App & Robotics Solutions",
    description:
      "Student-led startup merging creativity with technology across web, app, and robotics.",
    url: "https://neohive.in",
    siteName: "NeoHive Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeoHive Technologies",
    description:
      "Student-led startup merging creativity with technology across web, app, and robotics.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
