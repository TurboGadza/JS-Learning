// Функции 

// Function Declaration // Классика
// function greet(name) {
//     console.log('Привет - ', name, '!')
// }
                                                                            // отличие в FE нельзя вызвать функцию до ее создания, а в FD можно
// Function Expression // Функция складывается в переменную 
// const greet2 = function (name) {
//     console.log('Привет - ', name, '!')

// }

// greet('Leo')
// greet2('Pudge')

// console.log(typeof greet)
// console.log(typeof greet2)

//console.dir(greet) // что есть greet





// 1. Анонимные функции

// let counter = 2

// const interval = setInterval(function() {
//     if (counter === 7) {
//         clearInterval(interval)
//     } else {
//         console.log(++counter)
//     }
// }, )



// 2. Стрелочные функции

// function greet(name) {
//     console.log('Привет - ', name, '!')
// }

// const arrow = (name) => {
//     console.log('Привет - ', name, '!')
// }

// const arrow2 = name => console.log('Привет - ', name)


// greet('Leo')
// arrow('Pudge') 
// arrow2('Slark')

// const pow2 = num => {
//     return num ** 2
// } 

// console.log(pow2(3))




// 3. Параметры по умолчанию.


// const sum = (a, b) => a + b
// console.log(sum(5, 6))

// const sum2 = (a = 11, b = 12) => a + b 
// console.log(sum2())

// const sum3 = (a = 3, b = 12) => a + b     // Параметры по умолчанию
// console.log(sum3(4, 5))

// const sum4 = (a, b = 5) => a + b 
// console.log(sum4(2))



// function sumAll(...all) {
//     let result = 0
//     for (let num of all) {
//         result += num
//     } 
//     return result
// }

// const res = sumAll(1, 3, 6, 2, 9)
// console.log(res)



// 4. Замыкания // возвращение функции через функцию

//  function createMember(name) {
//     return function(lastName) {
//         console.log(name + lastName)
//     }
//  }

//  const logWithLastName = createMember('Leo')
//  console.log(logWithLastName('Efimov'))
//  console.log(logWithLastName('Slarkov'))
