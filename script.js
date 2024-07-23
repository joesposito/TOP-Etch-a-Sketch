function createCanvas(){
    numPixels = parseInt(document.getElementById("pixelsInput").value);

    console.log(numPixels);

    if(isNaN(numPixels)){
        numPixels = 16;
    }else if(numPixels > 100){
        numPixels = 100;
    }

    let canvas_size_label = document.getElementById("canvas_size_label");
    canvas_size_label.textContent = `Canvas Size: ${numPixels} x ${numPixels}`;

    let body_div = document.getElementById("body_div");
    if(body_div !== null){
        console.log(body_div);
        body_div.remove();
    }

    // HTML Creation
    body_div = document.createElement("div");
    body_div.id = "body_div";
    document.body.appendChild(body_div);

    const canvas_div = document.createElement("div");
    canvas_div.className = "canvas_div";
    body_div.appendChild(canvas_div);

    pixel_size = 1/numPixels * 100; 
    
    // Creates all the pixels
    for(let i = 0; i < numPixels * numPixels; i++){
        const pixel_column = document.createElement("div");

        pixel_column.className = "pixel_column";
        pixel_column.style.width = `${pixel_size}%`;
        pixel_column.style.paddingBottom = `${pixel_size}%`;

        addDrawability(pixel_column);

        canvas_div.appendChild(pixel_column);
    }
}

// I wanted to take all these addListeners out of the createCanvas function for readability
function addDrawability(element){
    element.addEventListener("mouseover", (e) => {
        if(isClicked){
            element.style.backgroundColor = "black";
        }
    });

    element.addEventListener("mousedown", (e) => {
        // This disables the blocked sign bug that happens when dragging
        e.preventDefault();
        element.style.backgroundColor = "black";
        isClicked = true;
    });

    element.addEventListener("mouseup", (e) => {
        isClicked = false;
    });

    element.addEventListener("dragend", (e) => {
        isClicked = false;
    });
}

var isClicked = false;
var numPixels = 16;

createCanvas();