import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addUserAction } from "../../Store/actions/user";
const DEFAULT_USER = {
  id: "",
  username: "",
  fullName: "",
  email: "",
  password: "",
  phoneNumber: "",
  type: "Client",
};
export default function RegisterForm() {
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const [user, setUser] = useState({ value: DEFAULT_USER, errors: {} });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, value: { ...user.value, [name]: value } });
    // console.log(user);
  };
  const handleBlur = (event) => {
    const {
      name,
      title,
      minLength,
      maxLength,
      validity: { valueMissing, tooLong, tooShort, patternMismatch },
    } = event.target;
    let message = "";
    if (tooLong || tooShort) {
      message = `${title}'s length is between ${minLength} and ${maxLength}`;
    }
    if (patternMismatch) {
      message = `${title} is invalid`;
    }
    if (valueMissing) {
      message = `(*) ${title} is required`;
    }
    setUser({ ...user, errors: { ...user.errors, [name]: message } });
    console.log(event.target.validity);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submiting");
    for (let i = 0; i < 10; i++) {
      if (i === 5) {
        return;
      }
      console.log(i);
    }
    console.log("Out of loop!");
    // dispatch(addUserAction());
  };
  return (
    <div className="card p-0">
      <div className="card-header bg-warning text-white font-weight-bold">
        REGISTER FORM
      </div>
      <div className="card-body">
        <form noValidate ref={formRef} onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label>Username</label>
                <input
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  title="Tên Tài Khoản"
                  name="username"
                  type="text"
                  className="form-control"
                />
                {user.errors.username && (
                  <span className="text-danger">{user.errors.username}</span>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  title="Họ và Tên"
                  name="fullName"
                  type="text"
                  className="form-control"
                />
                {user.errors.fullName && (
                  <span className="text-danger">{user.errors.fullName}</span>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Password</label>
                <input
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  title="Mật Khẩu"
                  name="password"
                  type="password"
                  className="form-control"
                />
                {user.errors.password && (
                  <span className="text-danger">{user.errors.password}</span>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  pattern="^[0-9]+$"
                  title="Số Điện Thoại"
                  minLength={9}
                  maxLength={12}
                  name="phoneNumber"
                  type="text"
                  className="form-control"
                />
                {user.errors.phoneNumber && (
                  <span className="text-danger">{user.errors.phoneNumber}</span>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Email</label>
                <input
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                  title="Email"
                  name="email"
                  type="email"
                  className="form-control"
                />
                {user.errors.email && (
                  <span className="text-danger">{user.errors.email}</span>
                )}
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
          <button type="submit" className="btn btn-warning mr-2">
            SAVE
          </button>
          <button type="reset" className="btn btn-outline-dark">
            RESET
          </button>
        </form>
      </div>
    </div>
  );
}
