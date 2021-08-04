

let bgColor = "rgb(0,0,0)";
let isRainbow = false;
const container = document.querySelector(".sketch-container");
const mySlider = document.querySelector("#myRange");
createGrid(mySlider.value);

function createGrid(column){
   
    container.style.gridTemplateColumns = `repeat(${column}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${column}, 1fr)`;
    for (c = 0; c < (column); c++) {

        for(let j =0;j<column;j++){
            let cell = document.createElement("div");
            cell.addEventListener('mouseover',function(event){
                if(isRainbow ===true){
                    bgColor = assignRandomRGB();
                    event.target.style.cssText = `background-color:${bgColor};`;
                }
                else{
                    event.target.style.cssText = `background-color:${bgColor};`;
                }
            })
            //cell.innerText = (j + 1);
            container.appendChild(cell);
        }
       
      };
}


//Decide input of the buttons
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


//Slider Functionality
mySlider.oninput = function() {
    const sliderValue = document.querySelector(".sliderValue");
    sliderValue.textContent = `${this.value}x${this.value}`;

    container.innerHTML = '';
    createGrid(parseInt(sliderValue.textContent));
}