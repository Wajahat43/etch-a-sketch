const container = document.querySelector(".sketch-container");

let bgColor = "rgb(0,0,0)"

function createGrid(column){
    container.style.cssText = `display:grid;grid-template-columns:repeat(${column},1fr);grid-template-rows:repeat(${column} ,1fr);`;
    for (c = 0; c < (column); c++) {

        for(let j =0;j<column;j++){
            let cell = document.createElement("div");
            cell.innerText = (j + 1);
            container.appendChild(cell).className = "grid-item";
        }
       
      };
}

createGrid(20);

const gridItem = document.querySelectorAll(".grid-item");
gridItem.forEach(item => item.style.cssText = "border:1px solid black;")
gridItem.forEach(item => item.addEventListener("mouseover", function(event){
    event.target.style.cssText = `background-color:${bgColor};`;
}))