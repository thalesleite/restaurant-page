export default function menu() {
  const content = document.getElementById("content")
  content.innerHTML = ""

  const divHeadline = document.createElement("div")
  divHeadline.classList.add("headline")
  const headline = document.createElement("h1")
  headline.textContent = "Menu"
  divHeadline.appendChild(headline)

  content.appendChild(divHeadline)
}
