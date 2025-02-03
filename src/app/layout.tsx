"use client";
import localFont from "next/font/local";
import "./globals.css";
import TopHeader from "./component/TopHeader";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Providers from "./provider";
import { ClerkProvider } from "@clerk/clerk-react";
import { useRouter } from "next/navigation"; // Import the router

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  // Wrapping the Next.js router.push and router.replace to match Clerk's expected type
  const routerPush = (href: string) => {
    router.push(href);
  };

  const routerReplace = (href: string) => {
    router.replace(href);
  };
  
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || "default-publishable-key"}  // Pass the publishableKey here
      routerPush={routerPush}          // Pass the wrapped routerPush
      routerReplace={routerReplace}    // Pass the wrapped routerReplace
    >
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
         
         
          <Providers>
            <TopHeader />
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}

















