document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    container.innerHTML= "";
    for (let rows = 0; rows < 16; rows++) {
        for (let columns = 0; columns < 16; columns++){
            let div = document.createElement("div");
            container.appendChild(div);
        }
    }

});
