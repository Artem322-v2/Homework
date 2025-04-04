const weight = Number(prompt('Введи вес'))
const height = Number(prompt('Введи рост в метрах'))

let a = weight / height ** 2

if (a < 16) {
    console.log('Выраженный деффицит массы тела')
} else if (a <= 18.4 ) {
    console.log('деффицит массы тела')
} else if (a <=24.99) {
    console.log('Норма')
} else if(a <= 29.99) {
    console.log('Избыточная масса тела (Предожирение)')
} else if (a <= 34.99) {
    console.log('Ожирение первой степени')
} else if (a <= 39.99) {
    console.log ('Ожирение второй степени')
} else if (a >= 40) {
    console.log('Ожирение третей степени')
}