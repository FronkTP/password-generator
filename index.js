const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const lettersAndNumbers = [...letters, ...numbers]
const lettersAndSymbols = [...letters, ...symbols]
const allTypes = [...letters, ...numbers, ...symbols]

const lengthSlider = document.getElementById("length-slider")
const lengthValue = document.getElementById("length-value")

lengthValue.textContent = lengthSlider.value
lengthSlider.addEventListener("input", (event) => {
    lengthValue.textContent = event.target.value
})

const passwordOneDisplay = document.getElementById("password1")
const passwordTwoDisplay = document.getElementById("password2")

function generatePasswords() {
    const numbersCheckbox = document.getElementById("include-numbers")
    const symbolsCheckbox = document.getElementById("include-symbols")

    let passwordOne = ""
    let passwordTwo = ""
    let type = []

    if (numbersCheckbox.checked && symbolsCheckbox.checked) {
        type = allTypes
    } else if (numbersCheckbox.checked) {
        type = lettersAndNumbers
    } else if (symbolsCheckbox.checked){
        type = lettersAndSymbols
    } else {
        type = letters
    }

    for (let i = 0; i < lengthValue.value; i++) {
        const randomNumberOne = Math.floor(Math.random() * type.length)
        const randomNumberTwo = Math.floor(Math.random() * type.length)
        passwordOne += type[randomNumberOne]
        passwordTwo += type[randomNumberTwo]
    }
    passwordOneDisplay.textContent = passwordOne
    passwordTwoDisplay.textContent = passwordTwo
}
