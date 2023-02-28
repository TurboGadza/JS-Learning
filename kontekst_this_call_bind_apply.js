function hello() {
    console.log('hello!', this)
}


const person = {
    name: 'Leo',
    age: 24,
    sayHello: hello
}

// контекст this всегда вызывает в сначала функцию, а после вместо this вызывает объект в контексте которого эта функция была использована. Слева от точки.


const person1 = {
    name: 'Leo',
    age: 24,
    sayHello1: hello,
    sayHelloWindow: hello.bind(window)   // bind закрепляет (window === this) из верхней функции, если не закрепить, то this будет из объекта person1
}
 

const person2 = {
    name: 'Leo',
    age: 24,
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)            // this здесь используется в контексте данного объекта (person2)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const Jaj = {
    name: 'Pudge',
    age: 41
}

person2.logInfo.bind(Jaj)()         // передели через функцию logInfo из объекта person2, параметры объекта Jaj
const Jadga = person2.logInfo.bind(Jaj)
Jadga('midder', 'nokia')

person2.logInfo.bind(Jaj, 'midder', 'nokia')()
person2.logInfo.call(Jaj)           // метод call работает также как и bind, только он call сразу вызывает функцию и не надо писать ()
person2.logInfo.apply(Jaj, ['midder', 'nokia']) // метод apply работает также как и call, но в нем только два параметра второй из которых это массив с хоть сколько параметрами, а в методе call хоть сколько параметров.


// ================================================
// ПРАКТИКА

const array = [1, 2, 3, 4, 5]

// function multBy (arr, n) {
//     return arr.map(function(i) {
//         return i * n
//     })
// }

Array.prototype.multBy = function(n) {
    return this.map(function(i) {                         // сделали проще через this и прототип (this всегда указывает элемент слева от точки)
        return i * n                                      // в нашем случаи на array (array.multBy(10))
    })
}

console.log(array.multBy(10))   

