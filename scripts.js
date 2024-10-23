// JavaScript Functions
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

function openLightbox() {
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function currentSlide(n) {
    const img = document.getElementById("lightbox-img");
    img.src = document.querySelectorAll(".gallery img")[n - 1].src; // Get the source of the clicked image
}
