let userPin = 5081
let userInput

const checkPin = () => {
    userInput = prompt("please enter your pin number")
    if (userInput == userPin){
        console.log("Well done you are allowed to proceed")
        userInput = prompt(`would you like to: \n1. withdraw cash \n2. deposit cash \n3. Change pin`)
        if(userInput == 1){
            withdrawCash()
        }
        else if(userInput == 2){
            depositAmount()
        }
        else{
            changePin()
        }

    }
    else{
        console.log(`you inputted ${userInput} this is incorrect`)
        checkPin();
    }
}

let userBalance = 100
const withdrawCash = () => {
    userInput = prompt("Withdraw Amount: \n1. 5 \n2. 20\n3. 30");
    if(userInput == 1){
        userBalance -= 5
        
    }
    else if(userInput == 2){
        userBalance -= 20
    }
    else if(userInput == 3 ){
        userBalance -= 30
    }
    else{
        alert(`please enter a valid amount`)
        withdrawCash();
    }
    alert(`Your balance is now ${userBalance}`)
}

const depositAmount = () =>{
    userInput = prompt(`Deposit Amount:`)
    //userInput = parseInt(userInput)
    userBalance = (parseInt(userInput) + userBalance);
    alert (`your balance is now ${userBalance}`)
}

const changePin = () =>{
    let userInput = prompt (`enter your new pin:`)
    let checkPin = prompt (`enter your pin again`)
    if(parseInt(userInput) === (parseInt(checkPin))){
        userPin = userInput;
        console.log(userPin)
        alert('Your pin has been changed')
        
    }
    else{
        alert(`Your pin does not match`)
    }
}

checkPin()
