// src/pages/Play.jsx
import QuestionCard from '../components/QuestionCard';
import questions from '../data/questions.json';
import { useState } from 'react';

function Play1() {
  console.log("Play 1 page loaded")
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const current = questions[currentQuestionIndex];

  const handleSelect = (option) => {
    if (option.label === current.correctAnswer) {
      alert("Correct");
    } else {
      alert("Wrong");
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("Quiz Finished!");
    }
  };

  return (
    <QuestionCard
      question={current.question}
      options={current.options}
      onSelect={handleSelect}
    />
  );
}

export default Play1;
