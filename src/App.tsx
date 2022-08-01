//CS361 Quiz Game Project
//Herakles Li
//To run app, cd into src where App.tsx is and run: npm start

import React, {useState, Component} from 'react';
import { ReactDOM } from 'react';

//components import of question card and questions from API
import QuestionCard from './components/QuestionCard';
import { fetchQuestions, Difficulty, QuestionState } from './API';

//navigation bar
import NavigationBar from './components/Navbar';

import { GlobalStyle } from './App.styles';

export type AnswerObject=  {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string; 
}

const Total_Questions = 10;

const navigation = {
  brand: { name: "Navigation Bar", to: "/" },
  links: [
    { name: "Reset", to: "/" },
    { name: "Quiz Options", to: "/options" },
    { name: "About", to: "/about" },
    { name: "High Scores", to: "/scores" },
    { name: "Review Questions", to: "/review" },
  ]
}

const App = () => {
  //create use states
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const[number, setNumber] = useState(0)
  const[userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const[score, setScore] = useState(0)
  const[gameOver, setGameOver] = useState(true)

  console.log(fetchQuestions(Total_Questions, Difficulty.EASY));

  const startQuiz = async() => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuestions (
      Total_Questions,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([])
    setNumber(0);
    setLoading(false)

  }

  const checkAnswer =(e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      //answer from pressing button in key answers.map, from question card component
      const answer = e.currentTarget.value;

      const correct = questions[number].correct_answer === answer;

      if (correct)  setScore(prev => prev +1);

      const answerObject = {
        question: questions[number].question,
        answer,
        correct, 
        correctAnswer: questions[number].correct_answer,

      }
      setUserAnswers(prev => [...prev, answerObject])
    }
  }

  const nextQuestion =() => {
    const nextQuestion = number + 1;
    if (nextQuestion === Total_Questions) {
      setGameOver(true)
    } else {
      setNumber(nextQuestion)
    }
  }

  const { brand, links } = navigation;
  
  return (
    <>
    <GlobalStyle/>
    <div className="App">
      <h1>Quiz Game</h1>
      <img style={{width: 200,
        height: 200}  }
        src='https://i.imgur.com/eTtd3GI.jpg'

      alt = "Test Image"/>
      <div className="App">
        <NavigationBar brand={brand} links={links} />
      </div>

      {gameOver || userAnswers.length === Total_Questions ? (
        <button className='start' onClick={startQuiz}>
        Start New Game
      </button>
      ) : null
      }

      {!gameOver ?
        <p className='score'>Score:{score}</p> : null
      }
      
      {loading && <p>Loading Questions...</p>}
      
      
   {!loading && !gameOver && (
        <QuestionCard
        questionNum={number + 1}
        totalQuestions = {Total_Questions}
        question={questions[number].question}
        answers = {questions[number].answers}
        userAnswer = {userAnswers ? userAnswers[number] : undefined}
        callback = {checkAnswer}
      />
   )}
      
    {!gameOver && !loading && userAnswers.length == number +1 && number !== Total_Questions -1 ? (
      <button className='next' onClick={nextQuestion}>
        Next Question
      </button>
    ): null
    }
      
    </div>
    </>
  );
}

export default App;

