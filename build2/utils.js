"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffleArray = void 0;
const shuffleArray = (array) => 
//This is a simple utility to shuffle the question answers
[...array].sort(() => Math.random() - 0.5);
exports.shuffleArray = shuffleArray;
