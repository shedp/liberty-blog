const menuBtn = document.querySelector(".menu")
menuBtn.addEventListener("click", openNav)

function openNav(e) {
    e.preventDefault();
    const navItems = document.getElementsByClassName("li");
    Array.from(navItems).forEach((item) => {
        if (item.style.display === "none") {
            item.style.display = "block";
            document.getElementById("empty").style.display = "block"
            document.getElementById("themeBtn").style.display = "block"
        } else {
            item.style.display = "none";
            document.getElementById("empty").style.display = "none"
            document.getElementById("themeBtn").style.display = "none"
        }
      })
    }
