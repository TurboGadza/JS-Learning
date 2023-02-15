// DOM Дерево  (Работа JS с браузерным API) (Работа JS именно в Вебе)


// window.alert('каво?')                               // window это объект исключительно браузера
 
// window.confirm('Играл на Сларке?')

// const heading = document.getElementById('tcak')                    // document это объект (он и есть все дерево) getElementById метод этого объекта

// console.dir(heading.id)   
// console.dir(heading.textContent)   


// // console.log(heading)
// console.dir(heading.id)   // выводит id в консоль
// console.dir(heading.textContent)   // доступ до текста заголовка h1
// heading.textContent = 'Slark and Pudge'  // изменение текста заголовка
// heading.style.color = 'red'           // изменение цвета заголовка
// heading.style.textAlign = 'center'      // ставим заголовок по центру
// heading.style.backgroundColor = 'black' // задний фон блока
// heading.style.padding = '2rem '



// const heading = document.getElementById('tcak')

// setTimeout (() => {
//     heading.textContent = 'Slark and Pudge'  
//     heading.style.color = 'red'           
//     heading.style.textAlign = 'center'      
//     heading.style.backgroundColor = 'black' 
//     heading.style.padding = '2rem '   
// }, 2000) 


// console.dir(heading.textContent)   





// const heading = document.getElementById('tcak')                  // 1) создание переменной

// setTimeout(() => {
//     addStylesTo(heading)                                    
// }, 750)                                                         // 3) подставка в функцию переменной


// function addStylesTo(node) {
//     node.textContent = 'Slark and Pudge'  
//     node.style.color = 'red'           
//     node.style.textAlign = 'center'                          // 2) создание функции
//     node.style.backgroundColor = 'black' 
//     node.style.padding = '2rem '  
// }

// console.dir(heading)                                            // 4) вывод на экран результата



// const h3Ravage = document.getElementsByTagName('h3')[0]          // Старый метод (лучше не пользоваться)
// const h3Ravage = document.getElementsByClassName('h3-class')[0]     // еще один старый метод
// console.log(h3Ravage)              



// const h3Ravage = document.querySelector('.h3-class')      // class всегда через точку
// const h3Ravage = document.querySelector('#sub-hello')       // id всегда через #
// console.log(h3Ravage)

// console.dir(h3Ravage)

// const h3Ravage2 = h3Ravage.nextElementSibling  // показывает следующий элемент с таким ж тегом следующим за этим

// console.log(h3Ravage2)

// const h3List = document.querySelectorAll('h3')
// console.log(h3List)
// // const h3Ravage2 = h3List[1]  // вариант поиска через индекс массива
// const h3Ravage2 = h3List[h3List.length - 1]  // вариант поиска путем вычитания длинны из массива
// console.log(h3Ravage2)

// setTimeout(() => {
//     addStylesTo(heading)                                    
// }, 750) 

// setTimeout(() => {
//     addStylesTo(h3Ravage, 'BTC & ETH', 'green', '3rem')                                    
// }, 1250) 


// const link = h3Ravage2.querySelector('a')

// link.addEventListener('click', (event) => {
//     event.preventDefault()                               // отмена события
//     console.log('click on link', event.target.getAttribute('href'))
//     const url = event.target.getAttribute('href')
//     window.location = url  
// })


// setTimeout(() => {
//     addStylesTo(link, 'Binance and ByBit', 'yellow', '4rem')                                    
// }, 1750) 

// function addStylesTo(node, text = 'Slark and Pudge', color = 'red', fontSize) {
//     node.textContent = text  
//     node.style.color = color           
//     node.style.textAlign = 'center'                          
//     node.style.backgroundColor = 'black' 
//     node.style.padding = '2rem'
//     node.style.display = 'block'
//     node.style.width = '100%'  
//     if (fontSize) {
//         node.style.fontSize = fontSize
//     }
// }  


// heading.onclick = () => {
//     if (heading.style.color === 'red') {
//         heading.style.color = 'black'
//         heading.style.backgroundColor = 'white'                                 // первый способ добавления события.
//     } else {
//         heading.style.color = 'red'
//         heading.style.backgroundColor = 'black'
//     }
// }
 


// h3Ravage.addEventListener('dblclick', () => { 
//     if (h3Ravage.style.color === 'green') {
//         h3Ravage.style.color = 'black'
//         h3Ravage.style.backgroundColor = 'white'                                // второй способ добавления события.
//     } else {
//         h3Ravage.style.color = 'green'
//         h3Ravage.style.backgroundColor = 'black'
//     }
// })       





 


  
