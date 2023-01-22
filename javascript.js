//TODO -- create flex container for the buttons; Create Reset Grid Function(cycle through the GridItem1-256 divs to re-assign them to background-color: white)

//create user modification at left of the screen
const btnGridSize = document.createElement("input");
const btnResetGrid = document.createElement("input");

const btnGridSizeType = btnGridSize.type = "button";
const btnGridSizeID = btnGridSize.id = "btnGridSize";
const btnGridSizeValue = btnGridSize.value = "Testing";
const btnGridSizeOnClick = btnGridSize.onclick = btnPrompt;

const btnResetGridType = btnResetGrid.type = "button";
const btnResetGridID = btnResetGrid.id = "resetGrid";
const btnResetGridValue = btnResetGrid.value = "Reset Grid";
//const btnResetGridOnClick = btnResetGrid.onclick = btnReset;


const divBtns = document.getElementById("divButtons");
divBtns.appendChild(btnGridSize);
divBtns.appendChild(btnResetGrid);

//grab and style the container
const container = document.getElementById("containerDiv");
container.style.display = "inline-grid";
container.style.gridTemplateColumns = "auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto";
container.style.borderTop = "1px solid";
container.style.borderLeft = "1px solid";

//create all 16x16 divs and assign them a class of gridItem
for(var i = 0; i < 256; i++)
{
    var div = document.createElement("div");
    div.id = "gridItem" + (i + 1);
    div.style.width = "16px";
    div.style.height = "16px";
    div.style.borderRight = "1px solid";
    div.style.borderBottom = "1px solid";

    var gridItem = "gridItem" + (i + 1);
    var gridItemID = document.getElementById(gridItem);

    div.onmousedown = mouseDown;
    //div.onmouseleave = mouseOut;

    

    container.appendChild(div);
}

//hover function to change gridItems to black
function mouseDown()
{
    this.style.backgroundColor = "black";
}

//button function
function btnPrompt()
{
    var text;
    var gridSize = prompt("Enter the size of the grid up to 100", "16");
    if (gridSize == null || gridSize <= 0)
    {
        text = "Enter a value between 1 and 100";
    }
    else
    {
        //adjust the size of the grid
        text = "Success";
    }
    document.getElementById("errorText").innerHTML = text;

}

//reset grid function
function resetGrid()
{

}