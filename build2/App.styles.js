"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrapper = exports.GlobalStyle = void 0;
const styled_components_1 = __importStar(require("styled-components"));
//This provides styling for the app
exports.GlobalStyle = (0, styled_components_1.createGlobalStyle) `
    html {
        height: 90%;

    }

    body {
        background-color: #aaa9a9;
        font-family: Arial, Helvetica, sans-serif;
        color:#000000;
        margin: auto;
        padding: 20%;
        font-size: medium;
        background-size: cover;
        display: flex;
        justify-content: center;
    }

    nav {
        color:#030303;
        align-items: center;
        justify-content: center;
        list-style: none;
        list-style-type: none;
        height: 60px;
        font-family: sans-serif;
        font-size: 20px;
        display: flex;
        cursor: pointer;
        background: linear-gradient(180deg, #ffffff, #9ea19d);
        border: 3px solid #fffff;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        height: 40px;
        margin: 20px 10px;
        padding: 10 40px;
        li {
            display:inline;
            list-style-type: none;
            padding: 10px 10px;
        }
      }

    *{
        box-sizing: border-box;
        font-family: sans-serif; 
    }
`;
exports.Wrapper = styled_components_1.default.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    >  p {
        color: #fff;
    }

    .score {
        color: #000000;
        font-size = 4rem;
        margin: 2;
        align-items: center;
    }

    h1 {
        font-family: Fascinate Inline;
        background-image: linear-gradient(180deg, #fff, #87f1ff);
        font-weight: 400;
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(4px4px #00FFF);
        font-size: 70px;
        text-align: center;
        margin: 20px;
      }
      .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, #FFFFF, #9ea19d);
        border: 6px solid #000000;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0);
        border-radius: 10px;
        height: 40px;
        margin: 30px 0;
        padding: 0 40px;
      }
      .start {
        max-width: 250px;
      }
`;
