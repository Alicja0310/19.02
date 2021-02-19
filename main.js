const liczby = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let imie = "Marlena"
liczby.push(10, "Marzena", imie)
console.log(liczby)


const fibo = new Array(0, 1)
function fibocr() {
    console.log(fibo)
    for(let i = 1; i < fibo.length; i++) {
        console.log(fibo[i])
        if(fibo [i] > 88) {
        return
    }
    if (fibo[i] + fibo[i - 1] === 1){
        fibo.push(2)
    } else {
        fibo.push(fibo[i] + fibo[i - 1])

    }
}
}
fibocr()
console.log(fibo)


// const imiona = new Array()
// for(let i = 1; i < 11; i++) {
//     imiona.push("Artur" + i)
// }
// console.log(imiona)



const odejmowanie = new Array ()
for(let i = 100; i > 0; i--) {
    odejmowanie.push(i)  
}

console.log(odejmowanie)

const licz4060 = odejmowanie.filter(item => {
    if(item > 40 && item < 60) {
        return item
    }
})

console.log(licz4060)

// let indexLiczby46
// odejmowanie.find((item, index) => {
//     if(item === 46) {
//         indexLiczby46 = index
//     }
// })
// console.log(indexLiczby46)

const aa = licz4060.find ((item, index) => {
    if (item === 45)
    return index
}
)
console.log(aa)

const razyTrzy = odejmowanie.map(item => item * 3)
console.log(razyTrzy)

const sprawdzenie = odejmowanie.some(item => item > 5)
console.log(sprawdzenie)