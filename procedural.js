const form=document.getElementById("input-form");

form.addEventListener("submit", function(event){
    event.preventDefault()
    
    const firstNumber=document.getElementById("first-number").value;
    const secondNumber=document.getElementById("second-number").value;
    const operator=document.getElementById("operator").value;


    if(firstNumber.length === 0){
        alert("invalid input");
        return;
    }

    if(secondNumber.length === 0){
        alert("invalid input");
        return;
    }

    if(operator.length === 0){
        alert("invalid input");
        return;
    }

    let result;

    switch (operator){
        case "+":
            result=parseInt(firstNumber)+parseInt(secondNumber);
            break;
        case "-":
            result=parseInt(firstNumber)-parseInt(secondNumber);
            break;
        case "*":
            result=parseInt(firstNumber)*parseInt(secondNumber);
            break;
        case "/":
            result=parseInt(firstNumber)/parseInt(secondNumber);
            break;
    }
    
    console.log(result);

    
}) 
