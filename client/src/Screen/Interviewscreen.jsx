import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
export const Interviewscreen = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center bg-[#e9f2f7]">
        <h1 className="text-4xl font-bold text-[#1f0221] mt-5">
          Ace Any Job Interview
        </h1>
        <h2 className="text-xl font-light text-[#864f8a] mt-2">
          Prepared. Polished. Powerful.
        </h2>
        <div className="flex mb-4">
          <img src="interview1.png" alt="" className="w-60 h-50 mt-5" />
          <div className="">
            <h2 className="text-md italic text-[#864f8a] mt-2 pl-4 mb-2 text-center">
              “Communication is the number one skill recruiters look for.”
            </h2>
            <div className="flex gap-2 justify-center">
              <div className="border-1 border-gray-700 border-dashed w-50 h-40 mb-2 p-1">
                <div className="flex">
                  <div>
                    <h3 className="font-bold text-sm leading-tight text-[#1f0221]">
                      Before <br /> the Interview
                    </h3>
                    <h4 className=" font-bold text-xs text-[#864f8a] leading-tight">
                      Research the Company:
                    </h4>
                    <h4 className="text-xs text-[#1f0221] leading-tight">
                      Tailor your response
                    </h4>
                  </div>
                  <img src="before.png" alt="" className="w-20 h-20" />
                </div>
                <h4 className="text-xs text-[#1f0221] leading-tight">
                  to the company's need.
                </h4>
                <h4 className=" font-bold text-xs text-[#864f8a] leading-tight">
                  Research Yourself:
                </h4>
                <h4 className="text-xs text-[#1f0221] leading-tight">
                  Identify Why you're the ideal candidate.
                </h4>
              </div>
              <div className="border-1 border-gray-700 border-dashed w-50 h-40 mb-2 p-1">
                <div className="flex">
                  <div>
                    <h3 className="font-bold text-sm leading-tight text-[#1f0221]">
                      During <br /> the Interview
                    </h3>
                    <h4 className=" font-bold text-xs text-[#864f8a] leading-tight">
                      Encourage Dialogue:
                    </h4>
                    <h4 className="text-xs text-[#1f0221] leading-tight">
                      Invite questions to
                    </h4>
                  </div>
                  <img src="during.png" alt="" className="w-20 h-20" />
                </div>
                <h4 className="text-xs text-[#1f0221] leading-tight">
                  make it a two-way conversation.
                </h4>
                <h4 className=" font-bold text-xs text-[#864f8a] leading-tight">
                  Tell Stories:
                </h4>
                <h4 className="text-xs text-[#1f0221] leading-tight">
                  Frame experiences as stories with challenges, actions, and
                  results.
                </h4>
              </div>
              <div className="border-1 border-gray-700 border-dashed w-50 h-40 mb-2 p-1">
                <div className="flex">
                  <div>
                    <h3 className="font-bold text-sm leading-tight text-[#1f0221]">
                      After <br /> the Interview
                    </h3>
                    <h4 className=" font-bold text-xs text-[#864f8a] leading-tight">
                      Express Gratitude:
                    </h4>
                    <h4 className="text-xs text-[#1f0221] leading-tight">
                      End with a thank
                    </h4>
                  </div>
                  <img src="after.png" alt="" className="w-20 h-15 mt-1" />
                </div>
                <h4 className="text-xs text-[#1f0221] leading-tight">
                  you to show positivity.
                </h4>
                <h4 className=" font-bold text-xs text-[#864f8a] leading-tight">
                  Highlight a favorite Question:
                </h4>
                <h4 className="text-xs text-[#1f0221] leading-tight">
                  Reflect enthusiasm and engagement for the role and clarify any
                  doubts.
                </h4>
              </div>
            </div>
          </div>
          <img src="interview2.png" alt="" className="w-72 h-50" />
        </div>
        <div className="mb-6">
          <h2 className="text-md italic text-[#864f8a] pl-4 mb-2 text-center">
            “Confidence speaks loudest through the language of your body.”
          </h2>
          <div className="flex justify-center items-center gap-2 ">
            <div className="w-36 h-36 border-r border-dashed ">
              <img src="eyes.png" alt="" className="w-8 h-8 mb-2 ml-13" />
              <h3 className="font-bold text-sm leading-tight text-[#1f0221]">
                Eyes
              </h3>
              <h4 className="text-xs text-[#1f0221] leading-tight">
                - Smile with Your Eyes: <br /> Use a genuine smile to convey
                warmth.
              </h4>
            </div>
            <div className="w-36 h-36 border-r border-dashed">
              <img src="post.png" alt="" className="w-8 h-8 mb-2 ml-13" />
              <h3 className="font-bold text-sm leading-tight text-[#1f0221]">
                Posture
              </h3>
              <h4 className="text-xs text-[#1f0221] leading-tight">
                - Sit up with a Slight Lean Forward: <br /> This shows interest
                and engagement.
              </h4>
            </div>
            <div className="w-36 h-36 border-r border-dashed">
              <img src="hand.png" alt="" className="w-8 h-8 mb-2 ml-13" />
              <h3 className="font-bold text-sm leading-tight text-[#1f0221]">
                Hands
              </h3>
              <h4 className="text-xs text-[#1f0221] leading-tight">
                - Use Gestures: <br /> This demonstrates passion for the subject
                (don't overdo this).
              </h4>
            </div>
            <div className="w-36 h-36 border-r border-dashed">
              <img src="facial.png" alt="" className="w-15 h-8 mb-2 ml-8" />
              <h3 className="font-bold text-sm leading-tight text-[#1f0221]">
                Facial Expressions
              </h3>
              <h4 className="text-xs text-[#1f0221] leading-tight">
                - Get rid of poker face: <br /> Show excitement,Passion and
                curiosity. Avoid exaggerated Expressions
              </h4>
            </div>
            <div className="w-36 h-36">
              <img src="over.png" alt="" className="w-8 h-8 mb-2 ml-13" />
              <h3 className="font-bold text-sm leading-tight text-[#1f0221]">
                Overall Demeanor
              </h3>
              <h4 className="text-xs text-[#1f0221] leading-tight">
                - Mirror Interviewer's body language: <br /> This subtly builds
                rapport.
              </h4>
            </div>
          </div>
        </div>
        <h2 className="text-xl  font-bold text-[#864f8a] mt-2 mb-2">
          Frameworks to help your answers difficult questions:
        </h2>
        <div className="flex gap-2 justify-center mb-4">
          <div className="w-60 h-50 border border-dashed p-1 overflow-hidden break-words leading-tight text-clip">
            <h2 className="font-bold text-[#8c4091] text-lg">
              STAR <span className="text-[#1f0221]">Method</span>
            </h2>
            <h4 className="text-xs text-[#1f0221] leading-tight mb-1">
              Ideal for behavioral questions, which is focused on describing
              past behavior as a predictor of future performance.
            </h4>

            <div className="flex">
              <h2 className="text-xl text-[#8c4091] font-extrabold mr-2 shrink-0">
                S
              </h2>
              <h4 className="text-[10px] text-[#1f0221]">
                <span className="font-bold">Situation:</span> Describe the
                context in which you perform a task or faced a challenge.
              </h4>
            </div>

            <div className="flex">
              <h2 className="text-xl text-[#8c4091] font-extrabold mr-2 shrink-0">
                T
              </h2>
              <h4 className="text-[10px] text-[#1f0221]">
                <span className="font-bold">Task:</span> Explain your
                responsibilities or what you had to accomplish.
              </h4>
            </div>

            <div className="flex">
              <h2 className="text-xl text-[#8c4091] font-extrabold mr-2 shrink-0">
                A
              </h2>
              <h4 className="text-[10px] text-[#1f0221]">
                <span className="font-bold">Action:</span> Describe the steps
                you took to address the situation.
              </h4>
            </div>

            <div className="flex">
              <h2 className="text-xl text-[#8c4091] font-extrabold mr-2 shrink-0">
                R
              </h2>
              <h4 className="text-[10px] text-[#1f0221]">
                <span className="font-bold">Result:</span> Share the outcome of
                your actions and what you learned.
              </h4>
            </div>
          </div>

          <div className="w-60 h-50 border border-dashed p-1">
            <h2 className="font-bold text-[#8c4091] text-lg">
              CAR <span className="text-[#1f0221]">Technique</span>
            </h2>
            <h4 className="text-xs text-[#1f0221] leading-tight mb-2">
              CAR is also used to structure responses about your experiences and
              accomplishments.
            </h4>

            <div className="flex">
              <h2 className="text-xl text-[#8c4091] font-extrabold mr-2 shrink-0">
                C
              </h2>
              <h4 className="text-[10px] text-[#1f0221]">
                <span className="font-bold">Challenge:</span> What was the
                challenge or problem you faced?
              </h4>
            </div>

            <div className="flex">
              <h2 className="text-xl text-[#8c4091] font-extrabold mr-2 shrink-0">
                A
              </h2>
              <h4 className="text-[10px] text-[#1f0221]">
                <span className="font-bold">Action:</span> What action did you
                take to overcome the challenge?
              </h4>
            </div>

            <div className="flex">
              <h2 className="text-xl text-[#8c4091] font-extrabold mr-2 shrink-0">
                R
              </h2>
              <h4 className="text-[10px] text-[#1f0221]">
                <span className="font-bold">Result:</span> What was the result
                or impact of your actions?
              </h4>
            </div>
          </div>
          <div className="w-60 h-50 border border-dashed p-1">
            <h2 className="font-bold text-[#8c4091] text-lg">
              SOAR <span className="text-[#1f0221]">Framework</span>
            </h2>
            <h4 className="text-xs text-[#1f0221] leading-tight mb-1">
              Used to articulate successful outcomes, particularly useful in
              strategic or leadership role.
            </h4>

            <div className="flex">
              <h2 className="text-xl text-[#8c4091] font-extrabold mr-2 shrink-0">
                S
              </h2>
              <h4 className="text-[10px] text-[#1f0221]">
                <span className="font-bold">Situation:</span> Outline the
                scenario you were in.
              </h4>
            </div>

            <div className="flex">
              <h2 className="text-xl text-[#8c4091] font-extrabold mr-2 shrink-0">
                O
              </h2>
              <h4 className="text-[10px] text-[#1f0221]">
                <span className="font-bold">Objective:</span> Describe your
                objective in that situation
              </h4>
            </div>

            <div className="flex">
              <h2 className="text-xl text-[#8c4091] font-extrabold mr-2 shrink-0">
                A
              </h2>
              <h4 className="text-[10px] text-[#1f0221]">
                <span className="font-bold">Action:</span> Describe the steps
                you took to address the situation.
              </h4>
            </div>

            <div className="flex">
              <h2 className="text-xl text-[#8c4091] font-extrabold mr-2 shrink-0">
                R
              </h2>
              <h4 className="text-[10px] text-[#1f0221]">
                <span className="font-bold">Result:</span> Highlight the result
                and learning from those actions.
              </h4>
            </div>
          </div>
        </div>
        <div className="flex gap-2 justify-center mb-4 ">
          <div className="w-80 h-40 border border-dashed flex p-2 ">
            <div className="w-40">
              <h2 className="font-bold text-[#1f0221] text-lg">
                Five<span className=" text-[#8c4091]"> Ws</span>
              </h2>
              <h4 className="text-xs text-[#1f0221] leading-tight">
                This method helps in providing thorough and detailed response{" "}
                <br /> especially for technical or complex questions.
              </h4>
            </div>
            <div className="w-40 overflow-hidden break-words leading-tight text-clip">
              <h2 className="font-bold text-[#1f0221] text-md">It covers:</h2>
              <h4 className="text-[11px] text-[#1f0221] leading-tight">
                <span className="font-bold">Who:</span> Who was involved or
                impacted?
              </h4>
              <h4 className="text-[11px] text-[#1f0221] leading-tight">
                <span className="font-bold">What:</span> What happened or what
                was the task?
              </h4>
              <h4 className="text-[11px] text-[#1f0221] leading-tight">
                <span className="font-bold">When:</span> When did it take place?
              </h4>
              <h4 className="text-[11px] text-[#1f0221] leading-tight">
                <span className="font-bold">Where:</span> Where did it take
                place?
              </h4>
              <h4 className="text-[11px] text-[#1f0221] leading-tight">
                <span className="font-bold">Why:</span> Why did you choose a
                perticular approach?
              </h4>
            </div>
          </div>
          <div className="w-80 h-40 border border-dashed p-2">
            <h2 className="font-bold text-[#1f0221] text-lg">
              Problem-Action-Result
              <span className=" text-[#8c4091]"> (PAR)</span>
            </h2>
            <div className="flex">
              <div className="w-50">
                <h4 className="text-xs text-[#1f0221] leading-tight">
                  This Framework can help in discussing the problems you have
                  solved and the value you added
                </h4>
              </div>
              <div>
              <h2 className="font-bold text-[#1f0221] text-md">It covers:</h2>
              <h4 className="text-[11px] text-[#1f0221] leading-tight">
                <span className="font-bold">Problem:</span> Identify a problem you encountered.
              </h4>
              <h4 className="text-[11px] text-[#1f0221] leading-tight">
                <span className="font-bold">Action:</span> Explain the steps you took to solve the problem.
              </h4>
              <h4 className="text-[11px] text-[#1f0221] leading-tight">
                <span className="font-bold">Result:</span> Describe the outcome that was returned and what value it added.
              </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
