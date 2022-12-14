import styled, {createGlobalStyle} from 'styled-components'

//This provides styling for the app

export const GlobalStyle = createGlobalStyle`
    html {
        height: 90%;

    }

    body {
        background-color: #aaa9a9;
        font-family: sans-serif, Helvetica;
        color:#000000;
        margin: auto;
        padding: 20%;
        font-size: medium;
        background-size: cover;
        display: flex;
        justify-content: center;
    }
    h3 {
        text-align: 'center'
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
    }
    button {
        cursor: pointer;
        font-size: 15px;
        background: linear-gradient(180deg, #FFFFF, #9ea19d);
        border: 6px solid #000000;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0);
        border-radius: 10px;
        margin: 30px 0;
        padding: 0 40px;
      }


    *{
        box-sizing: border-box;
        font-family: sans-serif; 
    }
`

export const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    >  p {
        color: #fff;
    }

    .score {
        color: #000000;
        font-size: 24px;
        margin: 2;
        align-items: center;
    }

    h1 {
        font-family: Verdana;
        background-image: linear-gradient(180deg, #686e00, #000000);
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
`
