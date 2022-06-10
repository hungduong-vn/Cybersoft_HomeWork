let getEle = (id) => document.getElementById(id);

const inpK1 = ["inpToan", "inpLy", "inpHoa"];
const inpK2 = ["inpVan", "inpSu", "inpDia", "inpEnglish"];

let tinhDTB = (arrDiem) =>
  arrDiem.reduce((pre, next) => pre + next, 0) / arrDiem.length;

let getDiemInp = (inpIDArr) => inpIDArr.map((ele) => getEle(ele).value * 1);

let printDTB = (divID, DTB) => getEle(divID).innerHTML = DTB;

let run = (inpIDArr,divKQ) => {
  let inp = getDiemInp(inpIDArr);
  let DTB = tinhDTB(inp);
  printDTB(divKQ,DTB);
}

getEle("btnKhoi1").onclick = () => run(inpK1,'tbKhoi1');
getEle("btnKhoi2").onclick = () => run(inpK2,'tbKhoi2');
