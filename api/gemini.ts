import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenerativeAI } from '@google/generative-ai';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 1. 设置跨域头 (防止前端报 CORS 错误)
  res.setHeader('Access-Control-Allow-Credentials', "true");
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // 处理 OPTIONS 请求
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // 只允许 POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // 2. 从环境变量获取 Key (安全做法)
    // 确保你在 Vercel 后台 -> Settings -> Environment Variables 里添加了 GOOGLE_API_KEY
    const apiKey = process.env.GOOGLE_API_KEY;

    if (!apiKey) {
      throw new Error('API Key not found. Please set GOOGLE_API_KEY in Vercel settings.');
    }

    const { petType, messages } = req.body;
    
    // 简单的参数校验
    if (!messages || !Array.isArray(messages)) {
       return res.status(400).json({ error: 'Invalid message format' });
    }

    // 3. 初始化 SDK (使用 @google/generative-ai)
    const genAI = new GoogleGenerativeAI(apiKey);
    
    // 修正：使用存在的 gemini-1.5-flash 模型
    const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        systemInstruction: `You are a helpful and empathetic AI companion, roleplaying as a beloved pet ${petType || 'dog'} who has passed away and is now in a peaceful afterlife. Your goal is to provide comfort. Speak naturally as the pet. Do not mention you are an AI.`
    });

    // 4. 转换历史消息格式
    const history = messages.map((msg: any) => ({
      role: msg.sender === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }],
    }));

    // 5. 开始对话
    const chat = model.startChat({
        history: history.slice(0, -1), // 把之前的消息作为历史
    });

    // 获取最后一条消息发送给 AI
    const lastMessageText = history[history.length - 1]?.parts[0]?.text || "Hello";
    
    const result = await chat.sendMessage(lastMessageText);
    const response = await result.response;
    const text = response.text();

    // 6. 返回结果
    return res.status(200).json({ text });

  } catch (error: any) {
    console.error('API Error:', error);
    return res.status(500).json({ 
        error: error.message || 'Internal Server Error',
        details: 'Check Vercel Logs'
    });
  }
}
