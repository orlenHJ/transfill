const SENTENCES = [
  // ========== BEGINNER (初级) ==========
  {
    id: 1,
    chinese: "我每天早上七点起床。",
    english: "I get up at seven every morning.",
    level: "beginner"
  },
  {
    id: 2,
    chinese: "你叫什么名字？",
    english: "What is your name?",
    level: "beginner"
  },
  {
    id: 3,
    chinese: "今天天气很好。",
    english: "The weather is very nice today.",
    level: "beginner"
  },
  {
    id: 4,
    chinese: "我喜欢喝咖啡。",
    english: "I like drinking coffee.",
    level: "beginner"
  },
  {
    id: 5,
    chinese: "她是我的朋友。",
    english: "She is my friend.",
    level: "beginner"
  },
  {
    id: 6,
    chinese: "请关上门。",
    english: "Please close the door.",
    level: "beginner"
  },
  {
    id: 7,
    chinese: "我住在北京。",
    english: "I live in Beijing.",
    level: "beginner"
  },
  {
    id: 8,
    chinese: "现在几点了？",
    english: "What time is it now?",
    level: "beginner"
  },
  {
    id: 9,
    chinese: "这个多少钱？",
    english: "How much is this?",
    level: "beginner"
  },
  {
    id: 10,
    chinese: "我有两个孩子。",
    english: "I have two children.",
    level: "beginner"
  },
  {
    id: 11,
    chinese: "他在学校工作。",
    english: "He works at a school.",
    level: "beginner"
  },
  {
    id: 12,
    chinese: "我很累了。",
    english: "I am very tired.",
    level: "beginner"
  },
  {
    id: 13,
    chinese: "你会说英语吗？",
    english: "Can you speak English?",
    level: "beginner"
  },
  {
    id: 14,
    chinese: "我想要一杯水。",
    english: "I want a glass of water.",
    level: "beginner"
  },
  {
    id: 15,
    chinese: "明天是星期一。",
    english: "Tomorrow is Monday.",
    level: "beginner"
  },
  {
    id: 16,
    chinese: "我的手机在桌子上。",
    english: "My phone is on the table.",
    level: "beginner"
  },
  {
    id: 17,
    chinese: "你饿了吗？",
    english: "Are you hungry?",
    level: "beginner"
  },
  {
    id: 18,
    chinese: "我不喜欢下雨天。",
    english: "I do not like rainy days.",
    level: "beginner"
  },
  {
    id: 19,
    chinese: "她正在看书。",
    english: "She is reading a book.",
    level: "beginner"
  },
  {
    id: 20,
    chinese: "我们去吃饭吧。",
    english: "Let us go eat.",
    level: "beginner"
  },
  {
    id: 21,
    chinese: "公园很漂亮。",
    english: "The park is very beautiful.",
    level: "beginner"
  },
  {
    id: 22,
    chinese: "我每天走路去上班。",
    english: "I walk to work every day.",
    level: "beginner"
  },
  {
    id: 23,
    chinese: "这是我第一次来这里。",
    english: "This is my first time here.",
    level: "beginner"
  },
  {
    id: 24,
    chinese: "你喜欢什么颜色？",
    english: "What color do you like?",
    level: "beginner"
  },
  {
    id: 25,
    chinese: "我的家人都很健康。",
    english: "My family are all healthy.",
    level: "beginner"
  },
  {
    id: 26,
    chinese: "请帮我拍张照片。",
    english: "Please take a photo for me.",
    level: "beginner"
  },
  {
    id: 27,
    chinese: "超市在那边。",
    english: "The supermarket is over there.",
    level: "beginner"
  },
  {
    id: 28,
    chinese: "我下午有个会议。",
    english: "I have a meeting this afternoon.",
    level: "beginner"
  },
  {
    id: 29,
    chinese: "他跑得很快。",
    english: "He runs very fast.",
    level: "beginner"
  },
  {
    id: 30,
    chinese: "谢谢你的帮助。",
    english: "Thank you for your help.",
    level: "beginner"
  },
  {
    id: 31,
    chinese: "我昨天去了超市。",
    english: "I went to the supermarket yesterday.",
    level: "beginner"
  },
  {
    id: 32,
    chinese: "你住在哪里？",
    english: "Where do you live?",
    level: "beginner"
  },
  {
    id: 33,
    chinese: "我喜欢听音乐。",
    english: "I like listening to music.",
    level: "beginner"
  },
  {
    id: 34,
    chinese: "今天很热。",
    english: "It is very hot today.",
    level: "beginner"
  },
  {
    id: 35,
    chinese: "我需要买一些水果。",
    english: "I need to buy some fruit.",
    level: "beginner"
  },
  // ========== INTERMEDIATE (中级) ==========
  {
    id: 36,
    chinese: "如果明天下雨，我就待在家里。",
    english: "If it rains tomorrow, I will stay at home.",
    level: "intermediate"
  },
  {
    id: 37,
    chinese: "他已经在这家公司工作了五年。",
    english: "He has worked at this company for five years.",
    level: "intermediate"
  },
  {
    id: 38,
    chinese: "你能告诉我去火车站怎么走吗？",
    english: "Could you tell me how to get to the train station?",
    level: "intermediate"
  },
  {
    id: 39,
    chinese: "我正在考虑换一份工作。",
    english: "I am thinking about changing my job.",
    level: "intermediate"
  },
  {
    id: 40,
    chinese: "这部电影比那部好看多了。",
    english: "This movie is much better than that one.",
    level: "intermediate"
  },
  {
    id: 41,
    chinese: "她建议我们早点出发。",
    english: "She suggested that we leave early.",
    level: "intermediate"
  },
  {
    id: 42,
    chinese: "我忘了带钱包出门。",
    english: "I forgot to bring my wallet when I went out.",
    level: "intermediate"
  },
  {
    id: 43,
    chinese: "你应该多锻炼身体。",
    english: "You should exercise more often.",
    level: "intermediate"
  },
  {
    id: 44,
    chinese: "我小时候经常去那个公园玩。",
    english: "I used to play in that park when I was a child.",
    level: "intermediate"
  },
  {
    id: 45,
    chinese: "学好英语需要大量的练习。",
    english: "Learning English well requires a lot of practice.",
    level: "intermediate"
  },
  {
    id: 46,
    chinese: "请问这个座位有人吗？",
    english: "Excuse me, is this seat taken?",
    level: "intermediate"
  },
  {
    id: 47,
    chinese: "我对这个话题很感兴趣。",
    english: "I am very interested in this topic.",
    level: "intermediate"
  },
  {
    id: 48,
    chinese: "他们正在讨论明天的计划。",
    english: "They are discussing the plan for tomorrow.",
    level: "intermediate"
  },
  {
    id: 49,
    chinese: "这家餐厅的菜味道不错。",
    english: "The food at this restaurant tastes good.",
    level: "intermediate"
  },
  {
    id: 50,
    chinese: "我希望你能来参加我的生日聚会。",
    english: "I hope you can come to my birthday party.",
    level: "intermediate"
  },
  {
    id: 51,
    chinese: "他似乎对这个结果不太满意。",
    english: "He does not seem very satisfied with the result.",
    level: "intermediate"
  },
  {
    id: 52,
    chinese: "我们需要在下周五之前完成这个项目。",
    english: "We need to finish this project before next Friday.",
    level: "intermediate"
  },
  {
    id: 53,
    chinese: "你有没有什么好的建议？",
    english: "Do you have any good suggestions?",
    level: "intermediate"
  },
  {
    id: 54,
    chinese: "她一边听音乐一边做作业。",
    english: "She listens to music while doing her homework.",
    level: "intermediate"
  },
  {
    id: 55,
    chinese: "我刚才没听清你说什么。",
    english: "I did not hear what you said just now.",
    level: "intermediate"
  },
  {
    id: 56,
    chinese: "这件衣服打折后很便宜。",
    english: "This piece of clothing is very cheap after the discount.",
    level: "intermediate"
  },
  {
    id: 57,
    chinese: "我们已经约好了周末一起吃饭。",
    english: "We have already arranged to have dinner together this weekend.",
    level: "intermediate"
  },
  {
    id: 58,
    chinese: "你最好带把伞以防下雨。",
    english: "You had better bring an umbrella in case it rains.",
    level: "intermediate"
  },
  {
    id: 59,
    chinese: "我花了一个小时才找到那个地方。",
    english: "It took me an hour to find that place.",
    level: "intermediate"
  },
  {
    id: 60,
    chinese: "他被那家公司录用了。",
    english: "He was hired by that company.",
    level: "intermediate"
  },
  {
    id: 61,
    chinese: "我们还没决定去哪里度假。",
    english: "We have not decided where to go on vacation yet.",
    level: "intermediate"
  },
  {
    id: 62,
    chinese: "如果我是你，我会接受那份工作。",
    english: "If I were you, I would accept that job.",
    level: "intermediate"
  },
  {
    id: 63,
    chinese: "她对自己的表现很满意。",
    english: "She is very satisfied with her performance.",
    level: "intermediate"
  },
  {
    id: 64,
    chinese: "不好意思，我迟到了。",
    english: "I am sorry for being late.",
    level: "intermediate"
  },
  {
    id: 65,
    chinese: "你能帮我检查一下这篇文章吗？",
    english: "Can you help me check this article?",
    level: "intermediate"
  },
  {
    id: 66,
    chinese: "我们需要更多的时间来准备。",
    english: "We need more time to prepare.",
    level: "intermediate"
  },
  {
    id: 67,
    chinese: "他总是第一个到办公室的人。",
    english: "He is always the first one to arrive at the office.",
    level: "intermediate"
  },
  {
    id: 68,
    chinese: "自从毕业以后我们就没见过面。",
    english: "We have not seen each other since graduation.",
    level: "intermediate"
  },
  // ========== ADVANCED (高级) ==========
  {
    id: 69,
    chinese: "尽管经济形势不好，他们的公司仍然保持盈利。",
    english: "Despite the poor economic situation, their company remains profitable.",
    level: "advanced"
  },
  {
    id: 70,
    chinese: "这个问题值得我们深入研究。",
    english: "This issue is worth our in-depth research.",
    level: "advanced"
  },
  {
    id: 71,
    chinese: "他不仅聪明，而且非常努力。",
    english: "He is not only intelligent but also extremely hardworking.",
    level: "advanced"
  },
  {
    id: 72,
    chinese: "随着科技的发展，我们的生活方式发生了巨大变化。",
    english: "With the development of technology, our lifestyle has changed dramatically.",
    level: "advanced"
  },
  {
    id: 73,
    chinese: "无论遇到什么困难，我们都不应该放弃。",
    english: "No matter what difficulties we encounter, we should never give up.",
    level: "advanced"
  },
  {
    id: 74,
    chinese: "据说这座桥是一百年前建造的。",
    english: "It is said that this bridge was built a hundred years ago.",
    level: "advanced"
  },
  {
    id: 75,
    chinese: "她的演讲给所有人留下了深刻的印象。",
    english: "Her speech left a deep impression on everyone.",
    level: "advanced"
  },
  {
    id: 76,
    chinese: "在做出决定之前，我们应该考虑所有可能的后果。",
    english: "Before making a decision, we should consider all possible consequences.",
    level: "advanced"
  },
  {
    id: 77,
    chinese: "他宁愿自己吃亏也不愿意伤害别人。",
    english: "He would rather suffer a loss himself than hurt others.",
    level: "advanced"
  },
  {
    id: 78,
    chinese: "这项研究对未来的医学发展具有重要意义。",
    english: "This research is of great significance to the future development of medicine.",
    level: "advanced"
  },
  {
    id: 79,
    chinese: "只有通过不断学习，我们才能跟上时代的步伐。",
    english: "Only through continuous learning can we keep up with the times.",
    level: "advanced"
  },
  {
    id: 80,
    chinese: "政府采取了一系列措施来应对气候变化。",
    english: "The government has taken a series of measures to address climate change.",
    level: "advanced"
  },
  {
    id: 81,
    chinese: "这份报告详细分析了目前的市场趋势。",
    english: "This report provides a detailed analysis of current market trends.",
    level: "advanced"
  },
  {
    id: 82,
    chinese: "经过长时间的讨论，他们终于达成了一致意见。",
    english: "After a long discussion, they finally reached a consensus.",
    level: "advanced"
  },
  {
    id: 83,
    chinese: "他被公认为这个领域最有影响力的专家之一。",
    english: "He is widely recognized as one of the most influential experts in this field.",
    level: "advanced"
  },
  {
    id: 84,
    chinese: "如果没有你的支持，我不可能完成这个项目。",
    english: "I could not have completed this project without your support.",
    level: "advanced"
  },
  {
    id: 85,
    chinese: "与其抱怨问题，不如想办法解决它。",
    english: "Rather than complaining about the problem, we should find a way to solve it.",
    level: "advanced"
  },
  {
    id: 86,
    chinese: "良好的沟通能力是职场成功的关键。",
    english: "Good communication skills are the key to success in the workplace.",
    level: "advanced"
  },
  {
    id: 87,
    chinese: "这种新材料既轻便又坚固。",
    english: "This new material is both lightweight and durable.",
    level: "advanced"
  },
  {
    id: 88,
    chinese: "他的成功归功于多年来的坚持不懈。",
    english: "His success is attributed to years of perseverance.",
    level: "advanced"
  },
  {
    id: 89,
    chinese: "我们应该从不同的角度来看待这个问题。",
    english: "We should look at this issue from different perspectives.",
    level: "advanced"
  },
  {
    id: 90,
    chinese: "虽然他很年轻，但他在这个领域取得了显著的成就。",
    english: "Although he is very young, he has achieved remarkable accomplishments in this field.",
    level: "advanced"
  },
  {
    id: 91,
    chinese: "教育的目的不仅是传授知识，还要培养创造力。",
    english: "The purpose of education is not only to impart knowledge but also to cultivate creativity.",
    level: "advanced"
  },
  {
    id: 92,
    chinese: "他的提议得到了所有委员会成员的一致支持。",
    english: "His proposal received unanimous support from all committee members.",
    level: "advanced"
  },
  {
    id: 93,
    chinese: "在全球化的背景下，跨文化交流变得越来越重要。",
    english: "In the context of globalization, cross-cultural communication is becoming increasingly important.",
    level: "advanced"
  },
  {
    id: 94,
    chinese: "不可否认，人工智能正在改变我们的工作方式。",
    english: "It is undeniable that artificial intelligence is changing the way we work.",
    level: "advanced"
  },
  {
    id: 95,
    chinese: "他因为过度工作而住院了。",
    english: "He was hospitalized due to overwork.",
    level: "advanced"
  },
  {
    id: 96,
    chinese: "这项政策旨在缩小贫富差距。",
    english: "This policy aims to narrow the gap between the rich and the poor.",
    level: "advanced"
  },
  {
    id: 97,
    chinese: "她不仅精通英语，还能流利地说法语和日语。",
    english: "She is not only proficient in English but can also speak French and Japanese fluently.",
    level: "advanced"
  },
  {
    id: 98,
    chinese: "创新是推动社会进步的主要动力。",
    english: "Innovation is the main driving force behind social progress.",
    level: "advanced"
  },
  {
    id: 99,
    chinese: "面对挑战，我们必须保持积极乐观的态度。",
    english: "Facing challenges, we must maintain a positive and optimistic attitude.",
    level: "advanced"
  },
  {
    id: 100,
    chinese: "这次经历让我深刻认识到团队合作的重要性。",
    english: "This experience made me deeply realize the importance of teamwork.",
    level: "advanced"
  }
];

