import { css } from "@emotion/css";

const selectMenuStyle = {
  selectMenu: css`
    position: relative;
    width: 380px;
    margin: 0 auto;
  `,
  selectButton: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    height: 55px;
    background-color: white;
    padding: 20px;
    font-size: 18px;
    font-weight: 400;
    border-radius: 8px;
    cursor: pointer;
  `,
  icon: (active: boolean) => css`
    font-size: 25px;
    transition: 0.3s;
    ${active ? "transform: rotate(-180deg);" : ""}
  `,
  options: (active: boolean) => css`
    width: 100%;
    position: absolute;
    top: 55px;
    left: 0;
    padding: 20px;
    margin-top: 10px;
    border-radius: 8px;
    background-color: white;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
    z-index: 10;
    display: ${active ? "block" : "none"};
  `,
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

export default selectMenuStyle;
