const showHTML = document.getElementById('show')

if (!(sessionStorage.getItem('dark'))) {
    sessionStorage.setItem('dark', "false")
} else if (sessionStorage.getItem('dark') == "true") {
    showHTML.setAttribute('href', `./css/dark_show.css`)
    document.querySelector('img').setAttribute('src', "assets/lightmode.png");
}

document.getElementById('themeBtn').addEventListener('click', e => {
        toggleDark()
})

function toggleDark() {
    let darkMode = sessionStorage.getItem('dark')
    if (darkMode == "true") {
        showHTML.setAttribute('href', './css/show.css');
        document.querySelector('img').setAttribute('src', "assets/darkmode.png");
        sessionStorage.setItem('dark', "false")
    } else if (darkMode == "false") {
        showHTML.setAttribute('href', './css/dark_show.css');
        document.querySelector('img').setAttribute('src', "assets/lightmode.png");
        sessionStorage.setItem('dark', "true")
    }
} 
