/*TODO*/

//create user modification at left of the screen
const btnGridSize = document.createElement("input");
const btnResetGrid = document.createElement("input");

const btnGridSizeType = btnGridSize.type = "button";
const btnGridSizeID = btnGridSize.id = "btnGridSize";
const btnGridSizeValue = btnGridSize.value = "Grid Size";
const btnGridSizeOnClick = btnGridSize.onclick = btnPrompt;

const btnResetGridType = btnResetGrid.type = "button";
const btnResetGridID = btnResetGrid.id = "resetGrid";
const btnResetGridValue = btnResetGrid.value = "Clear Grid";
const btnResetGridOnClick = btnResetGrid.onclick = btnReset;


const divBtns = document.getElementById("divButtons");
divBtns.appendChild(btnGridSize);
divBtns.appendChild(btnResetGrid);



//grab and style the container
const container = document.getElementById("containerDiv");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "500px";
container.style.height = "500px";
//container.style.gridTemplateColumns = "auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto"; //adjust this on how big they want the grid, move to grid creation
//container.style.flexBasis = "25%";//work on this to get the divs to wrap based on the number of grid items, research flex-basis;
container.style.borderTop = "1px solid";
container.style.borderLeft = "1px solid";

//generate initial 16x16 grid
for(var i = 0; i < 256; i++)
        {
            var div = document.createElement("div");
            div.className = "gridItem";
            div.style.flexBasis = 100 / 16 + "%";
            //div.style.borderRight = "1px solid";
            //div.style.borderBottom = "1px solid";
            
            //use a button to toggle between black and colors, then put onmouseover into an if else statement
            div.onmouseover = mouseOver;

            container.appendChild(div);
        }


//hover function to change gridItems to black
function mouseOver()
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
        document.getElementById("errorText").innerHTML = text;
    }
    else
    {
        //delete existing grid
        while (container.hasChildNodes()){
            container.removeChild(container.children[0]);
        }
        
        //adjust the size of the grid
        for(var i = 0; i < (gridSize * gridSize); i++)
        {
            container.style.gridTemplateColumns = "auto ".repeat(gridSize);
            var div = document.createElement("div");
            div.className = "gridItem";
            div.style.flexBasis = 100 / gridSize + "%";
            //div.style.width = "16px";
            //div.style.height = "16px";
            //div.style.borderRight = "1px solid";
            //div.style.borderBottom = "1px solid";
            

            div.onmouseover = mouseOver;

            container.appendChild(div);
        }
    }
    

}

//reset grid to white
function btnReset()
{
    var gridItems = document.getElementsByClassName("gridItem");
    for (var i = 0; i < gridItems.length; ++i)
    {
        gridItems[i].style.backgroundColor = "white";
    }
}