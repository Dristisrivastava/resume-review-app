import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import "../App.css";

export const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        <div className="w-[55rem] h-[20rem] bg-[#e6c7da] rounded-lg flex gap-19">
          <div className="m-[2rem] flex flex-col">
            <h1>
              Don’t Just Apply,<br /> Apply Smart<br />Get Hired
            </h1>
            <p>
              Match your resume to your dream job. <br />Free analysis reveals gaps, strengths, <br />and updates to get noticed!
            </p>
            <div className="btnfront">
              {/* ✅ FIXED HERE */}
              <button
                className="analysebtn"
                onClick={() => navigate("/analyse")}
              >
                Analyse
              </button>
            </div>
          </div>
          <img src="bg.png" alt="" width={350} className="mb-3" />
        </div>
      </div>
    </>
  );
};
