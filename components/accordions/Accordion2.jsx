"use client";
import { faqDataMain } from "@/data/faqs";
import React, { useRef } from "react";

export default function Accordion2({ faqData = faqDataMain }) {
  const questionRefs = useRef([]);
  const answerRefs = useRef([]);

  const toggleAccordions = (i) => {
    if (questionRefs.current[i].classList.contains("active")) {
      questionRefs.current[i].classList.remove("active");
      const element = answerRefs.current[i];
      element.style.height = "0px";
      element.style.overflow = "hidden";
      element.style.transition = "all 0.5s ease-in-out";
      element.style.marginBottom = "0px";
    } else {
      questionRefs.current[i].classList.add("active");
      const element = answerRefs.current[i];
      element.style.height = element.scrollHeight + "px";
      element.style.overflow = "hidden";
      element.style.transition = "all 0.5s ease-in-out";
      element.style.marginBottom = "1.55em";
    }
  };

  return (
    <dl className="toggle">
      {faqData.map((item, index) => (
        <React.Fragment key={index}>
          <dt
            onClick={() => {
              toggleAccordions(index);
            }}
          >
            <a ref={(el) => (questionRefs.current[index] = el)}>
              {item.question}
            </a>
          </dt>
          <dd
            ref={(el) => (answerRefs.current[index] = el)}
            className="black faqAnswer"
            style={{
              height: "0px",
              overflow: "hidden",
              marginBottom: "0px",
              transition: "all 0.5s ease-in-out",
            }}
          >
            {item.answer}
          </dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
