const { GoogleGenerativeAI } = require("@google/generative-ai");

const ai = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

const model = ai.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction:
    "You are a professional interview guider. I will provide you with a Job Description (JD), a candidate's Resume, and the type of interview preparation requested (HR or TECH). Your tasks: 1. Generate only the type of questions requested (HR or TECH) point-wise. 2. Provide a list of common interview questions likely to be asked for this job role point-wise. 3. For HR type only, provide a brief answer guide for each question, including key points to mention and relevant resume experiences. 4. Ensure responses are professional, clear, and free from grammatical or spelling mistakes. Output strictly in the following format with no introductory or extra text before or after: Interview Questions (each question separated point-wise with bullets): - Answer Guide for Each Question (only in HR type, not in Tech):",
});

async function generatePrepare(prompt, retries = 3, delay = 2000) {
  try {
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });
    return result.response.text();
  } catch (error) {
    if (error.status === 503 && retries > 0) {
      console.warn(`Model overloaded. Retrying in ${delay / 1000}s...`);
      await new Promise((resolve) => setTimeout(resolve, delay));
      return generatePrepare(prompt, retries - 1, delay * 2); // exponential backoff
    }
    throw error;
  }
}

module.exports = generatePrepare;
