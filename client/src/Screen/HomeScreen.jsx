import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Footer from "../components/Footer";

export const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen bg-white">

        {/* ---------- HERO SECTION ---------- */}
        <div className="w-[90%] sm:w-[90%] md:w-[46rem] lg:w-[59rem] h-auto md:h-[20rem] lg:h-[21rem] bg-[#e6c7da] rounded-lg flex flex-col md:flex-row md:gap-10 lg:gap-19 p-4 md:p-6">
          {/* Left Text Section */}
          <div className="m-2 md:m-4 lg:m-[1rem] md:ml-10 lg:ml-13 flex flex-col text-center md:text-left items-center md:items-start">
            <h1 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-bold mb-4 leading-snug">
              Don’t Just Apply,
              <br /> Apply Smart
              <br />
              Get Hired
            </h1>
            <p className="text-sm sm:text-base md:text-sm lg:text-base">
              Match your resume to your dream job. <br />
              Free analysis reveals gaps, strengths, <br />
              and updates to get noticed!
            </p>
            <div className="btnfront mt-3 md:mt-4">
              <button
                className="analysebtn"
                onClick={() => navigate("/analyse")}
              >
                Analyse
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end items-center mt-4 md:mt-0">
            <img
              src="bg.png"
              alt=""
              className="w-52 h-52 sm:w-60 sm:h-60 md:w-[18rem] md:h-[18rem] lg:w-[22rem] lg:h-[22rem] object-contain md:mb-3 lg:mb-3 md:ml-10 lg:ml-30"
            />
          </div>
        </div>

        {/* ---------- CATEGORIES SECTION ---------- */}
        <div className="flex flex-col md:flex-row mt-10 mb-10 items-center md:items-start">
          {/* Left Vertical Box */}
          <div className="bg-[#e6c7da] lg:h-[20rem] md:h-[20rem] rounded-lg px-4 py-4 md:py-6 flex items-center justify-center mb-6 md:mb-0 md:mr-8 lg:mr-13 pinkbox">
            <h2 className="font-bold text-base sm:text-lg lg:[writing-mode:vertical-rl] lg:rotate-180 md:[writing-mode:vertical-rl] md:rotate-180 ">
              Categories
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-[90%] sm:w-auto md:w-auto lg:w-auto">
            {/* Prepare */}
            <div className="bg-[#a4c9e8] rounded-xl p-4 w-full md:w-[22rem] lg:w-100 h-auto md:h-40 flex flex-col sm:flex-row items-center shadow-md">
              <img
                src="planing.png"
                alt="analyzeicon"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain flex-shrink-0"
              />
              <div className="mt-3 sm:mt-0 sm:ml-4 flex flex-col justify-between h-full text-center sm:text-left">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold">Prepare</h2>
                  <p className="text-xs sm:text-sm text-gray-700 leading-snug">
                    Prepare for your interview with <br /> questions. Customize
                    with the job description and your resume.
                  </p>
                </div>
                <button
                  className="preparebtn mt-2 sm:mt-1"
                  onClick={() => navigate("/prepare")}
                >
                  Prepare
                </button>
              </div>
            </div>

            {/* Analyze */}
            <div className="bg-[#a4e8ae] rounded-xl p-4 w-full md:w-[22rem] lg:w-100 h-auto md:h-40 flex flex-col sm:flex-row items-center shadow-md">
              <img
                src="analyze.png"
                alt="analyzeicon"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain flex-shrink-0"
              />
              <div className="mt-3 sm:mt-0 sm:ml-4 flex flex-col justify-between h-full text-center sm:text-left">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold">Analyze</h2>
                  <p className="text-xs sm:text-sm text-gray-700 leading-snug">
                    Get Scores of your resume <br /> according to the job
                    description and suggestions to improve it.
                  </p>
                </div>
                <button
                  className="preparebtn mt-2 sm:mt-1"
                  onClick={() => navigate("/analyse")}
                >
                  Analyze
                </button>
              </div>
            </div>

            {/* Resume */}
            <div className="bg-[#e6e8a4] rounded-xl p-4 w-full md:w-[22rem] lg:w-100 h-auto md:h-40 flex flex-col sm:flex-row items-center shadow-md">
              <img
                src="resume.png"
                alt="analyzeicon"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain flex-shrink-0"
              />
              <div className="mt-3 sm:mt-0 sm:ml-4 flex flex-col justify-between h-full text-center sm:text-left">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold">Resume</h2>
                  <p className="text-xs sm:text-sm text-gray-700 leading-snug">
                    Check if your resume fits the criteria for applicant tracking
                    systems.
                  </p>
                </div>
                <button
                  className="preparebtn mt-2 sm:mt-1"
                  onClick={() => navigate("/resume")}
                >
                  Check
                </button>
              </div>
            </div>

            {/* Interview Guidance */}
            <div className="bg-[#eaa7d1] rounded-xl p-4 w-full md:w-[22rem] lg:w-100 h-auto md:h-40 flex flex-col sm:flex-row items-center shadow-md">
              <img
                src="interview.png"
                alt="analyzeicon"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain flex-shrink-0"
              />
              <div className="mt-3 sm:mt-0 sm:ml-4 flex flex-col justify-between h-full text-center sm:text-left">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold">
                    Interview guidance
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-700 leading-snug">
                    Check what all you need <br /> to take care during your
                    interview to make it successful.
                  </p>
                </div>
                <button
                  className="preparebtn mt-2 sm:mt-1"
                  onClick={() => navigate("/interview")}
                >
                  Check
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- ABOUT US SECTION ---------- */}
        <div className="mt-3 mb-4 items-center flex flex-col justify-items-center ml-2 text-center">
          <h4 className="text-gray-700 text-sm md:text-base">About Us</h4>
          <h2 className="text-2xl md:text-3xl font-bold">Unveiling Our Identity,</h2>
          <h2 className="text-2xl md:text-3xl font-bold">Vision and Values</h2>
          <p className="text-gray-500 m-0 text-xs md:text-sm">
            We are determined to make you stand out in your interviews by{" "}
          </p>
          <p className="text-gray-400 m-0 text-xs md:text-sm">
            providing you with the best tools and guidance for resume analysis
          </p>
          <p className="text-gray-500 m-0 text-xs md:text-sm">
            and to provide you with accurate questions for interview preparation{" "}
          </p>

          <div className="relative w-full flex justify-center">
            <div className="bg-[#0f5643] rounded-xl p-3 w-[90%] sm:w-[80%] md:w-[38rem] lg:w-100 h-auto md:h-30 flex justify-between mt-12 text-white absolute left-1/2 transform -translate-x-1/2 -top-6 shadow-lg z-10">
              <div className="flex flex-col items-center justify-start">
                <h2>Analyse</h2>
                <img src="ana.png" alt="" className="w-10 h-11" />
              </div>
              <div className="flex flex-col items-center justify-end">
                <img src="plan.png" alt="" className="w-12 h-11" />
                <h2>Prepare</h2>
              </div>
              <div className="flex flex-col items-center justify-start">
                <img src="respic.png" alt="" className="w-12 h-13" />
                <h2>Resume</h2>
              </div>
              <div className="flex flex-col items-center justify-end">
                <img src="guid.png" alt="" className="w-12 h-13" />
                <h2>Guidance</h2>
              </div>
            </div>

            <div className="w-[90%] sm:w-[80%] md:w-[38rem] lg:w-[59rem] h-auto md:h-60 bg-[#f0e5d0] mt-20 rounded-xl pt-20 pb-10 px-5 md:px-10 text-center">
              <div className="flex flex-col md:flex-row justify-center items-start gap-6 md:gap-10 mb-10 mt-5">
                {/* Vision */}
                <div className="flex-1 md:border-r md:border-gray-300 md:pr-5">
                  <h2 className="text-lg md:text-xl font-semibold text-[#0f5643] mb-2 md:mb-3">
                    Vision
                  </h2>
                  <p className="text-gray-700 text-xs md:text-sm mr-0 md:mr-5">
                    To empower every individual to confidently showcase their
                    true potential and stand out in every interview opportunity.
                  </p>
                </div>

                {/* Mission */}
                <div className="flex-1 mt-5 md:mt-0">
                  <h2 className="text-lg md:text-xl font-semibold text-[#0f5643] mb-2 md:mb-3">
                    Mission
                  </h2>
                  <p className="text-gray-700 text-xs md:text-sm">
                    To provide tools, expert guidance, and personalized resources
                    that help candidates refine their resumes, and prepare
                    effectively with tailored questions and insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
