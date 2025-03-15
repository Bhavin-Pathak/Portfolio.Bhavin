import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bhavin Pathak",
  description: "Personal portfolio of Bhavin Pathak",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
