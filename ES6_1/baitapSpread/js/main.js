let getEle = (id) => document.getElementById(id);

let textToSpan = (divID) => {
  let text = getEle(divID).innerHTML;
  let letters = [...text];
  getEle(divID).innerHTML = letters.reduce((pre, now) => pre+`<span>${now}</span>`, "");
};

textToSpan('h2');