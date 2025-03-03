const container = document.querySelector(".container");

const buttons = document.querySelector(".buttons");

function createGrids(numberOfGrids){

    for(let i = 0; i < numberOfGrids * numberOfGrids;i++){
        const grid = document.createElement('div');
        grid.style.width = `calc(480px/${numberOfGrids})`
        grid.style.height = `calc(480px/${numberOfGrids})`
        grid.classList.add("grids");
        container.appendChild(grid);
    }
}


createGrids(20);


function setSize(){
    let size = prompt("Please enter the number grids in in the row and column?")
    if(isNaN(size)){
        size = 20;
    }else if(Math.abs(size) > 100){
        size = 100;
    }
    container.replaceChildren();
    createGrids(Math.abs(size));

}


function reset(){
    console.log("Function still to be made");
}

buttons.addEventListener('click', (event) =>{
    let id = event.target.id;
    switch(id){
        case 'set-size':
            setSize();
            break;
        case 'reset':
            reset();
            break;
        default:
            console.log(`Error, there is no lister for button id=${id}`);
    }
})