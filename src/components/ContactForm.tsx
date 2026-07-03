import { useState, FormEvent } from "react";
import { Mail, Linkedin, Send, CheckCircle, ArrowRight, BookOpen, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Vui lòng điền đầy đủ thông tin liên hệ.");
      return;
    }

    setIsSubmitting(true);
    // Simulate real high-performing API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] text-zinc-100 relative overflow-hidden border-t border-white/10">
      
      {/* Glow Orbs background */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-orange-500/[0.01] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-orange-500/[0.01] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Text Info (Left side) */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-white/10 text-[10px] font-mono tracking-wider text-orange-500 uppercase">
                <span>CONNECT WITH LEADERSHIP</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-light text-white tracking-tight leading-tight">
                Sẵn sàng nâng tầm hình ảnh và <br />
                <span className="text-orange-500 font-serif italic">trải nghiệm</span> tiếp theo?
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                Đừng ngần ngại liên hệ để thảo luận về dự án sản phẩm số, hệ thống thương hiệu B2B hoặc bài toán tối ưu quy trình thiết kế sáng tạo của doanh nghiệp bạn. Nguyễn Cường sẽ phản hồi trong vòng tối đa 2 giờ làm việc.
              </p>
            </div>

            {/* Direct Contact info and socials */}
            <div className="space-y-6 pt-6 border-t border-white/5">
              <div className="space-y-4">
                <a
                  href="mailto:cuongg.design@gmail.com"
                  className="flex items-center gap-3 text-sm text-zinc-300 hover:text-orange-500 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#111111] border border-white/10 flex items-center justify-center group-hover:border-orange-500/30">
                    <Mail className="w-4 h-4 text-orange-500" />
                  </div>
                  <span>cuongg.design@gmail.com</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-zinc-300 hover:text-orange-500 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#111111] border border-white/10 flex items-center justify-center group-hover:border-orange-500/30">
                    <Linkedin className="w-4 h-4 text-orange-500" />
                  </div>
                  <span className="flex items-center gap-1">LinkedIn Profile <ExternalLink className="w-3.5 h-3.5 text-zinc-600" /></span>
                </a>

                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-zinc-300 hover:text-orange-500 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#111111] border border-white/10 flex items-center justify-center group-hover:border-orange-500/30">
                    <BookOpen className="w-4 h-4 text-orange-500" />
                  </div>
                  <span className="flex items-center gap-1">Behance Portfolio <ExternalLink className="w-3.5 h-3.5 text-zinc-600" /></span>
                </a>
              </div>

              <div className="text-xs text-zinc-600 font-mono">
                Based in Ho Chi Minh City, Vietnam. Available for remote and hybrid positions worldwide.
              </div>
            </div>

          </div>

          {/* Contact Form Container (Right side) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-lg bg-[#111111] border border-white/5 relative border-glow">
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                        Họ & Tên
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nguyễn Văn A"
                        required
                        className="w-full px-4 py-3 rounded bg-[#050505] border border-white/10 focus:border-orange-500/60 focus:outline-none focus:ring-1 focus:ring-orange-500/30 text-sm text-white placeholder-zinc-700 transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                        Địa chỉ Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="partner@doanhnghiep.com"
                        required
                        className="w-full px-4 py-3 rounded bg-[#050505] border border-white/10 focus:border-orange-500/60 focus:outline-none focus:ring-1 focus:ring-orange-500/30 text-sm text-white placeholder-zinc-700 transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                        Lời nhắn / Mô tả yêu cầu dự án
                      </label>
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tôi muốn thảo luận về dự án tối ưu hóa hình ảnh cho thương hiệu ẩm thực..."
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded bg-[#050505] border border-white/10 focus:border-orange-500/60 focus:outline-none focus:ring-1 focus:ring-orange-500/30 text-sm text-white placeholder-zinc-700 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded bg-orange-500 hover:bg-orange-600 text-xs font-bold uppercase tracking-wider text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                      {isSubmitting ? (
                        <span>Đang gửi thông tin liên hệ...</span>
                      ) : (
                        <>
                          Gửi Yêu Cầu Hợp Tác <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 flex flex-col items-center justify-center text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-950/50 border border-emerald-500 flex items-center justify-center text-emerald-500 shadow-lg shadow-emerald-500/10">
                      <CheckCircle className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-display font-bold text-white">
                        Gửi Thông Tin Thành Công!
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed font-light">
                        Cảm ơn bạn đã quan tâm hợp tác. Thông tin yêu cầu đã được lưu trữ an toàn. Nguyễn Cường sẽ trực tiếp xem xét và phản hồi đến bạn thông qua email trong vòng tối đa 2 giờ làm việc.
                      </p>
                    </div>

                    <button
                      onClick={() => setIsSuccess(false)}
                      className="flex items-center gap-2 px-5 py-2.5 rounded border border-white/15 bg-[#050505] text-xs font-semibold text-zinc-300 hover:text-white transition-colors"
                    >
                      Gửi tin nhắn khác <ArrowRight className="w-3.5 h-3.5 text-orange-500" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
