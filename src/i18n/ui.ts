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
      xiaohongshu: "Xiaohongshu Covers",
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
        "At 178cm, I first learned how posture, styling, lighting, and timing change the feeling of an image. Today, I bring that same attention to marketing strategy, content direction, and event production.",
      capabilitiesTitle: "What I can bring",
      capabilities: [
        "Marketing strategy and campaign planning",
        "Event coordination from concept to on-site delivery",
        "Content direction for visual-first channels",
        "Partnership communication across creative teams"
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
      title: "Experience highlights",
      intro:
        "Recent marketing and event work shaped around brand presence, audience flow, and visual consistency.",
      viewProject: "View project",
      items: [
        {
          slug: "byd-london-promotion-support",
          date: "Christmas 2025",
          title: "BYD London promotion support",
          role: "Marketing activation",
          description:
            "Supported a London Christmas-season promotional campaign for BYD, helping connect brand messaging with public-facing experience.",
          imageLabel: "BYD London campaign image"
        },
        {
          slug: "haier-horizon-greenwich-event-planning",
          date: "March 2026",
          title: "Haier Horizon Greenwich event planning",
          role: "Event planning",
          description:
            "Planned event flow and coordination details for Haier Horizon Greenwich, with attention to guest experience, space, and campaign presentation.",
          imageLabel: "Haier Horizon Greenwich event image"
        }
      ]
    },
    caseStudies: {
      backToAbout: "Back to about",
      overview: "Overview",
      contribution: "My contribution",
      details: "Project notes",
      imageNote: "Add images to public/images/experience/ to replace these placeholders.",
      byd: {
        title: "BYD London promotion support",
        date: "Christmas 2025",
        role: "Marketing activation",
        client: "BYD · London",
        intro:
          "A Christmas-season London promotion supporting BYD's public-facing brand presence and campaign experience.",
        overview:
          "I supported the activation around audience-facing communication, visual consistency, and the practical details that help a brand moment feel polished in a busy city environment.",
        contributions: [
          "Supported on-site promotional flow and public interaction moments.",
          "Helped keep brand messaging clear across the campaign experience.",
          "Observed visual details, timing, and audience touchpoints from planning through delivery."
        ],
        details: [
          "Seasonal promotion in London",
          "Brand presence and public engagement",
          "Marketing activation support"
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
        title: "Haier Horizon Greenwich event planning",
        date: "March 2026",
        role: "Event planning",
        client: "Haier Horizon · Greenwich",
        intro:
          "An event planning project focused on guest experience, space flow, and campaign presentation for Haier Horizon Greenwich.",
        overview:
          "I planned coordination details around how guests would move through the event, how the brand story would appear in the space, and how the practical schedule could support a smooth live experience.",
        contributions: [
          "Planned event flow, timing, and coordination details.",
          "Considered guest journey, space rhythm, and brand presentation together.",
          "Supported a clear bridge between marketing goals and on-site delivery needs."
        ],
        details: [
          "Greenwich event planning",
          "Guest journey and spatial coordination",
          "Campaign presentation support"
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
      xiaohongshu: "Xiaohongshu",
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
          title: "比亚迪伦敦宣传支持",
          role: "Marketing activation",
          description:
            "参与比亚迪伦敦圣诞季宣传项目，协助品牌信息与线下公众体验之间的衔接。",
          imageLabel: "比亚迪伦敦宣传图片"
        },
        {
          slug: "haier-horizon-greenwich-event-planning",
          date: "2026 年 3 月",
          title: "Haier Horizon Greenwich 活动策划",
          role: "Event planning",
          description:
            "为 Haier Horizon Greenwich event 进行活动流程与协调细节策划，关注嘉宾体验、空间节奏和品牌呈现。",
          imageLabel: "Haier Horizon Greenwich 活动图片"
        }
      ]
    },
    caseStudies: {
      backToAbout: "返回关于页",
      overview: "项目概述",
      contribution: "我的参与",
      details: "项目要点",
      imageNote: "把图片放到 public/images/experience/ 后，这里的占位会自动替换。",
      byd: {
        title: "比亚迪伦敦宣传支持",
        date: "2025 圣诞季",
        role: "Marketing activation",
        client: "BYD · London",
        intro:
          "面向伦敦圣诞季的比亚迪宣传项目，重点支持品牌在线下公共场景中的露出与体验。",
        overview:
          "我参与支持 activation 中面向受众的沟通、视觉一致性与现场细节，让品牌在繁忙城市环境中的展示更清晰、更完整。",
        contributions: [
          "支持现场宣传动线与公众互动环节。",
          "协助品牌信息在活动体验中的清晰呈现。",
          "关注从规划到执行中的视觉细节、时间节奏和受众触点。"
        ],
        details: [
          "伦敦圣诞季宣传项目",
          "品牌露出与公众互动",
          "Marketing activation 支持"
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
        title: "Haier Horizon Greenwich 活动策划",
        date: "2026 年 3 月",
        role: "Event planning",
        client: "Haier Horizon · Greenwich",
        intro:
          "为 Haier Horizon Greenwich 进行活动策划，重点关注嘉宾体验、空间动线与 campaign 呈现。",
        overview:
          "我围绕嘉宾如何进入、移动、观看和互动来规划协调细节，同时考虑品牌故事在空间中的呈现，以及现场时间表如何支撑流畅体验。",
        contributions: [
          "规划活动流程、时间节奏与协调细节。",
          "把嘉宾体验、空间节奏和品牌呈现放在一起考虑。",
          "支持 marketing 目标与现场执行需求之间的衔接。"
        ],
        details: [
          "Greenwich 活动策划",
          "嘉宾动线与空间协调",
          "Campaign 呈现支持"
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
