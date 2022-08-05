"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchQuestions = exports.Difficulty = void 0;
const utils_1 = require("./utils");
var Difficulty;
(function (Difficulty) {
    Difficulty["EASY"] = "easy";
    Difficulty["MEDIUM"] = "medium";
    Difficulty["HARD"] = "hard";
})(Difficulty = exports.Difficulty || (exports.Difficulty = {}));
const fetchQuestions = (amount, difficulty) => __awaiter(void 0, void 0, void 0, function* () {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    //first await fetch itself then await conversion to json
    const data = yield (yield fetch(endpoint)).json();
    console.log(data);
    return data.results.map((question) => (Object.assign(Object.assign({}, question), { answers: (0, utils_1.shuffleArray)([...question.incorrect_answers, question.correct_answer]) })));
});
exports.fetchQuestions = fetchQuestions;
