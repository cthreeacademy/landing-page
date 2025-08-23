import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://coffeecodecommunity.com"),
  title: {
    default: "Coffee Code Community",
    template: "%s | Coffee Code Community",
  },
  description: "Coffee Code Community (Cthree): komunitas ngoding sambil ngopi. Event, belajar bareng, dan proyek open-source.",
  keywords: [
    "Coffee Code Community",
    "Cthree",
    "komunitas programmer",
    "belajar ngoding",
    "event coding",
    "ngopi sambil ngoding",
  ],
  openGraph: {
    type: "website",
    url: "https://coffeecodecommunity.com",
    siteName: "Coffee Code Community",
    title: "Coffee Code Community (Cthree)",
    description: "Komunitas ngoding sambil ngopi. Ikut event & belajar bareng.",
    images: [
      {
        url: "https://coffeecodecommunity.com/og.jpg",
        width: 1200,
        height: 630,
        alt: "Coffee Code Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coffee Code Community (Cthree)",
    description: "Komunitas ngoding sambil ngopi.",
    images: ["https://coffeecodecommunity.com/og.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
