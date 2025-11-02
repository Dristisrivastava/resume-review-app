import React, { useState } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import Footer from "../components/Footer";

const API = import.meta.env.VITE_API_URL; // Render backend URL

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
      setPrepare("");

      const formData = new FormData();
      formData.append("resume", resume);
      formData.append("jobdesc", jobdesc);
      formData.append("type", type);

      const response = await axios.post(
        `${API}/prepare/get-Prepare`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
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
      <main className="bg-[#ffffff] ">
        <div className="border-2 border-[#b4cbe7] p-5 w-[30rem] h-[25rem] bg-[#a4c3e8] shadow-md">
          <h1 className="text-3xl ml-8 mb-5 text-center">Interview Questions</h1>
          <div className="analyze-form">
            <div className="form-group">
              <label htmlFor="resume">Upload Your Resume (PDF)</label>
              <input
                type="file"
                id="resume"
                accept=".pdf"
                className="bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                onChange={(e) => setResume(e.target.files[0])}
              />
            </div>

            <div className="form-group">
              <label htmlFor="jobdesc">Upload Job Description (PDF)</label>
              <input
                type="file"
                id="jobdesc"
                accept=".pdf"
                className="bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                onChange={(e) => setJobdesc(e.target.files[0])}
              />
            </div>
            <div className="flex mt-5">
            <button
              type="button"
              className="bg-gray-700 w-60 h-9 text-white rounded-2xl hover:bg-gray-800 transition-colors"
              onClick={() => prepareInterview("HR")}
            >
              HR Questions
            </button>

            <button
              type="button"
              className="bg-gray-700 w-60 ml-5 h-9 text-white rounded-2xl hover:bg-gray-800 transition-colors"
              onClick={() => prepareInterview("TECH")}
            >
              Tech Questions
            </button>
            </div>
          </div>
        </div>

        <div className="w-[50%]">
          <div className="review-box">
            {loading ? (
              <div className="loader"></div>
            ) : (
              <ReactMarkdown>{prepare}</ReactMarkdown>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default PrepareScreen;
