import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wikitech",
  description: "Wiki for docs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
