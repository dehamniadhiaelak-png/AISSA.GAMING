
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getTechAdvice = async (prompt: string) => {
  if (!API_KEY) return "API key is missing.";
  
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are TechPulse Advisor, a professional tech expert. Provide concise, expert advice on apps, software development, and SEO. Use technical terms correctly but keep it accessible.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my tech brain right now. Please try again later.";
  }
};

export const generateDomainNames = async (keywords: string) => {
  const prompt = `Generate 5 catchy, short, and professional domain name suggestions for a tech blog related to: ${keywords}. Provide them in a list format with both English and Arabic translations. Include a short tagline for each.`;
  return await getTechAdvice(prompt);
};
