import { useState } from "react";
import { CheckCircle2, ChevronDown, ChevronUp, ExternalLink, Calendar, Briefcase, FileText } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS, Project } from "../data";

export default function CaseStudies() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    if (expandedProject === id) {
      setExpandedProject(null);
    } else {
      setExpandedProject(id);
      // Optional: Smooth scroll to the project top after a small delay
      setTimeout(() => {
        const el = document.getElementById(`case-study-${id}`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#050505] text-zinc-100 relative overflow-hidden border-t border-white/10">
      
      {/* Decorative background grids */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/[0.01] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/[0.01] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-white/10 text-[10px] font-mono tracking-wider text-orange-500 mb-4 uppercase">
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-light text-white tracking-tight leading-tight">
            Dự Án Thực Chiến & <br />
            <span className="text-orange-500 font-serif italic">
              Phân Tích Chuyên Sâu (Case Studies)
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-4 leading-relaxed font-light">
            Các sản phẩm đã bàn giao thành công cho doanh nghiệp, minh chứng cụ thể cho tư duy kết nối kinh doanh, mỹ thuật thương mại và tốc độ sản xuất vượt trội từ trí tuệ nhân tạo.
          </p>
        </div>

        {/* Projects Loop */}
        <div className="space-y-24">
          {PROJECTS.map((project: Project, index: number) => {
            const isExpanded = expandedProject === project.id;
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                id={`case-study-${project.id}`}
                className="scroll-mt-24 border-b border-white/5 pb-20 last:border-0 last:pb-0"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`}>
                  
                  {/* Image Column (Alternates on desktop) */}
                  <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="relative rounded-lg overflow-hidden aspect-[16/10] bg-[#111111] border border-white/10 group shadow-2xl border-glow"
                    >
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
                      
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity hover:mix-blend-normal"
                      />

                      {/* Project Category Tag */}
                      <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded bg-[#050505]/90 border border-white/10 text-[9px] uppercase tracking-wider font-mono text-orange-500">
                        {project.category}
                      </div>

                      {/* Project Specs Tags on Hover */}
                      <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap gap-2 transition-all">
                        {project.specs.slice(0, 3).map((spec) => (
                          <span key={spec} className="px-2.5 py-1 rounded-sm bg-black/60 backdrop-blur-sm border border-white/5 text-[10px] text-zinc-300 font-sans">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Text Column */}
                  <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"} flex flex-col justify-center space-y-6`}>
                    
                    {/* Metadata */}
                    <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-zinc-500">
                      <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5 text-orange-500" /> {project.client}</span>
                      <span className="hidden sm:inline text-zinc-800">|</span>
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-orange-500" /> {project.role}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight leading-tight group-hover:text-orange-500 transition-colors">
                      {project.title}
                    </h3>

                    {/* Brief Description */}
                    <p className="text-sm text-zinc-400 leading-relaxed font-light">
                      {project.description}
                    </p>

                    {/* Key Metrics / Outcomes Block */}
                    <div className="space-y-3 bg-[#111111] border border-white/5 p-5 rounded-lg">
                      <span className="text-[9px] text-zinc-500 font-mono block tracking-widest uppercase">High-Impact Results</span>
                      <div className="space-y-2">
                        {project.metrics.map((metric) => (
                          <div key={metric} className="flex items-start gap-2.5 text-xs text-zinc-300 font-sans">
                            <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                            <span>{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex items-center gap-4 pt-2">
                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="flex items-center gap-2 px-5 py-2.5 rounded border border-white/10 hover:border-orange-500/30 bg-[#111111] hover:bg-[#111111]/80 text-xs font-bold uppercase tracking-wider text-zinc-200 hover:text-white transition-all duration-200"
                      >
                        {isExpanded ? (
                          <>Thu Gọn <ChevronUp className="w-4 h-4 text-orange-500" /></>
                        ) : (
                          <>Xem Chi Tiết Case Study <ChevronDown className="w-4 h-4 text-orange-500" /></>
                        )}
                      </button>

                      <a
                        href="#demo"
                        onClick={(e) => {
                          e.preventDefault();
                          alert("Liên kết trực tiếp dự án: Bản thử nghiệm nội bộ dành cho đối tác đang được tải. Vui lòng liên hệ trực tiếp với Nguyễn Cường để nhận quyền truy cập đặc quyền.");
                        }}
                        className="flex items-center gap-1 text-xs font-mono text-orange-500 hover:text-orange-400 transition-colors uppercase tracking-wider"
                      >
                        Live Demo <ExternalLink className="w-3.5 h-3.5 ml-1" />
                      </a>
                    </div>

                  </div>
                </div>

                {/* Expanded Detailed Case Study Details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden mt-8"
                    >
                      <div className="bg-[#111111] border border-white/5 rounded-lg p-6 sm:p-8 space-y-8 text-zinc-300">
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {/* Challenge */}
                          <div className="space-y-3">
                            <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-mono text-orange-500">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" /> Bối Cảnh & Thách Thức
                            </span>
                            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                              {project.challenge}
                            </p>
                          </div>

                          {/* Solution */}
                          <div className="space-y-3">
                            <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-mono text-orange-500">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-500/80" /> Giải Pháp Thiết Kế
                            </span>
                            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                              {project.solution}
                            </p>
                          </div>
                        </div>

                        {/* Deliverables and Technical specs */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/5">
                          {/* Deliverables list */}
                          <div className="space-y-4">
                            <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider flex items-center gap-2">
                              <FileText className="w-3.5 h-3.5 text-orange-500" /> Sản Phẩm Bàn Giao
                            </h4>
                            <ul className="space-y-2">
                              {project.deliverables.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-xs text-zinc-400">
                                  <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2 shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Technical Specs List */}
                          <div className="space-y-4">
                            <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                              Công Cụ & Thông Số Kỹ Thuật
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.specs.map((spec) => (
                                <span key={spec} className="px-2.5 py-1.5 rounded bg-[#050505] border border-white/5 text-[10px] text-zinc-400 font-mono">
                                  {spec}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
