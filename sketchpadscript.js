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
    const button = document.querySelector(".reset");
    button.addEventListener("onclick", function () {
        const userRowsInput = prompt("How many rows do you want your sketchpad to have?");
        const userColumnsInput = prompt("How many columns do you want your sketchpad to have?");
        let userRows = parseInt(userRowsInput, 10); 
        let userColumns = parseInt(userColumnsInput, 10);
        // converts user input into integers for following IF

        if ((isNaN(userRows)) || (isNaN(userColumns)) || 
            (userRows > 100) || (userColumns > 100)) {
                
            }

    });
});





