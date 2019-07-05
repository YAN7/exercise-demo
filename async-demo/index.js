const getUser = (id,cb) => {
    setTimeout(() => {
        console.log('Reading use form a database...');
        const result = {
            id,
            githubUsername: 'yan7',
        }
        cb(result)
    }, 2000);
}

const getRepo = (useName, cb) => {
    setTimeout(() => {
        cb(['repo1', 'repo2', 'repo3']);
    }, 2000)
}

const displayRepo = (res) => getRepo(res.githubUsername, getCommits)

const getCommits = (repo, cb) => {
    console.log(repo);
}

console.log('Brefore');
getUser(1, displayRepo);
console.log('After');