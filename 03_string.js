// СТРОКИ

// const name = 'leo'
// const age = 24

// console.log(typeof name) - тип переменной.

// function getAge() {
//     return age
// }

// const output = `${age < 10 ? 'ZYX' : 'XYZ'}`
// // const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + ' года!'
// // const output = `Привет, меня зовут ${name} и мой возраст ${age} года!`  - более удобный синтаксис ${}
// console.log(output)

// const output =`
//           Dust 2
//     Inferno
//                   Mirage  
// ` - возможность писать многострочный код при этом с сохранением отступов пробелов и т.д.

// console.log(output) 




// 1. Методы строк


// const tag = 'Leo'
// console.log(tag.length)
// console.log(tag.toUpperCase()) // весь текст верхний регистр
// console.log(tag.toLowerCase()) // весь текст нижний регистр
// console.log(tag.charAt(0)) // под каким индексом какой символ (в данном случае под индекс 0 у нас L)
// console.log(tag.charAt(2)) // соотвественно
// console.log(tag.indexOf('eo')) // есть ли в строчке сочетание символов eo и с какого индекса.
// console.log(tag.indexOf('chill')) // если нету по консоль выведет -1
// console.log(tag.toLowerCase().startsWith('le')) // символы начала сточки
// console.log(tag.startsWith('Le')) // соответсвенно
// console.log(tag.endsWith('o')) // окончание
// console.log(tag.endsWith('tgd')) // соответсвенно
// console.log(tag.repeat(21)) // повтор строчки кол. раз

// const secret = '     password      '
// console.log(secret)
// console.log(secret.trim()) // удаляет пробелы
// console.log(secret.trimRight()) // только справа
// console.log(secret.trimLeft()) // только слева







// function logPerson (s, tag, age) {
//     if (age < 0) {
//         age = 'Еще не родился'
//     }
//     return `${s[0]}${tag}${s[1]}${age}${s[2]}`
// }


//                                                                            // сложно, работать по примеру!
// const personName = 'Leo'
// const personAge = 24
// const personAge2 = -3

// const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
// const output2 = logPerson`Имя: ${personName}, Возраст: ${personAge2}!`


// console.log(output) 
// console.log(output2)

