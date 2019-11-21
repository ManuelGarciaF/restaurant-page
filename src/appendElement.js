export default (parent, tag, cssClasses) => {
  const elem = document.createElement(tag);
  parent.appendChild(elem);
  if (cssClasses) cssClasses.forEach(cssClass => elem.classList.add(cssClass));
  return elem;
};
