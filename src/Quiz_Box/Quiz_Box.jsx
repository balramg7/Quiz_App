import React, { useState} from "react";
import styles from "./Quiz_Box.module.css";
import Time from "../Time";
import Game from "../Game/Game";

const Quiz_Box = () => {
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];

  
  return (
    <div className={styles.quiz_content}>
      {timeOut ? (
        <h1 className={styles.endText}>You earned: {earned}</h1>
      ) : (
        <>
          <div className={styles.top}>
            <div className={styles.timer}>
              <Time setTimeOut={setTimeOut} questionNumber={questionNumber} />
            </div>
          </div>
          <div className={styles.bottom}>
            <Game
              data={data}
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
              setTimeOut={setTimeOut}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz_Box;
