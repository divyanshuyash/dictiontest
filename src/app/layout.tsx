import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto")?.split(",")[0] ?? (host.includes("localhost") ? "http" : "https");
  const origin = new URL(`${protocol}://${host}`);
  const socialImage = new URL("/og.png", origin).toString();

  return {
    metadataBase: origin,
    title: {
      default: "Diction | For Founders Who Deserve to Be Known",
      template: "%s | Diction",
    },
    description: "Turn your expertise into a clear, trusted and opportunity-generating digital presence.",
    openGraph: {
      title: "Diction | For Founders Who Deserve to Be Known",
      description: "Your expertise deserves more than visibility. It deserves recognition.",
      type: "website",
      url: origin,
      images: [{ url: socialImage, width: 1200, height: 630, alt: "Diction — For Founders Who Deserve to Be Known" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Diction | For Founders Who Deserve to Be Known",
      description: "Your expertise deserves more than visibility. It deserves recognition.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full font-sans`}>
      <body className="relative flex min-h-full flex-col bg-background text-foreground antialiased selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
