export default function about() {
  const content = document.getElementById("content")
  content.innerHTML = ""

  const divHeadline = document.createElement("div")
  divHeadline.classList.add("headline")
  const headline = document.createElement("h1")
  headline.textContent = "About"
  divHeadline.appendChild(headline)

  const divAbout = document.createElement("div")
  divHeadline.classList.add("about")
  const paragraphOne = document.createElement("p")
  paragraphOne.textContent =
    "Welcome to Le Gourmet Haven, where culinary excellence meets unparalleled hospitality. Our restaurant is a sanctuary for food lovers, offering an exquisite dining experience that marries the art of fine dining with the comfort of a welcoming atmosphere."
  const paragraphTwo = document.createElement("p")
  paragraphTwo.textContent =
    "At Le Gourmet Haven, we believe that every meal is a celebration of life, and we strive to create moments that linger in your memory long after the last bite. Our talented chefs are dedicated to sourcing the freshest, highest-quality ingredients to craft dishes that are as visually stunning as they are delicious. Each plate is a testament to our commitment to innovation, tradition, and, above all, passion for the culinary arts."
  const paragraphThree = document.createElement("p")
  paragraphThree.textContent =
    "Our elegantly designed dining space provides the perfect backdrop for any occasion, from intimate dinners to grand celebrations. With a focus on exceptional service, our attentive staff ensures that every detail is attended to, allowing you to relax and savor your time with us."
  const paragraphFour = document.createElement("p")
  paragraphThree.textContent =
    "We invite you to join us at Le Gourmet Haven, where every meal is more than just dining—it’s an experience. Discover the flavors, ambiance, and impeccable service that have made us a beloved destination for discerning diners. Thank you for choosing Le Gourmet Haven, where your culinary dreams come true."
  divAbout.appendChild(paragraphOne)
  divAbout.appendChild(paragraphTwo)
  divAbout.appendChild(paragraphThree)
  divAbout.appendChild(paragraphFour)

  content.appendChild(divHeadline)
  content.appendChild(divAbout)
}
