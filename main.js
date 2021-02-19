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


const imiona = new Array()
for(let i = 1; i < 10; i++) {
    imiona.push("Magdalena" + i)
}
console.log(imiona)


const dodawanie = new Array ()
for(let i = 0; i < 100; i++) {
    dodawanie.push(i + 1)
    dodawanie.pop()
}

console.log(dodawanie)

