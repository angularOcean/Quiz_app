import React, { useEffect, useState } from 'react';

type DropDownProps = {
  category: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  categorySelection: Function;
};

const DropDown: React.FC<DropDownProps> = ({
  category,
  categorySelection,
}: DropDownProps): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);


  const onClickHandler = (city: string): void => {
    categorySelection(city);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div className={showDropDown ? 'dropdown' : 'dropdown active'}>
        {category.map(
          (category: string, index: number): JSX.Element => {
            return (
              <p
                key={index}
                onClick={(): void => {
                  onClickHandler(category);
                }}
              >
                {category}
              </p>
            );
          }
        )}
      </div>
    </>
  );
};

export default DropDown;
