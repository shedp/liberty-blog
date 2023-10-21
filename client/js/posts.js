const postsDiv = document.querySelector('#posts')

fetchPosts()
    .then(data => processPostsData(data))
    .catch(err => console.warn(err))

function processPostsData(postsData) {
    const postsArr = [...postsData]
    const length = postsArr.length
    const elements = postsArr.map((post, index) => {
        const postEl = renderPost(post)
        if (index !== length - 1) {
            return [postEl, renderSeparator()]
        } else return postEl
    })
    flattenedEl = elements.flat().reverse()
    flattenedEl.forEach(el => postsDiv.appendChild(el))
}

function renderPost({title, alias, body, date, _id}) {
    const parentEl = document.createElement('div')
    parentEl.className = 'post'

    const titleEl = document.createElement('h2')
    titleEl.className = 'post-title'
    titleEl.textContent = title ?? ""
    parentEl.appendChild(titleEl)

    const bodyEl = document.createElement('p')
    bodyEl.className = 'post-body'
    bodyEl.textContent = formatBody(body)
    parentEl.appendChild(bodyEl)

    const aliasEl = document.createElement('div')
    aliasEl.className = 'post-alias'
    aliasEl.textContent = alias ?? ""
    parentEl.appendChild(aliasEl)

    const dateEl = document.createElement('div')
    dateEl.className = 'post-date'
    dateEl.textContent = formatDate(date)
    parentEl.appendChild(dateEl)

    const linkEl = document.createElement('a')
    linkEl.setAttribute('href', `show.html#${_id}`)
    
    linkEl.appendChild(parentEl)
    return linkEl
}

function renderSeparator() {
    const separatorEl = document.createElement('div')
    separatorEl.className = 'separator'
    return separatorEl
}

function formatBody(body) {
    if (body) {
        if (body.length > 100) return `${body.substring(0, 100)}...`
        else return body
    }
}
