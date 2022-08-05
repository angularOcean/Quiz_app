import React, { useState } from "react";
import DropDown from "./DropDown";

const Menu: React.FC = (): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectCategory, setSelectCategory] = useState<string>("");
  const categories = () => {
    return ["Any Category", "General Knowledge", "Entertainment: Books", 
    "Entertainment: Film", "Entertainment: Music",
    "Entertainment: Musicals and Theatres", "Entertainment: Television",
    "Entertainment: Video Games",
    "Entertainment: Board Games",
    "Science & Nature",
    "Science: Computers",
    "Science: Mathematics",
    "Mythology",
    "Sports",
    "Geography",
    "History",
    "Politics",
    "Art",
    "Celebrities",
    "Animals",
    "Vehicles",
    "Entertainment: Comics",
    "Science: Gadgets",
    "Entertainment: Japanese Anima & Manga",
    "Entertainment: Cartoon & Animations"
    ];
  };


  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };


  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };


  const categorySelection = (city: string): void => {
    setSelectCategory(city);
  };

  return (
    <>
      <div className="announcement">
        <div>
          {selectCategory
            ? `You selected ${selectCategory} for your trivia category`
            : "Select your trivia quiz category"}
        </div>
      </div>
      <button
        className={showDropDown ? "active" : undefined}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div>{selectCategory ? "Select: " + selectCategory : "Select ..."} </div>
        {showDropDown && (
          <DropDown
            category={categories()}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            categorySelection={categorySelection}
          />
        )}
      </button>
    </>
  );
};

export default Menu;
