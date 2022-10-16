let btn = document.getElementById("submit");
function username_check() {
  var username = document.getElementById("username").value;
  var username_error = document.getElementById("username_error");
  try {
    if (username.length === 0) throw "نام کاربری نمیتواند خالی بماند";
    if (username.length !== 0) {
      username_error.style.display = "none";
    }
  } catch (errr) {
    username_error.style.display = "block";
    username_error.innerHTML = errr;
    btn.setAttribute("disabled", "");
  }
  btn_status();
}
function password_check() {
  var password = document.getElementById("password").value;
  var password_error = document.getElementById("password_error");
  try {
    if (password.length === 0) throw "پسورد نمیتواند خالی بماند";
    if (password.length < 6)
      throw "پسورد نمیتواند کمتر از 6 کاراکتر باشد";
    if (password.length >= 6) {
      password_error.style.display = "none";
    }
  } catch (err) {
    password_error.style.display = "block";
    password_error.innerHTML = err;
    btn.setAttribute("disabled", "");
  }
  btn_status();
}

function btn_status() {
  var password = document.getElementById("password").value;
  var username = document.getElementById("username").value;

  if (username.length !== 0 && password.length >= 6) {
    btn.removeAttribute("disabled", "");
  }
}