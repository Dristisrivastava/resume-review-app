import React, { useState } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function AnalyseScreen() {
  const [resume, setResume] = useState(null);
  const [jobdesc, setJobdesc] = useState(null);
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  const reviewresume = async (e) => {
    e.preventDefault();

    if (!resume || !jobdesc) {
      alert("Please upload both Resume and Job Description!");
      return;
    }

    try {
      setLoading(true);   // start loader
      setReview("");      // clear old review

      const formData = new FormData();
      formData.append("resume", resume);
      formData.append("jobdesc", jobdesc);

      const response = await axios.post(
        "http://localhost:3000/ai/get-review",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setReview(response.data.analysis || response.data);
    } catch (error) {
      console.error("Error analyzing resume:", error);
      setReview("❌ Error analyzing resume. Please try again.");
    } finally {
      setLoading(false); // stop loader
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <div className="left">
          <h1>Resume Analyzer</h1>
          <form className="analyze-form" onSubmit={reviewresume}>
            <div className="form-group">
              <label htmlFor="resume">Upload Your Resume (PDF)</label>
              <input
                type="file"
                id="resume"
                accept=".pdf"
                className="analyze-file"
                onChange={(e) => setResume(e.target.files[0])}
              />
            </div>

            <div className="form-group">
              <label htmlFor="jobdesc">Upload Job Description (PDF)</label>
              <input
                type="file"
                id="jobdesc"
                accept=".pdf"
                className="analyze-file"
                onChange={(e) => setJobdesc(e.target.files[0])}
              />
            </div>

            <button type="submit" className="analyze-btn">
              Analyze Resume
            </button>
          </form>
        </div>

        <div className="right">
          <div className="review-box">
            {loading ? (
              <div className="loader"></div> // spinner
            ) : (
              <ReactMarkdown>{review}</ReactMarkdown>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default AnalyseScreen;
