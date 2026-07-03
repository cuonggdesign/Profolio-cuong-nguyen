import { useState } from "react";
import { ArrowRight, Settings, Command, Lightbulb, Play } from "lucide-react";
import { motion } from "motion/react";
import { PROCESS_STEPS, ProcessStep } from "../data";

export default function Process() {
  const [activeStep, setActiveStep] = useState<number>(2); // Default to Design & AI step to show off AI integration

  // Get icon based on step number
  const getStepIcon = (step: string) => {
    switch (step) {
      case "01":
        return <Lightbulb className="w-5 h-5 text-orange-500" />;
      case "02":
        return <Command className="w-5 h-5 text-orange-500" />;
      case "03":
        return <Settings className="w-5 h-5 text-orange-500" />;
      case "04":
        return <Play className="w-5 h-5 text-orange-500" />;
      default:
        return <Settings className="w-5 h-5 text-orange-500" />;
    }
  };

  return (
    <section id="process" className="py-24 bg-[#050505] text-zinc-100 relative overflow-hidden border-t border-white/10">
      
      {/* Visual background decorations */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-orange-500/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-white/10 text-[10px] font-mono tracking-wider text-orange-500 mb-4 uppercase">
            <span>THE CREATIVE METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-light text-white tracking-tight leading-tight">
            Quy Trình Làm Việc <br />
            <span className="text-orange-500 font-serif italic">
              Của Một Creative Lead
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-4 leading-relaxed font-light">
            Phương pháp thiết kế bài bản được tối ưu hóa bằng công nghệ, chuyển dịch ý tưởng trừu tượng từ khách hàng thành sản phẩm thực tế có hiệu năng chuyển đổi xuất sắc.
          </p>
        </div>

        {/* 4 Steps Timelines (Responsive: Desktop Horizontal, Mobile Vertical) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative">
          
          {/* Connector Line (Desktop Only) */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/5 -translate-y-1/2 hidden lg:block z-0" />

          {PROCESS_STEPS.map((item: ProcessStep, index: number) => {
            const isSelected = activeStep === index;

            return (
              <motion.div
                key={item.step}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer group relative p-6 rounded-lg border transition-all duration-300 z-10 flex flex-col justify-between h-full ${
                  isSelected
                    ? "bg-[#111111] border-orange-500/50 shadow-xl shadow-orange-500/5 translate-y-[-4px]"
                    : "bg-[#111111]/40 border-white/5 hover:border-white/15 hover:bg-[#111111]/80"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div>
                  {/* Step index & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-[10px] font-mono font-bold tracking-widest ${
                      isSelected ? "text-orange-500" : "text-zinc-600 group-hover:text-zinc-400"
                    }`}>
                      {item.englishTitle.toUpperCase()}
                    </span>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-colors ${
                      isSelected
                        ? "bg-orange-950/40 border-orange-500/30 text-orange-500"
                        : "bg-[#050505] border-white/10 text-zinc-400"
                    }`}>
                      {getStepIcon(item.step)}
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-base font-display font-semibold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                    <span className="text-sm font-mono text-orange-500/60 font-medium">{item.step}.</span>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-light mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Footer Tools & Action Info */}
                <div className="border-t border-white/5 pt-4 mt-auto space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tools.map((tool) => (
                      <span
                        key={tool}
                        className={`px-2 py-0.5 rounded text-[9px] font-mono ${
                          isSelected
                            ? "bg-orange-950/30 text-orange-400 border border-orange-900/40"
                            : "bg-[#050505] text-zinc-500 border border-white/5"
                        }`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-medium font-sans">
                    <span className={isSelected ? "text-orange-500" : "text-zinc-500"}>
                      {item.action}
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${
                      isSelected ? "text-orange-500 translate-x-1" : "text-zinc-600 group-hover:translate-x-0.5"
                    }`} />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Selected Step Deep Info (Interactive Panel) */}
        <div className="mt-10 p-6 rounded-lg bg-[#111111] border border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-3xl">
            <span className="text-[10px] text-zinc-500 font-mono tracking-wider uppercase">Senior / Creative Lead Highlight</span>
            <p className="text-xs sm:text-sm text-zinc-400 font-light">
              <strong className="text-white font-medium">Bí quyết tối ưu:</strong> Ở mỗi bước, Nguyễn Cường luôn thiết lập các mốc bàn giao trung gian (Daily Deliverables) để loại bỏ rủi ro lệch định hướng thiết kế, đảm bảo tốc độ bàn giao nhanh hơn 50% so với mô hình làm việc thông thường.
            </p>
          </div>
          <a
            href="#projects"
            className="text-xs font-mono text-orange-500 hover:text-orange-400 shrink-0 flex items-center gap-1 group uppercase tracking-wider font-bold"
          >
            Xem minh chứng thực tế <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
