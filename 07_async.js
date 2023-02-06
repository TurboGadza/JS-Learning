// Асинхронность
// Event Loop



// таймауты и интервалы

// const timeout = setTimeout(() => {
//     console.log('After timeout')                        // через 2,5 секунды вызывает log (это есть таймаут)
//     }, 2500)

// clearTimeout(timeout)                                   // убирает таймаут, он никогда не вызовется



// const interval = setInterval(() => {
//     console.log('After Interval')                        // через 0,5 секунды вызывает log (это есть интервал)
//     }, 500)

// clearInterval(interval)                                  // убирает интервал, он никогда не вызовется 




// const delay = (wait = 1000) => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             resolve()
//         }, wait)
//     })
//     return promise
// }


// delay(2500)
//     .then(() => {
//         console.log('After 2 seconds')
//     })
//     .catch(err => console.error(err))
//     .finally(() => console.log('Finaly'))





    // const delay = (wait = 1000) => {
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout(() =>{
    //             resolve()
    //         }, wait)
    //     })
    //     return promise
    // }
    

    // const getData = () => new Promise(resolve => resolve([
    //     1, 2, 3, 4, 5, 6, 7
    // ]))


    // async function asyncExample() {
    //     await delay(3000)
    //     const data = await getData()
    //     console.log('Data:', data)
    // }

