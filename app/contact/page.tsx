import LazyAnimation from "../components/LazyAnimation";
import React, { Suspense } from "react";
import ContactCard from "../components/ContactCard";

export default function Contact() {
  return (
    <div className="relative flex flex-col h-full p-4 sm:p-8 md:p-16 bg-[#282828] text-[#ebdbb2] [font-family:var(--font-geist-sans)]">
      {/* Fixed canvas background with particle effect */}
      <Suspense fallback={<div className="fixed inset-0 bg-[#282828]" />}>
        <LazyAnimation type="particle" />
      </Suspense>

      {/* Main content area */}
      <div className="relative z-10 flex flex-col flex-grow items-center justify-center">
        <ContactCard />
      </div>
    </div>
  );
}
