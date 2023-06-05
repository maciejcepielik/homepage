const button = document.querySelector(".js-button")
const body = document.body
const themeName = document.querySelector(".js-button--themeName")

button.addEventListener("click", () => {
    body.classList.toggle("body--dark");

    themeName.innerText = body.classList.contains("body--dark")
    ? "Jasne"
    : "Ciemne"
})