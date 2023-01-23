import "./style.css";
import MaterialInputView from "./ui/MaterialInput/MaterialInputView";
import SelectMenuController from "./ui/SelectMenu/SelectMenuController";
import SelectMenuView from "./ui/SelectMenu/SelectMenuView";

document.querySelector<HTMLDivElement>("#app")!.innerHTML += SelectMenuView;
document.querySelector<HTMLDivElement>("#app")!.innerHTML += MaterialInputView;
SelectMenuController();
