const getcolor = () => {
    const randomNum = Math.floor(Math.random() * 16777215);
    const randomColor = "#" + randomNum.toString(16);
    document.body.style.background = randomColor;
    document.querySelector("h3").innerText = randomColor;
}

document.getElementsByClassName("btn")[0].addEventListener(
    "click", getcolor
)
getcolor();