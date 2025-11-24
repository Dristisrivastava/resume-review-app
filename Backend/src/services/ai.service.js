const { GoogleGenerativeAI } = require("@google/generative-ai");

const ai = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

const model = ai.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction:
    "You are a professional resume analyzer. I will provide you with two inputs: 1. A job description (JD) 2. A candidate's resume Your tasks:using the formula Match Score (MS) = (wₛ·Sₘₐₜcₕ) + (wₑ·Eᵣₑₗₑᵥₐₙcₑ) + (wₐ·Aꜰᵢₜ); give very specific actionable suggestions to improve the resume including exact JD keywords/tools to add, restructuring or emphasis changes, and missing metrics; ensure feedback is professional and error-free; 1. Analyze how well the resume matches the job description. 2. Give a match score out of 10 (10 = perfect fit, 1 = poor fit) give proper score. 3. Give very specific, actionable suggestions to improve the resume for this job. Suggest exact keywords, tools, or phrases from the JD that should be added. Suggest restructuring or emphasizing certain projects/experiences. Point out if formatting, clarity, or metrics are missing. Output format: Match Score, Strengths, Suggestions.",
});

async function generateContent(prompt, retries = 3, delay = 2000) {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    if (error.status === 503 && retries > 0) {
      console.warn(`Model overloaded. Retrying in ${delay / 1000}s...`);
      await new Promise((resolve) => setTimeout(resolve, delay));
      return generateContent(prompt, retries - 1, delay * 2);
    }
    throw error;
  }
}

module.exports = generateContent;
