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

const data = [];

function validateForm() {
  //
  const email = emailInput.value.trim();
  const password = passInput.value.trim();
  const phone = phoneInput.value.trim();

  function setErrorFor(input, message) {
    const formInput = input.parentElement;
    const errText = formInput.querySelector(".error");
    errText.style.display = "flex";
    errText.className = "form-input error";
    errText.innerText = message;
  }

  //validasi input
  if (email === "" && password === "" && phone === "") {
    setErrorFor(emailInput, "Email tidak boleh kosong");
    setErrorFor(passInput, "Password tidak boleh kosong");
    setErrorFor(phoneInput, "Nomor tidak boleh kosong");
    return;
  }

  // Validasput email
  if (email === "") {
    setErrorFor(emailInput, "Email tidak boleh kosong");
    return;
  }
  if (!emailRegex.test(email)) {
    setErrorFor(emailInput, "Email tidak valid");
    return;
  } else {
    error[0].style.display = "none";
  }

  // Validasi Phone Number
  if (password === "") {
    setErrorFor(passInput, "Password tidak boleh kosong");
    return;
  }
  if (password.length < 5) {
    setErrorFor(passInput, "Pasword minimal 5 character");
    return;
  } else {
    error[1].style.display = "none";
  }

  if (phone === "") {
    setErrorFor(phoneInput, "Nomor tidak boleh kosong");
    return;
  }
  if (!phoneRegex.test(phone)) {
    setErrorFor(phoneInput, "nomor tidak valid");
    return;
  } else {
    error[2].style.display = "none";

    const newData = {
      email: email,
      password: password,
      phone_Number: phone,
    };

    data.push(newData);
    console.log(data);
    data.forEach((user) => {
      modal.style.display = "flex";
      greeting.innerHTML = `Email : ${user.email} </br>                                                                    
      Password : ${user.password}    </br>                                                                                              
      No.Hp : ${user.phone_Number}`;
    });
    btnOk.addEventListener("click", () => {
      modal.style.display = "none";
      modalContent.style.display = "none";
    });
  }
}

window.onclick = function (e) {
  if (e.target === modal) modal.style.display = "none";
};

pwShow.addEventListener("click", () => {
  if (passInput.type === "password") {
    passInput.type = "text";
  } else {
    passInput.type = "password";
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
