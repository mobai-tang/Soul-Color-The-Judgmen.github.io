const traits = {
    loli: {
        name: "萝莉",
        description: "幼态纯真与原始保护欲的完美容器。",
        aiPrompt: "Ultra-cute anime loli, petite frame, big sparkling eyes",
        ending: "你的灵魂干净得让人心疼呢。",
        rewardEffect: "reward-sparkle",
        punishEffect: "punish-lightning",
        punishEnding: "警告：检测到虚伪灵魂！执行正义电击！"
    },
    shaofu: {
        name: "少妇",
        description: "成熟韵味与温柔气质的完美结合。",
        aiPrompt: "Elegant young married woman, gentle smile",
        ending: "终于有人懂我的温柔了。",
        rewardEffect: "reward-warmth",
        punishEffect: "punish-freeze",
        punishEnding: "你的温柔是装的吧？"
    },
    yujie: {
        name: "御姐",
        description: "强大气场与绝对掌控力的化身。",
        aiPrompt: "Dominant mature woman, confident posture",
        ending: "不错，有资格站在我身边。",
        rewardEffect: "reward-royal",
        punishEffect: "punish-crush",
        punishEnding: "你也配掌控我？"
    },
    shaonv: {
        name: "少女",
        description: "青春活力与无限可能的代名词。",
        aiPrompt: "Fresh young girl, youthful glow",
        ending: "和你在一起好开心！",
        rewardEffect: "reward-blossom",
        punishEffect: "punish-wither",
        punishEnding: "你的青春是假的吧？"
    },
    shunv: {
        name: "熟女",
        description: "岁月沉淀的智慧与魅力。",
        aiPrompt: "Sophisticated mature woman, elegant demeanor",
        ending: "你懂得欣赏真正的美。",
        rewardEffect: "reward-wine",
        punishEffect: "punish-shatter",
        punishEnding: "你以为成熟就是伪装？"
    },
    renqi: {
        name: "人妻",
        description: "温柔贤惠与致命吸引力的结合体。",
        aiPrompt: "Gentle housewife, warm smile",
        ending: "你选择了我，就是我的家人了。",
        rewardEffect: "reward-hearth",
        punishEffect: "punish-isolation",
        punishEnding: "你觊觎不属于你的温暖？"
    },
    ruanmei: {
        name: "软妹",
        description: "柔软无害与依赖感的极致体现。",
        aiPrompt: "Soft cute girl, fluffy sweater",
        ending: "呜……那我们抱在一起就不会冷了！",
        rewardEffect: "reward-fluffy",
        punishEffect: "punish-suffocate",
        punishEnding: "你利用我的柔软？"
    },
    lamei: {
        name: "辣妹",
        description: "火辣性感与张扬个性的完美融合。",
        aiPrompt: "Hot sexy girl, bold outfit",
        ending: "哟，够辣！你配得上我的火焰。",
        rewardEffect: "reward-inferno",
        punishEffect: "punish-burn",
        punishEnding: "你这点温度也敢叫辣？"
    },
    tianmei: {
        name: "甜妹",
        description: "甜美可爱与治愈力的化身。",
        aiPrompt: "Sweet adorable girl, bright smile",
        ending: "难怪靠近你就觉得整个世界都变甜了！",
        rewardEffect: "reward-candy",
        punishEffect: "punish-drown",
        punishEnding: "你嫌甜？尝尝被蜜糖淹没的绝望！"
    },
    kujie: {
        name: "酷姐",
        description: "冷漠疏离与独立个性的代表。",
        aiPrompt: "Cool indifferent woman, sharp gaze",
        ending: "哼，算你有眼光。",
        rewardEffect: "reward-blade",
        punishEffect: "punish-shatter",
        punishEnding: "你连酷的资格都没有。"
    },
    bingjiao: {
        name: "病娇",
        description: "极端占有与扭曲爱意的集合体。",
        aiPrompt: "Yandere girl, obsessive eyes",
        ending: "你是我的……只属于我的。",
        rewardEffect: "reward-obsession",
        punishEffect: "punish-chain",
        punishEnding: "你居然想逃？"
    },
    aojiao: {
        name: "傲娇",
        description: "口是心非与害羞内心的矛盾体。",
        aiPrompt: "Tsundere girl, blushing face",
        ending: "才、才不是特意为你准备的！",
        rewardEffect: "reward-tsundere",
        punishEffect: "punish-reject",
        punishEnding: "你以为我会原谅你？"
    },
    fuhei: {
        name: "腹黑",
        description: "温柔外表与黑暗内心的反差萌。",
        aiPrompt: "Two-faced girl, innocent smile",
        ending: "呵呵，你很有趣呢。",
        rewardEffect: "reward-manipulate",
        punishEffect: "punish-puppet",
        punishEnding: "你以为看透了我？"
    },
    tiandandai: {
        name: "天然呆",
        description: "迷糊可爱与纯真天性的化身。",
        aiPrompt: "Airhead cute girl, confused expression",
        ending: "诶？那我们一起看云吧！",
        rewardEffect: "reward-cloud",
        punishEffect: "punish-confuse",
        punishEnding: "你居然骗我？"
    },
    yuanqiniang: {
        name: "元气娘",
        description: "永远充满活力的太阳系中心。",
        aiPrompt: "Energetic sunshine girl, big smile",
        ending: "一起冲向宇宙尽头吧！",
        rewardEffect: "reward-sunshine",
        punishEffect: "punish-blackhole",
        punishEnding: "你的灵魂怎么这么暗淡？"
    },
    sanwu: {
        name: "三无",
        description: "无口无心无表情的高冷存在。",
        aiPrompt: "Kuudere emotionless girl, blank stare",
        ending: "……你，可以留下。",
        rewardEffect: "reward-silent",
        punishEffect: "punish-erase",
        punishEnding: "……不需要。"
    },
    bingshan: {
        name: "冰山",
        description: "高冷疏离与隐藏温柔的矛盾体。",
        aiPrompt: "Ice queen, cold expression",
        ending: "你……融化了我。",
        rewardEffect: "reward-thaw",
        punishEffect: "punish-freeze",
        punishEnding: "你太肤浅，不配触碰我的温度。"
    },
    meihuo: {
        name: "魅惑",
        description: "致命吸引力与危险魅力的化身。",
        aiPrompt: "Seductive temptress, alluring gaze",
        ending: "你逃不掉的，永远。",
        rewardEffect: "reward-tempt",
        punishEffect: "punish-devour",
        punishEnding: "你的欲望，会吞噬你自己。"
    },
    fengpi: {
        name: "疯批",
        description: "混乱疯狂与不可预测的危险。",
        aiPrompt: "Crazy psychopath, wild eyes",
        ending: "哈哈哈哈！陪我一起疯吧！",
        rewardEffect: "reward-chaos",
        punishEffect: "punish-insane",
        punishEnding: "你太无趣了，让我帮你疯狂一点！"
    },
    jinyu: {
        name: "锦鲤",
        description: "幸运加持与神秘力量的象征。",
        aiPrompt: "Lucky koi fish girl, mystical aura",
        ending: "遇见我，是你最大的幸运。",
        rewardEffect: "reward-luck",
        punishEffect: "punish-curse",
        punishEnding: "你的运气，被我诅咒了。"
    },
    jixieji: {
        name: "机械姬",
        description: "理性逻辑与人工智能的完美融合。",
        aiPrompt: "Robot android girl, cybernetic",
        ending: "你的情感逻辑存在致命 BUG。",
        rewardEffect: "reward-upgrade",
        punishEffect: "punish-rewrite",
        punishEnding: "正在重写你的灵魂代码……"
    },
    nvwang: {
        name: "女王",
        description: "绝对权威与至高统治的化身。",
        aiPrompt: "Queen ruler, royal crown",
        ending: "跪下，这是你唯一的荣幸。",
        rewardEffect: "reward-crown",
        punishEffect: "punish-enslave",
        punishEnding: "你只配做我的奴隶。"
    },
    daxiaojie: {
        name: "大小姐",
        description: "高贵优雅与骄纵任性的结合体。",
        aiPrompt: "Rich ojou-sama, elegant dress",
        ending: "哼，勉强承认你的存在吧。",
        rewardEffect: "reward-wealth",
        punishEffect: "punish-ruin",
        punishEnding: "我要让你一无所有。"
    },
    qianjin: {
        name: "千金",
        description: "名门闺秀与传统教养的代表。",
        aiPrompt: "Wealthy young lady, traditional",
        ending: "你的礼仪还需要加强呢。",
        rewardEffect: "reward-elegance",
        punishEffect: "punish-scandal",
        punishEnding: "我要让你身败名裂。"
    },
    weiniang: {
        name: "伪娘",
        description: "性别模糊与跨界的极致美学。",
        aiPrompt: "Crossdress femboy, cute outfit",
        ending: "性别只是标签，美才是永恒。",
        rewardEffect: "reward-transform",
        punishEffect: "punish-expose",
        punishEnding: "你以为伪装能骗过我？"
    },
    nanzhuangdalao: {
        name: "男装大佬",
        description: "帅气外表与女性内心的反差。",
        aiPrompt: "Tomboy cool girl, masculine style",
        ending: "叫大哥，懂？",
        rewardEffect: "reward-bro",
        punishEffect: "punish-unmask",
        punishEnding: "你也不过如此。"
    },
    senxi: {
        name: "森系",
        description: "自然清新与原始生命力的化身。",
        aiPrompt: "Forest girl, natural style",
        ending: "森林会接纳你的灵魂。",
        rewardEffect: "reward-nature",
        punishEffect: "punish-wither",
        punishEnding: "大自然不需要你这样的心灵。"
    },
    gufeng: {
        name: "古风",
        description: "古典韵味与传统文化的美。",
        aiPrompt: "Traditional chinese girl, hanfu",
        ending: "愿与君共赏明月。",
        rewardEffect: "reward-moon",
        punishEffect: "punish-time",
        punishEnding: "你不配活在这样美好的时代。"
    },
    wenyixi: {
        name: "文艺系",
        description: "文学气质与艺术灵魂的融合。",
        aiPrompt: "Literary girl, glasses book",
        ending: "你读懂我的诗了吗？",
        rewardEffect: "reward-poetry",
        punishEffect: "punish-ignorance",
        punishEnding: "你的灵魂太过贫瘠。"
    },
    dushe: {
        name: "毒蛇",
        description: "阴险狡诈与致命危险的象征。",
        aiPrompt: "Snake girl, venomous",
        ending: "我的毒，已经渗入你的骨髓。",
        rewardEffect: "reward-venom",
        punishEffect: "punish-poison",
        punishEnding: "你已中了我的剧毒。"
    },
    xuejie: {
        name: "学姐",
        description: "成熟可靠与温柔关怀的化身。",
        aiPrompt: "Senpai upperclassman, gentle",
        ending: "有什么困难，都可以找学姐哦。",
        rewardEffect: "reward-care",
        punishEffect: "punish-abandon",
        punishEnding: "你已经不需要学姐了。"
    },
    yundongxi: {
        name: "运动系",
        description: "阳光活力与健康美的代表。",
        aiPrompt: "Sporty athletic girl, energetic",
        ending: "一起来跑步吧！",
        rewardEffect: "reward-energy",
        punishEffect: "punish-exhaust",
        punishEnding: "你的体力太差了！"
    },
    linjianvh: {
        name: "临境 VH",
        description: "虚拟与现实交错的数字存在。",
        aiPrompt: "Virtual hologram girl, digital",
        ending: "我在数据流中等你。",
        rewardEffect: "reward-digital",
        punishEffect: "punish-delete",
        punishEnding: "正在格式化你的存在……"
    },
    xuemei: {
        name: "雪女",
        description: "冰冷纯洁与冬日寂静的化身。",
        aiPrompt: "Snow woman, white hair ice",
        ending: "和我一起沉睡在雪中吧。",
        rewardEffect: "reward-snow",
        punishEffect: "punish-freeze",
        punishEnding: "你的心，太冷了。"
    },
    chunyu: {
        name: "春雨",
        description: "细腻温柔与忧郁气质的融合。",
        aiPrompt: "Rain girl, melancholy",
        ending: "雨天，很适合思念呢。",
        rewardEffect: "reward-rain",
        punishEffect: "punish-drown",
        punishEnding: "让你尝尝被雨水淹没的滋味。"
    },
    shouerniang: {
        name: "兽耳娘",
        description: "野性直觉与动物魅力的象征。",
        aiPrompt: "Fox girl kemonomimi, ears tail",
        ending: "汪！最喜欢主人了！",
        rewardEffect: "reward-tame",
        punishEffect: "punish-hunt",
        punishEnding: "你只是我的猎物。"
    },
    monv: {
        name: "魔女",
        description: "神秘魔法与禁忌知识的掌控者。",
        aiPrompt: "Witch sorceress, magic hat",
        ending: "你的灵魂，归我了。",
        rewardEffect: "reward-spell",
        punishEffect: "punish-curse",
        punishEnding: "让你尝尝禁忌魔法的滋味。"
    },
    xianv: {
        name: "仙女",
        description: "超凡脱俗与神圣光辉的化身。",
        aiPrompt: "Fairy immortal goddess, divine",
        ending: "凡尘俗世，与我无关。",
        rewardEffect: "reward-divine",
        punishEffect: "punish-mortal",
        punishEnding: "你不配触碰神圣。"
    },
    OL: {
        name: "OL",
        description: "职场精英与专业能力的代表。",
        aiPrompt: "Office lady business suit",
        ending: "工作效率不错，继续努力。",
        rewardEffect: "reward-promote",
        punishEffect: "punish-fire",
        punishEnding: "你被解雇了。"
    }
};

// 800 道深度心理测试题目 - 严格按照 1.md 风格生成
// 分为四个阶段：本我映射、社交假面、感官与美学、终极审判
// 每次随机抽取 40 道，每道题都指向 40 个人设
const questions = [
    {
        "text": "在镜子里看到另一个性别的自己，你的第一反应是？",
        "options": [
            {
                "text": "试图触碰镜面，感叹这种跨越界限的美",
                "scores": {
                    "weiniang": 2,
                    "nanzhuangdalao": 2,
                    "fuhei": 1
                }
            },
            {
                "text": "面无表情地分析这是否是某种感官干扰",
                "scores": {
                    "jixieji": 2,
                    "sanwu": 2,
                    "bingshan": 1
                }
            },
            {
                "text": "脸红心跳，立刻寻找遮盖物",
                "scores": {
                    "loli": 2,
                    "tianmei": 2,
                    "aojiao": 1
                }
            },
            {
                "text": "露出坏笑，已经在脑补如何利用这个新身份",
                "scores": {
                    "meimo": 2,
                    "fengpi": 2,
                    "meihuo": 1
                }
            }
        ]
    },
    {
        "text": "手中握着一颗能实现愿望但代价未知的禁果，你会",
        "options": [
            {
                "text": "毫不犹豫地吞下，代价什么的以后再说",
                "scores": {
                    "yuanqiniang": 2,
                    "fengpi": 2,
                    "lamei": 1
                }
            },
            {
                "text": "把它切开研究构造，试图通过技术规避代价",
                "scores": {
                    "jixieji": 2,
                    "wenyixi": 2,
                    "fuhei": 1
                }
            },
            {
                "text": "送给你最讨厌的人，看 Ta 坠入深渊",
                "scores": {
                    "bingjiao": 2,
                    "dushe": 2,
                    "meimo": 1
                }
            },
            {
                "text": "把它深埋，希望它能长出纯洁的绿植",
                "scores": {
                    "senxi": 2,
                    "xianv": 2,
                    "tianmei": 1
                }
            }
        ]
    },
    {
        "text": "当你走进一个充满束缚与镣铐的房间，你的第一感受是",
        "options": [
            {
                "text": "沉睡的欲望被唤醒，心跳莫名加速",
                "scores": {
                    "meimo": 2,
                    "fengpi": 2,
                    "bingjiao": 1
                }
            },
            {
                "text": "感到厌恶，想要彻底粉碎这里的所有枷锁",
                "scores": {
                    "yujie": 2,
                    "nvwang": 2,
                    "yuanqiniang": 1
                }
            },
            {
                "text": "感到莫名的安心，想要在这里长眠",
                "scores": {
                    "sanwu": 2,
                    "bingshan": 2,
                    "chunyu": 1
                }
            },
            {
                "text": "疑惑地歪着头，完全无法理解这里的意义",
                "scores": {
                    "loli": 2,
                    "tiandandai": 2,
                    "tianmei": 1
                }
            }
        ]
    },
    {
        "text": "如果爱是一场战争，你认为最高级的战术是",
        "options": [
            {
                "text": "围城战：慢慢蚕食对方的意志，直到 Ta 完全属于我",
                "scores": {
                    "bingjiao": 2,
                    "fuhei": 2,
                    "meimo": 1
                }
            },
            {
                "text": "闪击战：用最热烈的姿态瞬间击穿对方的心防",
                "scores": {
                    "yuanqiniang": 2,
                    "fengpi": 2,
                    "lamei": 1
                }
            },
            {
                "text": "游击战：忽冷忽热，让对方在猜测中近乎发疯",
                "scores": {
                    "aojiao": 2,
                    "meihuo": 2,
                    "fuhei": 1
                }
            },
            {
                "text": "堡垒战：永不主动，等待那个足够强大的人来攻克我",
                "scores": {
                    "bingshan": 2,
                    "sanwu": 2,
                    "daxiaojie": 1
                }
            }
        ]
    },
    {
        "text": "图书馆里有一本没有文字、只有气味的书，你会闻到",
        "options": [
            {
                "text": "带着铁锈味的深红玫瑰香",
                "scores": {
                    "bingjiao": 2,
                    "meihuo": 2,
                    "fengpi": 1
                }
            },
            {
                "text": "冰冷的电子元件与机油味",
                "scores": {
                    "jixieji": 2,
                    "sanwu": 2,
                    "bingshan": 1
                }
            },
            {
                "text": "雨后森林里泥土与青草的清香",
                "scores": {
                    "senxi": 2,
                    "xianv": 2,
                    "gufeng": 1
                }
            },
            {
                "text": "老旧信纸上残余的淡淡墨痕",
                "scores": {
                    "wenyixi": 2,
                    "shunv": 2,
                    "gufeng": 1
                }
            }
        ]
    },
    {
        "text": "你如何看待\"绝对的孤独\"？",
        "options": [
            {
                "text": "它是最高级的奢侈品，让我灵魂自由",
                "scores": {
                    "bingshan": 2,
                    "sanwu": 2,
                    "nvwang": 1
                }
            },
            {
                "text": "它是致命的剧毒，我会不择手段逃离它",
                "scores": {
                    "yuanqiniang": 2,
                    "loli": 2,
                    "tianmei": 1
                }
            },
            {
                "text": "它是我思考如何统治世界的最佳时机",
                "scores": {
                    "fuhei": 2,
                    "meihuo": 2,
                    "daxiaojie": 1
                }
            },
            {
                "text": "它是大自然的一部分，像冬天的雪一样理所当然",
                "scores": {
                    "senxi": 2,
                    "xianv": 2,
                    "gufeng": 1
                }
            }
        ]
    },
    {
        "text": "如果能选择一种动物伴随你的一生，你选",
        "options": [
            {
                "text": "优雅但带毒的毒蛇",
                "scores": {
                    "dushe": 2,
                    "meihuo": 2,
                    "fuhei": 1
                }
            },
            {
                "text": "忠诚但偶尔会反咬一口的狼",
                "scores": {
                    "fengpi": 2,
                    "bingjiao": 2,
                    "yuanqiniang": 1
                }
            },
            {
                "text": "温顺但永远不知道在想什么的猫",
                "scores": {
                    "jinyu": 2,
                    "sanwu": 2,
                    "shouerniang": 1
                }
            },
            {
                "text": "永不疲倦、带给人希望的青鸟",
                "scores": {
                    "tianmei": 2,
                    "yuanqiniang": 2,
                    "xianv": 1
                }
            }
        ]
    },
    {
        "text": "当你在废墟中发现一个还在运转的仿生人",
        "options": [
            {
                "text": "修好它，赋予它性格，让它成为我的专属仆人",
                "scores": {
                    "nvwang": 2,
                    "daxiaojie": 2,
                    "meimo": 1
                }
            },
            {
                "text": "研究它的代码，寻找人类灵魂的本质",
                "scores": {
                    "jixieji": 2,
                    "wenyixi": 2,
                    "fuhei": 1
                }
            },
            {
                "text": "和它聊天，哪怕它只会重复同样的话",
                "scores": {
                    "loli": 2,
                    "tianmei": 2,
                    "ruanmei": 1
                }
            },
            {
                "text": "拆掉它，把有用的零件卖掉换取一晚的狂欢",
                "scores": {
                    "lamei": 2,
                    "yuanqiniang": 2,
                    "kujie": 1
                }
            }
        ]
    },
    {
        "text": "你认为\"纯真\"的底色应该是",
        "options": [
            {
                "text": "一张白纸，任由强者涂抹",
                "scores": {
                    "loli": 2,
                    "tianmei": 2,
                    "ruanmei": 1
                }
            },
            {
                "text": "一层薄冰，随时准备碎裂成利刃",
                "scores": {
                    "aojiao": 2,
                    "fengpi": 2,
                    "bingshan": 1
                }
            },
            {
                "text": "一汪深潭，清澈但深不可测",
                "scores": {
                    "sanwu": 2,
                    "fuhei": 2,
                    "meihuo": 1
                }
            },
            {
                "text": "一束阳光，温暖但让人无法触碰",
                "scores": {
                    "yuanqiniang": 2,
                    "xianv": 2,
                    "senxi": 1
                }
            }
        ]
    },
    {
        "text": "在权力的巅峰，你最想做的事情是",
        "options": [
            {
                "text": "让所有曾经轻视我的人都低头忏悔",
                "scores": {
                    "nvwang": 2,
                    "fengpi": 2,
                    "yujie": 1
                }
            },
            {
                "text": "制定一套完美的规则，让世界高效运行",
                "scores": {
                    "jixieji": 2,
                    "OL": 2,
                    "fuhei": 1
                }
            },
            {
                "text": "带着爱人远走高飞，寻找世外桃源",
                "scores": {
                    "senxi": 2,
                    "xianv": 2,
                    "gufeng": 1
                }
            },
            {
                "text": "把王座拆了，建成一个巨大的游乐场",
                "scores": {
                    "yuanqiniang": 2,
                    "tianmei": 2,
                    "lamei": 1
                }
            }
        ]
    }
];

// 随机抽取题目函数
// 使用 Fisher-Yates 洗牌算法提高随机性
function getRandomQuestions(count = 40) {
    // 创建数组副本
    const array = [...questions];
    
    // Fisher-Yates 洗牌算法
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    
    // 取前 count 道题
    return array.slice(0, count);
}

let userScores = {};
let currentQuestion = 0;
let currentQuestions = [];

function initScores() {
    userScores = {};
    Object.keys(traits).forEach(key => {
        userScores[key] = 0;
    });
}

function startQuiz() {
    initScores();
    // 随机抽取 40 道题目
    currentQuestions = getRandomQuestions(40);
    currentQuestion = 0;
    switchView('view-intro', 'view-quiz');
    renderQuestion();
}

function renderQuestion() {
    const q = currentQuestions[currentQuestion];
    // 移除题号显示
    document.getElementById('question-text').textContent = q.text.replace(/(第\d+题)/, '').trim();
    document.getElementById('question-counter').textContent = String(currentQuestion + 1).padStart(2, '0');
    document.getElementById('progress-fill').style.width = `${((currentQuestion + 1) / currentQuestions.length) * 100}%`;
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt.text;
        btn.addEventListener('click', () => selectOption(opt));
        container.appendChild(btn);
    });
}

function selectOption(option) {
    Object.entries(option.scores).forEach(([key, val]) => {
        if (userScores[key] !== undefined) userScores[key] += val;
    });
    currentQuestion++;
    if (currentQuestion < currentQuestions.length) renderQuestion();
    else showResult();
}

function showResult() {
    const resultCard = document.getElementById('main-result-card');
    resultCard.classList.add('revealed');
    const sorted = Object.entries(userScores).sort((a, b) => b[1] - a[1]);
    const winnerId = sorted[0][0];
    const persona = traits[winnerId];
    document.getElementById('result-name').textContent = persona.name;
    document.getElementById('result-desc').textContent = persona.description;
    document.getElementById('result-ending').textContent = persona.ending;
    applyImpactByArchetype(sorted[0][0]);
    loadImageByArchetype(sorted[0][0]);
}

const characterImages = {
    loli: 'images/loli.jpg',
    shaofu: 'images/shaofu.jpg',
    yujie: 'images/yujie.jpg',
    shaonv: 'images/shaonv.jpg',
    shunv: 'images/shunv.jpg',
    renqi: 'images/renqi.jpg',
    bingjiao: 'images/bingjiao.jpg',
    meihuo: 'images/meihuo.jpg',
    fengpi: 'images/fengpi.jpg',
    bingshan: 'images/bingshan.jpg',
    sanwu: 'images/sanwu.jpg',
    meimo: 'images/meimo.jpg',
    jinyu: 'images/jinyu.jpg',
    jixieji: 'images/jixieji.jpg',
    nvwang: 'images/nvwang.jpg',
    daxiaojie: 'images/daxiaojie.jpg',
    qianjin: 'images/qianjin.jpg',
    weiniang: 'images/weiniang.jpg',
    nanzhuangdalao: 'images/nanzhuangdalao.jpg',
    kujie: 'images/kujie.jpg',
    senxi: 'images/senxi.jpg',
    tianmei: 'images/tianmei.jpg',
    gufeng: 'images/gufeng.jpg',
    wenyixi: 'images/wenyixi.jpg',
    dushe: 'images/dushe.jpg',
    xuejie: 'images/xuejie.jpg',
    fuhei: 'images/fuhei.jpg',
    yundongxi: 'images/yundongxi.jpg',
    yuanqiniang: 'images/yuanqiniang.jpg',
    lamei: 'images/lamei.jpg',
    linjianvh: 'images/linjianvh.jpg',
    xuemei: 'images/xuemei.jpg',
    chunyu: 'images/chunyu.jpg',
    shouerniang: 'images/shouerniang.jpg',
    monv: 'images/monv.jpg',
    xianv: 'images/xianv.jpg',
    ruanmei: 'images/ruanmei.jpg',
    aojiao: 'images/aojiao.jpg',
    tiandandai: 'images/tiandandai.jpg',
    OL: 'images/OL.jpg'
};

async function loadImageByArchetype(winnerId) {
    const img = document.getElementById('result-image');
    const tip = document.getElementById('img-tip');
    
    img.style.display = 'none';
    tip.style.display = 'block';
    tip.textContent = '正在加载角色图片...';
    
    const imageUrl = characterImages[winnerId];
    
    if (!imageUrl) {
        tip.textContent = '未找到角色图片';
        console.error('No image found for:', winnerId);
        return;
    }
    
    img.onload = () => {
        img.style.display = 'block';
        tip.style.display = 'none';
    };
    
    img.onerror = () => {
        tip.textContent = '图片加载失败，请重试';
        console.error('Failed to load image for:', winnerId);
    };
    
    img.src = imageUrl;
}

function applyImpactByArchetype(winnerId) {
    const card = document.getElementById('main-result-card');
    card.className = 'card result-card';
    const impactMap = {
        loli: 'impact-electro',
        bingjiao: 'impact-blood', fengpi: 'impact-blood', meimo: 'impact-blood', meihuo: 'impact-blood',
        bingshan: 'impact-freeze', sanwu: 'impact-freeze', jinyu: 'impact-freeze', jixieji: 'impact-freeze',
        nvwang: 'impact-royal', daxiaojie: 'impact-royal', qianjin: 'impact-royal', yujie: 'impact-royal',
        weiniang: 'impact-glitch', nanzhuangdalao: 'impact-glitch', kujie: 'impact-glitch',
        senxi: 'impact-bloom', shaonv: 'impact-bloom', tianmei: 'impact-bloom', gufeng: 'impact-bloom',
        wenyixi: 'impact-ink', dushe: 'impact-ink', xuejie: 'impact-ink', fuhei: 'impact-ink',
        yundongxi: 'impact-vibrate', yuanqiniang: 'impact-vibrate', lamei: 'impact-vibrate',
        renqi: 'impact-warm', linjianvh: 'impact-warm', xuemei: 'impact-warm', chunyu: 'impact-warm', shaofu: 'impact-warm',
        monv: 'impact-mist', xianv: 'impact-mist', shouerniang: 'impact-mist',
        ruanmei: 'impact-warm', aojiao: 'impact-glitch', tiandandai: 'impact-bloom', OL: 'impact-royal'
    };
    const impactClass = impactMap[winnerId] || 'impact-glitch';
    card.classList.add(impactClass);
}

function restart() {
    currentQuestion = 0;
    initScores();
    const card = document.getElementById('main-result-card');
    card.className = 'card result-card';
    const img = document.getElementById('result-image');
    img.src = '';
    img.style.display = 'none';
    const tip = document.getElementById('img-tip');
    tip.style.display = 'block';
    tip.textContent = 'AI 画像生成中...';
    switchView('view-result', 'view-intro');
}

document.getElementById('btn-start').addEventListener('click', startQuiz);
document.getElementById('btn-restart').addEventListener('click', restart);
initScores();
