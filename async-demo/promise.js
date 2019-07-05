// const p = new Promise((resolve, reject) => {
//     // resolve(1)
//     setTimeout(reject(new Error('hahahah')), 1000);
// })

// p.then(result => console.log('result', result)).catch(err => console.log('err', err.message));

const getUser = (id) => new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({id, githubUserName: 'yan7' })
        reject(new Error('something wrong'))
    }, 2000)
})

const getRepos = (repoId) => new Promise((res, rej) => {
    setTimeout(() => {
        res({ id: repoId, repoName: 'exercise-demo'})
    }, 2000)
})

const getCommits = (repo) => {
    console.log('repoId', repo)
}
// getUser(123)
//     .then(res => getRepos(res.id))
//     .then(getCommits)
//     .catch(err => console.log('Error', err.message)) 

// async await

const displayCommits = async () => {
    try {
        const user = await getUser(123);
        const repos = await getRepos(user.id);
        const commits = await getCommits(repos);
        return commits;
    } catch (err) {
        console.log('err1', err.message)
    }
}
displayCommits()
