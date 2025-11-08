import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const ResumeScreen = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center bg-[#f7f4e9]">
        {/* Header Section */}
        <h1 className="text-5xl font-bold text-gray-900 mt-6  text-center lg:text-5xl sm:text-2xl md:text-3xl">
          Resume Rules That Work
        </h1>
        <h2 className="text-2xl font-light text-gray-700 mt-2 text-center sm:text-lg md:text-xl">
          Simple. Smart. Effective.
        </h2>
        <p className="text-center text-sm text-gray-500 mt-2 px-3">
          Everything you need to create, refine, and present <br className="hidden sm:block" />
          a resume that gets you hired confidently and professionally.
        </p>

        {/* Resume Image Strip */}
        <div className="mt-12 flex flex-wrap justify-center gap-2 max-w-6xl ">
          {[
            { src: "resume1.png", rotate: "-rotate-12 translate-y-6" },
            { src: "resume2.png", rotate: "-rotate-6 translate-y-3" },
            { src: "resume3.png", rotate: "rotate-0" },
            { src: "resume4.png", rotate: "rotate-0" },
            { src: "resume5.png", rotate: "rotate-6 translate-y-3" },
            { src: "resume6.png", rotate: "rotate-12 translate-y-6" },
          ].map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={`Resume ${i + 1}`}
              className={`h-60 w-40 lg:w-46 lg:h-65 sm:h-40 sm:w-28 md:h-48 md:w-36 object-cover rounded-2xl shadow-lg transform ${img.rotate}`}
            />
          ))}
        </div>

        {/* Subheading */}
        <h2 className="text-2xl font-light text-gray-700 mt-7 text-center sm:text-lg md:text-xl">
          Everything you need to <br className="hidden sm:block" />
          know about a good resume
        </h2>

        {/* Cards Section */}
        <div className="mt-6 mb-8 flex flex-col gap-6 px-4">
          {[
            [
              {
                bg: "bg-[#5a483498]",
                title: "Use Standard Formatting",
                text: "Avoid tables, text boxes, or columns — they confuse ATS scanners.",
                img: "atsresume.png",
                color: "text-white",
              },
              {
                bg: "bg-[#e2caa88f]",
                title: "Include Relevant Keywords",
                text: "Match the job description’s skills and terms naturally in your resume.",
                img: "keyword.png",
                color: "text-black",
              },
              {
                bg: "bg-[#965f31a5]",
                title: "Use Simple Fonts",
                text: "Stick to fonts like Arial, Calibri, or Helvetica for better readability.",
                img: "font.png",
                color: "text-white",
              },
            ],
            [
              {
                bg: "bg-[#4a342b87]",
                title: "Save as a Word or PDF File",
                text: "ATS systems read .docx and .pdf best — avoid images or screenshots.",
                img: "pdf.png",
                color: "text-black",
              },
              {
                bg: "bg-[#6567628b]",
                title: "Label Sections Clearly",
                text: "Use standard titles like Experience, Education, Skills, Certifications, etc.",
                img: "lable.png",
                color: "text-white",
              },
              {
                bg: "bg-[#c7ad587e]",
                title: "Avoid Graphics and Icons",
                text: "ATS can’t read visuals — keep information in plain text only.",
                img: "icons.png",
                color: "text-black",
              },
            ],
            [
              {
                bg: "bg-[#5e4c3879]",
                title: "Quantify Achievements",
                text: "Numbers (“Increased sales by 20%”) stand out to both ATS and recruiters.",
                img: "measure.png",
                color: "text-white",
              },
              {
                bg: "bg-[#e0c6a47f]",
                title: "Use Consistent Dates",
                text: "Format dates like Jan 2021 – Mar 2023 throughout for clarity.",
                img: "date.png",
                color: "text-black",
              },
              {
                bg: "bg-[#995a2781]",
                title: "Avoid Unreadable Characters",
                text: "No emojis, special symbols, or decorative bullets — use simple dots or dashes.",
                img: "",
                color: "text-white",
              },
            ],
          ].map((row, i) => (
            <div
              key={i}
              className="flex flex-wrap justify-center gap-5 sm:flex-col md:flex-row"
            >
              {row.map((card, j) => (
                <div
                  key={j}
                  className={`w-60 h-40 sm:w-64 sm:h-auto md:w-60 md:h-40 rounded-xl p-3 flex flex-col justify-between ${card.bg}`}
                >
                  <h3
                    className={`font-bold text-center text-md mt-2 ${card.color}`}
                  >
                    {card.title}
                  </h3>
                  <div className="flex justify-between items-end">
                    <p
                      className={`text-xs leading-tight ${card.color} px-2 mt-1`}
                    >
                      {card.text}
                    </p>
                    {card.img && (
                      <img
                        src={card.img}
                        alt=""
                        className="w-16 h-16 object-contain"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* What is a Bad Resume Section */}
        <div className="w-full px-5 md:px-10 mb-10">
          <h2 className="text-2xl font-light text-gray-700 mt-7 text-center mb-4">
            What is a Bad Resume
          </h2>

          {/* Grammar Mistakes */}
          <div className="mb-8">
            <h3 className="font-bold text-start">
              Resume with Spelling and Grammar Mistakes
            </h3>
            <p className="text-sm text-gray-500 mt-2 text-start mb-3">
              Typos and grammar mistakes may seem insignificant, but they make a
              resume harder to read and appear unprofessional. They also convey
              poor attention to detail and a lack of genuine interest in the
              position. Always{" "}
              <a
                href="https://resumeworded.com/resume-proofreading"
                className="underline text-gray-800"
              >
                proofread your resume
              </a>{" "}
              to eliminate these issues:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <img
                src="grammer.png"
                alt=""
                className="w-72 h-40 sm:w-60 sm:h-32 md:w-72 md:h-40 object-contain"
              />
              <img
                src="correction.png"
                alt=""
                className="w-72 h-40 sm:w-60 sm:h-32 md:w-72 md:h-40 object-contain"
              />
            </div>
          </div>

          {/* Irrelevant Info */}
          <div className="mb-8">
            <h3 className="font-bold text-start">
              Resume including irrelevant information
            </h3>
            <p className="text-sm text-gray-500 mt-2 text-start mb-3">
              Including irrelevant information distracts from your skills and
              experience. Don’t bury important details — use bullet points and
              clear headings.
            </p>
            <div className="flex justify-center">
              <img
                src="irrelivent.png"
                alt=""
                className="w-72 h-40 sm:w-64 sm:h-32 md:w-80 md:h-40 object-contain"
              />
            </div>
          </div>

          {/* Work Order */}
          <div className="mb-8">
            <h3 className="font-bold text-start">
              Resume listing work experience in the wrong order
            </h3>
            <p className="text-sm text-gray-500 mt-2 text-start mb-3">
              Recruiters expect to see your most recent experience first.
              Otherwise, they may misread your experience level.
            </p>
            <div className="flex justify-center">
              <img
                src="listing.png"
                alt=""
                className="w-80 h-60 sm:w-64 sm:h-40 md:w-80 md:h-60 object-contain"
              />
            </div>
          </div>

          {/* Responsibilities over Achievements */}
          <div className="mb-8">
            <h3 className="font-bold text-start">
              Resume focusing on responsibilities rather than achievements
            </h3>
            <p className="text-sm text-gray-500 mt-2 text-start mb-3">
              Replace responsibilities with quantifiable achievements. For
              example: “Led a team of 5 associates to increase sales by 5%.”
            </p>
            <div className="flex justify-center">
              <img
                src="achivement.png"
                alt=""
                className="w-96 h-40 sm:w-72 sm:h-32 md:w-96 md:h-40 object-contain"
              />
            </div>
          </div>

          {/* Buzzwords */}
          <div className="mb-8">
            <h3 className="font-bold text-start">Resume using buzzwords</h3>
            <p className="text-sm text-gray-500 mt-2 text-start mb-3">
              Avoid overused phrases like “team player” or “detail-oriented”.
              Replace them with specific, measurable accomplishments.
            </p>
            <div className="flex justify-center">
              <img
                src="buzz.png"
                alt=""
                className="w-96 h-40 sm:w-72 sm:h-32 md:w-96 md:h-40 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Footer Quote Section */}
        <div className="bg-[#0f564372] p-3 w-full flex justify-center mt-12 text-white">
          <p className="text-[#0f5643ee] text-sm text-center max-w-5xl px-3">
            We believe that a great resume is more than a document — it’s your
            first impression, your personal story, and your gateway to
            opportunity. Our goal is to help you craft resumes that are clear,
            keyword-optimized, and ATS-ready. With expert guidance and
            data-driven insights, we make sure you stand out — every time you
            apply.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};
