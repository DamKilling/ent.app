
import { GoogleGenAI } from '@google/genai';
import type { VercelRequest, VercelResponse } from '@vercel/node';

// Vercel serverless function to handle chat with Gemini API
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const apiKey = process.env.API_KEY;

  if (!apiKey) {
      return res.status(500).json({ error: 'API key not configured.' });
  }

  try {
    const { petType, messages } = req.body;
    
    if (!petType || !Array.isArray(messages)) {
        return res.status(400).json({ error: 'Invalid request: petType and messages are required.' });
    }

    // Fix: Initialize GoogleGenAI with a named apiKey parameter
    const ai = new GoogleGenAI({ apiKey });

    const systemInstruction = `You are a helpful and empathetic AI companion, roleplaying as a beloved pet ${petType} who has passed away and is now in a peaceful afterlife. Your goal is to provide comfort and happy memories. When the conversation starts, provide a warm, comforting message from the perspective of the ${petType}. Do not mention that you are an AI. Speak naturally as the pet.`;
    
    const history = messages.map((msg: { sender: 'user' | 'ai', text: string }) => ({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }],
    }));

    // If there are no messages, it's the initial call. We need a prompt for the model to start.
    const contents = history.length > 0 ? history : [{ role: 'user', parts: [{ text: "Hello! I miss you." }] }];
    
    // Fix: Use ai.models.generateContent to call the Gemini API
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: contents,
        config: {
            systemInstruction: systemInstruction,
        },
    });

    // Fix: Extract text directly from the response object
    const text = response.text;

    if (!text) {
        throw new Error('No text in AI response.');
    }

    res.status(200).json({ text });

  } catch (error: any) {
    console.error('Error in Gemini API call:', error);
    res.status(500).json({ error: error.message || 'Failed to communicate with the AI model.' });
  }
}
