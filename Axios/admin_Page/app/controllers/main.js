let getEle = (id) => document.getElementById(id);

import { User } from "../models/user.js";
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
          <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="edit('${
            ele.id
          }')">Sửa</button>
          <button class="btn btn-danger" onclick="remove('${
            ele.id
          }')">Xoá</button>
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
  getEle("loaiNguoiDung"),
  getEle("loaiNgonNgu"),
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
getEle("btnThemNguoiDung").onclick = () => {
  prefill();
  getEle("btnUpdateUser").style.display = "none";
  getEle("btnAddUser").style.display = "inline-block";
};
getEle("btnAddUser").onclick = () => {
  addUser();
};
let addUser = () => {
  let input = getInput();
  input = [...input, id];
  let user = new User(...input);
  listUsers
    .addUser(user)
    .then(() => {
      getUsers();
    })
    .catch((error) => console.log(error));
};

//REMOVE
window.remove = (id) => {
  listUsers
    .removeUser(id)
    .then(() => {
      getUsers();
    })
    .catch((error) => console.log(error));
};

//EDIT
window.edit = (id) => {
  getEle("btnUpdateUser").style.display = "inline-block";
  getEle("btnAddUser").style.display = "none";

  listUsers
    .getUser(id)
    .then((result) => {
      let currentUser = result.data;
      let input = getField();
      input[0].value = currentUser.taiKhoan;
      input[1].value = currentUser.hoTen;
      input[2].value = currentUser.matKhau;
      input[3].value = currentUser.email;
      input[4].value = currentUser.hinhAnh;
      input[5].value = currentUser.loaiND;
      input[6].value = currentUser.ngonNgu;
      input[7].value = currentUser.moTa;
    })
    .catch((error) => console.log(error));
  getEle("btnUpdateUser").onclick = () => {
    let input = getInput();
    input = [...input, id];
    let newUser = new User(...input);
    updateUser(newUser);
  };
};

let updateUser = (user) => {
  listUsers
    .updateUser(user)
    .then(() => {
      getUsers();
    })
    .catch((error) => console.log(error));
};
