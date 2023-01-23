import SelectMenuController from "./ui/SelectMenu/SelectMenuController";
import SelectMenuView from "./ui/SelectMenu/SelectMenuView";

import MaterialInputView from "./ui/MaterialInput/MaterialInputView";
import MaterialInputController from "./ui/MaterialInput/MaterialInputController";

import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML += SelectMenuView;
document.querySelector<HTMLDivElement>("#app")!.innerHTML += MaterialInputView;
SelectMenuController();
MaterialInputController();
