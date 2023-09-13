const oneNumber = parseInt(prompt("Insert first number pls"));
const secondNumber = parseInt(prompt("Insert second number pls"));
const numberThree = parseInt(prompt("Insert number three pls"));
if (isNaN(oneNumber) || isNaN(secondNumber) || isNaN(numberThree)) {
    alert("Something Wrong, pls check input values we accept only digits")
} else {
    const result = (oneNumber + secondNumber + numberThree) / 3
    alert(`Середнє значення: ${result}`)
}