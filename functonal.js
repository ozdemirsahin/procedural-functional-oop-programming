
function getInputValue(elemenetId){
    return document.getElementById(elemenetId).value
}

function validate(value){
    if(value.length === 0){
        return false;
    }
    return true;
}

function calculate(firstNumber, secondNumber, operator){
    if(!validate(firstNumber) || 
    !validate(secondNumber) ||
    !validate(operator)){
        throw Error("Invalid Input")
     }

    switch (operator) {
        case "+":
            return parseInt(firstNumber)+parseInt(secondNumber);
        case "-":
            return parseInt(firstNumber)-parseInt(secondNumber);
        case "*":
            return parseInt(firstNumber)*parseInt(secondNumber);
        case "/":
            return parseInt(firstNumber)/parseInt(secondNumber);
    }
}

function getInputForm(formId){
    return document.getElementById(formId)
}

function handleSubmit(event){
    event.preventDefault()
    
    const firstNumber=getInputValue("first-number")
    const secondNumber=getInputValue("second-number")
    const operator=getInputValue("operator")

    try {
        const result=calculate(firstNumber, secondNumber, operator)
        console.log(result)
    } catch (error) {
        alert(error.message)
        return
    }
}

const form=document.getElementById("input-form")

form.addEventListener("submit", handleSubmit)

