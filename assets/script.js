function AddEventListenerToCvButton() {
    const curriculumLink = "https://drive.google.com/file/d/19pqHEiFgfk3KVx_rZrWjyfyNAXi1a0jI/view?usp=sharing";
    const cvButton = document.getElementById("cv")
    cvButton.style.cursor = "pointer";
    cvButton.addEventListener("mouseenter", () => { cvButton.innerText = "\u2197" });
    cvButton.addEventListener("mouseleave", () => { cvButton.innerText = "Cv" })
    cvButton.addEventListener("click", () => window.open(curriculumLink, '_blank'))
}

AddEventListenerToCvButton(); 