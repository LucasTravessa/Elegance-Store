import "@/styles/globals.css";
import type { AppProps } from "next/app";

export const metadata = {
  openGraph: {
    title: "Next.js",
    description: "The React Framework for the Web",
    url: "https://nextjs.org",
    siteName: "Next.js",
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
