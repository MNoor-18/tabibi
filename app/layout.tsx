import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "طبيبي",
  description: "تطبيق عربي لحجز مواعيد الأطباء وإدارة الزيارات الطبية.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "طبيبي",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: "#57a77e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <div 
          className="mx-auto min-h-screen sm:min-h-svh w-full max-w-md overflow-x-hidden bg-red300 shadow-[0_0_60px_rgba(23,35,31,0.12)]"
        >
          {children}
        </div>
      </body>
    </html>
  );
}
