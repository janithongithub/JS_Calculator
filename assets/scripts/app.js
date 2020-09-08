const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//gets input from input field
function getUserNumberInput(){
    return parseInt(userInput.value);
}

//Generates and writed calculation log
function createAndWriteOutput(operator, numberBeforeCalc,calcNumber){
    const calcDescription =  `${numberBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);

}

function writeToLog(operationIdentifier, prevNum, currentNum, result){
    let logEntry = {
        operation:operationIdentifier,
        prevNum: prevNum,
        enteredNum: currentNum,
        result: result,

    };

    logEntries.push(logEntry);
    console.log(logEntries);
    console.log(logEntry.operation);
}


function add(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;

    currentResult += enteredNumber;
    createAndWriteOutput('+',initialResult,enteredNumber);


    
}


function substract(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;

    currentResult -= enteredNumber;
    createAndWriteOutput('-',initialResult,enteredNumber);
}


function divide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;

    currentResult /= enteredNumber;
    createAndWriteOutput('/',initialResult,enteredNumber);
}


function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;

    currentResult *= enteredNumber;
    createAndWriteOutput('*',initialResult,enteredNumber);
}



addBtn.addEventListener('click', add);
substractBtn.addEventListener('click', substract);
divideBtn.addEventListener('click', divide);
multiplyBtn.addEventListener('click', multiply);

