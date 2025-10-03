import { dir } from 'i18next';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PT Next Welder | Professional Welding Services",
  description: "High-quality welding and metal fabrication services for residential and commercial projects.",
};

export default function RootLayout({
  children,
  params: { lng }
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        {children}
      </body>
    </html>
  );
}