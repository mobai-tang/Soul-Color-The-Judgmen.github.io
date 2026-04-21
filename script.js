// 40 个人设定义
const traits = {
    loli: { name: "萝莉", description: "幼态纯真与原始保护欲的完美容器。", ending: "你的灵魂干净得让人心疼呢。" },
    shaofu: { name: "少妇", description: "成熟韵味与温柔气质的完美结合。", ending: "终于有人懂我的温柔了。" },
    yujie: { name: "御姐", description: "强大气场与绝对掌控力的化身。", ending: "不错，有资格站在我身边。" },
    shaonv: { name: "少女", description: "青春活力与无限可能的代名词。", ending: "和你在一起好开心！" },
    shunv: { name: "熟女", description: "岁月沉淀的智慧与魅力。", ending: "你懂得欣赏真正的美。" },
    renqi: { name: "人妻", description: "温柔贤惠与致命吸引力的结合体。", ending: "你选择了我，就是我的家人了。" },
    bingjiao: { name: "冰娇", description: "冷艳高贵与傲娇属性的矛盾体。", ending: "哼，算你有眼光。" },
    meihuo: { name: "魅惑", description: "天生尤物与致命诱惑的化身。", ending: "今晚，你是我的猎物。" },
    fengpi: { name: "疯批", description: "病娇疯狂与危险魅力的混合体。", ending: "永远永远在一起哦～" },
    bingshan: { name: "冰山", description: "冷漠疏离与禁欲气息的代表。", ending: "你...是第一个靠近我的人。" },
    sanwu: { name: "三无", description: "无口无心无表情的神秘少女。", ending: "......心跳，加速了。" },
    meimo: { name: "魅魔", description: "深渊诱惑与原始欲望的化身。", ending: "让你成为我最宠爱的祭品吧。" },
    jinyu: { name: "猫娘", description: "猫耳娘与宠物属性的完美结合。", ending: "喵～主人要给我小鱼干吗？" },
    jixieji: { name: "机械姬", description: "人工智能与机械美学的产物。", ending: "情感模块...过载中。" },
    nvwang: { name: "女王", description: "绝对支配与王者气场的统治者。", ending: "跪下，仰望你的王。" },
    daxiaojie: { name: "大小姐", description: "高贵优雅与傲娇属性的千金。", ending: "本小姐认可你了！" },
    qianjin: { name: "千金", description: "富家千金与娇生惯养的代表。", ending: "你想要什么，我都给你。" },
    weiniang: { name: "伪娘", description: "超越性别的美丽与诱惑。", ending: "我比女生还可爱吧？" },
    nanzhuangdalao: { name: "男装大佬", description: "帅气外表与女性内心的反差。", ending: "叫哥哥还是姐姐？" },
    kujie: { name: "库洛米", description: "暗黑可爱与小恶魔属性。", ending: "嘿嘿，被我整到了吧！" },
    senxi: { name: "森系", description: "自然清新与文艺气质的结合。", ending: "一起去看森林吧。" },
    tianmei: { name: "甜美", description: "甜度爆表与可爱属性的代表。", ending: "今天也是甜甜的一天！" },
    gufeng: { name: "古风", description: "古典韵味与传统美人的化身。", ending: "愿与君共赏明月。" },
    wenyixi: { name: "文艺系", description: "文艺青年与知性美的代表。", ending: "诗和远方，还有你。" },
    dushe: { name: "毒舌", description: "言辞犀利与傲娇属性的结合。", ending: "笨蛋...我才不是在关心你。" },
    xuejie: { name: "学姐", description: "温柔可靠与成熟魅力的前辈。", ending: "有什么烦恼都可以和我说哦。" },
    fuhei: { name: "腹黑", description: "表面温柔内心黑化的代表。", ending: "呵呵，真有趣呢。" },
    yundongxi: { name: "运动系", description: "阳光活力与运动神经发达。", ending: "一起去跑步吧！" },
    yuanqiniang: { name: "元气娘", description: "永远充满活力的开心果。", ending: "今天也要加油哦！" },
    lamei: { name: "辣妹", description: "时尚前卫与性感魅力的化身。", ending: "今晚去哪玩？" },
    linjianvh: { name: "邻家 VH", description: "邻家女孩与青梅竹马的感觉。", ending: "从小一起长大的感觉真好。" },
    xuemei: { name: "学妹", description: "青春可爱与后辈属性的代表。", ending: "前辈，请教教我！" },
    chunyu: { name: "春雨", description: "温柔细腻与润物无声的气质。", ending: "像春雨一样滋润你的心。" },
    shouerniang: { name: "受气娘", description: "软弱可欺与惹人怜爱的属性。", ending: "呜...不要欺负我..." },
    monv: { name: "魔女", description: "神秘魔法与危险魅力的结合。", ending: "想要什么魔法？我都可以给你。" },
    xianv: { name: "仙女", description: "超凡脱俗与不食人间烟火。", ending: "凡尘俗世，与我无关。" },
    ruanmei: { name: "软妹", description: "柔软无害与依赖感的极致体现。", ending: "呜……那我们抱在一起就不会冷了！" },
    aojiao: { name: "傲娇", description: "口是心非与别扭可爱的代表。", ending: "才、才不是特意等你的！" },
    tiandandai: { name: "天然呆", description: "天然呆萌与无意识卖萌属性。", ending: "诶？我做了什么奇怪的事吗？" },
    OL: { name: "OL", description: "职场女性与干练气质的代表。", ending: "工作结束后，一起喝一杯？" }
};

// 40 道心理测试题目
const questions = [
    // 原始 10 道题目
    {
        text: "在镜子里看到另一个性别的自己，你的第一反应是？",
        options: [
            { text: "试图触碰镜面，感叹这种跨越界限的美", scores: { weiniang: 2, nanzhuangdalao: 2, fuhei: 1 } },
            { text: "面无表情地分析这是否是某种感官干扰", scores: { jixieji: 2, sanwu: 2, bingshan: 1 } },
            { text: "脸红心跳，立刻寻找遮盖物", scores: { loli: 2, tianmei: 2, aojiao: 1 } },
            { text: "露出坏笑，已经在脑补如何利用这个新身份", scores: { meimo: 2, fengpi: 2, meihuo: 1 } }
        ]
    },
    {
        text: "手中握着一颗能实现愿望但代价未知的禁果，你会？",
        options: [
            { text: "毫不犹豫地吞下，无论代价都要得到想要的", scores: { fengpi: 2, meimo: 2, nvwang: 1 } },
            { text: "谨慎研究，试图找出代价是什么", scores: { jixieji: 2, fuhei: 2, wenyixi: 1 } },
            { text: "交给信任的人决定", scores: { loli: 2, ruanmei: 2, shouerniang: 1 } },
            { text: "直接扔掉，不需要这种危险的东西", scores: { bingshan: 2, sanwu: 2, OL: 1 } }
        ]
    },
    {
        text: "深夜独自在家，突然听到奇怪的声音，你会？",
        options: [
            { text: "兴奋地出去查看，说不定是有趣的事", scores: { fengpi: 2, yuanqiniang: 2, yundongxi: 1 } },
            { text: "冷静分析声音来源，制定应对方案", scores: { jixieji: 2, nvwang: 2, daxiaojie: 1 } },
            { text: "躲进被窝，假装什么都没发生", scores: { loli: 2, ruanmei: 2, tianmei: 1 } },
            { text: "打开所有灯，播放欢快的音乐", scores: { shaonv: 2, senxi: 2, xuemei: 1 } }
        ]
    },
    {
        text: "如果可以选择超能力，你希望是？",
        options: [
            { text: "读心术，看透所有人的想法", scores: { fuhei: 2, meihuo: 2, nvwang: 1 } },
            { text: "时间停止，为所欲为", scores: { fengpi: 2, meimo: 2, kujie: 1 } },
            { text: "飞行能力，自由自在地翱翔", scores: { xianv: 2, senxi: 2, gufeng: 1 } },
            { text: "治愈魔法，帮助需要的人", scores: { renqi: 2, xuejie: 2, shunv: 1 } }
        ]
    },
    {
        text: "在暴雨夜独自在家，你会？",
        options: [
            { text: "裹着毯子喝热可可，听雨声入眠", scores: { ruanmei: 2, loli: 2, tianmei: 1 } },
            { text: "站在窗前凝视闪电，感受自然的力量", scores: { fengpi: 2, bingshan: 2, wenyixi: 1 } },
            { text: "打开所有灯，播放最吵闹的音乐", scores: { yuanqiniang: 2, yundongxi: 2, lamei: 1 } },
            { text: "在黑暗中静坐，思考人生的意义", scores: { sanwu: 2, monv: 2, fuhei: 1 } }
        ]
    },
    {
        text: "有人向你表白，但你不喜欢 TA，你会？",
        options: [
            { text: "直接拒绝，不拖泥带水", scores: { nvwang: 2, yujie: 2, OL: 1 } },
            { text: "委婉拒绝，但保持朋友关系", scores: { xuejie: 2, renqi: 2, shunv: 1 } },
            { text: "慌乱逃避，不知道如何回应", scores: { loli: 2, ruanmei: 2, shouerniang: 1 } },
            { text: "享受被喜欢的感觉，但不给明确答复", scores: { meihuo: 2, fuhei: 2, daxiaojie: 1 } }
        ]
    },
    {
        text: "如果必须选择一种惩罚，你选择？",
        options: [
            { text: "雷电洗礼，感受电流穿过身体", scores: { fengpi: 2, meimo: 2, yundongxi: 1 } },
            { text: "冰封囚禁，在绝对零度中沉睡", scores: { bingshan: 2, sanwu: 2, xianv: 1 } },
            { text: "精神控制，失去自我意识", scores: { jixieji: 2, nvwang: 2, meihuo: 1 } },
            { text: "孤独终老，永远独自一人", scores: { wenyixi: 2, monv: 2, fuhei: 1 } }
        ]
    },
    {
        text: "你理想中的约会是？",
        options: [
            { text: "游乐园，尽情玩耍大笑", scores: { shaonv: 2, tianmei: 2, yuanqiniang: 1 } },
            { text: "咖啡厅，安静地聊天", scores: { xuejie: 2, wenyixi: 2, OL: 1 } },
            { text: "密室逃脱，刺激的冒险", scores: { fengpi: 2, meimo: 2, kujie: 1 } },
            { text: "家里看电影，温馨地依偎", scores: { renqi: 2, ruanmei: 2, shunv: 1 } }
        ]
    },
    {
        text: "如果有人伤害了你在乎的人，你会？",
        options: [
            { text: "立即报复，让 TA 付出代价", scores: { fengpi: 2, nvwang: 2, meimo: 1 } },
            { text: "冷静分析，制定完美的复仇计划", scores: { fuhei: 2, jixieji: 2, monv: 1 } },
            { text: "保护在乎的人，远离伤害", scores: { yujie: 2, xuejie: 2, renqi: 1 } },
            { text: "哭泣求助，不知道该怎么办", scores: { loli: 2, ruanmei: 2, shouerniang: 1 } }
        ]
    },
    {
        text: "你最喜欢的颜色是？",
        options: [
            { text: "粉色，甜美可爱", scores: { loli: 2, tianmei: 2, shaonv: 1 } },
            { text: "黑色，神秘高贵", scores: { meimo: 2, nvwang: 2, fengpi: 1 } },
            { text: "白色，纯洁无瑕", scores: { xianv: 2, bingshan: 2, sanwu: 1 } },
            { text: "红色，热情似火", scores: { meihuo: 2, lamei: 2, yundongxi: 1 } }
        ]
    },
    // 新增 30 道题目
    {
        text: "走在街上，看到一只流浪猫，你会？",
        options: [
            { text: "立刻上前抚摸，想带回家养", scores: { loli: 2, ruanmei: 2, tianmei: 1 } },
            { text: "远远观察，觉得它很可怜", scores: { senxi: 2, wenyixi: 2, gufeng: 1 } },
            { text: "拍张照片发朋友圈", scores: { yuanqiniang: 2, lamei: 2, xuemei: 1 } },
            { text: "思考它为什么会流浪", scores: { fuhei: 2, monv: 2, jixieji: 1 } }
        ]
    },
    {
        text: "朋友送你一份礼物，打开后发现很丑，你会？",
        options: [
            { text: "当场表现出失望", scores: { fengpi: 2, aojiao: 2, daxiaojie: 1 } },
            { text: "强颜欢笑说喜欢", scores: { renqi: 2, xuejie: 2, shunv: 1 } },
            { text: "默默收下但不会用", scores: { bingshan: 2, sanwu: 2, OL: 1 } },
            { text: "开玩笑说这是抽象艺术", scores: { meihuo: 2, fuhei: 2, kujie: 1 } }
        ]
    },
    {
        text: "考试/工作失败后，你第一反应是？",
        options: [
            { text: "大哭一场，发泄情绪", scores: { loli: 2, ruanmei: 2, shouerniang: 1 } },
            { text: "冷静分析失败原因", scores: { jixieji: 2, nvwang: 2, yujie: 1 } },
            { text: "找朋友倾诉求安慰", scores: { yuanqiniang: 2, xuejie: 2, renqi: 1 } },
            { text: "发誓一定要报复回去", scores: { fengpi: 2, meimo: 2, fuhei: 1 } }
        ]
    },
    {
        text: "喜欢的人有了对象，你会？",
        options: [
            { text: "祝福他们，默默退出", scores: { senxi: 2, gufeng: 2, wenyixi: 1 } },
            { text: "装作不在乎，内心却在滴血", scores: { aojiao: 2, tianmei: 2, shaonv: 1 } },
            { text: "想办法拆散他们", scores: { meimo: 2, fengpi: 2, meihuo: 1 } },
            { text: "提升自己，让他后悔", scores: { nvwang: 2, yujie: 2, OL: 1 } }
        ]
    },
    {
        text: "被陌生人搭讪，你的反应是？",
        options: [
            { text: "害羞地拒绝，快速离开", scores: { loli: 2, ruanmei: 2, shouerniang: 1 } },
            { text: "礼貌地回应，保持距离", scores: { xuejie: 2, renqi: 2, shunv: 1 } },
            { text: "觉得有趣，陪 TA 聊天", scores: { meihuo: 2, lamei: 2, yuanqiniang: 1 } },
            { text: "冷冷地无视，直接走开", scores: { bingshan: 2, sanwu: 2, yujie: 1 } }
        ]
    },
    {
        text: "如果可以选择，你希望生活在？",
        options: [
            { text: "古代，体验宫廷生活", scores: { gufeng: 2, nvwang: 2, daxiaojie: 1 } },
            { text: "现代都市，享受便利", scores: { OL: 2, lamei: 2, yujie: 1 } },
            { text: "未来世界，体验高科技", scores: { jixieji: 2, sanwu: 2, monv: 1 } },
            { text: "童话世界，永远长不大", scores: { loli: 2, tianmei: 2, shaonv: 1 } }
        ]
    },
    {
        text: "看到别人秀恩爱，你会？",
        options: [
            { text: "羡慕嫉妒恨，想要同款", scores: { loli: 2, ruanmei: 2, tianmei: 1 } },
            { text: "不屑一顾，觉得幼稚", scores: { bingshan: 2, yujie: 2, OL: 1 } },
            { text: "真心祝福，为他们开心", scores: { renqi: 2, xuejie: 2, senxi: 1 } },
            { text: "思考什么时候轮到自己", scores: { fuhei: 2, meimo: 2, monv: 1 } }
        ]
    },
    {
        text: "被老板/老师批评后，你会？",
        options: [
            { text: "委屈地哭出来", scores: { loli: 2, ruanmei: 2, shouerniang: 1 } },
            { text: "虚心接受，努力改进", scores: { xuejie: 2, OL: 2, yujie: 1 } },
            { text: "表面接受，内心不服", scores: { aojiao: 2, fuhei: 2, meihuo: 1 } },
            { text: "无所谓，左耳进右耳出", scores: { sanwu: 2, bingshan: 2, yundongxi: 1 } }
        ]
    },
    {
        text: "你最害怕什么？",
        options: [
            { text: "孤独终老，无人陪伴", scores: { loli: 2, ruanmei: 2, renqi: 1 } },
            { text: "失去自由，被束缚", scores: { yundongxi: 2, nvwang: 2, yujie: 1 } },
            { text: "被背叛，被欺骗", scores: { fengpi: 2, meimo: 2, fuhei: 1 } },
            { text: "变得平庸，碌碌无为", scores: { daxiaojie: 2, qianjin: 2, OL: 1 } }
        ]
    },
    {
        text: "遇到难题时，你习惯？",
        options: [
            { text: "求助他人，寻求帮助", scores: { loli: 2, ruanmei: 2, xuemei: 1 } },
            { text: "独立思考，自己解决", scores: { bingshan: 2, sanwu: 2, jixieji: 1 } },
            { text: "上网搜索，找答案", scores: { wenyixi: 2, senxi: 2, OL: 1 } },
            { text: "直接放弃，不纠结", scores: { yuanqiniang: 2, tianmei: 2, yundongxi: 1 } }
        ]
    },
    {
        text: "你理想中的爱情是？",
        options: [
            { text: "轰轰烈烈，生死相许", scores: { fengpi: 2, meimo: 2, meihuo: 1 } },
            { text: "平平淡淡，细水长流", scores: { renqi: 2, shunv: 2, xuejie: 1 } },
            { text: "互相尊重，彼此独立", scores: { nvwang: 2, yujie: 2, OL: 1 } },
            { text: "甜蜜浪漫，充满惊喜", scores: { loli: 2, tianmei: 2, shaonv: 1 } }
        ]
    },
    {
        text: "被人误解时，你会？",
        options: [
            { text: "极力解释，证明清白", scores: { loli: 2, ruanmei: 2, tianmei: 1 } },
            { text: "懒得解释，清者自清", scores: { bingshan: 2, sanwu: 2, yujie: 1 } },
            { text: "以牙还牙，让 TA 后悔", scores: { fengpi: 2, meimo: 2, fuhei: 1 } },
            { text: "找朋友吐槽，发泄情绪", scores: { yuanqiniang: 2, xuejie: 2, lamei: 1 } }
        ]
    },
    {
        text: "你最看重朋友的什么品质？",
        options: [
            { text: "忠诚，不会背叛", scores: { fengpi: 2, meimo: 2, nvwang: 1 } },
            { text: "真诚，不虚伪", scores: { renqi: 2, xuejie: 2, senxi: 1 } },
            { text: "有趣，能带来快乐", scores: { yuanqiniang: 2, tianmei: 2, kujie: 1 } },
            { text: "强大，能帮助自己", scores: { yujie: 2, OL: 2, daxiaojie: 1 } }
        ]
    },
    {
        text: "周末休息，你更喜欢？",
        options: [
            { text: "宅在家里，追剧打游戏", scores: { loli: 2, ruanmei: 2, sanwu: 1 } },
            { text: "约朋友出去玩", scores: { yuanqiniang: 2, yundongxi: 2, lamei: 1 } },
            { text: "学习充电，提升自己", scores: { OL: 2, yujie: 2, wenyixi: 1 } },
            { text: "一个人去安静的地方", scores: { bingshan: 2, senxi: 2, gufeng: 1 } }
        ]
    },
    {
        text: "看到有人插队，你会？",
        options: [
            { text: "上前制止，据理力争", scores: { nvwang: 2, yujie: 2, daxiaojie: 1 } },
            { text: "心里不爽，但不敢说话", scores: { loli: 2, ruanmei: 2, shouerniang: 1 } },
            { text: "无视，反正与我无关", scores: { bingshan: 2, sanwu: 2, OL: 1 } },
            { text: "拍照发微博曝光", scores: { yuanqiniang: 2, lamei: 2, kujie: 1 } }
        ]
    },
    {
        text: "你认为自己最大的优点是？",
        options: [
            { text: "善良，总是为他人着想", scores: { renqi: 2, ruanmei: 2, tianmei: 1 } },
            { text: "聪明，思维敏捷", scores: { jixieji: 2, fuhei: 2, yujie: 1 } },
            { text: "坚强，不轻易放弃", scores: { nvwang: 2, yundongxi: 2, OL: 1 } },
            { text: "有趣，能逗人开心", scores: { yuanqiniang: 2, tianmei: 2, kujie: 1 } }
        ]
    },
    {
        text: "收到异性的礼物，你会？",
        options: [
            { text: "开心收下，反复把玩", scores: { loli: 2, tianmei: 2, shaonv: 1 } },
            { text: "思考对方的意图", scores: { fuhei: 2, jixieji: 2, monv: 1 } },
            { text: "礼貌拒绝，不想欠人情", scores: { bingshan: 2, yujie: 2, OL: 1 } },
            { text: "立刻发朋友圈炫耀", scores: { meihuo: 2, lamei: 2, daxiaojie: 1 } }
        ]
    },
    {
        text: "你最不能容忍的行为是？",
        options: [
            { text: "欺骗和背叛", scores: { fengpi: 2, meimo: 2, nvwang: 1 } },
            { text: "不尊重和傲慢", scores: { yujie: 2, daxiaojie: 2, qianjin: 1 } },
            { text: "懒惰和不求上进", scores: { OL: 2, yundongxi: 2, xuejie: 1 } },
            { text: "虚伪和做作", scores: { bingshan: 2, sanwu: 2, wenyixi: 1 } }
        ]
    },
    {
        text: "如果有时光机，你想回到？",
        options: [
            { text: "童年，无忧无虑的时光", scores: { loli: 2, tianmei: 2, shaonv: 1 } },
            { text: "古代，体验历史", scores: { gufeng: 2, nvwang: 2, daxiaojie: 1 } },
            { text: "未来，看看科技发展", scores: { jixieji: 2, sanwu: 2, monv: 1 } },
            { text: "不想回去，珍惜现在", scores: { renqi: 2, xuejie: 2, OL: 1 } }
        ]
    },
    {
        text: "被人说幼稚，你会？",
        options: [
            { text: "生气，觉得被侮辱", scores: { yujie: 2, nvwang: 2, OL: 1 } },
            { text: "无所谓，幼稚很可爱", scores: { loli: 2, tianmei: 2, yuanqiniang: 1 } },
            { text: "反思自己，努力成熟", scores: { renqi: 2, xuejie: 2, shunv: 1 } },
            { text: "反讽对方老气横秋", scores: { fuhei: 2, meihuo: 2, kujie: 1 } }
        ]
    },
    {
        text: "你希望给别人留下什么印象？",
        options: [
            { text: "可爱，让人想保护", scores: { loli: 2, tianmei: 2, ruanmei: 1 } },
            { text: "强大，让人敬畏", scores: { nvwang: 2, yujie: 2, fengpi: 1 } },
            { text: "温柔，让人亲近", scores: { renqi: 2, xuejie: 2, senxi: 1 } },
            { text: "神秘，让人好奇", scores: { meimo: 2, monv: 2, sanwu: 1 } }
        ]
    },
    {
        text: "面对压力，你会？",
        options: [
            { text: "逃避，暂时放松", scores: { loli: 2, tianmei: 2, yundongxi: 1 } },
            { text: "硬抗，绝不认输", scores: { nvwang: 2, yujie: 2, yundongxi: 1 } },
            { text: "寻求帮助，分担压力", scores: { renqi: 2, xuejie: 2, ruanmei: 1 } },
            { text: "分析原因，制定计划", scores: { jixieji: 2, OL: 2, fuhei: 1 } }
        ]
    },
    {
        text: "你认为什么是幸福？",
        options: [
            { text: "和爱的人在一起", scores: { renqi: 2, ruanmei: 2, tianmei: 1 } },
            { text: "事业成功，被人认可", scores: { nvwang: 2, yujie: 2, OL: 1 } },
            { text: "自由自在，无拘无束", scores: { yundongxi: 2, senxi: 2, gufeng: 1 } },
            { text: "拥有权力和财富", scores: { daxiaojie: 2, qianjin: 2, meimo: 1 } }
        ]
    },
    {
        text: "被人跟踪时，你会？",
        options: [
            { text: "害怕，赶紧逃跑求助", scores: { loli: 2, ruanmei: 2, shouerniang: 1 } },
            { text: "冷静，想办法甩掉", scores: { jixieji: 2, yujie: 2, OL: 1 } },
            { text: "转身面对，看是谁", scores: { fengpi: 2, meimo: 2, nvwang: 1 } },
            { text: "报警，让警察处理", scores: { daxiaojie: 2, qianjin: 2, xuejie: 1 } }
        ]
    },
    {
        text: "你最喜欢的季节是？",
        options: [
            { text: "春天，万物复苏", scores: { senxi: 2, tianmei: 2, gufeng: 1 } },
            { text: "夏天，热情似火", scores: { yundongxi: 2, lamei: 2, yuanqiniang: 1 } },
            { text: "秋天，诗意浪漫", scores: { wenyixi: 2, xuejie: 2, senxi: 1 } },
            { text: "冬天，纯净安静", scores: { bingshan: 2, sanwu: 2, xianv: 1 } }
        ]
    },
    {
        text: "看到有人哭泣，你会？",
        options: [
            { text: "跟着难过，想安慰", scores: { renqi: 2, ruanmei: 2, tianmei: 1 } },
            { text: "无动于衷，事不关己", scores: { bingshan: 2, sanwu: 2, jixieji: 1 } },
            { text: "觉得矫情，不理解", scores: { yujie: 2, nvwang: 2, OL: 1 } },
            { text: "好奇发生了什么", scores: { fuhei: 2, monv: 2, meimo: 1 } }
        ]
    },
    {
        text: "你最想拥有的魔法是？",
        options: [
            { text: "隐身术，偷偷观察别人", scores: { fuhei: 2, meimo: 2, sanwu: 1 } },
            { text: "变身术，变成任何人", scores: { weiniang: 2, nanzhuangdalao: 2, meihuo: 1 } },
            { text: "预知未来，避开危险", scores: { jixieji: 2, monv: 2, yujie: 1 } },
            { text: "治愈术，帮助他人", scores: { renqi: 2, xuejie: 2, tianmei: 1 } }
        ]
    },
    {
        text: "被人说胖了，你会？",
        options: [
            { text: "立刻减肥，证明给对方看", scores: { yujie: 2, nvwang: 2, yundongxi: 1 } },
            { text: "无所谓，健康就好", scores: { senxi: 2, xuejie: 2, renqi: 1 } },
            { text: "生气，拉黑对方", scores: { fengpi: 2, aojiao: 2, daxiaojie: 1 } },
            { text: "自嘲，幽默化解", scores: { yuanqiniang: 2, tianmei: 2, kujie: 1 } }
        ]
    },
    {
        text: "你认为什么是美？",
        options: [
            { text: "外表精致，妆容完美", scores: { meihuo: 2, lamei: 2, daxiaojie: 1 } },
            { text: "内心善良，品德高尚", scores: { renqi: 2, xuejie: 2, senxi: 1 } },
            { text: "独特个性，与众不同", scores: { fengpi: 2, meimo: 2, kujie: 1 } },
            { text: "自然真实，不做作", scores: { gufeng: 2, tianmei: 2, yundongxi: 1 } }
        ]
    },
    {
        text: "如果明天是世界末日，你会？",
        options: [
            { text: "和家人爱人在一起", scores: { renqi: 2, loli: 2, ruanmei: 1 } },
            { text: "疯狂购物，享受最后时光", scores: { daxiaojie: 2, qianjin: 2, lamei: 1 } },
            { text: "完成未了的心愿", scores: { wenyixi: 2, senxi: 2, gufeng: 1 } },
            { text: "无所谓，反正都要死", scores: { sanwu: 2, bingshan: 2, fengpi: 1 } }
        ]
    }
];

// 游戏状态
let currentQuestion = 0;
let userScores = {};
let shuffledQuestions = [];

// 初始化分数
function initScores() {
    userScores = {};
    Object.keys(traits).forEach(key => {
        userScores[key] = 0;
    });
}

// Fisher-Yates 洗牌算法 - 高随机性
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// 随机抽取题目
function getRandomQuestions(count) {
    const shuffled = shuffleArray(questions);
    return shuffled.slice(0, Math.min(count, questions.length));
}

// 视图切换函数
function switchView(hideView, showView) {
    document.getElementById(hideView).classList.remove('active');
    document.getElementById(showView).classList.add('active');
}

// 开始测试
function startQuiz() {
    currentQuestion = 0;
    initScores();
    // 从 40 道题目中随机抽取 40 道（全部题目，随机顺序）
    shuffledQuestions = getRandomQuestions(40);
    switchView('view-intro', 'view-quiz');
    renderQuestion();
}

// 渲染题目
function renderQuestion() {
    const q = shuffledQuestions[currentQuestion];
    document.getElementById('question-counter').textContent = String(currentQuestion + 1).padStart(2, '0');
    document.getElementById('question-text').textContent = q.text;
    
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt.text;
        btn.onclick = () => selectOption(opt);
        container.appendChild(btn);
    });
    
    const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
}

// 选择选项
function selectOption(option) {
    Object.entries(option.scores).forEach(([key, value]) => {
        userScores[key] = (userScores[key] || 0) + value;
    });
    
    currentQuestion++;
    if (currentQuestion < shuffledQuestions.length) {
        renderQuestion();
    } else {
        showResult();
    }
}

// 显示结果
function showResult() {
    const sorted = Object.entries(userScores).sort((a, b) => b[1] - a[1]);
    const winnerId = sorted[0][0];
    const persona = traits[winnerId];
    
    setTimeout(() => {
        document.getElementById('result-name').textContent = persona.name;
        document.getElementById('result-desc').textContent = persona.description;
        document.getElementById('result-ending').textContent = persona.ending;
        applyImpactByArchetype(winnerId);
        loadImageByArchetype(winnerId);
    }, 500);
    
    switchView('view-quiz', 'view-result');
}

// 角色图片映射
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

// 加载角色图片
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

// 应用动画效果
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

// 重新开始
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

// 绑定事件
document.getElementById('btn-start').addEventListener('click', startQuiz);
document.getElementById('btn-restart').addEventListener('click', restart);
initScores();
