let getEle = (id) => document.getElementById(id);
export class Validation {
  letter = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
  "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
  "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";


  isEmpty(field, errorDivId, message) {
    let result = field === "";
    this.handleError(result, errorDivId, message);
    return result;
  }
  isSelected(field, errorDivId, message) {
    let result = field.selectedIndex === "0";
    this.handleError(result, errorDivId, message);
    return result;
  }
  isUnique(arr, field, fieldName, errorDivId, message) {
    let result = true;
    arr.forEach((ele) => {
      result &= ele[fieldName] === field;
    });
    this.handleError(result, errorDivId, message);
    return result;
  }
  isMatch(field, format, errorDivId, message) {
    let result = field.match(format)
    this.handleError(!result, errorDivId, message);
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
  isValid(user, listUsers) {
    let valid = true;
    //taiKhoan
    valid &=
      !this.isEmpty(user.taiKhoan, "tkError", "(*) Vui lòng nhập Tài Khoản") &&
      !this.isUnique(
        listUsers.arr,
        user.taiKhoan,
        "taiKhoan",
        "tkError",
        "(*) Tài khoản đã tồn tại"
      );
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
    
    //email

    //hinhAnh

    //loaiND

    //ngonNgu

    //moTa

    return valid;
  }
}
