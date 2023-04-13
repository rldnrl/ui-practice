import { css } from "@emotion/css";

const menuItemStyle = {
  option: css`
    display: flex;
    align-items: center;
    height: 50px;
    cursor: pointer;
    padding: 0 16px;
    border-radius: 8px;
    background-color: white;
    &:hover {
      background-color: #f2f2f2;
    }
  `,
  optionText: css`
    font-size: 18px;
    color: #333;
  `,
};

export default menuItemStyle;
