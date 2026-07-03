import { useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Arsenal from "./components/Arsenal";
import CaseStudies from "./components/CaseStudies";
import Process from "./components/Process";
import Leadership from "./components/Leadership";
import ContactForm from "./components/ContactForm";

export default function App() {
  const contactFormRef = useRef<HTMLDivElement>(null);

  const handleContactClick = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-orange-500 selection:text-white antialiased">
      {/* Floating Header */}
      <Header onContactClick={handleContactClick} />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onContactClick={handleContactClick} />

        {/* 2. Value Pillars (Arsenal) */}
        <Arsenal />

        {/* 3. Featured Case Studies */}
        <CaseStudies />

        {/* 4. The Process */}
        <Process />

        {/* 5. Leadership & Performance Management */}
        <Leadership />

        {/* 6. Footer & Contact Form */}
        <div ref={contactFormRef} className="scroll-mt-24">
          <ContactForm />
        </div>
      </main>

      {/* Bottom Footer Credits */}
      <footer className="bg-[#050507] border-t border-zinc-900/60 py-12 text-center text-xs text-zinc-600 font-mono">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-zinc-300">NGUYỄN CƯỜNG</span>
            <span className="text-zinc-800">|</span>
            <span>Creative Lead & UI/UX Expert</span>
          </div>
          <div>
            © {new Date().getFullYear()} Nguyễn Cường. All rights reserved. Built with React & Tailwind.
          </div>
        </div>
      </footer>
    </div>
  );
}
