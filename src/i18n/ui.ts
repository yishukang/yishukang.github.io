export const languages = {
  en: "English",
  zh: "中文"
} as const;

export const defaultLang = "en";

export const ui = {
  en: {
    siteName: "Yishu Kang",
    siteNameZh: "Yishu Kang",
    nav: {
      home: "Home",
      about: "About",
      work: "Work",
      cv: "CV",
      contact: "Contact"
    },
    hero: {
      title: "Yishu Kang",
      role: "Marketing & Event Coordinator, London",
      intro:
        "A former model turning visual sensitivity into memorable campaigns, cultural moments, and event experiences.",
      cta: "View work",
      portrait: "Portrait image / add to public/images/portrait/"
    },
    home: {
      categoriesTitle: "Selected work",
      categoriesIntro:
        "A quiet archive for cover concepts, poster systems, and live event moments.",
      aboutTitle: "Model eye, marketer's rhythm.",
      aboutText:
        "I bring a visual-first sensibility from fashion and modeling into brand storytelling, content direction, and on-site event coordination.",
      aboutLink: "Read about me"
    },
    work: {
      title: "Work",
      intro:
        "Placeholder frames are ready for real projects. Drop images into public/images and update the matching markdown file.",
      xiaohongshu: "RedNote Covers",
      posters: "Poster Designs",
      events: "Event Photography",
      xiaohongshuIntro: "3:4 cover systems for social storytelling and product edits.",
      postersIntro: "Editorial poster studies for cultural moments and campaigns.",
      eventsIntro: "Live atmosphere, guest flow, and spatial details from event work.",
      viewSection: "View section"
    },
    about: {
      title: "About",
      portrait: "About portrait / add to public/images/portrait/",
      lead:
        "I am a London-based marketing and event coordinator with a background in modeling.",
      bodyOne:
        "My work sits between image-making, people, and place: shaping campaign narratives, coordinating real-world moments, and keeping visual details precise from planning to execution.",
      bodyTwo:
        "As a model before, I learned early on how much posture, styling, lighting, and timing can influence the emotion of an image. Today, I apply that same visual sensitivity to marketing strategy, content direction, and event production, creating experiences that feel intentional, polished, and audience-focused.",
      capabilitiesTitle: "What I can bring",
      capabilities: [
        "Marketing strategy and campaign planning",
        "Event coordination from concept to on-site delivery",
        "Content direction for visual-first channels",
        "China-UK Media & KOL resource integration & partnership development"
      ]
    },
    services: {
      title: "Services",
      intro: "Useful support for brands, venues, and creative teams.",
      marketing: {
        title: "Marketing",
        text: "Brand positioning, campaign planning, and content strategy."
      },
      events: {
        title: "Event Coordination",
        text: "End-to-end planning, production support, and on-site flow."
      },
      content: {
        title: "Content & Visuals",
        text: "Visual direction, social content, covers, and campaign assets."
      }
    },
    experience: {
      title: "Experience Highlights",
      intro:
        "Recent marketing and event work shaped around brand presence, audience flow, and visual consistency.",
      viewProject: "View project",
      items: [
        {
          slug: "byd-london-promotion-support",
          date: "Christmas 2025",
          title: "BYD UK",
          role: "Marketing activation",
          description:
            "Supported the planning and on-site delivery of BYD UK's Halloween and Christmas campaigns, along with monthly \"Dream Weekend\" events across five UK stores.",
          imageLabel: "BYD London campaign image"
        },
        {
          slug: "haier-horizon-greenwich-event-planning",
          date: "March 2026",
          title: "Haier's 2026 Global Launch Event in Greenwich",
          role: "Event planning",
          description:
            "Participated in the planning and on-site execution of Haier's 2026 Global Launch Event in Greenwich.",
          imageLabel: "Haier Horizon Greenwich event image"
        }
      ]
    },
    caseStudies: {
      backToAbout: "Back to about",
      overview: "Overview",
      contribution: "My contribution",
      imageNote: "Add images to public/images/experience/ to replace these placeholders.",
      byd: {
        title: "BYD UK",
        date: "Christmas 2025",
        role: "Marketing activation",
        client: "BYD · London",
        intro:
          "A Christmas-season London promotion supporting BYD's public-facing brand presence and campaign experience.",
        overview:
          "Led BYD UK event planning, material sourcing, and on-site setup, helping the brand create clearer, more memorable consumer experiences in retail environments.",
        contributions: [
          "Observed visual details, timing, and audience touchpoints from planning through delivery.",
          "Helped keep brand messaging clear across the campaign experience.",
          "Supported on-site promotional flow and public interaction moments."
        ],
        images: [
          {
            src: "/images/experience/byd-london-01.jpg",
            label: "BYD London promotion image 01"
          },
          {
            src: "/images/experience/byd-london-02.jpg",
            label: "BYD London promotion image 02"
          }
        ]
      },
      haier: {
        title: "Haier's 2026 Global Launch Event in Greenwich",
        date: "March 2026",
        role: "Event planning",
        client: "Haier Horizon · Greenwich",
        intro:
          "A global launch event for Haier Horizon in Greenwich, combining brand experience, livestream presentation, and on-site execution.",
        overview:
          "The Haier Horizon refrigerator series global launch was themed \"Beyond What You See\", combining an on-site brand experience with global livestreaming at the Queen's House and the Prime Meridian in Greenwich, London. The location symbolised the intersection of vision, boundaries, and time, echoing the Horizon series' concept of looking beyond the visible and exploring future ways of living. Our team delivered the project from event planning and spatial flow to on-site execution and livestream presentation, creating an immersive and internationally resonant brand experience.",
        contributions: [
          "Media, KOL, Organisation & Talent Coordination",
          "Run-of-Show Coordination & Experience Delivery",
          "Post-event Data Analysis & Campaign Review"
        ],
        images: [
          {
            src: "/images/experience/haier-horizon-greenwich-01.jpg",
            label: "Haier Horizon Greenwich event image 01"
          },
          {
            src: "/images/experience/haier-horizon-greenwich-02.jpg",
            label: "Haier Horizon Greenwich event image 02"
          }
        ]
      }
    },
    contact: {
      title: "Let's work together",
      intro:
        "Open to marketing roles, event collaborations, creative projects, and portfolio conversations.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      socialLabel: "Social",
      email: "yishukang@outlook.com",
      phone: "+44 7421097828",
      linkedin: "LinkedIn",
      linkedinUrl: "https://www.linkedin.com/in/yishu-kang/",
      xiaohongshu: "RedNote",
      xiaohongshuUrl: "https://xhslink.com/m/5hBzqkmVSA0"
    },
    cv: {
      title: "CV",
      intro:
        "A PDF resume view for HR, recruiters, and collaborators who need a quick formal overview.",
      fileLabel: "Yishu Kang CV",
      download: "Open or download PDF",
      missing:
        "Add the resume PDF at public/cv/yishu-kang-cv.pdf to replace this placeholder."
    },
    footer: {
      built: "Built for GitHub Pages.",
      rights: "All rights reserved."
    }
  },
  zh: {
    siteName: "Yishu Kang",
    siteNameZh: "亢怡淑",
    nav: {
      home: "首页",
      about: "关于",
      work: "作品",
      cv: "CV/简历",
      contact: "联系"
    },
    hero: {
      title: "Yishu Kang",
      role: "Marketing & Event Coordinator，伦敦",
      intro:
        "前模特，现居伦敦。把镜头感、审美判断和现场执行力转化为品牌内容、活动体验与传播项目。",
      cta: "查看作品",
      portrait: "人像图 / 放入 public/images/portrait/"
    },
    home: {
      categoriesTitle: "精选作品",
      categoriesIntro:
        "用于陈列小红书封面、海报视觉系统与活动现场影像的克制作品档案。",
      aboutTitle: "模特的视觉敏感，营销人的节奏感。",
      aboutText:
        "我将时尚与模特经历中的视觉判断，带入品牌叙事、内容方向和线下活动协调。",
      aboutLink: "了解我"
    },
    work: {
      title: "作品",
      intro:
        "当前为占位骨架。后续把真实图片放进 public/images，并更新对应 markdown 文件即可上线。",
      xiaohongshu: "小红书封面",
      posters: "海报设计",
      events: "活动现场图",
      xiaohongshuIntro: "适合社交传播、产品选题和生活方式内容的 3:4 封面系统。",
      postersIntro: "面向文化活动、品牌项目和传播主题的编辑感海报练习。",
      eventsIntro: "记录现场氛围、动线、嘉宾互动与空间细节的活动影像。",
      viewSection: "查看分类"
    },
    about: {
      title: "关于",
      portrait: "关于页人像 / 放入 public/images/portrait/",
      lead:
        "我现居伦敦，从事 marketing 与 event coordinating，拥有模特背景。",
      bodyOne:
        "我的工作连接视觉、人物与空间：梳理传播叙事，协调真实场景中的活动体验，并在规划到落地的每一步保持对细节的敏感。",
      bodyTwo:
        "178cm 的模特经历，让我很早理解姿态、造型、光线与时机如何改变一张图的气质。如今，我把这种判断用于营销策略、内容方向和活动执行。",
      capabilitiesTitle: "我能给你带来什么",
      capabilities: [
        "营销策略与 campaign planning",
        "从概念到现场落地的活动协调",
        "面向视觉渠道的内容方向",
        "跨创意团队和合作方的沟通推进"
      ]
    },
    services: {
      title: "服务方向",
      intro: "为品牌、场地和创意团队提供灵活支持。",
      marketing: {
        title: "Marketing",
        text: "品牌定位、传播规划与内容策略。"
      },
      events: {
        title: "Event Coordination",
        text: "活动规划、制作支持与现场流程协调。"
      },
      content: {
        title: "Content & Visuals",
        text: "视觉方向、社交内容、封面与传播物料。"
      }
    },
    experience: {
      title: "经验亮点",
      intro: "近期围绕品牌露出、现场动线和视觉一致性展开的 marketing 与 event 工作。",
      viewProject: "查看项目",
      items: [
        {
          slug: "byd-london-promotion-support",
          date: "2025 圣诞季",
          title: "BYD UK",
          role: "Marketing activation",
          description:
            "参与 BYD UK Halloween 与 Christmas campaigns 的策划和现场执行，并支持英国五家门店每月 Dream Weekend 活动。",
          imageLabel: "比亚迪伦敦宣传图片"
        },
        {
          slug: "haier-horizon-greenwich-event-planning",
          date: "2026 年 3 月",
          title: "Haier 2026 全球发布会 Greenwich 活动",
          role: "Event planning",
          description:
            "参与 Haier 2026 全球发布会 Greenwich 活动的策划与现场执行。",
          imageLabel: "Haier Horizon Greenwich 活动图片"
        }
      ]
    },
    caseStudies: {
      backToAbout: "返回关于页",
      overview: "项目概述",
      contribution: "我的参与",
      imageNote: "把图片放到 public/images/experience/ 后，这里的占位会自动替换。",
      byd: {
        title: "BYD UK",
        date: "2025 圣诞季",
        role: "Marketing activation",
        client: "BYD · London",
        intro:
          "面向伦敦圣诞季的比亚迪宣传项目，重点支持品牌在线下公共场景中的露出与体验。",
        overview:
          "负责 BYD UK 活动策划、物料采买、现场搭建与执行落地，帮助品牌在零售场景中建立更清晰、更具记忆点的消费者体验。",
        contributions: [
          "关注从规划到执行中的视觉细节、时间节奏和受众触点。",
          "协助品牌信息在活动体验中的清晰呈现。",
          "支持现场宣传动线与公众互动环节。"
        ],
        images: [
          {
            src: "/images/experience/byd-london-01.jpg",
            label: "比亚迪伦敦宣传图片 01"
          },
          {
            src: "/images/experience/byd-london-02.jpg",
            label: "比亚迪伦敦宣传图片 02"
          }
        ]
      },
      haier: {
        title: "Haier 2026 全球发布会 Greenwich 活动",
        date: "2026 年 3 月",
        role: "Event planning",
        client: "Haier Horizon · Greenwich",
        intro:
          "Haier Horizon 在 Greenwich 举办的全球发布会，结合品牌体验、全球直播与现场执行。",
        overview:
          "Haier Horizon 冰箱系列全球发布会以 \"Beyond What You See\" 为主题，结合线下体验与全球直播，在伦敦格林威治女王宫及本初子午线举办。该地点象征着视野、边界与时间的交汇，呼应 Horizon 系列“超越眼前所见，探索未来生活方式”的品牌理念。团队负责从活动策划、空间动线到现场执行与直播呈现的完整落地，打造兼具国际感、沉浸感和传播价值的品牌体验。",
        contributions: [
          "Media, KOL, Organisation & Talent Coordination",
          "Run-of-Show Coordination & Experience Delivery",
          "Post-event Data Analysis & Campaign Review"
        ],
        images: [
          {
            src: "/images/experience/haier-horizon-greenwich-01.jpg",
            label: "Haier Horizon Greenwich 活动图片 01"
          },
          {
            src: "/images/experience/haier-horizon-greenwich-02.jpg",
            label: "Haier Horizon Greenwich 活动图片 02"
          }
        ]
      }
    },
    contact: {
      title: "让我们一起工作",
      intro: "欢迎联系 marketing 机会、活动合作、创意项目或作品集交流。",
      emailLabel: "邮箱",
      phoneLabel: "电话",
      socialLabel: "社交账号",
      email: "yishukang@outlook.com",
      phone: "+44 7421097828",
      linkedin: "LinkedIn",
      linkedinUrl: "https://www.linkedin.com/in/yishu-kang/",
      xiaohongshu: "小红书",
      xiaohongshuUrl: "https://xhslink.com/m/5hBzqkmVSA0"
    },
    cv: {
      title: "CV/简历",
      intro: "方便 HR、招聘方和合作方快速查看正式简历的 PDF 预览页。",
      fileLabel: "Yishu Kang 简历",
      download: "打开或下载 PDF",
      missing: "把简历 PDF 放到 public/cv/yishu-kang-cv.pdf 后，这里会显示内嵌预览。"
    },
    footer: {
      built: "为 GitHub Pages 构建。",
      rights: "保留所有权利。"
    }
  }
} as const;

export type Lang = keyof typeof ui;
export type UiKey = keyof typeof ui.en;
