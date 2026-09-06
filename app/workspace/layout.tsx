import type { Metadata } from "next";
import "@/app/globals.css";
import { ClerkProvider } from '@clerk/nextjs'

export const metadata: Metadata = {
  title: "Budget Buddy",
  description: "Your personal finance tracker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      {children}
  );
}