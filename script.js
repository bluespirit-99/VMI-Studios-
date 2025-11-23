//Simple shuffle effect to randomly change the theme colors

const shuffleBtn = document.getElementById("shuffleBtn");

shuffleBtn.addEventListener("click", function (){
    const randomColors = [
        "#4ea3ff",
        "#00c2ff",
        "#7f9cff",
        "#4dd0e1",
        "#5c6bc0"
    ];

    const randomPick =
    randomColors[Math.floor(Math.random() * 
    randomColors.length)];

    document.documentElement.style.setProperty("--accent", randomPick);
    document.querySelector(".logo").style.color = randomPick;
    document.querySelector(".title").style.color = randomPick;
    shuffleBtn.style.background = randomPick;
});