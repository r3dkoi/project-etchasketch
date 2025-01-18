document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    container.innerHTML= "";
    for (let rows = 0; rows < 16; rows++) {
        for (let columns = 0; columns < 16; columns++){
            let div = document.createElement("div");
            div.classList.add("grid-item");
            container.appendChild(div);
        }
    }
    container.addEventListener("mouseover", function (event) {
        const div = event.target.closest(".grid-item");
        if (div) {
            div.style.background = "red";
        }
    });
});

