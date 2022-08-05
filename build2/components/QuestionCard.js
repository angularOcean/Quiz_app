"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const QuestionCard_styles_1 = require("./QuestionCard.styles");
const QuestionCard = ({ question, answers, callback, userAnswer, questionNum, totalQuestions }) => (<QuestionCard_styles_1.Wrapper>
    <p className='number'>
      Question: {questionNum} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }}/>
    <div>
      {answers.map((answer) => (<QuestionCard_styles_1.ButtonWrapper key={answer} correct={(userAnswer === null || userAnswer === void 0 ? void 0 : userAnswer.correctAnswer) === answer} userClicked={(userAnswer === null || userAnswer === void 0 ? void 0 : userAnswer.answer) === answer}>
          <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }}/>
          </button>
        </QuestionCard_styles_1.ButtonWrapper>))}
    </div>
  </QuestionCard_styles_1.Wrapper>);
exports.default = QuestionCard;
