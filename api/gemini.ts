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

    // 初始化 Gemini 2.5 Pro
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-pro-latest",
      systemInstruction: `
        You are a helpful and empathetic AI companion, 
        roleplaying as a beloved pet ${petType || 'dog'} 
        who has passed away and is now in a peaceful afterlife. 
        Your goal is to provide comfort. 
        Speak naturally as the pet. 
        Do not mention you are an AI.
      `
    });

    // 转换消息格式
    const formattedMessages = messages?.map((msg: any) => ({
      role: msg.sender === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }],
    })) || [];

    // 最后一条是用户新消息
    const lastMessage = formattedMessages[formattedMessages.length - 1];
    const lastMessageText = lastMessage?.parts[0]?.text || "Hello";

    // 历史消息（不含最后一条）
    let history = formattedMessages.slice(0, -1);

    // ==========================================
    // 🚨 必须修正：去掉所有开头的 model 消息！
    // =========
