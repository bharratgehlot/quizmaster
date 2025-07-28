import { Link } from 'react-router-dom';

function Home() {
    console.log("Home page loaded")

  return (
    <div className="container">
      <h1>QuizMaster</h1>
      <p>Guess the right country by its flag!</p>
      <Link to="/play1">
        <button>PLAY</button>
      </Link>
      <br/>
      <Link to="/play2">
      <button>
        PLAY 2
      </button>
      </Link>
    </div>
  );
}

export default Home;
