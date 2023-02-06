// МАССИВЫ.

const cars = ['BMW', 'Audi', 'Mercedes', 'Toyota']
const fib = [1, 2, 3, 4, 5, 6, 7]

// // console.log(cars)

// // 1. Методы массива
// cars.push('Porsche') // добавляет новый элемент в конец массива
// // console.log(cars)
// cars.unshift('Tesla') // добавляет новый элемент в начало массива
// // cars.shift() // удаляет первый элемент массива, в данном случае Теслу


// const firstCar = cars.shift() // Возвращает первый элемент и удаляет его из массива
// console.log(firstCar)

// const lastCar = cars.pop() // Возвращает последний элемент и удаляет его из массива
// console.log(lastCar)

// console.log(cars)


// console.log(cars.reverse())
// console.log(cars)

// const index = cars.indexOf('Toyota')
// cars[index] = 'Mark 2'                              // заменяет значение выбранного индекса на другое
// console.log(cars)


// const people = [
//     {name: 'Leo', btc: 14},
//     {name: 'Pudge', btc: 110},
//     {name: 'Slark', btc: 75}
// ]

// const index = people.findIndex(function(person) {
//     return person.btc === 75
// })

// // console.log(index) // по индексу
// console.log(people[index])
      

// const worker = people.find(function(person) {
//     return person.btc === 110
// })
// console.log(worker)


// const people = [
//     {name: 'Leo', btc: 14},
//     {name: 'Pudge', btc: 110},
//     {name: 'Slark', btc: 75}
// ]

// let findedPerson

// for (const person of people) {
//     if (person.btc === 75) {
//         findedPerson = person
//     }
// }
//                                                              // findedPerson & person2 идентичяны просто разные записи.
// console.log(findedPerson)

// const person2 = people.find((person) => {
//     return person.btc === 110
// })

// console.log(person2)


// console.log(cars.includes('Audi')) // есть ли заданный элемент в массиве (булиан значение)

// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })

// console.log(upperCaseCars)   // Вернули в верхний регистр все элементы массива

// const pow2 = num => num ** 2
// const pow2fib = fib.map(pow2)         // Возвели все элементы массива в квадрат
// console.log(pow2fib)

// const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)        //  // Возвели все элементы массива в квадрат и потом извлекли из них корень
// const pow2fib = fib.map(pow2).map(sqrt)

// console.log(pow2fib)


// const pow2 = num => num ** 2
// const pow2Fib = fib.map(pow2)
// const filterNumbers = pow2Fib.filter(num => num > 24)          // метод фильтрации массива

// console.log(filterNumbers)


// метод привода элементов массива в одно значение
// const people = [
//     {name: 'Leo', btc: 14},
//     {name: 'Pudge', btc: 110},
//     {name: 'Slark', btc: 75}
// ]

// const allBtc = people
// .filter(person => person.btc < 100)
// .reduce((acc, person) => {
//     acc += person.btc
//     return acc
// }, 0)

// console.log(allBtc)



// Задача на переворот массива. 

// const text = 'Привет, мы изучаем JavaScript!'
// const reverseText = text.split('').reverse().join('') // split (из строчки в массив), join (из массива в строчку).
// console.log(reverseText)
