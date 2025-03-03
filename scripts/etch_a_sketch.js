const container = document.querySelector(".container");

const buttons = document.querySelector(".buttons");

function createGrids(numberOfGrids){
    container.replaceChildren();
    for(let i = 0; i < numberOfGrids * numberOfGrids;i++){
        const grid = document.createElement('div');
        grid.style.width = `calc(100%/${numberOfGrids})`
        grid.style.height = `calc(100%/${numberOfGrids})`
        grid.classList.add("grids");
        container.appendChild(grid);
    }
}

//initial grid creation
createGrids(20);


function setSize() {
    let size;

    do {
        let input = prompt("Enter a number (1-100) for grid size:");
        if (input === null) return; // Exit if user cancels
        size = Number(input);
    } while (isNaN(size) || size < 1 || size > 100);

    createGrids(size);
}

function getRandomRgbValue(){
    return Math.floor(Math.random() * 256);
}


function reset(){
    const grids = Array.from(document.querySelectorAll(".grids"));
    grids.forEach((grid)=>{
        grid.style.backgroundColor='';
    })
}

function incrementCurrentOpacity(backgroundColor){
    let currentOpacity = parseFloat(backgroundColor.split(',').pop().trim().replace(")", ""));
    //When the opacity reaches 1, the background color is set back to rgb, hence the above line will return 0
    if (currentOpacity === 0){
        currentOpacity = 1;
    }
    return currentOpacity + 0.1;
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
});


container.addEventListener('mouseover', (event)=>{

    //Ensure there is no change when the event occurs on the parent element
    if(event.target.className !== "container"){
        if(event.target.style['background-color'] === ''){
            event.target.style['background-color'] = `rgba(${getRandomRgbValue()},${getRandomRgbValue()},${getRandomRgbValue()},0.4)`;
        }else{
            event.target.style['background-color'] = `rgba(${getRandomRgbValue()},${getRandomRgbValue()},${getRandomRgbValue()},${incrementCurrentOpacity(event.target.style['background-color'])})`;
        }
    }

});


