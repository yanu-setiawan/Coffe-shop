const form = document.getElementById("myForm");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passInput = document.getElementById("password");
const error = document.getElementsByClassName("error");
const pwShow = document.getElementById("show");
const btnSign = document.getElementById("btn-sign");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const btnOk = document.getElementById("ok");
const greeting = document.getElementById("greeting");
const phoneRegex = /^\d{10,12}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

pwShow.addEventListener("click", () => {
  if (passInput.type === "password") {
    passInput.type = "text";
  } else {
    passInput.type = "password";
  }
});

const dataLogin = [];
function validateFormLogin() {
  //
  const email = emailInput.value.trim();
  const password = passInput.value.trim();

  function setErrorFor(input, message) {
    const formInput = input.parentElement;
    // console.log(formInput);
    const errText = formInput.querySelector(".error");
    errText.style.display = "flex";
    errText.className = "form-input error";
    errText.innerText = message;
  }

  //

  //validasi
  if (email === "" && password === "") {
    setErrorFor(emailInput, "Email tidak boleh kosong");
    setErrorFor(passInput, "Password tidak boleh kosong");
    // setErrorFor(phoneInput, "Nomor tidak boleh kosong");
    return;
  }

  // Validasput email
  if (email === "") {
    return setErrorFor(emailInput, "Email tidak boleh kososng");
  } else if (!emailRegex.test(email)) {
    return setErrorFor(emailInput, "Email tidak valid");
  } else {
    error[0].style.display = "none";
  }
  // Validasi Phone Number

  if (password === "") {
    return setErrorFor(passInput, "Password tidak boleh kosong");
  } else if (password.length < 5) {
    return setErrorFor(passInput, "Pasword minimal 5 character");
  } else {
    error[1].style.display = "none";
    const newDataLogin = {
      email: email,
      password: password,
    };

    dataLogin.push(newDataLogin);
    console.log(dataLogin);
    dataLogin.forEach((user) => {
      modal.style.display = "flex";
      greeting.innerHTML = `${user.email}`;
    });
    btnOk.addEventListener("click", () => {
      modal.style.display = "none";
      modalContent.style.display = "none";
    });
  }
  window.onclick = function (e) {
    if (e.target === modal) modal.style.display = "none";
  };
}
