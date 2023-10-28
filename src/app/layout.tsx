import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { headers } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "CodeSwipe",
  description: "Tinder Code Review",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://unpkg.com/@tinybirdco/flock.js" data-host="https://api.us-east.tinybird.co" data-token="p.eyJ1IjogImQzMjAyZjA0LTA4NTUtNGVjMi1iZWY0LTE5MDdmZTFmODkwMCIsICJpZCI6ICJiNTY0OGI1Zi03Y2JjLTQ2YzItODY3OS03MzY3NmQ3ODU2MjkiLCAiaG9zdCI6ICJ1c19lYXN0In0.X_PD4rdtPsMO9rjQa5xp1NS0ir6b3yNOdrFn-pf2CnQ"></script>
      </head>
      <body className={`font-sans ${inter.variable}` + " text-gray-100 bg-gray-800 flex flex-col h-screen"}>
        <TRPCReactProvider headers={headers()}>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
