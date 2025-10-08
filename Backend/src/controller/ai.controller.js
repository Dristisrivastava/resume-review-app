const fs = require("fs");
const aiService = require("../services/ai.service");
const pdfParse = require("pdf-parse"); // to extract text from PDFs

module.exports.getReview = async (req, res) => {
  try {
    const resumeFile = req.files?.resume?.[0];
    const jobdescFile = req.files?.jobdesc?.[0];

    if (!resumeFile || !jobdescFile) {
      return res.status(400).json({ error: "Both files are required" });
    }

    // Extract text from PDFs
    const resumeBuffer = fs.readFileSync(resumeFile.path);
    const jobdescBuffer = fs.readFileSync(jobdescFile.path);

    const resumeText = (await pdfParse(resumeBuffer)).text;
    const jobdescText = (await pdfParse(jobdescBuffer)).text;

    // Combine into one prompt
    const prompt = `
Job Description:
${jobdescText}

Candidate Resume:
${resumeText}
    `;

    const response = await aiService(prompt);

    res.json({ analysis: response });
  } catch (error) {
    console.error("Error in getReview:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
