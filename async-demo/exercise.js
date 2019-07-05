// callback method
const getCustomer = (id, cb) => {
    setTimeout(() => {
        cb({
            id,
            name: 'yan7',
            isGold: true,
        }) 
    }, 2000)
}
const getTopMovies = (id, cb) => {
    setTimeout(() => {
        cb({
            id: `movie ${id}`,
            name: 'Icon Man',
        }) 
    }, 2000)
}

const sendEmail = (id) => {
    setTimeout(() => {
        console.log(`has send email ${id}`)
    }, 2000)
}


// getCustomer(123, (customer) => {
//     console.log(`customer: ${customer}`)
//     getTopMovies(customer.id, (movie) => {
//         console.log('has received topMovie');
//         sendEmail(movie.id)
//     })
// })

// async await method
const getCustomerAsync = (id) => {
    return new Promise(res => {
        setTimeout(() => {
            console.log('get the customer');
            res({
                id,
                name: 'yan7',
                isGold: true,
            })
        }, 2000)
    })
}
const getTopMoviesAsync = (id) => {
    return new Promise(res => {
        setTimeout(() => {
            console.log('get the topMovie');
            res({
                id: `movie ${id}`,
                name: 'Icon Man',
            })
        }, 2000)
    })
}

const sendEmailAsync = (id) => {
    return new Promise(res => {
        setTimeout(() => {
            res(id)
        }, 2000)
    })
}

const excuteMethod = async () => {
    try {
        const customer = await getCustomerAsync(111);
        const topMovie = await getTopMoviesAsync(customer.id);
        const hasSendEamil = await sendEmailAsync(topMovie.id);
        if (hasSendEamil) {
            console.log(`Congratulations!! send the email ${hasSendEamil} finally!!`);
        }
    } catch (err) {
        console.log(`there is something wrong ${err}`)
    }
}

excuteMethod()
