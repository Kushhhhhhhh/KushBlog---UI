import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider.js"
import Navbar from "@/components/Navbar.jsx";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "KushBlog",
  description: "Elevating the cannabis conversation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystems
        disableTransitionOnChange
        >
        <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
