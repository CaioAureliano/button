const buttonElement = document.getElementById("button");

const buttonElementClickListener = () => {

    const mainElement = document.getElementById("main");

    const newButton = document.createElement("button");
    newButton.textContent = "New button";

    mainElement.appendChild(newButton);

    const newButtonElementClickListener = (e) => alert(e.target.textContent);
    newButton.addEventListener("click", newButtonElementClickListener);
};

buttonElement.addEventListener("click", buttonElementClickListener);
