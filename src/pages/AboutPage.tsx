
import { GlobalStyle, Wrapper } from "../App.styles";

const AboutPage = () =>{



    return (
        <>
        <GlobalStyle/>
        <Wrapper>
        <div className="App">
    
        <h2>About</h2>
        <p>This is a trivia quiz game that generates random questions utilizing the question bank 
          from The Open Trivia Database (www.opentdb.com). This project was designed by Herakles Li.  
          
          <br></br>
          <br></br> 
          This website was built with the following resources and guides referenced:
          <br></br>
          <li><b>Trivia Database API</b>: https://opentdb.com/api_config.php</li>
          <li><b>Quiz Logic:</b> https://github.com/weibenfalk/react-quiz</li>
          <li><b>Navigation Bar</b>:https://garrett-txt.medium.com/simple-navbar-component-using-react-typescript-and-styled-components-54e357e2cbcb</li>
          <li><b>React Page Routing:</b> https://github.com/joeythelantern/React-Router-6-Example</li>
          <li><b>Working with Radio Buttons:</b> https://www.kindacode.com/article/react-typescript-working-with-radio-button-groups/</li>
          <li><b>Working with Dropdown Menus:</b> https://codesandbox.io/s/jt4dh?file=/src/components/DropDown.tsx:0-1120</li>

          </p>
      
          <br>
          </br>
          

          <br></br>
        
        </div>
        </Wrapper>
        </>
      );
    
}



export default AboutPage