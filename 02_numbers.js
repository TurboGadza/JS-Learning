// 1. Number (числа)

// const num = 42 // integer
// const float = 42.4 // float
// const pow = 10e3 // pow

// console.log('Radga', Number.MAX_SAFE_INTEGER)
// console.log('OG Pudgus', Math.pow(2, 53) - 1)
// console.log('Jadj', Number.MIN_SAFE_INTEGER)
// console.log('MaxValue', Number.MAX_VALUE)
// console.log('MinValue', Number.MIN_VALUE)
// console.log('PI', Number.POSITIVE_INFINITY)
// console.log('NI', Number.NEGATIVE_INFINITY)
// console.log(1 / 0) // infinity
// console.log(Number.NaN) // Not a Number (Типа ошибка)

// const rudga = 2 / undefined
// console.log(isNaN(rudga))
// console.log(Number.isNaN(43))

// console.log(Number.isFinite(Infinity))
// console.log(Number.isFinite(37))

// const stringInt = '42'
// const stringFloat = '42.42'
// console.log(stringInt + 3) // получается строчка
// console.log(Number.parseInt(stringInt) + 3) // а здесь число
// console.log(+stringInt + 3) // укороченный вариант строки выше
// console.log(Number.parseFloat(stringFloat) + 3) // а тут число дробное =)

// console.log(0.2 + 0.4) // казалось бы = 0.6    =)
// console.log(1 / 5 + 2 / 5) // тоже самое
// console.log(+(0.2 + 0.4).toFixed(1))
// console.log(parseFloat((0.2 + 0.4).toFixed(1)))



// 2. BigInt - Тип данных для работы с числами, которые больше чем max safe integer


// console.log(Number.MAX_SAFE_INTEGER)
// console.log(typeof 90071992547409919999999n)
// console.log(90071992547409919999999n - 9007199254740991999999n) // BigInt из BigInta
// console.log(-90071992547409919999999n) // отрицательный BigInt
// // console.log(90071992547409919999999.564654n) // десятичные нельзя это int integer

// console.log(10n - 4) // error незя BigInt и другие типы данных
// console.log(parseInt(10n) - 4) // преобразовали BigInt в Int
// console.log(10n - BigInt(4))
// console.log(5n / 2n) // будет 2n. а не 2.5n потому что это integer(только целые числа)


// 3. Math // объект для математических операций

// const x = Math.E
// const y = Math.PI

// console.log(x)
// console.log(y)

// console.log(Math.sqrt(25)) // корень
// console.log(Math.pow(2, 3)) // степень
// console.log(Math.abs(-42)) // модуль
// console.log(Math.max(999, 54, 43, 2, 3)) 
// console.log(Math.min(999, 54, 43, 2, 3))
// console.log(Math.ceil(4.1)) // округление  в >
// console.log(Math.floor(4.9)) // в <
// console.log(Math.round(8.6)) // округляет к ближайшему целому
// console.log(Math.trunc(11.97564343)) // удаляет дробное значение
// console.log(Math.random())


// // 4. Math example пример

// function getRandomBetween(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min) 
// }
 
// console.log(getRandomBetween(28, 31))   
