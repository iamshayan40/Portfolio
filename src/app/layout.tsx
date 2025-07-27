"use client";

import React from "react";
import { metadata } from "./metadata"; // Import metadata
import "./globals.css"; // Global styles
// import StarsCanvas from "@/components/main/StarBackground"; // Background animation
import CustomCursor from "@/components/main/CustomCursor"; // Custom cursor
import GoToTop from "@/components/main/GoToTop"; // Go to top button

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Favicon link for all browsers */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* Font Awesome CSS */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOMM6iZtx5J4MG5c1j5iW4cB8cJf4ffN6F2j5Q"
          crossOrigin="anonymous"
        />
      </head>
      <body className="overflow-x-hidden">
        {/* Background Star Canvas */}
        {/* <StarsCanvas /> */}

        {/* Custom Cursor */}
        <CustomCursor />

        {/* Go to Top Button */}
        <GoToTop />

        {/* Main content container */}
        <div id="main" className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
