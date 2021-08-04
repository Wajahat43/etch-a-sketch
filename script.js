

let bgColor = "rgb(0,0,0)";
let isRainbow = false;

function createGrid(column){
    const container = document.querySelector(".sketch-container");
    container.style.cssText = `display:grid;grid-template-columns:repeat(${column},1fr);grid-template-rows:repeat(${column} ,1fr);`;
    for (c = 0; c < (column); c++) {

        for(let j =0;j<column;j++){
            let cell = document.createElement("div");
            cell.innerText = (j + 1);
            container.appendChild(cell).className = "grid-item";
        }
       
      };
}

createGrid(4);

const gridItem = document.querySelectorAll(".grid-item");
//gridItem.forEach(item => item.style.cssText = "border:1px solid black;")
gridItem.forEach(item => item.addEventListener("mouseover", function(event){
    if(isRainbow ===true){
        bgColor = assignRandomRGB();
        event.target.style.cssText = `background-color:${bgColor};`;
    }
    else{
        event.target.style.cssText = `background-color:${bgColor};`;
    }
    
}))

const menu = document.querySelector(".menu");
menu.addEventListener('click', function(event){
    changeByValue(event.target.id);
})

function changeByValue(id){
    if(id==="color-mode"){
        isRainbow = false;
        bgColor = "rgb(0,0,0)";
    } else if(id === "rainbow-mode"){
        isRainbow = true;
    } else if(id === "eraser-mode"){
        isRainbow = false;
        bgColor = "transparent";
    } else if(id === "clear"){
        makeGridTransparent();
    }
}

function makeGridTransparent(){
    const clearGridItem = document.querySelectorAll(".grid-item");
    clearGridItem.forEach(item => item.style.cssText = "background-color:transparent;")
}

function assignRandomRGB(){
    var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = num >> 8 & 255;
  var b = num & 255;
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}