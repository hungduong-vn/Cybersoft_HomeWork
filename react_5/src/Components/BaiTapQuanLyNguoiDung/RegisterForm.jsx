import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction, updateUserAction } from "../../Store/actions/user";
const DEFAULT_USER = {
  id: "",
  username: "",
  fullName: "",
  email: "",
  password: "",
  phoneNumber: "",
  type: "Client",
};
const DEFAULT_STATE = { value: DEFAULT_USER, errors: {} };
export default function RegisterForm() {
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const props = useSelector((state) => state.userReducer);
  const [user, setUser] = useState(DEFAULT_STATE);
  if (props.selectedUser && user.value.id !== props.selectedUser.id) {
    console.log(props.selectedUser);
    setUser({ ...user, value: props.selectedUser });
  }
  const [isReset, setIsReset] = useState(false);
  //AFTER SUCCESSFULLY SUBMIT/UPDATE -> RESET FORM
  useEffect(() => {
    // console.log("Reset");
    // console.log(formRef.current.checkValidity());
    setIsReset(false);
  }, [isReset]);
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
    // console.log(event.target.validity);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Submiting");
    for (let i in user.errors) {
      if (user.errors[i]) {
        return;
      }
    }
    if (!event.target.checkValidity()) {
      return;
    }
    if (props.selectedUser) {
      //EDIT & UPDATE
      dispatch(updateUserAction(user.value));
    } else {
      //ADD
      dispatch(addUserAction(user.value));
    }
    setIsReset(true);
    setUser(DEFAULT_STATE);
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
                  value={user.value.username}
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
                  value={user.value.fullName}
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
                  value={user.value.password}
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
                  value={user.value.phoneNumber}
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
                  value={user.value.email}
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
          <button
            disabled={!formRef.current?.checkValidity()}
            type="submit"
            className="btn btn-warning mr-2"
          >
            SAVE
          </button>
          <button id="reset" type="reset" className="btn btn-outline-dark">
            RESET
          </button>
        </form>
      </div>
    </div>
  );
}
