import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const Interviewscreen = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center bg-[#e9f2f7]">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-[#1f0221] mt-5 text-center sm:text-2xl md:text-3xl lg:text-4xl">
          Ace Any Job Interview
        </h1>
        <h2 className="text-xl font-light text-[#864f8a] mt-2 text-center sm:text-base md:text-lg lg:text-xl">
          Prepared. Polished. Powerful.
        </h2>

        {/* Main Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center mb-4 px-4">
          {/* Left Image */}
          <img
            src="interview1.png"
            alt=""
            className="w-60 h-50 mt-5 sm:w-40 md:w-48 lg:w-60"
          />

          {/* Middle Section */}
          <div className="mt-4 lg:mt-0">
            <h2 className="text-md italic text-[#864f8a] mt-2 pl-4 mb-2 text-center">
              “Communication is the number one skill recruiters look for.”
            </h2>

            {/* Three Boxes */}
            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-3 justify-center items-center">
              {/* Box 1 */}
              <div className="border border-gray-700 border-dashed w-60 h-auto p-2">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-sm text-[#1f0221] leading-tight">
                      Before <br /> the Interview
                    </h3>
                    <h4 className="font-bold text-xs text-[#864f8a] leading-tight">
                      Research the Company:
                    </h4>
                    <h4 className="text-xs text-[#1f0221] leading-tight">
                      Tailor your response
                    </h4>
                  </div>
                  <img src="before.png" alt="" className="w-16 h-16" />
                </div>
                <h4 className="text-xs text-[#1f0221] leading-tight">
                  to the company's need.
                </h4>
                <h4 className="font-bold text-xs text-[#864f8a] leading-tight">
                  Research Yourself:
                </h4>
                <h4 className="text-xs text-[#1f0221] leading-tight">
                  Identify Why you're the ideal candidate.
                </h4>
              </div>

              {/* Box 2 */}
              <div className="border border-gray-700 border-dashed w-60 h-auto p-2">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-sm text-[#1f0221] leading-tight">
                      During <br /> the Interview
                    </h3>
                    <h4 className="font-bold text-xs text-[#864f8a] leading-tight">
                      Encourage Dialogue:
                    </h4>
                    <h4 className="text-xs text-[#1f0221] leading-tight">
                      Invite questions to
                    </h4>
                  </div>
                  <img src="during.png" alt="" className="w-16 h-16" />
                </div>
                <h4 className="text-xs text-[#1f0221] leading-tight">
                  make it a two-way conversation.
                </h4>
                <h4 className="font-bold text-xs text-[#864f8a] leading-tight">
                  Tell Stories:
                </h4>
                <h4 className="text-xs text-[#1f0221] leading-tight">
                  Frame experiences as stories with challenges, actions, and
                  results.
                </h4>
              </div>

              {/* Box 3 */}
              <div className="border border-gray-700 border-dashed w-60 h-auto p-2">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-sm text-[#1f0221] leading-tight">
                      After <br /> the Interview
                    </h3>
                    <h4 className="font-bold text-xs text-[#864f8a] leading-tight">
                      Express Gratitude:
                    </h4>
                    <h4 className="text-xs text-[#1f0221] leading-tight">
                      End with a thank
                    </h4>
                  </div>
                  <img src="after.png" alt="" className="w-16 h-16" />
                </div>
                <h4 className="text-xs text-[#1f0221] leading-tight">
                  you to show positivity.
                </h4>
                <h4 className="font-bold text-xs text-[#864f8a] leading-tight">
                  Highlight a favorite Question:
                </h4>
                <h4 className="text-xs text-[#1f0221] leading-tight">
                  Reflect enthusiasm and engagement for the role and clarify any
                  doubts.
                </h4>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <img
            src="interview2.png"
            alt=""
            className="w-72 h-50 mt-5 sm:w-48 md:w-56 lg:w-72"
          />
        </div>

        {/* Body Language Section */}
        <div className="mb-6 w-full px-4">
          <h2 className="text-md italic text-[#864f8a] pl-4 mb-4 text-center">
            “Confidence speaks loudest through the language of your body.”
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              {
                img: "eyes.png",
                title: "Eyes",
                text: "Smile with your eyes. Use a genuine smile to convey warmth.",
              },
              {
                img: "post.png",
                title: "Posture",
                text: "Sit up with a slight lean forward to show engagement.",
              },
              {
                img: "hand.png",
                title: "Hands",
                text: "Use gestures naturally to express enthusiasm (don’t overdo).",
              },
              {
                img: "facial.png",
                title: "Facial Expressions",
                text: "Avoid poker face. Show curiosity and energy naturally.",
              },
              {
                img: "over.png",
                title: "Overall Demeanor",
                text: "Mirror interviewer’s body language subtly to build rapport.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="w-36 sm:w-32 md:w-40 border-r border-dashed last:border-none text-center"
              >
                <img src={item.img} alt="" className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-bold text-sm text-[#1f0221]">
                  {item.title}
                </h3>
                <h4 className="text-xs text-[#1f0221]">{item.text}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks Section */}
        <h2 className="text-xl font-bold text-[#864f8a] mt-2 mb-2 text-center">
          Frameworks to help your answers difficult questions:
        </h2>

        {/* STAR - CAR - SOAR */}
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-3 justify-center items-start mb-4 px-4">
          {/* STAR */}
          <div className="w-full md:w-60 border border-dashed p-2">
            <h2 className="font-bold text-[#8c4091] text-lg">
              STAR <span className="text-[#1f0221]">Method</span>
            </h2>
            <h4 className="text-xs text-[#1f0221] mb-1">
              Ideal for behavioral questions focusing on past performance.
            </h4>
            {[
              ["S", "Situation", "Describe the context or challenge faced."],
              ["T", "Task", "Explain your responsibilities or goals."],
              ["A", "Action", "Describe steps you took to address it."],
              ["R", "Result", "Share the outcome and key learnings."],
            ].map(([abbr, title, desc]) => (
              <div key={abbr} className="flex">
                <h2 className="text-xl text-[#8c4091] font-extrabold mr-2">
                  {abbr}
                </h2>
                <h4 className="text-[10px] text-[#1f0221]">
                  <span className="font-bold">{title}:</span> {desc}
                </h4>
              </div>
            ))}
          </div>

          {/* CAR */}
          <div className="w-full md:w-60 border border-dashed p-2">
            <h2 className="font-bold text-[#8c4091] text-lg">
              CAR <span className="text-[#1f0221]">Technique</span>
            </h2>
            <h4 className="text-xs text-[#1f0221] mb-1">
              Structure responses about experiences and accomplishments.
            </h4>
            {[
              ["C", "Challenge", "What was the challenge or problem?"],
              ["A", "Action", "What steps did you take to overcome it?"],
              ["R", "Result", "What was the outcome or impact?"],
            ].map(([abbr, title, desc]) => (
              <div key={abbr} className="flex">
                <h2 className="text-xl text-[#8c4091] font-extrabold mr-2">
                  {abbr}
                </h2>
                <h4 className="text-[10px] text-[#1f0221]">
                  <span className="font-bold">{title}:</span> {desc}
                </h4>
              </div>
            ))}
          </div>

          {/* SOAR */}
          <div className="w-full md:w-60 border border-dashed p-2">
            <h2 className="font-bold text-[#8c4091] text-lg">
              SOAR <span className="text-[#1f0221]">Framework</span>
            </h2>
            <h4 className="text-xs text-[#1f0221] mb-1">
              Used to articulate successful outcomes for leadership roles.
            </h4>
            {[
              ["S", "Situation", "Outline the scenario you were in."],
              ["O", "Objective", "Describe your goal in that situation."],
              ["A", "Action", "Explain what steps you took."],
              ["R", "Result", "Highlight the result and learnings."],
            ].map(([abbr, title, desc]) => (
              <div key={abbr} className="flex">
                <h2 className="text-xl text-[#8c4091] font-extrabold mr-2">
                  {abbr}
                </h2>
                <h4 className="text-[10px] text-[#1f0221]">
                  <span className="font-bold">{title}:</span> {desc}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Frameworks */}
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-3 justify-center items-start mb-8 px-4">
          {/* Five Ws */}
          <div className="w-full md:w-80 border border-dashed p-3">
            <h2 className="font-bold text-[#1f0221] text-lg">
              Five<span className=" text-[#8c4091]"> Ws</span>
            </h2>
            <h4 className="text-xs text-[#1f0221] mb-1">
              Provides thorough responses for technical or complex questions.
            </h4>
            {[
              ["Who", "Who was involved or impacted?"],
              ["What", "What happened or was the task?"],
              ["When", "When did it take place?"],
              ["Where", "Where did it take place?"],
              ["Why", "Why did you choose that approach?"],
            ].map(([title, desc]) => (
              <h4
                key={title}
                className="text-[11px] text-[#1f0221] leading-tight"
              >
                <span className="font-bold">{title}:</span> {desc}
              </h4>
            ))}
          </div>

          {/* PAR */}
          <div className="w-full md:w-80 border border-dashed p-3">
            <h2 className="font-bold text-[#1f0221] text-lg">
              Problem-Action-Result
              <span className=" text-[#8c4091]"> (PAR)</span>
            </h2>
            <h4 className="text-xs text-[#1f0221] mb-1">
              Helps discuss the problems solved and the value you added.
            </h4>
            {[
              ["Problem", "Identify a problem you encountered."],
              ["Action", "Explain the steps you took to solve it."],
              ["Result", "Describe the outcome and its value."],
            ].map(([title, desc]) => (
              <h4
                key={title}
                className="text-[11px] text-[#1f0221] leading-tight"
              >
                <span className="font-bold">{title}:</span> {desc}
              </h4>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
