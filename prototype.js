// const person = {
//     name: 'Leo',
//     age: 24,
//     greet: function() {                                     // Объект с функцией внутри
//         console.log('greet!')
//     }
// }

const person1 = new Object({
    name: 'Slark',
    age: 34,
    greet: function() {                                        // еще один способ создания объекта
        console.log('Hello!')
    }
})

Object.prototype.sayHello = function() {                      // мы задали нашему объекту person1 новый метод через прототип. Object это глобальный класс
    console.log('oy hello!')
}

const pudge = Object.create(person1)                         // передаем оъекту pudge прототипы объекта person1, сам объект pudge пустой.
pudge.name = 'Jaj'  


// Прототип это объект который присутствует у объектов и он вызывется по цепочки сверху вних с верхних к нижним уровням.

const str = new String('I am String') 