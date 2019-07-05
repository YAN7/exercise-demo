const p1 = new Promise((res, rej) => {
    setTimeout(() => {
        console.log('querying api1...');
        // rej(new Error('there is something wrong'))
        rej(111);
    }, 2001);
});

const p2 = new Promise((res) => {
    setTimeout(() => {
        console.log('querying api2...');
        res(222)
    }, 2000)
})

// Promise
//     .all([p1, p2])
//     .then(([res1, res2]) => console.log('result', res1, res2))
//     .catch(err => console.log('err:', err.message))

// race 只捕获第一个状态变为fulfilled的promise,不管这个fulfilled状态是resloved还是rejected
Promise
    .race([p1, p2])
    .then(res => console.log(res))
    .catch(err => console.log('err', err.message))