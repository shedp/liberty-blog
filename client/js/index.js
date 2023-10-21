const form = document.querySelector('form')
const titleInput = document.querySelector('#title')
const bodyInput = document.querySelector('#newPost')
const titleError = document.querySelector('#titleError')
const bodyError = document.querySelector('#bodyError')
const aliasField = document.getElementById("alias")

form.addEventListener('submit', postForm)

titleInput.addEventListener('input', e => {
    showTitleError(false)
})

bodyInput.addEventListener('input', e => {
    showBodyError(false)
})

async function postForm(e) {
    e.preventDefault()

    const postObj = Object.fromEntries(new FormData(e.target))

    const isTitleValid = checkInput(postObj.title)
    const isBodyValid = checkInput(postObj.body)

    if (!isTitleValid || !isBodyValid) {
        !isTitleValid && showTitleError()
        !isBodyValid && showBodyError()
        return
    }

    if (!postObj.alias) postObj.alias = "Anon"

    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(postObj)
        }
        const response = await fetch(`http://localhost:3000/posts`, options)
        const { _id, err } = await response.json();
        if (err) {
            throw Error(err)
        } else {
            window.location.href = `show.html#${_id}`
        }
    } catch (err) {
        console.warn(err)
    }
}

function showTitleError(shouldDisplay = true) {
    titleError.style.visibility = shouldDisplay ? 'visible' : 'hidden'
    titleError.style.opacity = shouldDisplay ? 1 : 0
}

function showBodyError(shouldDisplay = true) {
    bodyError.style.visibility = shouldDisplay ? 'visible' : 'hidden'
    bodyError.style.opacity = shouldDisplay ? 1 : 0
}

function checkInput(text) {
    return !!text.length
}
