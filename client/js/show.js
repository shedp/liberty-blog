const titleEl = document.querySelector('.title')
const bodyEl = document.querySelector('.body')
const dateEl = document.querySelector('.date')
const aliasEl = document.querySelector('.alias')

const idStr = window.location.hash.substring(1)

fetchPostById(idStr)
    .then(data => processPostData(data))
    .catch(err => console.warn(err))

function processPostData(postData) {
    renderPost(postData)
}

function renderPost({title, alias, body, date}) {
    titleEl.textContent = title
    let paragraphs = formatBody(body)
    paragraphs.forEach(p => {
        bodyEl.appendChild(p)
    })
    aliasEl.textContent = alias
    dateEl.textContent = formatDate(date)
}

function formatBody(text) {
    let arr = text.split('\n\n')
    let pElements = arr.map(paragraph => {
        let paraEl = document.createElement('p')
        paraEl.textContent = paragraph
        return paraEl
    })
    return pElements
}
