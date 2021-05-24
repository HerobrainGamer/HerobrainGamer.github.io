/**
 * sos the world is ending
 * error this world must be reset
 * Todd needs a bottle of old fasion Coca-Cola
 * 404 smarts.java not found
 * memory overflow error
 * Copyright 2020 William Roebuck
 **/

class Calculator
{

    display = document.getElementsByClassName("screen")[0];
    stack = [];

    clear()
    {
        /**
         * This is a function that clears the input
         */
        console.log("This is the clear function");

        this.display.value = "0";
    }

    enter()
    {
        /**
         * This is a function that adds the value onto the stack
         */
        console.log("This is the enter function");

        this.stack.push(this.display.value);
        this.clear();
    }

    numberHandle(number)
    {
        /**
         * This is a function that handles the input of a number
         */
        console.log("This is the number handle");

        if(this.display.value === "0" || this.display.value === "NaN")
        {
            this.display.value = "";
        }
        this.display.value += String(number);
        
    }

    operatorHandle(operator)
    {
        /**
         * This is a function that handles operator input
         */
        console.log("This is the operator handle");

        if(this.stack.length < 2)
        {
            return false;
        }
        
        var value_1 = this.stack.pop();
        var value_2 = this.stack.pop();

        if(operator === "*")
        {
            this.display.value = String(parseFloat(value_2) * parseFloat(value_1));
            return true;
        }
        else if(operator === "/")
        {
            this.display.value = String(parseFloat(value_2) / parseFloat(value_1));
            return true;
        }
        else if(operator === "+")
        {
            this.display.value = String(parseFloat(value_2) + parseFloat(value_1));
            return true;
        }
        else if(operator === "-")
        {
            this.display.value = String(parseFloat(value_2) - parseFloat(value_1));
            return true;
        }
    }

    decimalHandle()
    {
        /**
         * This is a function that puts a period on the screen if
         * we input a decimal
         */
        console.log("This is the devimal handler");

        this.display.value += ".";
    }

    calculate()
    {
        /**
         * This is the main call to start the calculator.
         */
        console.log("This is the calculate");
        document.addEventListener("click", (event) => {
            const { target } = event;

            if(target.classList.contains("clear"))
            {
                this.clear();
            }
            else if(target.classList.contains("enter"))
            {
                this.enter();
            }
            else if(target.classList.contains("number"))
            {
                this.numberHandle(target.value);
            }
            else if(target.classList.contains("decimal"))
            {
                this.decimalHandle();
            }
            else if(target.classList.contains("operator"))
            {
                this.operatorHandle(target.value);
            }
        });
    }
}

 window.addEventListener("DOMContentLoaded", function(){
    
    var calculator = new Calculator;
    calculator.calculate();

 });