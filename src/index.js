import renderRestaurant from "./restaurant";
import renderMenu from "./menu";
import renderAbout from "./about";

function renderTab(tabId) {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";
  switch (tabId) {
    case 0:
      renderRestaurant(contentDiv);
      break;
    case 1:
      renderMenu(contentDiv);
      break;
    case 2:
      renderAbout(contentDiv);
      break;
  }
}

const tabButtons = document.querySelectorAll(".tab");

tabButtons.forEach(elem => {
  elem.addEventListener("click", event => {
    renderTab(Number(event.target.getAttribute("data-index")));
  });
});

renderRestaurant(document.getElementById("content"));
