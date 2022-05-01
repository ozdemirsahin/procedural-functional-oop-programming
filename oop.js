class Validator{

    static validate(value){
        if(value.length === 0){
            return false;
        }
        return true;
    }
}

class Calculation{
    static calculate(firstNumber, secondNumber, operator){
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

}

class InputForm{
    constructor(){
        this.firstNumber=document.getElementById("first-number")
        this.secondNumber=document.getElementById("second-number")
        this.operator=document.getElementById("operator")
        
        this.form=document.getElementById("input-form")
        this.form.addEventListener("submit", this.handleSubmit.bind(this))
    }

    handleSubmit(event){
        event.preventDefault()

        if(!Validator.validate(this.firstNumber.value) ||
                !Validator.validate(this.secondNumber.value) ||
                    !Validator.validate(this.operator.value)){
            alert("invalid input")
            return;
        }

       const result=Calculation.calculate(this.firstNumber.value, this.secondNumber.value, this.operator.value)
       console.log(result)
    }
}

new InputForm();
