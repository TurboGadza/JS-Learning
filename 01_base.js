// // 1. Переменные

// // var name = 'turbogadza'
// // const firstName = 'bebek' // camelCase (второе слово с большой буквы firstName)
// //const lastName = 'sebekov' // тип данных string
// // let age = 54 // тип данных number            
// // лучше всегда использовать переменные let и const
// const isProgrammer = true // тип данных boolean
// const _ = 'private'
// const $ = 'some value'
// const withNum5 = '5' // const 5withNum = '5' - err

// // name = 'Leo'
// // age = 25

// // console. log(age) // взаимодействие с консолью




// // 2. Мутирование

// // console. log('Имя человека: ' + firstName + ', а возраст человека: ' + age)
// // console. log(age.toString()) // поменял тип данный ( число на)
// // const lastName = prompt('Введите фамилию')
// // alert(firstName + ' ' + lastName)


// // 3. Операторы

// // const currentYear = 2022 
// // const birthYear = 1998
// // const age = currentYear - birthYear

// // console.log(age)

// const a = 4
// const b = 2
// // console.log(a+b)
// // console.log(a-b)
// // console.log(a*b)
// // console.log(a/b)

// let currentYear = 2022
// console.log(currentYear++)
// console.log(currentYear)


// // let c = 5
// // // c = c + a
// // // c = c - a
// // // c = c * a
// // // c = c / a

// // // c += a
// // // c -= a
// // // c *= a
// // // c /= a 

// // console.log(c)


// // 4. Типы Данных

// const isProgrammer = true
// const name = 'sebek'
// const age = 7
// let x


// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)


// 5. Приоритет операторов (Документация mdn)

// const fullAge = 24
// const birthYear = 1998
// const currentYear = 2023

// // > < <= >=
// const isFullAge = currentYear - birthYear >= fullAge
// console.log(isFullAge)

// 6. Условные операторы

// const courseStatus = 'fail' // ready, fail, pending

// if (courseStatus === 'pending') {
//     console.log('Курс в процессе разработки')
// }

// else if (courseStatus === 'ready') {
//     console.log('Курс разработан и готов')
// }

// else {
//     console.log('Курс ляпнулся')
// }

// const num1 = 301 // number
// const num2 = '301' // string

// console.log(num1 === num2) // == приводит разные типы данных к одному, === приводит и по значению и по типу данных ((лучше использовать ===))

// const isReady = true
// // if (isReady) {
// //     console.log('Ракета!')
// // }
// // else {
// //     console.log('Самолет!')
// // }

// isReady ? console.log('Ракета!') : console.log('Самолет!') (Тернарное выражение для простых условий типа данных Boolean)

// 7. Булевая логика

// 8. Функции

// function calculateAge(year) {
//     return 2023 - year
// }

// // const myAge = calculateAge(1998)
// // console.log(myAge)
// // console.log(calculateAge(1997))
// // console.log(calculateAge(1996))

// function logInfoAbout(name, year) {
//     const age = calculateAge(year)
//     if (age > 0) {
//     console.log('Человек по имени ' + name + ' имеет возраст ' + age + ' лет')
//     }   else {console.log('Вообще-то это уже будущее!')
// }
// }


// logInfoAbout('Лео', 1998)
// logInfoAbout('sebek', 2024)

// 9. Массивы 
// const cars = ['Ford', 'BMW', 'Toyota', 'Audi']
// // console.log(cars)
// console.log(cars[0])
// console.log(cars[1])
// console.log(cars[2])
// console.log(cars[3]) 
// console.log(cars.length)

// cars[0] = 'Porsche'
// cars[cars.length] = 'BMW'
// console.log(cars)

// 10. Циклы

// const cars = ['Ford', 'BMW', 'Toyota', 'Audi']  
// // for (let i = 0; i < cars.length; i++) {
// // const car = cars[i] 
// // console.log(car)
// // }

// for (let car of cars) {
//     console.log(car)
// }

// 11. Объекты

// const person = {
//     firstName: 'Leo',
//     lastName: 'Efimov',
//     year: 1998,
//     languages: ['russian', 'english', 'deutsch'],
//     hasCar: true,
//     greet: function() {
//         console.log('greet')
//     }
// }

// console.log(person)
// console.log(person.firstName)
// console.log(person['lastName'])  // разные варианты обращения.
// const lyaps = 'languages'
// person.isProgrammer = true
// console.log(person[lyaps])
// console.log(person)
