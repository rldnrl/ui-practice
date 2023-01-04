const SelectMenuController = () => {
  const selectMenu = document.querySelector(".select-menu");
  const selectButton = selectMenu!.querySelector(".select-button");
  const selectButtonText = selectButton!.querySelector(
    ".s-button-text"
  ) as HTMLElement;
  const options = selectMenu!.querySelectorAll(".option");

  selectButton!.addEventListener("click", () => {
    selectMenu!.classList.toggle("active");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      const selectedOption = (
        option.querySelector(".option-text") as HTMLElement
      ).innerText;
      selectButtonText.innerText = selectedOption;

      selectMenu!.classList.remove("active");
    });
  });
};

export default SelectMenuController;
