document.querySelector(".container").innerHTML = "";
    for (let rows = 0; rows < 16; rows++) {
        for (let columns = 0; columns < 16; columns++){
            let div = document.createElement("div");
            document.querySelector(".container").appendChild(div);
        }
    }
