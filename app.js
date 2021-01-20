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
                outputDisplay.textContent = ""
            }else if (e.target.className == "Button Del"){
                inputDisplay.textContent = inputDisplay.textContent.substr(0, inputDisplay.textContent.length - 1);
                outputDisplay.textContent = ""
            }
        }

        else if (e.target.id == "equalTo"){
            operate()
        }
        else{
            if(e.target.className == "Button Oper"){
                Operation = e.target.textContent;
            }else if(e.target.className == "Button"){
                Num1 += e.target.textContent
                // console.log(Num1)
            }
            inputDisplay.textContent += e.target.textContent
        }
    if(inputDisplay.textContent.length > 58){
        alert("Not more than 28 numbers pls")
        location.reload();
    }
    expr = inputDisplay.textContent;
    
}

let res;

function operate(){
    res = eval(expr)
    console.log(res)
    outputDisplay.textContent = res
}


inputBtns.forEach(btn => {
    btn.addEventListener('click',inputBtnHandler);
})
