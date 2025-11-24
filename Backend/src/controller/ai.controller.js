const aiService = require("../services/ai.service");
const pdfParse = require("pdf-parse"); // to extract text from PDFs

module.exports.getReview = async (req, res) => {
  try {
    const resumeFile = req.files?.resume?.[0];
    const jobdescFile = req.files?.jobdesc?.[0];

    if (!resumeFile || !jobdescFile) {
      return res.status(400).json({ error: "Both files are required" });
    }

    // Extract text directly from uploaded buffers (memoryStorage)
    const resumeText = (await pdfParse(resumeFile.buffer)).text;
    const jobdescText = (await pdfParse(jobdescFile.buffer)).text;

    // Combine into one prompt for AI
    const prompt = `
Job Description:
${jobdescText}

Candidate Resume:
${resumeText}
    `;

    const response = await aiService(prompt);

    res.json({ analysis: response });
  } catch (error) {
  console.error("Error in resumeanalyser:", error.message, error.response?.data || error);
  res.status(500).json({ error: error.message });
}

};
