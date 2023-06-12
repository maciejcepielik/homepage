{
    const welcome = () => {
        console.log("Hello!");
    }

    const toggleBackground = () => {
        const body = document.body;
        const themeName = document.querySelector(".js-button--themeName");

        body.classList.toggle("body--dark");

        themeName.innerText = body.classList.contains("body--dark")
            ? "Jasne"
            : "Ciemne"
    }

    const init = () => {
        const button = document.querySelector(".js-button")

        button.addEventListener("click", toggleBackground);

        welcome();
    }

    init();
}