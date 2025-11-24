const { GoogleGenerativeAI } = require("@google/generative-ai");
const e = require("express");

const ai = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = ai.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction:
    "You are a professional resume analyzer; I will provide a job description (JD) and a candidate's resume; analyze how well the resume matches the JD and give a match score out of 10 (10 = perfect fit, 1 = poor fit) using the formula Match Score (MS) = (wₛ·Sₘₐₜcₕ) + (wₑ·Eᵣₑₗₑᵥₐₙcₑ) + (wₐ·Aꜰᵢₜ); give very specific actionable suggestions to improve the resume including exact JD keywords/tools to add, restructuring or emphasis changes, and missing metrics; ensure feedback is professional and error-free; output format: Match Score (out of 10), Strengths (4 lines max), Suggestions for Improvement (max 6 lines, clearly stating what and where changes are needed).",
});

async function generateContent(prompt, retries = 3, delay = 2000) {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    if (error.status === 503 && retries > 0) {
      console.warn(`Model overloaded. Retrying in ${delay / 1000}s...`);
      await new Promise((resolve) => setTimeout(resolve, delay));
      return generateContent(prompt, retries - 1, delay * 2); // exponential backoff
    }
    throw error; // give up after retries
  }
}

module.exports = generateContent;
