import { Metadata } from "next";
import ClientLayout from "./client-layout";

export const metadata: Metadata = {
  title: "Blog | dotMavriQ",
  description: "Thoughts, insights, and tutorials on web development, programming, and tech.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}