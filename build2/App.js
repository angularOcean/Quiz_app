"use strict";
//CS361 Quiz Game Project
//Herakles Li
//To run app, cd into src where App.tsx is and run: npm start
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Navbar_1 = __importDefault(require("./components/Navbar")); //navigation bar
const App_styles_1 = require("./App.styles");
const react_router_dom_1 = require("react-router-dom");
const AboutPage_1 = __importDefault(require("./pages/AboutPage"));
const react_1 = __importStar(require("react"));
const QuestionCard_1 = __importDefault(require("./components/QuestionCard")); //components import of question card and questions from API
const API_1 = require("./API");
const Total_Questions = 3;
const navigation = {
    brand: { name: "Home", to: "/" },
    links: [
        { name: "Quiz Options", to: "/options" },
        { name: "About", to: "/about" },
    ]
};
const App = () => {
    const { brand, links } = navigation;
    //create use states
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [questions, setQuestions] = (0, react_1.useState)([]);
    const [number, setNumber] = (0, react_1.useState)(0);
    const [userAnswers, setUserAnswers] = (0, react_1.useState)([]);
    const [score, setScore] = (0, react_1.useState)(0);
    const [gameOver, setGameOver] = (0, react_1.useState)(true);
    const defaultPic = 'https://i.imgur.com/ar2WyNI.jpg';
    let failPic = "https://i.imgur.com/6QvWi5Y.jpg";
    let currentPic = defaultPic;
    function setPic() {
        if (gameOver) {
            console.log("Setting pic to fail");
            currentPic = failPic;
        }
        else {
            console.log("Setting pic to default");
            currentPic = defaultPic;
        }
    }
    console.log((0, API_1.fetchQuestions)(Total_Questions, API_1.Difficulty.EASY));
    const startQuiz = () => __awaiter(void 0, void 0, void 0, function* () {
        console.log('Starting new game...');
        setLoading(true);
        setGameOver(false);
        const newQuestions = yield (0, API_1.fetchQuestions)(Total_Questions, API_1.Difficulty.EASY);
        setQuestions(newQuestions);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false);
    });
    const checkAnswer = (e) => {
        if (!gameOver) {
            //answer from pressing button in key answers.map, from question card component
            const answer = e.currentTarget.value;
            const correct = questions[number].correct_answer === answer;
            if (correct)
                setScore(prev => prev + 1);
            const answerObject = {
                question: questions[number].question,
                answer,
                correct,
                correctAnswer: questions[number].correct_answer,
            };
            setUserAnswers(prev => [...prev, answerObject]);
        }
    };
    const nextQuestion = () => {
        const nextQuestion = number + 1;
        if (nextQuestion === Total_Questions) {
            setGameOver(true);
            console.log("Game Over!");
            setPic();
        }
        else {
            setNumber(nextQuestion);
        }
    };
    return (<>
    <App_styles_1.GlobalStyle />
    <App_styles_1.Wrapper>
    <div className="App">
      <h1>Random Quiz Game</h1>


      <div className="nav">
        <Navbar_1.default brand={brand} links={links}/>
      </div>

      <react_router_dom_1.HashRouter>
+       <react_router_dom_1.Routes>

+         <react_router_dom_1.Route path="/about" element={<AboutPage_1.default />}/>

]
+       </react_router_dom_1.Routes>
+     </react_router_dom_1.HashRouter>

      <div className="App">

        <img style={{ width: 450,
            height: 300
        }} src={currentPic} //https://imgur.com/a/rlDDSLX
     alt="Dog Image"/> 

      {gameOver || userAnswers.length === Total_Questions ? (<button className='start' onClick={startQuiz}>
      Start New Game
      </button>) : null}

      {!gameOver ?
            <p className='score'> Current Score: {score} </p> : null}

      {loading && <p>Loading Questions...</p>}


      {!loading && !gameOver && (<QuestionCard_1.default questionNum={number + 1} totalQuestions={Total_Questions} question={questions[number].question} answers={questions[number].answers} userAnswer={userAnswers ? userAnswers[number] : undefined} callback={checkAnswer}/>)}

      {!gameOver && !loading && userAnswers.length == number + 1 && number !== Total_Questions - 1 ? (<button className='next' onClick={nextQuestion}>
      Next Question
      </button>) : null}
      </div>

          </div>
          </App_styles_1.Wrapper>
          </>);
};
exports.default = App;
