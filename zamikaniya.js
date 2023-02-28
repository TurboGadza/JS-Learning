// // по сути замыкания это функция внутри другой функции

// function createCalcFunction (n) {
//     return function () {
//         console.log(1000 * n)
//     }
// }

// const calc = createCalcFunction(42)                   // createCalcFunction(42) если просто вызвать эту функцию то параметр будет замкнут, но если добавить функции название calc и вызвать calc, то он разомкнет параметр 42 и выведет значение в консоль
// calc()


// Примеры

// function lvl(n) {
//     return function(num) {
//      return n + num
//     }
// }

// const slark = lvl(1)
// const pudge = lvl(10)

// console.log(slark(10))                                // здесь в скобках указывается значение num 
// console.log(pudge(5))            



function urlGenerator(domain) {
    return function (url) {
        return `https://${url}.${domain}`
    }
}

const urlcom = urlGenerator('com')
const urlru = urlGenerator('ru')

console.log(urlcom('youtube'))
console.log(urlru('yandex'))
console.log(urlru('youtube'))
console.log(urlcom('yandex'))






// Практика

// // написать свою функцию bind 
// пример работы: 

// function logPerson() {
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// }

// const person1 = {name: 'Leo', age: 24, job:'Frontend'}
// const person2 = {name: 'Slark', age: 36, job:'Carry'}

// bind(person1, logPerson)
// bind(person2, logPerson) 


// function bind(context, fn) {
//     return function(...args) {
//         fn.apply(context, args)
//     }
// }

// function logPerson() {
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// }

// const person1 = {name: 'Leo', age: 24, job:'Frontend'}
// const person2 = {name: 'Slark', age: 36, job:'Carry'}

// bind(person1, logPerson)()
// bind(person2, logPerson)() 
