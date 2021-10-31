const passLength = document.querySelector("#passLength");
const copy = document.getElementById("copy");
const pass = document.getElementById("pass");
const crts =
  "abcedfhijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ0123456789 ~`!@#$%^&*()-_+={}[]|;:<>,./?";

if (pass.value == "") {
  pass.setAttribute("disabled", "");
  copy.classList.add("dis");
}
function getPassword() {
  let passwordLength = passLength.value;
  let password = "";

  for (i = 0; i < passwordLength; i++) {
    let randomNum = Math.floor(Math.random() * crts.length);
    password += crts.substring(randomNum, randomNum + 1);
  }

  //   define the password value

  pass.value = password;
  pass.removeAttribute("disabled", "");

  //   if the password lentht is empty
  if (pass.value == "") {
    pass.setAttribute("disabled", "");
    copy.classList.add("dis");
  }
  if (pass.value != "") {
    copy.classList.remove("dis");
    copy.onclick = function copy() {
      pass.select();
      document.execCommand("copy");
      alert("copyed!");
    };
  }
}
