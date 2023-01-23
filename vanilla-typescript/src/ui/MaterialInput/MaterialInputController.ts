const MaterialInputController = () => {
  const toggle = document.querySelector(".toggle");
  const input = document.querySelector("input") as HTMLInputElement;

  toggle?.addEventListener("click", () => {
    if (input.type === "password") {
      input.type = "text";
      toggle.classList.replace("bx-hide", "bx-show");
    } else {
      input.type = "password";
      toggle.classList.replace("bx-show", "bx-hide");
    }
  });
};

export default MaterialInputController;
