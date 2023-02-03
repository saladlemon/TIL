const form = document.querySelector(".numForm");
const range = document.querySelector(".rangeInput");
const inputNum = form.querySelector(".inputNum");
const paintChose = document.querySelector(".paintChose");
const paintResult = document.querySelector(".paintResult");

function result(PLAYER, MACHINE){
    paintChose.innerText=`You chose: ${PLAYER}, the machine chose: ${MACHINE}`;
    PLAYER = parseInt(PLAYER);
    if (PLAYER === MACHINE){ 
        paintResult.innerText = `You won!`;
    } else{
        paintResult.innerText = `You lost!`;
    }
}

function makeRandNum(event){
    event.preventDefault();
    const PLAYER = inputNum.value;
    const maxValue = range.value;
    const MACHINE = Math.ceil(Math.random() * maxValue);
    result(PLAYER, MACHINE);
}

function handleInput(){
    form.addEventListener("submit", makeRandNum);
}

function init(){
    range.oninput = handleInput;
}
init();