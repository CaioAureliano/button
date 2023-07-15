const buttonElement = document.getElementById("button");

const buttonElementClickListener = () => {
    alert("Button event");
};

buttonElement.addEventListener("click", buttonElementClickListener);
