import type { Metadata } from "next";
import { Inter, Jost } from "next/font/google";
import "./globals.css";
import "@/styles/index.scss";
import CustomTheme from "./Theme/customTheme";
// import SiteHeader from "./Theme/SiteHeader";
import { ToastContainer, Bounce } from "react-toastify";

const jost = Jost({
  subsets: ["latin"],
  display: "auto",
  // adjustFontFallback: false,
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Higher LearningPlatform",
  description: "Developed by Ayobami Adejumo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="keywords"
          content="	courses, learning, software, artificial intelligence, economics, "
        />
        <meta
          name="description"
          content="Higher Learning- Undergraduate course listing NextJS Template"
        />
        <meta name="atomicfirestartup" content="AFS" />

        <link rel="icon" href="/light-logo-2.png" />
      </head>
      <body className={jost.className}>
        <CustomTheme />
        {/* <SiteHeader /> */}
        {children}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="colored"
          transition={Bounce}
        />
      </body>
    </html>
  );
}
