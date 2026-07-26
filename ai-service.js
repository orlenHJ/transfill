class AIService {
  constructor() {
    this.apiKey = localStorage.getItem('deepseek_api_key') || '';
    this.endpoint = localStorage.getItem('deepseek_endpoint') || 'https://api.deepseek.com/v1/chat/completions';
    this.model = localStorage.getItem('deepseek_model') || 'deepseek-v4-flash';
  }

  isConfigured() {
    return this.apiKey.length > 0;
  }

  saveConfig(apiKey, endpoint, model) {
    this.apiKey = apiKey;
    this.endpoint = endpoint || 'https://api.deepseek.com/v1/chat/completions';
    this.model = model || 'deepseek-chat';
    localStorage.setItem('deepseek_api_key', this.apiKey);
    localStorage.setItem('deepseek_endpoint', this.endpoint);
    localStorage.setItem('deepseek_model', this.model);
  }

  async generateSentences(level, count = 5) {
    if (!this.isConfigured()) {
      return null;
    }

    const levelDesc = {
      beginner: '初级（简单日常用语，5-8个单词，使用基础语法和常见词汇）',
      intermediate: '中级（较复杂的日常和工作用语，8-15个单词，包含从句和时态变化）',
      advanced: '高级（复杂句式，15-25个单词，包含高级语法结构如虚拟语气、倒装句等）'
    };

    const prompt = `请生成${count}个${levelDesc[level]}的中英文句子对，用于英语翻译练习。
要求：
1. 句子来自日常生活、工作、学习等常见场景
2. 英文句子自然地道
3. 严格按以下JSON格式返回，不要添加任何其他文字：
[
  {
    "chinese": "中文句子",
    "english": "English sentence."
  }
]
只返回JSON数组，不要包含markdown代码块标记。`;

    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: this.model,
          messages: [
            { role: 'system', content: '你是一个英语教学助手，专门生成适合中国学生练习翻译的句子。只返回JSON格式数据。' },
            { role: 'user', content: prompt }
          ],
          temperature: 0.8
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      const content = data.choices[0].message.content.trim();

      const jsonStr = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      const sentences = JSON.parse(jsonStr);

      return sentences.map((s, i) => ({
        id: `ai_${Date.now()}_${i}`,
        chinese: s.chinese,
        english: s.english,
        level: level,
        isAI: true
      }));
    } catch (error) {
      console.error('AI generation failed:', error);
      return null;
    }
  }
}

const aiService = new AIService();
