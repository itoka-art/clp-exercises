const alertElement = document.querySelector(".alert");

const result = alertElement.classList.contains("disactive");

console.log(result);


setTimeout(() => {
    alertElement.classList.add("disactive");
}, 3000);

