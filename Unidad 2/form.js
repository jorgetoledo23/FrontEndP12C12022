const inputsTexts = document.getElementsByTagName("input");

console.log(inputsTexts.length)

for (let index = 0; index < inputsTexts.length; index++) {
    const input = inputsTexts[index];
    input.addEventListener("keyup", function(e){
        console.log(e.target.value)
    })   
}