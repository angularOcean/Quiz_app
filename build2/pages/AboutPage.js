"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const App_styles_1 = require("../App.styles");
const navigation = {
    brand: { name: "Home", to: "/" },
    links: [
        { name: "Quiz Options", to: "/options" },
        { name: "About", to: "/about" },
    ]
};
const AboutPage = () => {
    const { brand, links } = navigation;
    return (<>
        <App_styles_1.GlobalStyle />
        <App_styles_1.Wrapper>
        <div className="App">
          <h1>Random Quiz Game</h1>
    
           <img style={{ width: 450,
            height: 300
        }} src='https://i.imgur.com/Twtaa4Q.jpg' //https://imgur.com/a/7viyD9F
     alt="Dog Image"/> 
    
    
        <h2>About</h2>
        <p>This is quiz game was built by Herakles Li with the reference to the following resources</p>
          
        
        </div>
        </App_styles_1.Wrapper>
        </>);
};
exports.default = AboutPage;
