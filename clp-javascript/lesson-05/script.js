const button = document.querySelector(".button");

const handleClick = (event) =>{
    console.log(event.target);
};

button.addEventListener("click", handleClick);


