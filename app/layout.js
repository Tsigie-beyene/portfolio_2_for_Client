import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400","500","600","700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "Portfolio - Fikresilassie",
  description: "Portfolio website for Fikresilassie Seid",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} antialiased leading-8 overflow-x-hidden` }
      >
        <ThemeProviderWrapper>
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
