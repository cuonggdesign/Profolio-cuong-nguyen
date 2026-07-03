export interface Project {
  id: string;
  title: string;
  client: string;
  role: string;
  category: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  metrics: string[];
  specs: string[];
  deliverables: string[];
}

export interface ArsenalPillar {
  title: string;
  icon: string;
  description: string;
  details: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  englishTitle: string;
  description: string;
  tools: string[];
  action: string;
}

export interface LeadershipPhilosophy {
  title: string;
  text: string;
  metrics: { value: string; label: string }[];
}

export const ARSENAL_PILLARS: ArsenalPillar[] = [
  {
    title: "Thiết Kế UI/UX",
    icon: "Layout",
    description: "Xây dựng luồng trải nghiệm người dùng liền mạch (User Journey), wireframe và prototype tương tác cao.",
    details: ["Kiến trúc thông tin (IA)", "Thiết kế giao diện đa thiết bị", "Hệ thống thiết kế (Design System) chuẩn hóa", "Kiểm thử trải nghiệm (Usability Testing)"]
  },
  {
    title: "Hệ Thống Thị Giác & B2B Marketing",
    icon: "Sparkles",
    description: "Đồng nhất nhận diện thương hiệu, thiết kế đồ họa truyền thông SEO và tài liệu tạo khách hàng tiềm năng.",
    details: ["Hệ thống hình ảnh SEO Infographics", "Tài liệu bán hàng & Lead-gen Materials", "Đồ họa mạng xã hội tự động hóa", "Đảm bảo tính nhất quán trên mọi điểm chạm"]
  },
  {
    title: "Art Direction & F&B Branding",
    icon: "Utensils",
    description: "Sáng tạo nhận diện thương hiệu ngành F&B, định hướng hình ảnh ẩm thực và thiết kế vật phẩm điểm bán (POSM).",
    details: ["Thiết kế Menu & Ấn phẩm nhà hàng", "Định hướng phong cách chụp ảnh món ăn", "Thiết kế POSM & Bao bì sản phẩm", "Tạo chất liệu thị giác kích thích vị giác"]
  },
  {
    title: "Lãnh Đạo Đội Ngũ & Quy Trình AI",
    icon: "Users",
    description: "Quản lý đội ngũ sáng tạo, tối ưu hóa hiệu suất qua báo cáo ngày và ứng dụng Generative AI đột phá.",
    details: ["Điều phối dự án theo kết quả (KPIs)", "Tích hợp Midjourney, Kling AI nâng hiệu suất x2", "Báo cáo tiến độ và kiểm soát chất lượng daily", "Đào tạo tư duy AI cho đội ngũ designer"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "wayjet",
    title: "WayJet – Nền tảng AI Phân Tích & Dịch Thuật Tài Liệu Đa Quốc Gia",
    client: "WayJet Technology",
    role: "Senior UI/UX Designer / AI Product Lead",
    category: "AI Product / SaaS",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    description: "WayJet là ứng dụng AI đột phá giúp doanh nghiệp phân tích chuyên sâu và dịch thuật các tài liệu kỹ thuật phức tạp với tốc độ vượt trội, giữ nguyên định dạng thiết kế gốc.",
    challenge: "Làm thế nào để hiển thị bảng so sánh tài liệu gốc và tài liệu dịch một cách trực quan trên màn hình nhỏ, đồng thời tối giản hóa các tùy chọn phân tích AI phức tạp để người dùng không chuyên vẫn có thể sử dụng dễ dàng.",
    solution: "Thiết kế luồng trải nghiệm dạng chia đôi thông minh (Split-Screen View) tích hợp tính năng cuộn đồng bộ (Synced Scrolling). Đơn giản hóa các tùy chọn AI thành một thanh công cụ nổi (Floating Action Bar) và xây dựng kịch bản video hướng dẫn trực quan hóa quy trình.",
    metrics: [
      "Tăng 45% tỷ lệ giữ chân người dùng sau tuần đầu tiên",
      "Giảm 60% thời gian xử lý dịch thuật tài liệu của khách hàng doanh nghiệp",
      "92% người dùng đánh giá giao diện so sánh tài liệu 'vô cùng trực quan'"
    ],
    specs: ["Figma Prototyping", "Interactive Dashboard", "AI Prompt Engineering Studio", "Synced Scroll Views"],
    deliverables: ["Bộ UI Mockup hoàn chỉnh (Desktop & Mobile)", "Bản đồ luồng người dùng (User Flow System)", "Kịch bản kịch tính & Video Storyboard quảng bá tính năng AI"]
  },
  {
    id: "siteos-hongthai",
    title: "SiteOS & Hồng Thái – Hệ Thống Thiết Kế SEO & B2B Marketing Tự Động",
    client: "SiteOS Corp & HongThai Group",
    role: "Creative Lead",
    category: "B2B Marketing / Branding System",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    description: "Dự án tái định vị thương hiệu và xây dựng hệ thống hình ảnh marketing tự động, tích hợp tối ưu hóa SEO nhằm tối đa lượng khách hàng tiềm năng cho tập đoàn B2B.",
    challenge: "Hồng Thái và SiteOS vận hành nhiều cổng thông tin khác nhau, dẫn đến sự phân mảnh về mặt nhận diện hình ảnh. Tài liệu bán hàng chưa tối ưu hóa tỷ lệ chuyển đổi và tốn nhiều thời gian thiết kế thủ công cho từng bài viết SEO.",
    solution: "Kiến tạo hệ thống thiết kế (Design System) đồng nhất cho mọi kênh truyền thông. Xây dựng bộ thư viện Infographics chuẩn SEO và các template tài liệu lead-gen (Ebook, Brochure) thông minh, hỗ trợ đội marketing tự sản xuất hình ảnh tốc độ cao dựa trên quy tắc thương hiệu sẵn có.",
    metrics: [
      "Tăng 120% lượng organic lead từ các bài viết SEO nhờ infographics trực quan",
      "Rút ngắn 70% thời gian thiết kế tài liệu tiếp thị cho phòng Marketing",
      "Tăng chỉ số nhất quán thương hiệu đạt 98% trên các nền tảng số"
    ],
    specs: ["B2B Brand Identity Guidelines", "SEO Infographic Framework", "Lead-Gen Collaterals", "Social Media Templates"],
    deliverables: ["Hệ thống nhận diện thương hiệu B2B (Brand Book)", "Bộ thư viện template Infographics đa chủ đề", "Hệ thống tài liệu bán hàng (Sales Deck, Case Study Templates)"]
  },
  {
    id: "bantianyao",
    title: "BanTianYao – Trải Nghiệm Thị Giác Hiện Đại Cho Chuỗi Lẩu Cá Nướng",
    client: "BanTianYao Việt Nam",
    role: "Senior Graphic Designer / Art Director",
    category: "F&B Branding & POSM",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
    description: "Sáng tạo nhận diện hình ảnh hiện đại cho chuỗi ẩm thực lẩu cá nướng nổi tiếng BanTianYao, nhằm thu hút nhóm khách hàng trẻ tuổi, năng động.",
    challenge: "Chuỗi ẩm thực gốc có phong cách truyền thống, khó tiếp cận tệp khách hàng Gen Z năng động tại các trung tâm thương mại lớn. Đồng thời, menu thiết kế cũ chưa làm nổi bật được độ tươi ngon của cá nướng đặc sản.",
    solution: "Tái thiết kế menu với phong cách hiện đại, sử dụng gam màu tương phản cao (cam cháy và xanh ngọc bảo) đại diện cho lửa nướng và nước lẩu. Định hướng buổi chụp ảnh ẩm thực (Food Photography) tập trung vào khói, độ bóng của nước sốt và các góc cận cảnh kích thích vị giác.",
    metrics: [
      "Tăng 22% doanh số trung bình trên mỗi hóa đơn nhờ tối ưu hóa bố cục menu",
      "Gia tăng 35% lượt check-in chụp ảnh cùng không gian và POSM tại nhà hàng",
      "Thiết kế đồng bộ thành công cho hơn 15 chi nhánh toàn quốc"
    ],
    specs: ["F&B Visual Strategy", "POSM Design", "Food Photography Direction", "Menu Architecture"],
    deliverables: ["Bộ thiết kế Menu chính & Menu gọi món nhanh", "Hệ thống ấn phẩm điểm bán (Standee, Khăn giấy, Đồng phục)", "Bộ cẩm nang định hướng hình ảnh món ăn đặc sản"]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Thấu hiểu",
    englishTitle: "Discover",
    description: "Lắng nghe sâu sắc yêu cầu doanh nghiệp, nghiên cứu thị trường, phân tích hành vi đối tượng mục tiêu để tìm ra khoảng trống cơ hội.",
    tools: ["User Persona", "Competitor Audit", "Mindmap"],
    action: "Thiết lập nền móng chiến lược"
  },
  {
    step: "02",
    title: "Định hướng",
    englishTitle: "Define",
    description: "Phác thảo luồng trải nghiệm (User Journey), xây dựng moodboard thị giác và thống nhất các chỉ số thành công cốt lõi của dự án.",
    tools: ["Figma Wireframes", "Visual Moodboard", "Information Architecture"],
    action: "Định hình cấu trúc & phong cách"
  },
  {
    step: "03",
    title: "Kiến tạo",
    englishTitle: "Design & AI Generation",
    description: "Thiết kế chi tiết giao diện trên Figma & Adobe CC, đồng thời tích hợp sức mạnh sáng tạo từ Generative AI để nhanh chóng kiểm thử và hiện thực hóa ý tưởng.",
    tools: ["Figma", "Photoshop", "Midjourney", "Kling AI", "Google AI Studio"],
    action: "Tối ưu hóa tốc độ sáng tạo x2"
  },
  {
    step: "04",
    title: "Bàn giao & Tối ưu",
    englishTitle: "Deliver",
    description: "Cung cấp tài nguyên thiết kế chuẩn chỉ cho DEV, tiến hành QA giao diện sau code và tiếp tục tối ưu hóa dựa trên phản hồi vận hành thực tế.",
    tools: ["Zeplin / Figma Dev Mode", "Design QA Checklist", "Performance Tracking"],
    action: "Đảm bảo chất lượng tuyệt đối"
  }
];

export const LEADERSHIP_PHILOSOPHY: LeadershipPhilosophy = {
  title: "Triết lý Quản lý & Vận hành Đội ngũ dựa trên Kết quả",
  text: "Đối với tôi, một Creative Lead xuất sắc không chỉ tạo ra những thiết kế đẹp mắt, mà còn phải thiết lập một hệ thống vận hành trơn tru giúp nâng cao năng suất của cả đội nhóm. Tôi chuyển dịch quản lý từ giám sát giờ giấc sang đánh giá dựa trên KPIs kết quả đầu ra cụ thể, được theo dõi sát sao qua hệ thống Báo Cáo Ngày (Daily Reports). Đồng thời, tôi chủ động hướng dẫn và tích hợp các công cụ Generative AI vào quy trình làm việc, giúp đội ngũ giải phóng khỏi các tác vụ thủ công lặp lại để tập trung tối đa năng lượng vào tư duy chiến lược và ý tưởng đột phá.",
  metrics: [
    { value: "3+", label: "Năm kinh nghiệm Creative Lead" },
    { value: "50%", label: "Thời gian thiết kế rút ngắn nhờ quy trình AI" },
    { value: "100%", label: "Dự án bàn giao đúng hạn dựa trên Daily Report" },
    { value: "15+", label: "Nhân sự thiết kế từng dẫn dắt & đào tạo" }
  ]
};
