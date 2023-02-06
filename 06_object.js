// 1. Объекты

// const carry = {
//     name: 'Slark',
//     age: 36,
//     isProgrammer: false,
//     languages: ['ru', 'en'],
//     'complex key': 'Complex Value',                           // Объект с разными типами данных
//     ['key_' + (1 + 3)]: 'Computed Key',
//     greet() {
//         console.log('greet from person')
//     }
// }

// console.log(carry.name)
// const ageKey = 'age'
// console.log(carry[ageKey])
// console.log(carry['complex key'])                           // вывод параметров объекта различных типов данных в консоль
// console.log(carry)
// carry.greet()






// const carry = {
//     name: 'Slark',
//     age: 36,
//     isProgrammer: false,
//     languages: ['ru', 'en'],
//     'complex key': 'Complex Value',                           
//     ['key_' + (1 + 3)]: 'Computed Key',
//     greet() {
//         console.log('greet from person')
//     }
// }

// console.log(carry.name)
// const ageKey = 'age'
// console.log(carry[ageKey])
// console.log(carry['complex key'])                           
// console.log(carry)
// carry.greet()

// carry.age++                                     // добавилит год к возрасту
// carry.languages.push('de')                      // добавили знание языка de 
// delete carry['key_4']                           // удаление не нужного ключа
// console.log(carry)





// const carry = {
//     name: 'Slark',
//     age: 36,
//     isProgrammer: false,
//     languages: ['ru', 'en'],
//     'complex key': 'Complex Value',                           
//     ['key_' + (1 + 3)]: 'Computed Key',
//     greet() {
//         console.log('greet from person')
//     }
// }

// ПРИМЕР ДЕСТРУКТУРИЗАЦИИ.

// const name = carry.name
// const age = carry.age
// const languages = carry.languages

// console.log(name, age, languages)


// const {name, age: personAge, languages} = carry          // Более удобный вариант записи (деструктуризация)  

// console.log(name, personAge, languages)




// const carry = {
//     name: 'Slark',
//     age: 36,
//     isProgrammer: false,
//     languages: ['ru', 'en'],
//     greet() {
//         console.log('greet from person')
//     }
// }

// for (let key in carry) {
//     if (carry.hasOwnProperty(key)) {
//         console.log('key:', key)
//         console.log('value:', carry[key])
//     }
// }


// const keys = Object.keys(carry)
// keys.forEach((key) => {
//     console.log('key:', key)                        // идентично верхней записи, но Object.keys не бежит по прототипу и не нужно делатиьт проверку.
//     console.log('value:', carry[key])
// })




// Context // // //

// carry.info()


// const carry = {
//     name: 'Slark',
//     age: 36,
//     isProgrammer: false,
//     languages: ['ru', 'en'],
//     greet() {
//         console.log('greet from person')
//     }
// }


// const logger = {
//     keys() {
//         console.log('Object Keys:', Object.keys(this))                // this это объект любой например
//     }
// }

// const bound = logger.keys.bind(carry)     // bind это метод метода logger, позволяет применить методы на другой объект, в даннаом случаии на оъект carry           
// bound()                                   // bound() это выхов функции
// logger.keys.call(carry)                   // тоже самое, только функция вызывается сразу



// const carry = {
//     name: 'Slark',
//     age: 36,
//     isProgrammer: false,
//     languages: ['ru', 'en'],
//     greet() {
//         console.log('greet from person')
//     }
// }




// const logger = {
//         keys() {
//             console.log('Object Keys:', Object.keys(this))                
//         },

//         keysAndValues() {
//             Object.keys(this).forEach(key => {
//                 console.log(`"${key}": ${this[key]}`)
//             })
//         },

//         withParams(top = false, between = false, bottom = false) {
//             if (top) {
//                 console.log('-----start-----')
//             }
//             Object.keys(this).forEach((key, index, array) => {
//                 console.log(`"${key}": ${this[key]}`)
//                 if (between && index !== array.length - 1) {
//                     console.log('--------------')
//                 }
//             })
//             if (bottom) {
//                 console.log('-----END-----')
//             }
//         }
//     }


// // logger.keysAndValues.call(carry) 
// logger.withParams.call(carry, true, true, true)
// logger.withParams.apply(carry, [true, true, true])         // в методе apply два элемента второй всегда массив куда можно запихнуть скок хочешь элементов










