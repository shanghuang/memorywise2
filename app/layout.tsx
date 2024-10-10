'use client'
import { Inter } from "next/font/google";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo-client";
import { NextAuthProvider } from './Provider'
import Navbar from './components/Navbar'
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <Navbar />
          <ApolloProvider client={client}>{children}</ApolloProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}

