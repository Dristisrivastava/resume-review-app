const fs = require("fs").promises;
const prepareService = require("../services/prepare.service");
const pdfParse = require("pdf-parse"); // to extract text from PDFs

module.exports.getPrepare = async (req, res) => {
  try {
    const resumeFile = req.files?.resume?.[0];
    const jobdescFile = req.files?.jobdesc?.[0];
    const type = req.body.type || "GENERAL"; // 👈 get type from frontend

    if (!resumeFile || !jobdescFile) {
      return res.status(400).json({ error: "Both files are required" });
    }

    // Extract text from PDFs
    const resumeBuffer = await fs.readFile(resumeFile.path);
    const jobdescBuffer = await fs.readFile(jobdescFile.path);

    const resumeText = (await pdfParse(resumeBuffer)).text;
    const jobdescText = (await pdfParse(jobdescBuffer)).text;

    // Decide instruction based on type
    let extraInstruction = "";
    if (type === "HR") {
      extraInstruction =
        "Focus only on HR/behavioral interview questions like strengths, weaknesses, teamwork, leadership, motivation, communication, etc.";
    } else if (type === "TECH") {
      extraInstruction =
        "Focus only on technical interview questions related to skills, coding, problem-solving, frameworks, tools, and technical knowledge.";
    } else {
      extraInstruction = "Provide a mix of HR and technical interview questions.";
    }

    // Combine into one prompt
    const prompt = `
Job Description:
${jobdescText}

Candidate Resume:
${resumeText}

Instruction: ${extraInstruction}
    `;

    const response = await prepareService(prompt);

    res.json({ analysis: response });

    // ✅ Cleanup uploaded files
    try {
      await fs.unlink(resumeFile.path);
      await fs.unlink(jobdescFile.path);
    } catch (cleanupError) {
      console.warn("Warning: Failed to delete uploaded files", cleanupError);
    }
  } catch (error) {
  console.error("Error in getPrepare:", error.message, error.response?.data || error);
  res.status(500).json({ error: error.message });
}

};
