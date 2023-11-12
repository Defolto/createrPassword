const numbers = document.querySelector("#numbers")
const letters = document.querySelector("#letters")
const button = document.querySelector("button")
const p = document.querySelector("#password")
const select = document.querySelector("select")
const symbols = document.querySelector('.symbols')

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let massSymbols = []
symbols.addEventListener('click', (e)=>{
    const symba = e.target.innerHTML
    if (massSymbols.includes(symba)) {
        const index = massSymbols.indexOf(symba)
        massSymbols.splice(index, 1)
        e.target.classList.remove("active")
    } else {
        e.target.classList.add("active")
        massSymbols.push(symba)
    }
})

button.addEventListener('click', () => {
    let password = []
    const countNumbers = +numbers.value
    const countLetters = +letters.value

    // добавляем рандомные цифры
    for (let i = 0; i < countNumbers; i++) {
        password.push(getRandom(0,9))
    }

    // добавляем рандомные буквы (русские)
    const startAlphabetRus = 1072
    const endAlphabetRus = 1103

    const startAlphabetEng = 97
    const endAlphabetEng = 122
    for (let i = 0; i < countLetters; i++) {
        if (select.value == "rus") {
            password.push(String.fromCharCode(getRandom(startAlphabetRus, endAlphabetRus)))
        } else {
            password.push(String.fromCharCode(getRandom(startAlphabetEng, endAlphabetEng)))
        }
    }

    massSymbols.forEach((item)=>{
        password.push(item)
    })

    password.sort(()=>{
        return getRandom(-2, 1)
    })
    p.innerHTML = password.join('')
})

p.addEventListener("click", ()=>{
    navigator.clipboard.writeText(p.innerHTML).then(()=>{
        alert("Пароль скопирован в буфер")
    })
})