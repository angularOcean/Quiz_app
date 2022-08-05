import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1100px;
  background: #e8e8e6;
  border-radius: 10px;
  border: 3px solid #f5c400;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  p {
    font-size:1.5rem;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    user-select: none;
    font-size: 1.2rem;

    background: ${({ correct, userClicked }) =>
      correct
        ? 'linear-gradient(90deg, #56FFA5, #59BC88)'
        : !correct && userClicked
        ? 'linear-gradient(90deg, #FF5756, #C16888)'
        : 'linear-gradient(50deg, #000000, #535454)'};
    border: 3px solid #ffffff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;