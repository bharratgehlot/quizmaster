// src/pages/Play.jsx
import QuestionCard from '../components/QuestionCard';
import questions from '../data/questions.json';
import { useState } from 'react';

function Play2() {
    console.log("Play 2 page loaded")
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
      alert("Quiz 2 Finished!");
    }
  };

  return (
    <QuestionCard
      question={`[Quiz 2] ${current.question}`}
      options={current.options}
      onSelect={handleSelect}
    />
  );
}

export default Play2;
