import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";

// import ReduxProvider from "@/redux/ReduxProvider";
import { Anton, Nunito } from "next/font/google";
import "./globals.css";

// Load fonts
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // choose what weights you need
  variable: "--font-nunito",     // sets a CSS variable
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",                // Anton only has 400
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title: "My Website",
  description: "Using Anton and Nunito fonts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${nunito.variable} ${anton.variable}`}>
        <body>
          {/* <ReduxProvider> */}
          {children}
          {/* </ReduxProvider> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
