'use client'

import Footer from "@/components/Footer";
import CommonHeader from "@/components/CommonHeader";
import HeaderTop from "@/components/home-1/HeaderTophome1";
import MobileMenu from "@/components/MobileMenu";
// import ThemeProvider from "../theme-provider";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <>
      <HeaderTop />
      {/* <CommonHeader /> */}
      <MobileMenu />
      {/* <ThemeProvider> */}
        {children}
        {/* </ThemeProvider> */}
      <Footer />
    </>
  );
}
