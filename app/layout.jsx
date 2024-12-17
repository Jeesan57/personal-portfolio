import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Header from "@/components/Header";


const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Jeesan | Full Stack Developer",
  description: "Portfolio of Jeesan, a skilled Full Stack Developer crafting elegant digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.className}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
