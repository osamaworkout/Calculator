const calculatorInput= document.getElementById("calculatorInput");

function appendToScreen(value){
    calculatorInput.value += value;
}

function appendOperator(operator){
    calculatorInput.value += " " + operator + " ";
}

function deleteChar(){
    calculatorInput.value = calculatorInput.value.slice(0,-1);
}

function clearAll(){
    calculatorInput.value=" ";
}

function calculate(){
    const expression = calculatorInput.value;
    try{
        const result = eval(expression);
        calculatorInput.value = result
    }catch(Error){
        calculatorInput.value= "Error";
    }
}