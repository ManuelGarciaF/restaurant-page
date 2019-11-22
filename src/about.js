import appendElement from "./appendElement";

export default function renderAbout(contentDiv) {
  const aboutText = appendElement(contentDiv, "h3", ["about-text"])
  aboutText.textContent = "Made by Manuel Garcia for The Odin Project."
}