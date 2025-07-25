

function QuestionCard({ question, options, onSelect }) {
  return (
    <div className="question-card" >
      <h2 className="question-title" >{question}</h2>
      <div className="options-grid">
        {options.map((option, index) => (
          <label key={index} className="option-label">
            <input
              type="radio"
              name="quiz-option"
              value={option.label}
              onChange={() => onSelect(option)}
              className="radio-input"
            />
            <img
              src={`${import.meta.env.BASE_URL}${option.image}`}
              alt={option.label}
              className="option-image"
            />
          </label>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;