"use client";
import { faqDataMain } from "@/data/faqs";
import React, { useEffect, useRef, useState } from "react";

export default function Accordion1({ faqData = faqDataMain }) {
  const questionRefs = useRef([]);
  const answerRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    questionRefs.current.forEach((el) => {
      el.classList.remove("active");
    });
    answerRefs.current.forEach((el) => {
      el.style.height = "0px";
      el.style.overflow = "hidden";
      el.style.transition = "all 0.5s ease-in-out";
      el.style.marginBottom = "0px";
    });
    if (currentIndex !== -1) {
      questionRefs.current[currentIndex].classList.add("active");
      const element = answerRefs.current[currentIndex];
      element.style.height = element.scrollHeight + "px";
      element.style.overflow = "hidden";
      element.style.transition = "all 0.5s ease-in-out";
      element.style.marginBottom = "1.55em";
    }
  }, [currentIndex]);

  return (
    <dl className="toggle">
      {faqData.map((item, index) => (
        <React.Fragment key={index}>
          <dt
            onClick={() => {
              setCurrentIndex(index);
            }}
          >
            <a ref={(el) => (questionRefs.current[index] = el)}>
              {item.question}
            </a>
          </dt>
          <dd
            ref={(el) => (answerRefs.current[index] = el)}
            className="black faqAnswer"
          >
            {item.answer}
          </dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
