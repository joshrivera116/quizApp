import { useState, useEffect, useMemo } from "react";
function App() {
  const questions = useMemo(
    () => [
      { quest: "", answer: "" },
      { quest: "America is the greatest country", answer: "false" },
      { quest: "China has the largest population", answer: "false" },
      {
        quest: "America is the most dangerous country in the world",
        answer: "false",
      },
      { quest: "GTA 6 is the most expensive video game ever", answer: "true" },
      { quest: "The sun is the largest star in the universe", answer: "false" },
      { quest: "Russia is winning the war in Ukraine", answer: "false" },
      { quest: "Bad Bunny is Mexican", answer: "false" },
      { quest: "React is a coding language", answer: "false" },
      { quest: "Basketball is not the hardest sport", answer: "true" },
      { quest: "Spiderman was made by Stan Lee", answer: "true" },
      { quest: "Thanks for playing", answer: "NA" },
    ],
    []
  );
  const [classGreen, setClassGreen] = useState("quiz-card");
  const [classRed, setClassRed] = useState("quiz-card");

  const [questionSelect, setQuestionSelect] = useState(questions[1].quest);
  const [questionNumber, setQuestionNumber] = useState(2);
  const [Answers, setAnswers] = useState("");
  const [score, setScore] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  function handleIsOpen() {
    setIsOpen(!isOpen);
  }
  function restart() {
    setQuestionNumber(2);
    setQuestionSelect(questions[1].quest);
    setScore(0);
  }
  function handleCheck() {
    if (questions.length > questionNumber) {
      setAnswers("true");
      setClassGreen("quiz-card check");
      setClassRed("quiz-card x");
      setTimeout(() => {
        setQuestionNumber(questionNumber + 1);
        setQuestionSelect(questions[questionNumber].quest);
        setAnswers("");
      }, 1000);
    }
  }
  function handleX() {
    if (questions.length > questionNumber) {
      setAnswers("false");
      setClassGreen("quiz-card check");
      setClassRed("quiz-card x");
      setTimeout(() => {
        setQuestionNumber(questionNumber + 1);
        setQuestionSelect(questions[questionNumber].quest);
        setAnswers("");
      }, 1000);
    }
  }
  useEffect(() => {
    if (Answers === questions[questionNumber - 1].answer) {
      setScore((prevScore) => prevScore + 1);
    }
  }, [questionNumber, Answers, questions]);

  return (
    <>
      <div className="App">
        <div class="area">
          <div class="context"></div>
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <button className="close" onClick={handleIsOpen}>
          &times;
        </button>
        {isOpen && (
          <div
            className={
              Answers !== "" && questions[questionNumber - 1].answer !== "NA"
                ? Answers === questions[questionNumber - 1].answer
                  ? `${classGreen}`
                  : `${classRed}`
                : "quiz-card"
              }
              style={{
                top: isOpen ? "0%" : "-100%",
                transition: 'top 0.7s ease',
              }}
          >
            <h1>
              {questions[questionNumber - 1].answer !== "NA"
                ? `QUESTION NUMBER: ${questionNumber - 1}`
                : `SCORE = ${score}/${questionNumber - 2}`}
            </h1>
            <p>{questionSelect}</p>
            <div className="buttons">
              <button className="check-btn btns" onClick={handleCheck}>
                <i class="bx bx-check-circle"></i>
              </button>
              {questions[questionNumber - 1].answer === "NA" ? (
                <i class="bx bx-reset btns restart-btn" onClick={restart}></i>
              ) : (
                ""
              )}
              <button className="x-btn btns" onClick={handleX}>
                <i class="bx bx-x"></i>
              </button>
            </div>
          </div>
        )}
        ;
      </div>
    </>
  );
}

export default App;
