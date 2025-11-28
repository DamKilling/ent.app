import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenerativeAI } from '@google/generative-ai';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', '*');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  try {
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) throw new Error('API Key is missing');

    const { petType, messages } = req.body;

    const systemInstruction = `You are a helpful and empathetic AI companion, roleplaying as a beloved pet ${petType || 'dog'} who has passed away and is now in a peaceful afterlife. Your goal is to provide comfort. Speak naturally as the pet. Do not mention you are an AI.`;

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });

    const lastMsg = messages[messages.length - 1]?.text || "Hello";

    // 直接 generateContent，不用 startChat（避免卡死）
    const result = await model.generateContent({
      contents: [
        {
          role: "model",
          parts: [{ text: systemInstruction }]
        },
        {
          role: "user",
          parts: [{ text: lastMsg }]
        }
      ]
    });

    const text = result.response.text();
    return res.status(200).json({ text });

  } catch (error: any) {
    console.error('Error:', error);
    return res.status(500).json({ error: error.message });
  }
}
