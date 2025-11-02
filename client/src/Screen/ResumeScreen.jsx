import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

export const ResumeScreen = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center bg-[#f7f4e9]">
        <h1 className="text-4xl font-bold text-gray-900 mt-5">
          Resume Rules That Work
        </h1>
        <h2 className="text-2xl font-light text-gray-700 mt-2">
          Simple. Smart. Effective.
        </h2>
        <p className="text-center text-sm text-gray-500 mt-2">
          Everything you need to create, refine, and present <br />a resume that
          gets you hired confidently and professionally.
        </p>

        <div className="mt-12 flex justify-center gap-6 max-w-6xl [perspective:1000px]">
          <img
            src="resume1.png"
            alt="Resume 1"
            className="h-56 w-40 object-cover rounded-2xl shadow-lg transform -rotate-12 translate-y-6"
          />
          <img
            src="resume2.png"
            alt="Resume 2"
            className="h-56 w-40 object-cover rounded-2xl shadow-lg transform -rotate-6 translate-y-3"
          />
          <img
            src="resume3.png"
            alt="Resume 3"
            className="h-60 w-44 object-cover rounded-2xl shadow-lg transform rotate-0"
          />
          <img
            src="resume4.png"
            alt="Resume 4"
            className="h-60 w-44 object-cover rounded-2xl shadow-lg transform rotate-0"
          />
          <img
            src="resume5.png"
            alt="Resume 5"
            className="h-56 w-40 object-cover rounded-2xl shadow-lg transform rotate-6 translate-y-3"
          />
          <img
            src="resume6.png"
            alt="Resume 6"
            className="h-56 w-40 object-cover rounded-2xl shadow-lg transform rotate-12 translate-y-6"
          />
        </div>
        <h2 className="text-2xl font-light text-gray-700 mt-7 text-center">
          Every thing you need to <br />
          know about a good resume
        </h2>
        <div className="mt-5 mb-5">
          <div className="flex gap-5 mb-5 justify-center">
            <div className="w-60 h-40  bg-[#5a483498] rounded-xl flex flex-col  justify-between ">
              <h3 className="text-white font-bold text-center text-lg mt-4">
                Use Standard Formatting
              </h3>
              <div className="flex">
                <h4 className="text-white text-sm font-light ml-4 mt-1">
                  Avoid tables, text boxes, or columns they confuse ATS
                  scanners.
                </h4>
                <img src="atsresume.png" alt="" className="w-30 h-20 mt-8" />
              </div>
            </div>
            <div className="w-40 h-40  bg-[#e2caa88f] rounded-xl flex flex-col  justify-between ">
              <h4 className="text-black font-bold text-sm items-center  text-center mt-2">
                Include Relevant Keywords
              </h4>

              <h5 className="text-black text-xs font-light leading-tight ml-2">
                Match the job description’s skills and terms naturally in your
                resume.
              </h5>

              <img
                src="keyword.png"
                alt=""
                className="w-20 h-14 object-contain ml-16"
              />
            </div>

            <div className="w-50 h-40 bg-[#965f31a5] rounded-xl flex flex-col  justify-between">
              <h3 className="text-white font-bold text-center text-lg mt-2">
                Use Simple Fonts
              </h3>
              <div className="flex">
                <h4 className="text-white text-sm font-light ml-4 mt-1">
                  Stick to fonts like Arial, Calibri, or Helvetica for better
                  readability.
                </h4>
                <img src="font.png" alt="" className="w-30 h-20 mt-8" />
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-center mb-5">
            <div className="w-40 h-40  bg-[#4a342b87] rounded-xl flex flex-col  justify-between">
              <h4 className="text-black font-bold text-sm items-center  text-center mt-2 ml-1 mr-1">
                Save as a Word or PDF File
              </h4>

              <h5 className="text-black text-xs font-light leading-tight ml-2">
                ATS systems read .docx and .pdf best — avoid images or
                screenshots.
              </h5>

              <img
                src="pdf.png"
                alt=""
                className="w-30 h-19 object-contain ml-16"
              />
            </div>
            <div className="w-60 h-40 bg-[#6567628b] rounded-xl flex flex-col  justify-between">
              <h3 className="text-white font-bold text-center text-lg mt-4">
                Label Sections Clearly
              </h3>
              <div className="flex">
                <h4 className="text-white text-sm font-light ml-4 mt-1">
                  Use standard titles like Experience, Education, Skill,
                  Certifications etc.
                </h4>
                <img src="lable.png" alt="" className="w-30 h-20 mt-8" />
              </div>
            </div>
            <div className="w-44 h-40  bg-[#c7ad587e] rounded-xl flex flex-col  justify-between">
              <h4 className="text-black font-bold text-sm items-center  text-center mt-2 ml-1 mr-1">
                Avoid Graphics and Icons
              </h4>

              <h5 className="text-black text-xs font-light leading-tight ml-2">
                ATS can’t read visuals — keep information in plain text only.
              </h5>

              <img
                src="icons.png"
                alt=""
                className="w-30 h-19 object-contain ml-16"
              />
            </div>
          </div>
          <div className="flex gap-5 mb-5 justify-center">
            <div className="w-60 h-40 bg-[#5e4c3879] rounded-xl flex flex-col  justify-between ">
              <h3 className="text-white font-bold text-center text-lg mt-4">
                Quantify Achievements
              </h3>
              <div className="flex">
                <h4 className="text-white text-sm font-light ml-4 mt-1">
                  Numbers (“Increased sales by 20%”) stand out to both ATS and
                  recruiters.
                </h4>
                <img src="measure.png" alt="" className="w-30 h-20 mt-8" />
              </div>
            </div>
            <div className="w-40 h-40  bg-[#e0c6a47f] rounded-xl flex flex-col  justify-between ">
              <h4 className="text-black font-bold text-sm items-center  text-center mt-2">
                Use Consistent Dates
              </h4>

              <h5 className="text-black text-xs font-light leading-tight ml-2">
                Format dates like Jan 2021 – Mar 2023 throughout for clarity.
              </h5>

              <img
                src="date.png"
                alt=""
                className="w-20 h-14 object-contain ml-16"
              />
            </div>

            <div className="w-50 h-40  bg-[#995a2781] rounded-xl flex flex-col  justify-between">
              <h3 className="text-white font-bold text-center text-lg mt-2">
                Avoid Unreadable Characters
              </h3>
              <h4 className="text-white text-sm font-light ml-4 mb-5">
                No emojis, special symbols, or decorative bullets — use simple
                dots or dashes.
              </h4>
            </div>
          </div>
        </div>
        <div className="ml-6 w-[90%] mb-5">
          <h2 className="text-2xl font-light text-gray-700 mt-7 text-center mb-2">
            What is a Bad Resume
          </h2>
          <h3 className="text-start font-bold">
            Resume with Spelling and grammar mistakes
          </h3>
          <p className="text-sm text-gray-500 mt-2 text-start mb-3">
            Typos and grammar mistakes may seem insignificant, but they make a
            resume harder to read and appear unprofessional. They also convey
            poor attention to detail and a lack of genuine interest in the
            position, creating a negative impression on recruiters. Always
            <a
              href="https://resumeworded.com/resume-proofreading"
              className="underline text-gray-800"
            >
              {" "}
              proofread your resume
            </a>{" "}
            to ensure you eliminate the common spelling, punctuation, and
            grammar mistakes shown in the example below:
          </p>
          <div className="flex gap-3 justify-center">
            <img src="grammer.png" alt="" className="w-70 h-40 mb-3 ml-4" />
            <img src="correction.png" alt="" className="w-70 h-40 mb-3 ml-4" />
          </div>
          <h3 className="text-start font-bold">
            Resume including irrelevant information
          </h3>
          <p className="text-sm text-gray-500 mt-2 text-start mb-3">
            Including irrelevant information distracts from your skills and
            experience, making it harder for a recruiter to find critical
            information. Don't bury essential details in lengthy paragraphs. Use
            bullet points to highlight your most memorable achievements and use
            well-structured headings so a recruiter can easily find the
            information they're looking for.
          </p>
          <img
            src="irrelivent.png"
            alt=""
            className="w-70 h-40 mb-3 ml-[35%]"
          />
          <h3 className="text-start font-bold">
            Resume listing work experience in the wrong order
          </h3>
          <p className="text-sm text-gray-500 mt-2 text-start mb-3">
            Recruiters expect to see your most relevant and recent experience
            first. If your experience isn't presented in this order, a recruiter
            might incorrectly assume your lowest level experience is your most
            recent and disregard the rest of your resume.
          </p>
          <img src="listing.png" alt="" className="w-70 h-60 mb-3 ml-[35%]" />
          <h3 className="text-start font-bold">
            Resume focusing on responsibilities rather than achievements
          </h3>
          <p className="text-sm text-gray-500 mt-2 text-start mb-3">
            Most hiring managers aren't interested in roles and
            responsibilities. They want to see evidence of your skills. Instead
            of listing responsibilities, focus on specific, quantifiable
            achievements. For example, instead of saying that you "managed a
            team", write that you "Led a team of 5 associates to increase
            quarterly sales by 5%". Here is an example of a resume listing roles
            and responsibilities:
          </p>
          <img
            src="achivement.png"
            alt=""
            className="w-190 h-40 mb-3 ml-[10%]"
          />
          <h3 className="text-start font-bold">Resume using buzzwords</h3>
          <p className="text-sm text-gray-500 mt-2 text-start mb-3">
            Buzzwords are generic, overused phrases, like "team player" or
            "detail-oriented", that take up space on your resume without adding
            relevant information and make recruiters less likely to take your
            resume seriously replace buzzwords with specific quantified achievements.
          </p>
          <img
            src="buzz.png"
            alt=""
            className="w-160 h-40 mb-3 ml-[15%]"
          />
        </div>
        <div className="bg-[#0f564372] p-3 w-[100%] h-20 flex justify-between mt-12 text-white mb-2">
          <p className="text-[#0f5643ee] m-0 text-sm text-center">
            we believe that a great resume is more than a document — it’s your first impression, your personal story, and your gateway to opportunity.
Our goal is to help you craft resumes that are clear, keyword-optimized, and ATS-ready, ensuring you never get filtered out by systems or overlooked by recruiters.
With expert guidance, real-world insights, and data-driven tools, we make sure you stand out from the crowd — every time you apply.
Because when your resume works hard for you, your confidence shines even brighter in every interview.
          </p>  
        </div> 
      </div>
      <Footer />
    </>
  );
};
