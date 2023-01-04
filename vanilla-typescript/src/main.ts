import "./style.css";
import SelectMenuController from "./ui/SelectMenu/SelectMenuController";
import SelectMenuView from "./ui/SelectMenu/SelectMenuView";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = SelectMenuView;
SelectMenuController();
