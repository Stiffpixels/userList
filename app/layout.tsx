import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ThemeContextProvider from "./_components/DarkThemeProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "user list",
  description: "Created by Muzammil for 2nd shortlisting task of a Frontend Developer Internship at Banao technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <ThemeContextProvider>
          <body className={poppins.className}>{children}</body>
        </ThemeContextProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
