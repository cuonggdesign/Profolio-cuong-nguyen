import { ShieldAlert, TrendingUp, CheckSquare, Sparkles, MessageSquareCode } from "lucide-react";
import { motion } from "motion/react";
import { LEADERSHIP_PHILOSOPHY } from "../data";

export default function Leadership() {
  const principles = [
    {
      title: "Chuyển dịch sang Đánh giá dựa trên Kết quả",
      description: "Không quản lý vi mô về thời gian ngồi máy, mà tập trung kiểm soát chặt chẽ KPIs đầu ra của dự án và cam kết tiến độ.",
      icon: <CheckSquare className="w-5 h-5 text-orange-500" />
    },
    {
      title: "Báo Cáo Tiến Độ Hàng Ngày (Daily Reports)",
      description: "Sử dụng báo cáo ngày ngắn gọn để nhanh chóng tháo gỡ khó khăn cho nhân viên, giữ nhịp dự án luôn bám sát deadline.",
      icon: <MessageSquareCode className="w-5 h-5 text-orange-500" />
    },
    {
      title: "Tích Hợp AI Giải Phóng Sức Lao Động",
      description: "Đào tạo đội ngũ ứng dụng Generative AI để tự động hóa các tác vụ lặp lại, tối đa hóa thời gian cho tư duy chiến lược đột phá.",
      icon: <Sparkles className="w-5 h-5 text-orange-500" />
    },
    {
      title: "Duy Trì Tiêu Chuẩn Thẩm Mỹ B2B Cao Cấp",
      description: "Đặt ra tiêu chuẩn khắt khe về tính nhất quán thương hiệu, độ sạch của layout và khả năng tối ưu chuyển đổi kinh doanh.",
      icon: <TrendingUp className="w-5 h-5 text-orange-500" />
    }
  ];

  return (
    <section id="leadership" className="py-24 bg-[#050505] text-zinc-100 relative overflow-hidden border-t border-white/10">
      
      {/* Decorative Glow Orb */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-500/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Philosophy / Copywriting Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-white/10 text-[10px] font-mono tracking-wider text-orange-500 uppercase">
                <span>LEADERSHIP PHILOSOPHY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-light text-white tracking-tight leading-tight">
                Tư Duy Lãnh Đạo & <br />
                <span className="text-orange-500 font-serif italic">
                  Quản Trị Hiệu Suất
                </span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-light font-sans">
              {LEADERSHIP_PHILOSOPHY.text}
            </p>

            {/* Principles Lists */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {principles.map((principle) => (
                <div key={principle.title} className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#111111] border border-white/10 flex items-center justify-center">
                      {principle.icon}
                    </div>
                    <h4 className="text-sm font-display font-semibold text-white">
                      {principle.title}
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed font-sans pl-10">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Metrics & Visual Dashboard Column */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-lg bg-[#111111] border border-white/5 relative space-y-8 border-glow"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-4 text-xs font-mono text-zinc-500">
                <span className="flex items-center gap-1.5"><ShieldAlert className="w-4 h-4 text-orange-500" /> CREATIVE_LEAD_KPIs</span>
                <span className="text-orange-500">REALTIME_METRICS</span>
              </div>

              {/* Grid of numbers */}
              <div className="grid grid-cols-2 gap-6">
                {LEADERSHIP_PHILOSOPHY.metrics.map((metric) => (
                  <div key={metric.label} className="space-y-1 p-4 rounded-lg bg-[#050505] border border-white/5 hover:border-orange-500/20 transition-all">
                    <span className="block text-3xl sm:text-4xl font-display font-extrabold text-white text-glow">
                      {metric.value}
                    </span>
                    <span className="block text-[11px] text-zinc-500 leading-normal font-sans">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Quote box from lead */}
              <div className="p-4 rounded bg-[#050505] border border-white/5 border-l-2 border-l-orange-500 text-xs text-zinc-400 italic font-light leading-relaxed">
                &ldquo;Công việc của tôi không phải là vẽ thay nhân viên, mà là chỉ cho họ cách vẽ nhanh gấp đôi với chất lượng tiêu chuẩn cao nhất.&rdquo;
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
