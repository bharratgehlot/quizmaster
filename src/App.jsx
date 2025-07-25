import QuestionCard from './components/QuestionCard'
import questions from './data/questions.json'
import { useState } from 'react';







// src/App.jsx
function App() {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const current = questions[currentQuestionIndex];

  const handleSelect = (option) => {
    if (option.label === current.correctAnswer) {
      alert("Correct");
    }
    else {
      alert("Wrong")
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
    else
      alert("Quiz Finished!")
  }


  return (
    <>
      <div>
        {!started ? (
          <div className="container">
            <h1  >QuizMaster</h1>
            <p > Guess the right country by its flag!</p>
            <button type="submit" onClick={()=> setStarted(true)}>
              PLAY
            </button>
          </div>
        ) : (
          <QuestionCard
            question={current.question}
            options={current.options}
            onSelect={handleSelect}
          />
        )}
      </div>
    </>
  );
}

export default App;

