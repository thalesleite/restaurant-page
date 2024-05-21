export default function home() {
  const content = document.getElementById("content")
  content.innerHTML = ""

  const divHeadline = document.createElement("div")
  divHeadline.classList.add("headline")
  const headline = document.createElement("h1")
  headline.textContent = "'Le Gourmet Haven': A Dining Experience Like No Other"
  divHeadline.appendChild(headline)

  const restaurantImg = new Image()
  restaurantImg.classList.add("restaurant-img")

  const divAbout = document.createElement("div")
  divHeadline.classList.add("about")
  const paragraphOne = document.createElement("p")
  paragraphOne.textContent =
    "Nestled in the heart of the city, Le Gourmet Haven offers a dining experience that transcends the ordinary. From the moment you step through its elegant doors, you're greeted by an ambiance that exudes warmth and sophistication. The menu, a masterful blend of contemporary and classic flavors, is crafted with the finest ingredients, ensuring every dish is a symphony of taste and presentation."
  const paragraphTwo = document.createElement("p")
  paragraphTwo.textContent =
    "Renowned for its impeccable service and exquisite cuisine, Le Gourmet Haven has quickly become a favorite among food enthusiasts. Each plate is a work of art, designed to delight both the palate and the eye. Whether you're indulging in the rich, creamy textures of their signature lobster bisque or savoring the perfectly seared filet mignon, every bite promises an unforgettable culinary journey."
  const paragraphThree = document.createElement("p")
  paragraphThree.textContent =
    "Perfect for romantic dinners, family gatherings, or special celebrations, Le Gourmet Haven is more than just a restaurant—it's a destination where culinary dreams come true. Come and experience the magic for yourself, and discover why Le Gourmet Haven is celebrated as the epitome of dining excellence."
  divAbout.appendChild(paragraphOne)
  divAbout.appendChild(paragraphTwo)
  divAbout.appendChild(paragraphThree)

  content.appendChild(divHeadline)
  content.appendChild(restaurantImg)
  content.appendChild(divAbout)
}
