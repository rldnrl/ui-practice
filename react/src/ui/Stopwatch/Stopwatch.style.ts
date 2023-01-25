import { css } from "@emotion/css";

const stopwatchContainer = css`
  color: black;
  user-select: none;
`;

const time = css`
  height: 100px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.09);
  padding: 0 10px;

  > span {
    width: 100px;
    text-align: center;
    font-size: 50px;
    font-weight: 500;
  }

  > span.colon {
    width: 10px;
  }
`;

const buttonGroup = css`
  text-align: center;
  margin-top: 20px;
`;

const button = css`
  padding: 6px 16px;
  outline: none;
  border: none;
  margin: 0 5px;
  color: black;
  background-color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.09);
`;

export const stopwatchStyle = {
  stopwatchContainer,
  time,
  buttonGroup,
  button,
};
