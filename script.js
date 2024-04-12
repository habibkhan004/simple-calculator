let input=document.getElementById("input");
console.log(input)
let buttons= document.querySelectorAll('.btn')
let string=""
let btn=Array.from(buttons)
btn.forEach((button) => {
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string)
            input.value=string;
        }
        else if(e.target.innerHTML == "C"){
            string ="";
            input.value=string;
        }
        else{
        string=string + e.target.innerHTML;
        input.value=string;
        }
        
    })
});