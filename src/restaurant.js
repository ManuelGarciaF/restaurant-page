import appendElement from "./appendElement";

export default function renderRestaurant(contentDiv) {
  const tabDiv = appendElement(contentDiv, "div", ["restaurant-tab"])

  const img = appendElement(tabDiv, "img", ["restaurant-image"])
  img.src = "./restaurant.jpeg"
  img.alt = "Restaurant Image"

  const textDiv = appendElement(tabDiv, "div", ["text-div"])

  const text = appendElement(textDiv, "p", ["restaurant-text"])
  text.textContent = "Pariatur duis nostrud adipisicing quis. Lorem voluptate ipsum ullamco irure exercitation. Reprehenderit commodo non elit duis anim elit reprehenderit consectetur amet eiusmod amet duis do. Nisi culpa proident duis anim qui dolore nulla excepteur ipsum incididunt ut magna voluptate. Ex mollit aute ad commodo velit anim do esse. Pariatur amet do cillum do enim commodo quis mollit est. Excepteur dolore duis ex voluptate dolore."

  const link = appendElement(textDiv, "a")
  link.textContent = "Learn More"
  link.href = "#"
};
