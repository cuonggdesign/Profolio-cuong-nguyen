import { ArrowRight, Sparkles, Cpu, Award, Zap } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#050505] text-zinc-100">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-950 via-[#050505] to-black z-0" />
      
      {/* Sleek Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] z-0" />

      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-orange-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Hero Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-8">
          
          {/* AI Workflow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-white/10 text-[10px] uppercase tracking-wider font-mono text-orange-500"
          >
            <Sparkles className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
            <span>AI-Empowered Creative Process</span>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
          </motion.div>

          {/* Main Title */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-light tracking-tight leading-[1.15] text-zinc-100 text-glow"
            >
              Kiến tạo <span className="text-orange-500 italic font-serif font-light">trải nghiệm</span> số bằng AI & Tư duy hệ thống
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-400 max-w-2xl font-sans leading-relaxed font-light"
            >
              Hơn 3 năm tối ưu hóa quy trình sáng tạo, kết hợp thiết kế UI/UX hiện đại với sức mạnh của Generative AI (Midjourney, Kling AI, Google AI Studio) để bứt phá giới hạn thẩm mỹ thương mại.
            </motion.p>
          </div>

          {/* Quick Pillars/Counters in Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-3 gap-6 sm:gap-10 border-t border-b border-white/10 py-6 w-full max-w-xl"
          >
            <div>
              <span className="block font-display text-2xl sm:text-3xl font-bold text-white">3+</span>
              <span className="text-[11px] sm:text-xs text-zinc-500 font-sans mt-1 block uppercase tracking-wide">Năm Kinh Nghiệm Lead</span>
            </div>
            <div>
              <span className="block font-display text-2xl sm:text-3xl font-bold text-orange-500 flex items-center gap-1 text-glow">
                2x <Zap className="w-4 h-4 text-orange-500" />
              </span>
              <span className="text-[11px] sm:text-xs text-zinc-500 font-sans mt-1 block uppercase tracking-wide">Hiệu suất x2 Nhờ AI</span>
            </div>
            <div>
              <span className="block font-display text-2xl sm:text-3xl font-bold text-white">100%</span>
              <span className="text-[11px] sm:text-xs text-zinc-500 font-sans mt-1 block uppercase tracking-wide">KPIs Đạt Chuẩn Đầu Ra</span>
            </div>
          </motion.div>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded bg-orange-500 hover:bg-orange-600 text-black text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-orange-500/10 group hover:-translate-y-0.5"
            >
              Xem Dự Án <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#resume-download"
              onClick={(e) => {
                e.preventDefault();
                alert("Tải Resume PDF: Tài liệu đang được chuẩn bị tự động để tải về.");
              }}
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded border border-white/20 text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              Tải Resume <Award className="w-3.5 h-3.5 text-orange-500" />
            </a>
          </motion.div>

        </div>

        {/* Hero Right Visual Column */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[420px] aspect-[4/5] rounded-3xl bg-zinc-900/40 border border-zinc-800 p-4 relative group overflow-hidden border-glow"
          >
            {/* Visual Header mock */}
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3 mb-4 text-[10px] font-mono text-zinc-500">
              <span className="flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5 text-orange-500" /> CREATIVE_ENGINE.io</span>
              <span className="text-orange-500">SYSTEM_ACTIVE</span>
            </div>

            {/* Visual placeholder for Nguyen Cuong portrait / abstraction */}
            <div className="w-full h-[78%] rounded-2xl overflow-hidden relative bg-zinc-950 flex flex-col justify-end p-6 border border-zinc-800/60">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
                alt="Nguyễn Cường - Digital Creator Portfolio"
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700"
              />

              {/* Real-time floating info prompt representing the AI integration */}
              <div className="relative z-20 space-y-3">
                <div className="px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-sm border border-zinc-800 text-[11px] font-mono text-zinc-300 space-y-1">
                  <span className="text-zinc-500 block">&gt; prompt:</span>
                  <span className="text-orange-400 font-medium">/imagine prompt: senior uiux expert, modern dark high-converting UI design, clean orange neon wireframe --v 6.0</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono text-zinc-400">Available for Senior / Lead positions</span>
                </div>
              </div>
            </div>

            {/* Bottom floating widgets to look technical & modern */}
            <div className="absolute top-1/2 -right-8 p-3 rounded-xl bg-zinc-900 border border-zinc-800 shadow-xl max-w-[150px] hidden sm:block animate-bounce" style={{ animationDuration: '6s' }}>
              <span className="text-[10px] text-zinc-500 block font-mono">Figma Specialist</span>
              <span className="text-xs font-bold text-white">99% UX Consistency</span>
            </div>

            <div className="absolute bottom-8 -left-8 p-3 rounded-xl bg-zinc-900 border border-zinc-800 shadow-xl max-w-[150px] hidden sm:block animate-bounce" style={{ animationDuration: '4s' }}>
              <span className="text-[10px] text-zinc-500 block font-mono">Generative AI</span>
              <span className="text-xs font-bold text-orange-500">Midjourney / Kling</span>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
