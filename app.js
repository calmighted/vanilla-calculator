let inputBtns = document.querySelectorAll('.Button');
let inputDisplay = document.querySelector('.inputDisplay')
let Oper = document.querySelectorAll('.Button Oper')


function inputBtnHandler(e){
    if(e.target.className == "Button Clr" || e.target.className == "Button Del"){
            if(e.target.className == "Button Clr"){
                inputDisplay.textContent = ""
            }else if (e.target.className == "Button Del"){
                inputDisplay.textContent = inputDisplay.textContent.substr(0, inputDisplay.textContent.length - 1);
            }
        }

        else if (e.target.id == "equalTo"){
            // console.log("Calculate")
            console.log()
            // operate() 
        }
        else{
            inputDisplay.textContent += e.target.textContent
        }
    if(inputDisplay.textContent.length > 58){
        alert("Not more than 28 numbers pls")
        location.reload();
    }
}


function operate(a,b,Operation){
    console.log("Result")
}


inputBtns.forEach(btn => {
    btn.addEventListener('click',inputBtnHandler);
})
