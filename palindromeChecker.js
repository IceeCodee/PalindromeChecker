const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultMsg = document.getElementById("result");


const isPalindrome = ()=>{
    const textInputValue = textInput.value
    const regex = /[^a-zA-Z0-9]/g;
    const word = textInputValue.replace(regex,"");
    const reverseWord = word.split("").reverse().join("")
    console.log(textInputValue);
    console.log(word);
    
    if(textInputValue===""){
        resultMsg.style.color = "red";
        return "Please input a value!"
    }else{
      resultMsg.style.color ="blue";
      
    return word === reverseWord ? `${textInputValue} is a palindrome`: `${textInputValue} is not a palindrome` 
}

}

const showResults = ()=>{
  resultMsg.innerText = isPalindrome();      
}



checkButton.addEventListener('click', showResults);
resultMsg.style.fontSize = "20px";
resultMsg.style.fontWeight = "bold"