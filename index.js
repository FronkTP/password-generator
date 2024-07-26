const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const lettersAndNumbers = [...letters, ...numbers]
const lettersAndSymbols = [...letters, ...symbols]
const allTypes = [...letters, ...numbers, ...symbols]

const length = document.querySelector("#length")
const value = document.querySelector("#value")
value.textContent = length.value
length.addEventListener("input", (event) => {
  value.textContent = event.target.value
})

const passwordOneBox = document.getElementById("boxOne")
const passwordTwoBox = document.getElementById("boxTwo")


function generatePasswords() {
    const numbersCheckbox = document.getElementById("numbersCheckbox")
    const symbolsCheckbox = document.getElementById("symbolsCheckbox")

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

    for (let i = 0; i < length.value; i++) {
        let randomNumberOne = Math.floor(Math.random() * type.length)
        let randomNumberTwo = Math.floor(Math.random() * type.length)
        passwordOne += type[randomNumberOne]
        passwordTwo += type[randomNumberTwo]
    }
    passwordOneBox.textContent = passwordOne
    passwordTwoBox.textContent = passwordTwo
}
