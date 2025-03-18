import { Ubuntu } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Credit",
  description: "Made by AlexandrFedor",
};

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ubuntu.className}>
      <body>{children}</body>
    </html>
  );
}
