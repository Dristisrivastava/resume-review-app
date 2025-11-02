import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Footer from "../components/footer";

export const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen bg-white">
        <div className="w-[59rem] h-[21rem] bg-[#e6c7da] rounded-lg flex gap-19">
          <div className="m-[1rem] ml-13 flex flex-col">
            <h1 className="text-4xl font-bold mb-4">
              Don’t Just Apply,
              <br /> Apply Smart
              <br />
              Get Hired
            </h1>
            <p>
              Match your resume to your dream job. <br />
              Free analysis reveals gaps, strengths, <br />
              and updates to get noticed!
            </p>
            <div className="btnfront">
              <button
                className="analysebtn"
                onClick={() => navigate("/analyse")}
              >
                Analyse
              </button>
            </div>
          </div>
          <img src="bg.png" alt="" width={350} className="mb-3 ml-30" />
        </div>
        <div className="flex mt-10 mb-10">
          <div className="bg-[#e6c7da] rounded-lg px-4 py-6 flex items-center justify-center mr-13 pinkbox">
            <h2 className="font-bold text-lg [writing-mode:vertical-rl] rotate-180 ">
              Categories
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-6 ">
            <div className="bg-[#a4c9e8] rounded-xl p-4 w-100 h-40 flex items-center shadow-md">
              <img
                src="planing.png"
                alt="analyzeicon"
                className="w-24 h-24 object-contain flex-shrink-0"
              />

              <div className="ml-4 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-xl font-bold">Prepare</h2>
                  <p className="text-sm text-gray-700 leading-snug">
                    Prepare for your interview with <br /> questions. Customize
                    with the job description and your resume.
                  </p>
                </div>

                {/* Button */}
                <button className="preparebtn" onClick={() => navigate("/prepare")}>Prepare</button>
              </div>
            </div>

            <div className="bg-[#a4e8ae] rounded-xl p-4 w-100 h-40 flex items-center shadow-md">
              <img
                src="analyze.png"
                alt="analyzeicon"
                className="w-34 h-34 object-contain flex-shrink-0"
              />

              <div className="ml-4 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-xl font-bold">Analyze</h2>
                  <p className="text-sm text-gray-700 leading-snug">
                    Get Scores of your resume <br /> according to the job
                    description and sug suggestions to improve it.
                  </p>
                </div>

                {/* Button */}
                <button className="preparebtn" onClick={() => navigate("/analyse")}>Analyze</button>
              </div>
            </div>
            <div className="bg-[#e6e8a4] rounded-xl p-4 w-100 h-40 flex items-center shadow-md">
              <img
                src="resume.png"
                alt="analyzeicon"
                className="w-34 h-34 object-contain flex-shrink-0"
              />

              <div className="ml-4 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-xl font-bold">Resume</h2>
                  <p className="text-sm text-gray-700 leading-snug">
                    Check if your resume <br /> fits the criteria for applicant
                    tracking systems.
                  </p>
                </div>
                <button className="preparebtn"  onClick={() => navigate("/resume")}>Check</button>
              </div>
            </div>
            <div className="bg-[#eaa7d1] rounded-xl p-4 w-100 h-40 flex items-center shadow-md">
              <img
                src="interview.png"
                alt="analyzeicon"
                className="w-34 h-34 object-contain flex-shrink-0"
              />

              <div className="ml-4 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-xl font-bold">Interview guidance</h2>
                  <p className="text-sm text-gray-700 leading-snug">
                    Check what all you need <br /> to take care during your
                    interview to make it successful.
                  </p>
                </div>

                {/* Button */}
                <button className="preparebtn" onClick={() => navigate("/interview")}>Check</button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 mb-4 items-center flex flex-col justify-items-center ml-2">
          <h4 className="text-gray-700">About Us</h4>
          <h2 className="text-3xl font-bold">Unveiling Our Identity,</h2>
          <h2 className="text-3xl font-bold">Vision and Values</h2>
          <p className="text-gray-500 m-0 text-sm">
            We are determined to make you stand out in your interviews by{" "}
          </p>
          <p className="text-gray-400 m-0 text-sm">
            providing you with the best tools and guidance for resume analysis
          </p>
          <p className="text-gray-500 m-0 text-sm">
            and to provide you with accurate questions for interview preparation{" "}
          </p>
          <div className="relative">
            <div className="bg-[#0f5643] rounded-xl p-3 w-100 h-30 flex justify-between mt-12 text-white absolute left-1/2 transform -translate-x-1/2 -top-6 shadow-lg z-10">
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
            <div className="w-150 h-60 bg-[#f0e5d0] mt-15 rounded-xl pt-20 pb-10 px-10 text-center">
              <div className="flex flex-col md:flex-row justify-center items-start gap-10 mb-10 mt-5">
                {/* Vision */}
                <div className="flex-1 ml-5 border-r-1">
                  <h2 className="text-xl font-semibold text-[#0f5643] mb-3">
                    Vision
                  </h2>
                  <p className="text-gray-700 text-xs mr-5">
                    To empower every individual to confidently showcase their
                    true potential and stand out in every interview opportunity.
                  </p>
                </div>

                {/* Mission */}
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-[#0f5643] mb-3">
                    Mission
                  </h2>
                  <p className="text-gray-700 text-xs">
                    To provide tools, expert guidance, and
                    personalized resources that help candidates refine their
                    resumes,and prepare effectively with tailored questions and insights.
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
