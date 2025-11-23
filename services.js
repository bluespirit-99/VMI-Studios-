//Services Data (expand any time)

const servicesList = [
    {
        title: "Branding and Identity",
        desc: "Logo design, color kit, motion elements and visual voice for brands that want to stand out",
        tag: "Brand Design"
    },

    {
        title: "Video Production",
        desc: "Ads, promos, intros, event coverage and full post production with clean color and sound work",
        tag: "Video"
    },

    {
        title: "Creative Digital Design",
        desc: "Posters, covers, banners and digital layouts built for creators and businesses",
        tag: "Design"
    },

    {
        title: "Studio Consulting",
        desc: "Creative direction, content planning and style development for brands that want to grow",
        tag: "Consulting"
    },

    {
        title: "Content Strategy",
        desc: "Simple, clear posting systems to keep your audience engaged without burnout",
        tag: "Strategy"
    },

    {
        title: "AI Enhanced Visuals",
        desc: "Machine assisted visuals for concept frames, storyboarding and design previews",
        tag: "AI Lab"
    },
];

//Render Cards
const servicesGrid = document.getElementById("servicesGrid");

function loadServices() {
    servicesGrid.innerHTML = "";
    servicesList.forEach(
        s => {
            const card = document.createElement("div");
            card.className = "service-card glass";

            card.innerHTML = 
        `<h3>${s.title}</h3>
        <p>${s.desc}</p>
        <span class = "tag">${s.tag}</span>`;

        card.addEventListener("mouseenter", () => {
            card.style.setProperty("--accent", "#7bb4ff");
        });

        card.addEventListener("mouseleave", () =>{
            card.style.removeProperty("--accent");
        });

        servicesGrid.appendChild(card);
        });
}

//Visual FX toggle (fun little touch)

const fxBtn = document.getElementById("toggleFx");
let fxOn = true;

fxBtn.addEventListener("click", () => {
    fxOn = !fxOn;
    document.body.style.transition = ".4s ease";

    if (fxOn) {
        document.body.style.filter = "none";
        fxBtn.textContent = "FX";
    }

    else {
        document.body.style.filter = "grayscale (30%) brightness(90%)";
        fxBtn.textContent = "Reset";
    }
});

loadServices();