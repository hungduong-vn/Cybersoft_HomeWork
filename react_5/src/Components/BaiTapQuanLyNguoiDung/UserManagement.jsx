import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserAction, selectUserAction } from "../../Store/actions/user";
// import { userReducer } from "../../Store/reducers/userReducer";

export default function UserManagement(props) {
  let users = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [userList, setUserList] = useState([...users.userList]);
  const handleEdit = (user) => {
    // console.log(user);
    dispatch(selectUserAction(user));
  };
  const handleDelete = (user) => {
    dispatch(deleteUserAction(user.id));
  };
  const handleSearch = (event) => {
    const keyword = event.target.value;
    if (keyword) {
      setUserList(
        users.userList.filter(
          (ele) =>
            ele.fullName
              .toLowerCase()
              .trim()
              .indexOf(keyword.toLowerCase().trim()) !== -1
        )
      );
    } else {
      setUserList([...users.userList]);
    }
  };
  return (
    <div className="card p-0 mt-3">
      <div className="card-header font-weight-bold">USER MANAGEMENT</div>
      <div className="row mt-4 px-3 ">
        <div className="col-4">
          <div className="form-group mb-0">
            <input
              onChange={handleSearch}
              type="text"
              placeholder="Search by full name..."
              className="form-control"
            />
          </div>
        </div>
        <div className="col-3 ml-auto">
          <div className="form-group mb-0">
            <select className="form-control">
              <option>All</option>
              <option>Client</option>
              <option>Admin</option>
            </select>
          </div>
        </div>
      </div>
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Username</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {userList.map((ele, id) => {
              return (
                <tr key={ele.id} className={id % 2 ? "bg-light" : ""}>
                  <td>{id + 1}</td>
                  <td>{ele.username}</td>
                  <td>{ele.fullName}</td>
                  <td>{ele.email}</td>
                  <td>{ele.phoneNumber}</td>
                  <td>{ele.type}</td>
                  <td>
                    <button
                      className="btn btn-info mr-2"
                      onClick={() => handleEdit(ele)}
                    >
                      EDIT
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(ele)}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
