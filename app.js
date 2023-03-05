const buttons = document.querySelectorAll('button');
const screenDisplay = document.querySelector('.screen');
let calculation = [];
let result;
function calculate(button){
    const value = button.textContent;
    if(value === 'CLEAR'){
        calculation = [];
        screenDisplay.textContent = '0';
    }
    else if(value === ' ='){
        // eval - Evaluates JavaScript code and executes it.
        screenDisplay.textContent = eval(result);
    }
    else{
        calculation.push(value);
        result = calculation.join('');
        screenDisplay.textContent = result;
    }
}
buttons.forEach(button => button.addEventListener('click',()=>calculate(button)));