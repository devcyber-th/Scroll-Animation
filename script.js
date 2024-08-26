const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);
window.addEventListener("resize", checkBoxes); // Adiciona evento de resize para ajustar o triggerBottom

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 3.5; // Ajuste para dispositivos móveis

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}
