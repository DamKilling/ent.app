import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenerativeAI } from '@google/generative-ai';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 1. 设置跨域头
  res.setHeader('Access-Control-Allow-Credentials', "true");
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) throw new Error('API Key is missing');

    const { petType, messages } = req.body;
    
    // 初始化 SDK
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
    model: "gemini-2.5-pro-latest",
    systemInstruction: `You are a helpful and empathetic AI companion, roleplaying as a beloved pet ${petType || 'dog'} who has passed away and is now in a peaceful afterlife. Your goal is to provide comfort. Speak naturally as the pet. Do not mention you are an AI.`
});


    // 转换消息格式
    const formattedMessages = messages?.map((msg: any) => ({
      role: msg.sender === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }],
    })) || [];

    // ==========================================
    // 🛠️ 关键修复开始：处理历史记录规则
    // ==========================================
    
    // 1. 提取最后一条消息（这是当前用户发的新消息）
    const lastMessage = formattedMessages[formattedMessages.length - 1];
    const lastMessageText = lastMessage?.parts[0]?.text || "Hello";

    // 2. 提取历史记录（除了最后一条之外的所有消息）
    let history = formattedMessages.slice(0, -1);

    // 3. 🚨 修复报错的核心逻辑：
    // Google 要求 history 的第一条必须是 'user'。
    // 如果前端发来的第一条是 'model' (比如 AI 的开场白)，我们必须把它删掉。
    if (history.length > 0 && history[0].role === 'model') {
        console.log("Removing initial model message to satisfy API requirements");
        history.shift(); // 删掉第一条 AI 消息
    }

    // ==========================================
    // 🛠️ 关键修复结束
    // ==========================================

    const chat = model.startChat({ history: history });
    
    const result = await chat.sendMessage(lastMessageText);
    const response = await result.response;
    const text = response.text();

    return res.status(200).json({ text });

  } catch (error: any) {
    console.error('Error:', error);
    // 返回 JSON 格式的错误，方便前端解析
    return res.status(500).json({ error: error.message });
  }
}
