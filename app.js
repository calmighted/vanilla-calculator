let inputBtns = document.querySelectorAll('.Button');
let inputDisplay = document.querySelector('.inputDisplay')
let outputDisplay = document.querySelector('.outputDisplay')
let Oper = document.querySelectorAll('.Button Oper')
let expr = ""
let Operation = ""
let Num1 = ""

function inputBtnHandler(e){
    if(e.target.className == "Button Clr" || e.target.className == "Button Del"){
            if(e.target.className == "Button Clr"){
                inputDisplay.textContent = ""
                // outputDisplay.textContent = ""
            }else if (e.target.className == "Button Del"){
                inputDisplay.textContent = inputDisplay.textContent.substr(0, inputDisplay.textContent.length - 1);
                // outputDisplay.textContent = ""
            }
        }
        else if (e.target.id == "equalTo"){
            inputDisplay.textContent = ""
            inputDisplay.textContent  = calculate(parseCalculationString(expr))
            if(inputDisplay.textContent === "Infinity"){
                inputDisplay.textContent = ""
                alert("Pushing the limits eh?")
            }
            
        }
        else{
            inputDisplay.textContent += e.target.textContent
        }
    if(inputDisplay.textContent.length > 58){
        alert("Not more than 28 numbers pls")
        location.reload();
    }
    expr = inputDisplay.textContent;
    
}

inputBtns.forEach(btn => {
    btn.addEventListener('click',inputBtnHandler);
})



// NEW CODE from stack overflow
function parseCalculationString(s) {
    // --- Parse a calculation string into an array of numbers and operators
    var calculation = [],
        current = '';
    for (var i = 0, ch; ch = s.charAt(i); i++) {
        if ('^*/+-'.indexOf(ch) > -1) {
            if (current == '' && ch == '-') {
                current = '-';
            } else {
                calculation.push(parseFloat(current), ch);
                current = '';
            }
        } else {
            current += s.charAt(i);
        }
    }
    if (current != '') {
        calculation.push(parseFloat(current));
    }
    return calculation;
}

function calculate(calc) {
    // --- Perform a calculation expressed as an array of operators and numbers
    var ops = [{'^': (a, b) => Math.pow(a, b)},
               {'*': (a, b) => a * b, '/': (a, b) => a / b},
               {'+': (a, b) => a + b, '-': (a, b) => a - b}],
        newCalc = [],
        currentOp;
    for (var i = 0; i < ops.length; i++) {
        for (var j = 0; j < calc.length; j++) {
            if (ops[i][calc[j]]) {
                currentOp = ops[i][calc[j]];
            } else if (currentOp) {
                newCalc[newCalc.length - 1] = 
                    currentOp(newCalc[newCalc.length - 1], calc[j]);
                currentOp = null;
            } else {
                newCalc.push(calc[j]);
            }
            console.log(newCalc);
        }
        calc = newCalc;
        newCalc = [];
    }
    if (calc.length > 1) {
        alert('Error: unable to resolve calculation');
        return calc;
    } else {
        return calc[0];
    }

}
