const fetchPosts = async () => {
    return new Promise(async (res, rej) => {
        fetch('http://localhost:3000/posts')
            .then(res => res.json())
            .catch(err => rej(err))
            .then(data => res(data))
    })
}

const fetchPostById = async (id) => {
    return new Promise(async (res, rej) => {
        fetch(`http://localhost:3000/posts/${id}`)
            .then(res => res.json())
            .catch(err => rej(err))
            .then(data => res(data))
    })
}
