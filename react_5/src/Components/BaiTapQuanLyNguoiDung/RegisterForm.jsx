import React from "react";
import { useDispatch } from "react-redux";
import { addUserAction } from "../../Store/actions/user";

export default function RegisterForm() {
  const dispatch = useDispatch();
  return (
    <div className="card p-0">
      <div className="card-header bg-warning text-white font-weight-bold">
        REGISTER FORM
      </div>
      <div className="card-body">
        <form>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label>Username</label>
                <input
                  title="Tên Tài Khoản"
                  name="username"
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  title="Họ và Tên"
                  name="fullName"
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Password</label>
                <input
                  title="Mật Khẩu"
                  name="password"
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  title="Số Điện Thoại"
                  name="phoneNumber"
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Email</label>
                <input
                  title="Email"
                  name="email"
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Type</label>
                <select
                  title="Loại Tài Khoản"
                  name="type"
                  className="form-control"
                >
                  <option>Client</option>
                  <option>Admin</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="card-footer text-muted">
        <button
          className="btn btn-warning mr-2"
          onClick={() => {
            dispatch(addUserAction());
          }}
        >
          SAVE
        </button>
        <button className="btn btn-outline-dark">RESET</button>
      </div>
    </div>
  );
}
