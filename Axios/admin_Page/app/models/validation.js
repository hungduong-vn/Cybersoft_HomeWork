let getEle = (id) => document.getElementById(id);
export class Validation {
  letter =
    "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
    "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
    "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
  password = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,8}$/;
  email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  isEmpty(field, errorDivId, message) {
    let result = field === "";
    this.handleError(result, errorDivId, message);
    return result;
  }
  isSelected(field, errorDivId, message) {
    let result = field !== "Chọn loại người dùng" && field !== "Chọn ngôn ngữ";
    this.handleError(!result, errorDivId, message);
    return result;
  }
  isUnique(arr, field, fieldName, errorDivId, message) {
    let result = true;
    arr.forEach((ele) => {
      result &= ele[fieldName] !== field;
    });
    this.handleError(!result, errorDivId, message);
    return result;
  }
  isMatch(field, format, errorDivId, message) {
    let result = field.match(format) ? true : false;
    this.handleError(!result, errorDivId, message);
    return result;
  }
  isLengthier(field, maxLen, errorDivId, message) {
    let result = field.length > maxLen;
    this.handleError(result, errorDivId, message);
    return result;
  }
  handleError(isError, errorDivId, message) {
    let errorDiv = getEle(errorDivId);
    if (isError) {
      errorDiv.style.display = "block";
      errorDiv.innerHTML = message;
    } else {
      errorDiv.style.display = "none";
    }
  }
  isValid(user, allUsers = null) {
    let valid = true;
    //taiKhoan
    if (!allUsers) {
      valid &=
        !this.isEmpty(
          user.taiKhoan,
          "tkError",
          "(*) Vui lòng nhập Tài Khoản"
        ) &&
        this.isUnique(
          allUsers,
          user.taiKhoan,
          "taiKhoan",
          "tkError",
          "(*) Tài khoản đã tồn tại"
        );
    }

    //hoTen
    console.log(123);
    valid &=
      !this.isEmpty(user.hoTen, "tenError", "(*) Vui lòng nhập Họ Tên") &&
      this.isMatch(
        user.hoTen,
        this.letter,
        "tenError",
        "(*) Họ Tên không chứa số và kí tự đặc biệt"
      );
    //matKhau
    valid &=
      !this.isEmpty(user.matKhau, "mkError", "(*) Vui lòng nhập Mật Khẩu") &&
      this.isMatch(
        user.matKhau,
        this.password,
        "mkError",
        "(*) Mật Khẩu có ít nhất 1 ký tự hoa, 1 ký tự đặc biệt, 1 ký tự số, độ dài 6-8"
      );

    //email
    valid &=
      !this.isEmpty(user.email, "emailError", "(*) Vui lòng nhập Email") &&
      this.isMatch(
        user.email,
        this.email,
        "emailError",
        "(*) Phải nhập đúng định dạng email"
      );
    //hinhAnh
    valid &= !this.isEmpty(
      user.hinhAnh,
      "anhError",
      "(*) Vui lòng nhập link Hình Ảnh"
    );
    //loaiND
    valid &= this.isSelected(
      user.loaiND,
      "loaiError",
      "(*) Vui lòng chọn Loại Người Dùng"
    );
    //ngonNgu
    valid &= this.isSelected(
      user.ngonNgu,
      "nnError",
      "(*) Vui lòng chọn Ngôn Ngữ"
    );
    //moTa
    valid &=
      !this.isEmpty(user.moTa, "moTaError", "(*) Vui lòng nhập Mô Tả") &&
      !this.isLengthier(
        user.moTa,
        60,
        "moTaError",
        "(*) Mô tả không được vượt quá 60 ký tự"
      );
    return valid;
  }
}
