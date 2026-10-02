 import axios from "axios";

export async function askGemini(prompt) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  try {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent",
      {
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
      }
    );

    return (
      response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response"
    );

  } catch (error) {
    console.log(
      "Gemini Error:",
      error.response?.data || error.message
    );

    throw new Error(
      error.response?.data?.error?.message ||
      "Gemini request failed"
    );
  }
}