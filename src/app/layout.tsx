import type { Metadata } from "next";
import "./globals.css";

import { Poppins } from "next/font/google";
import ReduxProviders from "@/components/providers/ReduxProviders";
import Head from "next/head";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Choose required font weights
  variable: "--font-poppins", // Optional: Use CSS variable
});

export const metadata: Metadata = {
  title: "Sophomore",
  description: "Educational Platform",
  icons: ["/img/logo.svg"],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  const messages = await getMessages();

  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap"
          rel="stylesheet"
        />
      </Head>
      <html lang={locale} dir={direction}>
        <body
          className={`${
            locale === "en" ? poppins.variable : ""
          } vsc-initialized`}
        >
          <NextIntlClientProvider messages={messages}>
            <ReduxProviders>{children}</ReduxProviders>
          </NextIntlClientProvider>
        </body>
      </html>
    </>
  );
}
