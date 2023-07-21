let count = 0
let countT = document.getElementById("count-el")

function increment() {
    count += 1
    countT.textContent = count
}

function CLEAR() {

    countT.textContent = 0
    count = 0
}


