import React, {useState} from "react";
import { GlobalStyle, Wrapper } from "../App.styles";
import Menu from "./Menu";




const OptionPage = () =>{
        // selected Difficulty
    const [selectedDifficulty, setSelectedDifficulty] = useState<String>();

    // This function will be triggered when a radio button is selected
    const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDifficulty(event.target.value);
    };


    return (
        <>
        <GlobalStyle/>
        <Wrapper>
        <div className="App">
    
        <h2>Options</h2>
        <p>Change the settings of the game here. Changes made will impact the next new game.</p>
        <fieldset>
        <legend>Select the total number of questions (between 1 and 50).</legend>
        
        <div>
            <input id="amount" type="number" value="10" min="0" max="50" />
        </div>
        </fieldset>
        <br></br>

        <fieldset>
        <legend>Select your preferred difficulty:</legend>
        <p>
          <input
            type="radio"
            name="difficulty"
            value="Easy"
            id="easy"
            onChange={radioHandler}
          />
          <label htmlFor="coffee">Easy</label>
        </p>

        <p>
          <input
            type="radio"
            name="difficulty"
            value="Medium"
            id="medium"
            onChange={radioHandler}
          />
          <label htmlFor="tea">Medium</label>
        </p>

        <p>
          <input
            type="radio"
            name="difficulty"
            value="Hard"
            id="hard"
            onChange={radioHandler}
          />
          <label htmlFor="pumpkin">Hard</label>
        </p>
      </fieldset>
          
        <br></br>
        <fieldset>
        <Menu />

        </fieldset>
        
        <br></br>

        </div>
        </Wrapper>
        </>
      );
    
}



export default OptionPage