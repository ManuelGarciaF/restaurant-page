import appendElement from "./appendElement";

function appendMenuItem(
  contentDiv,
  imgSource,
  title,
  text,
  isImgOnLeft = true
) {
  function appendImage() {
    const item1Image = appendElement(menuItem1, "img", ["menu-img"]);
    item1Image.src = imgSource;
    item1Image.alt = title + " Image";
  }

  const tabDiv = appendElement(contentDiv, "div", ["menu-div"]);

  const menuItem1 = appendElement(tabDiv, "div", ["menu-item"]);

  if (isImgOnLeft) appendImage()

  const item1TextDiv = appendElement(menuItem1, "div", ["text-div"]);

  const item1Title = appendElement(item1TextDiv, "h4", ["menu-title"]);
  item1Title.textContent = title;

  const item1Text = appendElement(item1TextDiv, "p");
  item1Text.textContent = text;

  if (!isImgOnLeft) appendImage()
}

export default function renderMenu(contentDiv) {
  appendMenuItem(
    contentDiv,
    "./img/arancini.jpeg",
    "Arancini",
    "Id duis esse id consectetur commodo in. Ad id cupidatat ea nulla officia. Adipisicing nostrud magna minim commodo incididunt. Commodo excepteur sit irure magna in.",
    true
  );
  appendMenuItem(
    contentDiv,
    "./img/lasagne.jpg",
    "Lasagne",
    "Sunt reprehenderit nisi anim commodo id laboris. Exercitation aliqua exercitation sunt qui exercitation et id. Sit id nostrud esse labore adipisicing eu incididunt pariatur duis deserunt. Esse eiusmod elit quis in deserunt commodo officia magna velit ullamco. Ut eu amet id et exercitation. Enim velit do dolor qui ad voluptate dolor id Lorem. Elit incididunt laborum aliquip voluptate et qui.",
    false
  );
  appendMenuItem(
    contentDiv,
    "./img/osso-buco-alla-Milanese.jpeg",
    "Osso buco alla Milanese",
    "Consectetur ut labore officia aute quis aliqua laborum ullamco voluptate occaecat qui aute pariatur. Elit et consectetur duis nisi velit fugiat laborum aliqua anim officia irure voluptate. Non est ad aliquip excepteur amet fugiat reprehenderit elit incididunt nostrud nulla. Deserunt consequat Lorem exercitation ea consectetur aliquip aliqua ut eiusmod. Est dolor eiusmod est occaecat. Amet sit ullamco minim sint. Exercitation irure ex occaecat et ad occaecat id commodo ipsum irure occaecat Lorem irure id.",
    true
  );
  appendMenuItem(
    contentDiv,
    "./img/ribollita.jpeg",
    "Ribollita",
    "Minim aliqua enim esse labore sunt aliqua ea consequat laborum occaecat elit et ad. Magna aliqua sint culpa minim dolor quis irure sint esse mollit aliquip. Ex dolor fugiat exercitation ad magna dolor pariatur ad qui deserunt dolor excepteur occaecat duis. Aliqua dolore incididunt esse amet non occaecat minim consequat fugiat non. Enim proident elit reprehenderit incididunt amet dolor officia qui aliqua et.",
    false
  );
}
