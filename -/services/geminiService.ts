
import { GoogleGenAI, Type } from "@google/genai";
import { FrierenQuote } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getFrierenQuote = async (): Promise<FrierenQuote> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "請提供一段關於《葬送的芙莉蓮》的感人或具有哲理的台詞（繁體中文），並包含說話者和簡單的情境描述。",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            text: { type: Type.STRING, description: "台詞內容" },
            speaker: { type: Type.STRING, description: "說話的角色名稱" },
            context: { type: Type.STRING, description: "這段話出現的情境" }
          },
          required: ["text", "speaker"]
        }
      }
    });

    return JSON.parse(response.text.trim()) as FrierenQuote;
  } catch (error) {
    console.error("Error fetching quote:", error);
    return {
      text: "那是，為了讓你在未來不至於孤單一人。",
      speaker: "欣梅爾",
      context: "在辛美爾解釋為什麼要建立這麼多銅像時"
    };
  }
};
