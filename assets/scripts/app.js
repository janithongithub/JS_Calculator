const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, numberBeforeCalc,calcNumber){
    const calcDescription =  `${numberBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);

}


function add(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;

    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('+',initialResult,enteredNumber);
}
addBtn.addEventListener('click', add);


function substract(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;

    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-',initialResult,enteredNumber);
}
substractBtn.addEventListener('click', substract);


function divide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;

    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/',initialResult,enteredNumber);
}
divideBtn.addEventListener('click', divide);

function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;

    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*',initialResult,enteredNumber);
}
multiplyBtn.addEventListener('click', multiply);




