export default function about() {
  const content = document.getElementById("content")
  content.innerHTML = ""

  const divHeadline = document.createElement("div")
  divHeadline.classList.add("headline")
  const headline = document.createElement("h1")
  headline.textContent = "About"
  divHeadline.appendChild(headline)

  content.appendChild(divHeadline)
}
