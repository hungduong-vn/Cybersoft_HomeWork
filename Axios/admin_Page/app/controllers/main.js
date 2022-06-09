let getEle = (id) => document.getElementById(id);

// import { User } from "./../models/user.js";
import { ListUsers } from "./../models/listUsers.js";

let listUsers = new ListUsers();

//Hiện danh sách
let renderTable = (data) => {
  let content = "";
  data.forEach((ele, id) => {
    content += `
      <tr>
        <td>${id + 1}</td>
        <td>${ele.taiKhoan}</td>
        <td>${ele.matKhau}</td>
        <td>${ele.hoTen}</td>
        <td>${ele.email}</td>
        <td>${ele.ngonNgu}</td>
        <td>${ele.loaiND}</td>
        <td>
          <button class="btn btn-info">Sửa</button>
          <button class="btn btn-danger">Xoá</button>
        </td>
      </tr>
    `;
  });
  getEle("tblDanhSachNguoiDung").innerHTML = content;
};

let getUsers = () => {
  listUsers
    .getUsers()
    .then((result) => {
      renderTable(result.data);
    })
    .catch((error) => console.log(error));
};
getUsers();

//Thêm user
let getInput = () => [
  getEle("TaiKhoan").value,
  getEle("HoTen").value,
  getEle("MatKhau").value,
  getEle("Email").value,
  getEle("HinhAnh").value,
  getEle("loaiNguoiDung").selectedIndex,
  getEle("loaiNgonNgu").selectedIndex,
  getEle("MoTa").value,
];
let getField = () => [
  getEle("TaiKhoan"),
  getEle("HoTen"),
  getEle("MatKhau"),
  getEle("Email"),
  getEle("HinhAnh"),
  getEle("loaiNguoiDung"),
  getEle("loaiNgonNgu"),
  getEle("MoTa"),
];

let prefill = () => {
  let input = getField();
  input[0].value = "estone";
  input[1].value = "Emma Stone";
  input[2].value = "Emma@21";
  input[3].value = "estone@gmail.com";
  input[4].value = "teacher_3.jpg";
  input[5].selectedIndex = "1";
  input[6].selectedIndex = "3";
  input[7].value = "Bring to the table win-win survival strategies to ensure.";
};
getEle("btnThemNguoiDung").onclick = () => prefill();
let addUser = () => {};
