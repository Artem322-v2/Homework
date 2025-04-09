const number = Number(prompt('Введи число:'))

if (number === 0) {
    console.log("Вы ввели: 0")
} else if (number >= 0) {
    console.log('Положительное число')
} else {
    console.log('Отрицательное число')
}


