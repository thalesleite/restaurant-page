import "./styles.css"
import home from "./home"
import menu from "./menu"
import about from "./about"

const btnHome = document.getElementById("home")
btnHome.addEventListener("click", () => {
  home()
})

const btnMenu = document.getElementById("menu")
btnMenu.addEventListener("click", () => {
  menu()
})

const btnAbout = document.getElementById("about")
btnAbout.addEventListener("click", () => {
  about()
})

home()
