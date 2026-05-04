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
      xiaohongshu: "RedNote / Instagram Short Videos",
      posters: "Poster Designs",
      events: "Event Planning",
      xiaohongshuIntro: "Short-form restaurant content for RedNote and Instagram, edited for mobile-first viewing and social sharing.",
      postersIntro: "Editorial poster work for cultural moments and campaigns.",
      eventsIntro: "Planning, spatial flow, and live delivery details from event work.",
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
            "Coordinated planning and on-site delivery for BYD UK's retail and PR activations, including Halloween, Christmas and recurring \"Dream Weekend\" campaigns across five flagship stores.",
          imageLabel: "BYD London campaign image"
        },
        {
          slug: "haier-horizon-greenwich-event-planning",
          date: "March 2026",
          title: "Haier's 2026 Global Launch Event in Greenwich",
          role: "Event planning",
          description:
            "Supported the global launch of Haier Horizon at Royal Observatory Greenwich, coordinating logistics, venue operations, guest flow and on-site execution.",
          imageLabel: "Haier Horizon Greenwich event image"
        }
      ]
    },
    caseStudies: {
      backToAbout: "Back to about",
      overview: "Overview",
      contribution: "My contribution",
      imageNote: "Live photos of the event",
      byd: {
        title: "BYD UK",
        date: "Christmas 2025",
        role: "Marketing activation",
        client: "BYD · London",
        intro:
          "A series of BYD UK retail and PR activations connecting festive public engagement, charity fundraising and consistent in-store brand presentation.",
        overview:
          "Coordinated BYD UK event planning, material sourcing, store-team communication and on-site setup across retail and public-facing activations. The Christmas campaign connected a London and Manchester road trip with charity fundraising for The Felix Project and The Christie NHS Foundation Trust, while in-store events supported clearer brand presentation and customer engagement across five flagship locations.",
        contributions: [
          "Coordinated event timelines, store requirements, vendor communication and on-site setup across multiple BYD UK activations.",
          "Supported consistent brand presentation across festive campaigns, retail touchpoints and public-facing engagement moments.",
          "Helped connect campaign execution with audience interaction, charity messaging and post-event delivery needs."
        ],
        images: [
          {
            src: "/images/experience/byd.jpeg",
            label: "BYD London promotion image 01"
          },
          {
            src: "/images/experience/byd1.png",
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
          "A global launch event for Haier Horizon at Royal Observatory Greenwich, combining product storytelling, symbolic site selection, guest experience and livestream presentation.",
        overview:
          "The Haier Horizon refrigerator series global launch was themed \"Beyond What You See\" and staged between Queen's House and Royal Observatory Greenwich, where the Prime Meridian reinforced the brand's ideas around vision, time and future living. The event combined a hot-air balloon launch moment, product showcase, guest experience and livestream presentation to introduce the Horizon Collection as a premium refrigeration range focused on preservation, intelligence and sustainable living.",
        contributions: [
          "Coordinated event logistics, venue operations, supplier communication, guest flow and on-site execution.",
          "Supported media, KOL, organisation and talent coordination across English and Mandarin-speaking stakeholders.",
          "Helped align run-of-show delivery, livestream presentation and post-event campaign review."
        ],
        images: [
          {
            src: "/images/events/haier1.jpeg",
            label: "Haier Horizon Greenwich event image 01"
          },
          {
            src: "/images/events/haier2.jpg",
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
      cv: "简历",
      contact: "联系"
    },
    hero: {
      title: "亢怡淑",
      role: "营销与活动协调，伦敦",
      intro:
        "前模特，现居伦敦。把镜头感、审美判断和现场执行力转化为品牌内容、活动体验与传播项目。",
      cta: "查看作品",
      portrait: "人像图"
    },
    home: {
      categoriesTitle: "精选作品",
      categoriesIntro:
        "用于陈列小红书内容运营、海报视觉系统与活动策划现场的克制作品档案。",
      aboutTitle: "模特的视觉敏感，营销人的节奏感。",
      aboutText:
        "我将时尚与模特经历中的视觉判断，带入品牌叙事、内容方向和线下活动协调。",
      aboutLink: "了解我"
    },
    work: {
      title: "作品",
      intro:
        "作品图片和项目说明会在这里集中展示，方便快速浏览视觉内容与活动项目。",
      xiaohongshu: "小红书/Instagram短视频",
      posters: "海报设计",
      events: "活动策划",
      xiaohongshuIntro: "面向餐饮品牌、小红书和 Instagram 传播的移动端短视频内容。",
      postersIntro: "面向文化活动、品牌项目和传播主题的编辑感海报作品。",
      eventsIntro: "呈现活动策划、空间动线、现场执行与嘉宾体验的项目片段。",
      viewSection: "查看分类"
    },
    about: {
      title: "关于",
      portrait: "关于页人像",
      lead:
        "我现居伦敦，从事营销与活动协调工作，拥有模特背景。",
      bodyOne:
        "我的工作连接视觉、人物与空间：梳理传播叙事，协调真实场景中的活动体验，并在规划到落地的每一步保持对细节的敏感。",
      bodyTwo:
        "178cm 的模特经历，让我很早理解姿态、造型、光线与时机如何改变一张图的气质。如今，我把这种判断用于营销策略、内容方向和活动执行。",
      capabilitiesTitle: "我能给你带来什么",
      capabilities: [
        "营销策略与传播活动策划",
        "从概念到现场落地的活动协调",
        "面向视觉渠道的内容方向",
        "中英媒体与达人资源整合及合作拓展"
      ]
    },
    services: {
      title: "服务方向",
      intro: "为品牌、场地和创意团队提供灵活支持。",
      marketing: {
        title: "营销",
        text: "品牌定位、传播规划与内容策略。"
      },
      events: {
        title: "活动协调",
        text: "活动规划、制作支持与现场流程协调。"
      },
      content: {
        title: "内容与视觉",
        text: "视觉方向、社交内容、封面与传播物料。"
      }
    },
    experience: {
      title: "经验亮点",
      intro: "近期围绕品牌露出、现场动线和视觉一致性展开的营销与活动项目。",
      viewProject: "查看项目",
      items: [
        {
          slug: "byd-london-promotion-support",
          date: "2025 圣诞季",
          title: "比亚迪英国",
          role: "营销活动",
          description:
            "协调比亚迪英国零售与公关活动的策划和现场执行，包括万圣节、圣诞及五家旗舰店的“梦想周末”活动。",
          imageLabel: "比亚迪伦敦宣传图片"
        },
        {
          slug: "haier-horizon-greenwich-event-planning",
          date: "2026 年 3 月",
          title: "海尔 2026 格林尼治全球发布会",
          role: "活动策划",
          description:
            "支持海尔 Horizon 格林尼治全球发布会，协调活动物流、场地运营、嘉宾动线与现场执行。",
          imageLabel: "海尔格林尼治活动图片"
        }
      ]
    },
    caseStudies: {
      backToAbout: "返回关于页",
      overview: "项目概述",
      contribution: "我的参与",
      imageNote: "活动现场实拍",
      byd: {
        title: "比亚迪英国",
        date: "2025 圣诞季",
        role: "营销活动",
        client: "比亚迪 · 伦敦",
        intro:
          "比亚迪英国零售与公关活动项目，连接节日公共互动、公益传播和门店品牌体验。",
        overview:
          "协调比亚迪英国活动策划、物料采买、门店团队沟通与现场搭建，覆盖零售门店和公共场景活动。圣诞项目结合伦敦与曼彻斯特路演，为 The Felix Project 和 The Christie NHS Foundation Trust 公益筹款；门店活动则帮助品牌在五家旗舰店中保持清晰、统一且更具记忆点的消费者体验。",
        contributions: [
          "协调活动时间表、门店需求、供应商沟通与现场搭建。",
          "支持节日活动、零售触点与公众互动中的品牌一致性。",
          "协助衔接现场执行、受众互动、公益传播与活动后复盘需求。"
        ],
        images: [
          {
            src: "/images/experience/byd.jpeg",
            label: "比亚迪伦敦宣传图片 01"
          },
          {
            src: "/images/experience/byd1.png",
            label: "比亚迪伦敦宣传图片 02"
          }
        ]
      },
      haier: {
        title: "海尔 2026 格林尼治全球发布会",
        date: "2026 年 3 月",
        role: "活动策划",
        client: "海尔 · 格林尼治",
        intro:
          "海尔 Horizon 在格林尼治皇家天文台举办的全球发布会，结合产品叙事、场地象征、嘉宾体验与全球直播。",
        overview:
          "海尔 Horizon 冰箱系列全球发布会以“Beyond What You See”为主题，在格林尼治女王宫与皇家天文台之间展开。本初子午线强化了品牌关于视野、时间与未来生活方式的表达；现场结合热气球发布时刻、产品展示、嘉宾体验与全球直播，呈现 Horizon 系列在保鲜、智能管理和可持续生活方面的产品定位。",
        contributions: [
          "协调活动物流、场地运营、供应商沟通、嘉宾动线与现场执行。",
          "支持中英文媒体、达人、机构与嘉宾之间的沟通协作。",
          "协助衔接活动流程、直播呈现与活动后传播复盘。"
        ],
        images: [
          {
            src: "/images/events/haier1.jpeg",
            label: "海尔格林尼治活动图片 01"
          },
          {
            src: "/images/events/haier2.jpg",
            label: "海尔格林尼治活动图片 02"
          }
        ]
      }
    },
    contact: {
      title: "让我们一起工作",
      intro: "欢迎联系营销机会、活动合作、创意项目或作品集交流。",
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
      title: "简历",
      intro: "方便招聘方和合作方快速查看正式简历。",
      fileLabel: "Yishu Kang 简历",
      download: "打开或下载 PDF",
      missing: "上传简历 PDF 后，这里会显示内嵌预览。"
    },
    footer: {
      built: "个人作品站。",
      rights: "保留所有权利。"
    }
  }
} as const;

export type Lang = keyof typeof ui;
export type UiKey = keyof typeof ui.en;
