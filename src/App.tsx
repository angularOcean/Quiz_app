//CS361 Quiz Game Project
//Herakles Li
//To run app, cd into src where App.tsx is and run: npm start

import NavigationBar from './components/Navbar'; 
import { GlobalStyle, Wrapper } from './App.styles';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import OptionPage from './pages/OptionPage';

import React, {useState} from 'react';
import QuestionCard from './components/QuestionCard'; 
import { fetchQuestions, Difficulty, QuestionState } from './API';
import * as zmq from 'zeromq'


export type AnswerObject=  {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string; 
}

const Total_Questions = 10;

const navigation = {
  brand: { name: "Home", to: "/" },
  links: [
    { name: "Quiz Options", to: "/options" },
    { name: "About", to: "/about" },
  ]
}

const App = () => {

  const { brand, links } = navigation;

  //create use states
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const[number, setNumber] = useState(0)
  const[userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const[score, setScore] = useState(-1)
  const[gameOver, setGameOver] = useState(true)

  //set picture URLs
  let defaultPic = 'https://i.imgur.com/ar2WyNI.jpg'
  let failPic = "https://i.imgur.com/6QvWi5Y.jpg"
  let okayPic = "https://i.imgur.com/T9egMZ1.jpg"
  let goodPic = "https://i.imgur.com/ZilR5gd.jpg"
  let perfectPic = "https://i.imgur.com/aEiQMnX.jpg"

  console.log(score)


  console.log(fetchQuestions(Total_Questions, Difficulty.EASY));

  const startQuiz = async() => {
    console.log('Starting new game...')
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
  
  return (
    <>
    <GlobalStyle/>
    <Wrapper>
    <div className="App">
      <h1>Random Quiz Game</h1>


      <div className="nav">
        <NavigationBar brand={brand} links={links} />
        <p ><i>Warning: Do not refresh or navigate to a new page while in the middle of a game, or your progress will be lost.</i></p>
      </div>
      <BrowserRouter>
            <Routes>
                <Route path="about">
                    <Route index element={<AboutPage />} />
                    <Route path=":number" element={<AboutPage />} />
                </Route>
                <Route path="options" element={<OptionPage />} />

            </Routes>
        </BrowserRouter>

      
      <div className="App">


      {gameOver && score == -1 ? (
                <>
                <h3>How much trivia do you know? Give it a test with this quiz game!</h3>
  
                <button className='start' onClick={startQuiz}>
                Start New Game
                </button>
                <br></br>
                <img style={{width: 450,
                height: 300
                }  
                } 
                src = {defaultPic} 
                alt = "Dog Image"
              /> 
                </>
      ) : null
      }

      {gameOver && score == 0  ? (
                <>
                <h2>Game Over!</h2>
                <p>Ooh, a complete whiff, that's rough, better luck next time!</p>

                <button className='start' onClick={startQuiz}>
                Start New Game
                </button>
                <br></br>

                <img style={{width: 300,
                height: 300
                }  
                } 
                src = {failPic} 
                alt = "Dog Image"
              /> 
                </>
      ) : null

      }

      {gameOver && score/Total_Questions > 0 && score/Total_Questions < 0.51  ? (
                <>
                <h2>Game Over!</h2>
                <p>Looks like you got less than half the questions right. Time to brush up on the trivia!</p>

                <button className='start' onClick={startQuiz}>
                Start New Game
                </button>
                <br></br>

                <img style={{width: 440,
                height: 300
                }  
                } 
                src = {okayPic} 
                alt = "Dog Image"
              /> 
                </>
      ) : null
      }

      {gameOver && score/Total_Questions > .51 && score/Total_Questions <1 ? (
                <>
                <h2>Game Over!</h2>
                <p>You got over half the questions right, that's pretty good! Now time to get that perfect score...</p>

                <button className='start' onClick={startQuiz}>
                Start New Game
                </button>
                <br></br>


                <img style={{width: 300,
                height: 300
                }  
                } 
                src = {goodPic} 
                alt = "Dog Image"
              /> 
                </>
      ) : null
      }

      {gameOver && score/Total_Questions ==1  ? (
                <>
                <h2>Game Over!</h2>
                <p>Perfect score!!! Great job, looks like you know your trivia.</p>

                <button className='start' onClick={startQuiz}>
                Start New Game
                </button>
                <br></br>

                <img style={{width: 400,
                height: 300
                }  
                } 
                src = {perfectPic} 
                alt = "Dog Image"
              /> 
                </>
      ) : null
      }
        
      <br></br>


      {!gameOver ?
      <h2 className='score'> Current Score: {score} </h2> : null
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

      {!gameOver && !loading && userAnswers.length == number +1 && number !== Total_Questions +1 ? (
      <button className='next' onClick={nextQuestion}>
      Next Question
      </button>
      ): null
      }
      </div>

          </div>
          </Wrapper>
          </>
        );
      }

export default App;

