//Simple fade-in animation
document.addEventListener("DOMContentLoaded", () =>{
    const cards = document.querySelectorAll(".glass-card");

    cards.forEach((card, i) =>{
        setTimeout(() =>{
            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";
        }, 200*i);
    });
});