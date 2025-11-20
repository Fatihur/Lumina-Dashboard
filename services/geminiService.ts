import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize the client. 
// The API key must be obtained exclusively from the environment variable process.env.API_KEY.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateAIResponse = async (
  prompt: string, 
  contextData?: string
): Promise<string> => {
  try {
    const model = "gemini-2.5-flash";
    
    // Construct a system-aware prompt
    const systemContext = contextData 
      ? `You are an intelligent data analyst assistant for the 'Lumina Admin' dashboard. 
         Here is the current dashboard context summary: ${contextData}. 
         Answer the user's query concisely and professionally based on this data if applicable.`
      : `You are a helpful assistant for the 'Lumina Admin' dashboard. Keep answers concise.`;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        systemInstruction: systemContext,
      }
    });

    return response.text || "I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error connecting to the AI service.";
  }
};