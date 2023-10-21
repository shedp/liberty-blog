const postsHTML = document.getElementById('postlink')

if (!(sessionStorage.getItem('dark'))) {
    sessionStorage.setItem('dark', "false")
} else if (sessionStorage.getItem('dark') == "true") {
    postsHTML.setAttribute('href', `./css/dark_posts.css`)
    document.querySelector('img').setAttribute('src', "assets/lightmode.png");
}

document.getElementById('themeBtn').addEventListener('click', e => {
        toggleDark()
})

function toggleDark() {
    let darkMode = sessionStorage.getItem('dark')
    if (darkMode == "true") {
        postsHTML.setAttribute('href', './css/posts.css');
        document.querySelector('img').setAttribute('src', "assets/darkmode.png");
        sessionStorage.setItem('dark', "false")
    } else if (darkMode == "false") {
        postsHTML.setAttribute('href', './css/dark_posts.css');
        document.querySelector('img').setAttribute('src', "assets/lightmode.png");
        sessionStorage.setItem('dark', "true")
    }
} 
