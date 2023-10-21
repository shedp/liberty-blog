const indexHTML = document.getElementById('index')
// const postsHTML = document.getElementById('postlink')
// const showHTML = document.getElementById('show')

if (!(sessionStorage.getItem('dark'))) {
    sessionStorage.setItem('dark', "false")
} else if (sessionStorage.getItem('dark') == "true") {
    indexHTML.setAttribute('href', `./css/dark_index.css`)
    // postsHTML.setAttribute('href', `./css/dark_posts.css`)
    // showHTML.setAttribute('href', `./css/dark_show.css`)
    document.querySelector('img').setAttribute('src', "assets/lightmode.png");
}

document.getElementById('themeBtn').addEventListener('click', e => {
        toggleDark()
})

function toggleDark() {
    let darkMode = sessionStorage.getItem('dark')
    if (darkMode == "true") {
        indexHTML.setAttribute('href', './css/index.css');
        document.querySelector('img').setAttribute('src', "assets/darkmode.png");
        sessionStorage.setItem('dark', "false")
    } else if (darkMode == "false") {
        indexHTML.setAttribute('href', './css/dark_index.css');
        // postsHTML.setAttribute('href', './css/dark_posts.css');
        // showHTML.setAttribute('href', './css/dark_show.css');
        document.querySelector('img').setAttribute('src', "assets/lightmode.png");
        sessionStorage.setItem('dark', "true")
    }
} 
