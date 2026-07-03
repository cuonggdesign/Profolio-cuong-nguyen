import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Award } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Vũ Khí Sáng Tạo", href: "#arsenal" },
    { label: "Dự Án Nổi Bật", href: "#projects" },
    { label: "Quy Trình", href: "#process" },
    { label: "Tư Duy Lãnh Đạo", href: "#leadership" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#050505]/90 backdrop-blur-md border-b border-white/10 py-4"
            : "bg-transparent py-6 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-[#111111] border border-white/10 flex items-center justify-center text-white font-display font-bold text-base transition-all group-hover:border-orange-500/50 group-hover:bg-zinc-900">
              NC
            </div>
            <div className="flex flex-col">
              <span className="block font-display font-bold text-white tracking-tighter uppercase leading-none text-base">
                NGUYỄN CƯỜNG
              </span>
              <span className="block text-[9px] text-orange-500 font-medium tracking-[0.2em] uppercase mt-1">
                Senior UI/UX & Creative Lead
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-widest text-white/60">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-orange-500 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#resume-download"
              onClick={(e) => {
                e.preventDefault();
                alert("Tải Resume PDF: Tài liệu đang được chuẩn bị tự động để tải về.");
              }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/15 bg-[#111111]/30 text-[11px] uppercase tracking-wider text-zinc-300 hover:text-white hover:border-white/35 transition-all duration-200"
            >
              Resume PDF <Award className="w-3.5 h-3.5 text-orange-500" />
            </a>
            <button
              onClick={onContactClick}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-[11px] uppercase tracking-wider font-bold text-white transition-all duration-200 shadow-md shadow-orange-500/10"
            >
              Liên Hệ <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-zinc-400 hover:text-white md:hidden hover:bg-zinc-900 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[73px] bg-[#050505] border-b border-white/10 z-40 py-6 px-6 flex flex-col gap-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-wider font-medium text-zinc-300 hover:text-orange-500 py-2 border-b border-zinc-900 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3 pt-2">
              <a
                href="#resume-download"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Tải Resume PDF: Tài liệu đang được chuẩn bị tự động để tải về.");
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-white/10 bg-zinc-900/50 text-xs uppercase tracking-wider text-zinc-300"
              >
                Resume PDF <Award className="w-4 h-4 text-orange-500" />
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onContactClick();
                }}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-orange-500 text-xs uppercase tracking-wider font-bold text-white"
              >
                Liên Hệ <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

