console.log('start')

console.log('start 2')

function Padgus() {
    console.log('Disraptor')
}

window.setTimeout(function() {
    console.log('Slark')
}, 1500)

setTimeout(Padgus, 1000) 

console.log('amulet')

// смысл асинхроности в том, что те элементы которые вызываются с задержкой (setTimeout), умитываются внешним api, но сначала программа пробежиться по остальным строчкам
// дальше до донца кода и выведет в консоль сначала строчки без задержки, а после окончания будут выведены уже строчки с задержкой (setTimeout)