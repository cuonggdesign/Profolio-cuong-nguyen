import { Layout, Sparkles, Utensils, Users, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { ARSENAL_PILLARS, ArsenalPillar } from "../data";

// Map string representation to Lucide component
const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "Layout":
      return <Layout className="w-6 h-6 text-orange-500" />;
    case "Sparkles":
      return <Sparkles className="w-6 h-6 text-orange-500" />;
    case "Utensils":
      return <Utensils className="w-6 h-6 text-orange-500" />;
    case "Users":
      return <Users className="w-6 h-6 text-orange-500" />;
    default:
      return <Layout className="w-6 h-6 text-orange-500" />;
  }
};

export default function Arsenal() {
  return (
    <section id="arsenal" className="py-24 bg-[#050505] relative border-t border-white/10 overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-orange-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-white/10 text-[10px] font-mono tracking-wider text-orange-500 mb-4 uppercase">
            <span>CORE COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-light text-white tracking-tight leading-tight">
            Vũ Khí Sáng Tạo & <br />
            <span className="text-orange-500 font-serif italic">
              Cột Trụ Giá Trị Cốt Lõi
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-4 leading-relaxed font-light">
            Không chỉ dừng lại ở tính thẩm mỹ thuần túy, tôi định hình quy trình thiết kế xoay quanh tính nhất quán thương hiệu, dữ liệu hiệu năng và tốc độ tối đa nhờ tích hợp trí tuệ nhân tạo.
          </p>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ARSENAL_PILLARS.map((pillar: ArsenalPillar, index: number) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-lg bg-[#111111] border border-white/5 hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              {/* Card Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:to-orange-500/[0.01] rounded-lg transition-all duration-300" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* Icon wrapper */}
                  <div className="w-12 h-12 rounded-lg bg-[#050505] border border-white/10 flex items-center justify-center group-hover:border-orange-500/30 transition-colors">
                    {getIconComponent(pillar.icon)}
                  </div>
                  <span className="text-orange-500 font-mono text-sm tracking-wider font-semibold">0{index + 1}</span>
                </div>

                {/* Title */}
                <h3 className="text-base font-display font-semibold uppercase tracking-wider text-white mb-3 group-hover:text-orange-500 transition-colors flex items-center justify-between">
                  {pillar.title}
                  <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-orange-500 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-light mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Bullet details */}
              <div className="border-t border-white/5 pt-6 mt-auto">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {pillar.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-xs text-white/40 font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500/60 mt-1.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
