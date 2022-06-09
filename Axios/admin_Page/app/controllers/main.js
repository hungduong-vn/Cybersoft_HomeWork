let getEle = (id) => document.getElementById(id);

// import { User } from "./../models/user.js";
import { ListUsers } from "./../models/listUsers.js";

let listUsers = new ListUsers();

let getUsers = () => {
  listUsers
    .getUsers()
    .then((result) => {
      renderTable(result.data);
    })
    .catch((error) => console.log(error));
};
getUsers();
let renderTable = (data) => {
  let content = "";
  data.forEach((ele, id) => {
    content += `
      <tr>
        <td>${id+1}</td>
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
