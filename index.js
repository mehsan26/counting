// document.getElementById("count").innerText = 5

// let mee=26
// let mon=07
// let year=2002
// console.log(mee)
// console.log(mon)
// console.log(year)

// let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times

// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1
//     console.log(lapsCompleted)
// }

// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)


let countEl = document.getElementById("count-el")
// console.log(countEl)
let count=0
function increment() {
    count=count+1
    countEl.innerText=count
}

let saveEl=document.getElementById("save-el")
let entry=" " + count + " -"
function save() {
    saveEl.innerText=entry
}

