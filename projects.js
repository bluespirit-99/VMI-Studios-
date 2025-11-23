//projects.js - builds gallery, filters, shhuffle and modal interactions

const projects = [
{
    id: "p1",
    title: "VMI Motion Reel 2025",
    type: "video",
    thumb: "assets",
    img:"assets/p1-large.jpg",
    short: "Cinematics, sound design and visual storytelling for brands",
    desc: "A clean blend of cinematics, sound design and visual storytelling. We shaped frames that move hearts and push brand identity",
    meta: ["Video Production", "Cinematography", "2025"],
    url: "#"
},

{
    id: "p2",
    title: "Neon Grid Branding Pack",
    type: "branding",
    thumb: "assets/p2.jpg",
    img: "assets/p2-large.jpg",
    short: "Identity system for creators wanting bold presence",
    desc: "Complete identity system with logo set, color kit, and sound cues for rapid rollout",
    meta: ["Branding", "Design System", "2024"],
    url: "#"
},

{
    id: "p3",
    title: "Urban Night Photography Scene",
    type: "photo",
    thumb: "assets/p3.jpg",
    img: "assets/p3-large.jpg",
    short: "Night shots styled for modern ads and covers",
    desc: "Sharp, dark, deep blue shots taken in busy Lagos nights. Built for covers and promo trailers",
    meta: ["Photography", "Editorial", "2024"],
    url: "#"   
},

{
    id: "p4",
    title: "VMI AI Visual Lab",
    type: "ai",
    thumb: "assets/p4.jpg",
    img: "assets/p4-large.jpg",
    short: "Experimental ML Art for Concept Proofing",
    desc: "Experimental narrarives driven bty machine learning. Concept testing for real shots",
    meta: ["AI", "Experiment", "2025"],
    url: "#"
},

{
    id: "p5",
    title: "Creator Launch Kit",
    type: "branding",
    thumb: "assets/p5.jpg",
    img: "assets/p5-large.jpg",
    short: "Starter kit for creators to go public with style",
    desc: "Promo videos, press photos, content templates and soundtracks for creators launching new brands",
    meta: ["Branding", "Content Kit", "2024"],
    url: "#"
}
];

//render gallery

const galleryEl = document.getElementById("gallery");
const modal = document.getElementById("projectModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalMeta = document.getElementById("modalMeta");
const modalCTA = document.getElementById("modalCTA")
const closeModalBtn = document.getElementById("closeModal");

function renderProjects(list){
    galleryEl.innerHTML = "";
    list.forEach(p=> {
        const card = document.createElement("article");
        card.className = "project-card";
        card.dataset.type = p.type;
        card.innerHTML = `
        <img class = "project-thumb" src = "${p.thumb}" alt= "${p.title}" loading = "lazy"/>
        <div class = "project-meta">
        <h3>${p.title}</h3>
        <p>${p.short}</p>
        </div>
        `;
        card.addEventListener("click", () => openModal(p));
        galleryEl.appendChild(card);
    });

}

//modal
function openModal(p) {
    modalImg.src = p.img;
    modalTitle.textContent = p.title;
    modalDesc.textContent = p.desc;
    modalMeta.innerHTML = p.meta.map(m => `<li>${m}</li>`).join("");
    modalCTA.href = p.url;
    modal.classList.add("show");
}

closeModalBtn.addEventListener("click", () => modal.classList.remove("show"));
modal.addEventListener("click", (e) => {
    if (e.target ===modal) modal.classList.remove("show")
});

//filters

const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.dataset.filter;
        if (filter === "all") renderProjects(projects);
        else renderProjects(projects.filter(p => p.type ===filter));
    });
});

//shuffle

const shuffleBtn = document.getElementById("shuffleBtn");
shuffleBtn.addEventListener("click", () => {
    const shuffled = [...projects].sort(() => Math.random () -0.5);
    renderProjects(shuffled);
    //subtle accent change
    const accent = ["4ea3ff","#7f9cff", "#00c2ff", "$4dd0e1"]
    [Math.floor(Math.random ()*4)];
    document.documentElement.style.setProperty("--accent", accent);
});

//load more (placeholder - in production this would fetch)

const loadMore = document.getElementById("loadMore");
loadMore.addEventListener("click", () => {
    //simulate extra items
    alert ("No more projects in demo. Replace this with an API call to load more");
});

//init
renderProjects(projects);