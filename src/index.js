import renderRestaurant from "./restaurant";
import renderMenu from "./menu";
import renderAbout from "./about";

// https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
function addClass(el, className) {
  if (el.classList) el.classList.add(className);
  else if (!hasClass(el, className)) el.className += " " + className;
}

function removeClass(el, className) {
  if (el.classList) el.classList.remove(className);
  else
    el.className = el.className.replace(
      new RegExp("\\b" + className + "\\b", "g"),
      ""
    );
}

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

    // Add `selected` class to clicked on tab and remove it from all others.
    const tabButtons = event.target.parentElement.children;
    for (let i = 0; i < tabButtons.length; i++) {
      removeClass(tabButtons[i], "selected");
    }
    addClass(event.target, "selected");
  });
});

renderRestaurant(document.getElementById("content"));
