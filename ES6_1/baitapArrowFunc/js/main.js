let getEle = (id) => document.getElementById(id);

const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

let loadColorBtn = () => {
  let content = colorList.reduce(
    (prevVal, nextVal) =>
      prevVal +
      `<button class="color-button ${nextVal}" onclick="houseColorChange('${nextVal}')"></button>`,
    ""
  );
  getEle("colorContainer").innerHTML = content;
};

window.onload = loadColorBtn();

let houseColorChange = (colorClass) => {
  //Set active colorBtn
  let activeColorBtn = document.querySelector(".color-button.active");
  if (activeColorBtn !== null) {
    activeColorBtn.classList.remove("active");
  }
  let colorBtn = document.querySelector(`.color-button.${colorClass}`);
  colorBtn.classList.add("active");

  //Change House Color
  let house = getEle('house');
  house.className = 'house '+colorClass; 
};
