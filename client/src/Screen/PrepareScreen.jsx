import React, { useState } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function PrepareScreen() {
  const [resume, setResume] = useState(null);
  const [jobdesc, setJobdesc] = useState(null);
  const [prepare, setPrepare] = useState("");
  const [loading, setLoading] = useState(false);

  const prepareInterview = async (type) => {
    if (!resume || !jobdesc) {
      alert("Please upload both Resume and Job Description!");
      return;
    }

    try {
      setLoading(true);
      setPrepare(""); // clear old prep guide

      const formData = new FormData();
      formData.append("resume", resume);
      formData.append("jobdesc", jobdesc);
      formData.append("type", type); // 👈 pass HR or TECH

      const response = await axios.post(
        "http://localhost:3000/prepare/get-Prepare",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setPrepare(response.data.analysis || response.data);
    } catch (error) {
      console.error("Error generating preparation guide:", error);
      setPrepare("❌ Error preparing interview guide. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <div className="left">
          <h1>Interview Preparation Guide</h1>
          <div className="analyze-form">
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

            <button
              type="button"
              className="analyze-btn"
              onClick={() => prepareInterview("HR")}
            >
              HR Questions
            </button>

            <button
              type="button"
              className="analyze-btn"
              onClick={() => prepareInterview("TECH")}
            >
              Tech Questions
            </button>
          </div>
        </div>

        <div className="right">
          <div className="review-box">
            {loading ? (
              <div className="loader"></div>
            ) : (
              <ReactMarkdown>{prepare}</ReactMarkdown>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default PrepareScreen;
