export default function menu() {
  const content = document.getElementById("content")
  content.innerHTML = ""

  const divHeadline = document.createElement("div")
  divHeadline.classList.add("headline")
  const headline = document.createElement("h1")
  headline.textContent = "Menu"
  divHeadline.appendChild(headline)

  const appetizers = document.createElement("h2")
  appetizers.textContent = "APPETIZERS"
  const lobster = createRecipe(
    "Lobster Bisque",
    "Rich and creamy, garnished with a touch of brandy and fresh herbs."
  )
  const truffle = createRecipe(
    "Truffle Arancini",
    "Crispy risotto balls infused with truffle oil, served with a garlic aioli dip."
  )
  const foie = createRecipe(
    "Foie Gras Crostini",
    "Seared foie gras on toasted baguette slices, topped with fig compote."
  )

  const entrees = document.createElement("h2")
  entrees.textContent = "ENTREES"
  const filet = createRecipe(
    "Filet Mignon",
    "Pan-seared scallops with a saffron risotto and a beurre blanc sauce."
  )
  const seared = createRecipe(
    "Seared Scallops",
    "Crispy risotto balls infused with truffle oil, served with a garlic aioli dip."
  )
  const mushroom = createRecipe(
    "Wild Mushroom Risotto",
    "Creamy Arborio rice with a medley of wild mushrooms, parmesan cheese, and a hint of white truffle oil."
  )
  const roast = createRecipe(
    "Roast Duck Breast",
    "Succulent duck breast with a cherry gastrique, served with roasted fingerling potatoes and braised red cabbage."
  )

  content.appendChild(divHeadline)

  content.appendChild(appetizers)
  content.appendChild(truffle)
  content.appendChild(foie)
  content.appendChild(lobster)

  content.appendChild(entrees)
  content.appendChild(filet)
  content.appendChild(seared)
  content.appendChild(mushroom)
  content.appendChild(roast)
}

function createRecipe(textHeader, textDescription) {
  const divRecipe = document.createElement("div")
  divRecipe.classList.add("recipe")

  const header = document.createElement("h3")
  header.textContent = textHeader

  const description = document.createElement("p")
  description.textContent = textDescription

  divRecipe.appendChild(header)
  divRecipe.appendChild(description)

  return divRecipe
}
