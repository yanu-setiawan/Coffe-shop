const burger = document.querySelector(".burger");
const navToggle = document.querySelector(".nav-toggle");
const emailInput = document.getElementById("email");
const deliveryAdd = document.getElementById("deliveryAddress");
const phoneInput = document.getElementById("Phone-number");
const displayName = document.getElementById("displayName");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const date = document.querySelector("#date");
const gender = document.querySelector("input[type=radio]:checked").value;
const phoneRegex = /^\d{10,12}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let showNavbar = false;
burger.addEventListener("click", function () {
  showNavbar = !showNavbar;
  if (showNavbar) {
    navToggle.style.display = "flex";
  } else {
    navToggle.style.display = "none";
  }
});

const data = [];

function validateForm() {
  //
  const email = emailInput.value.trim();
  const delivered = deliveryAdd.value.trim();
  const phone = phoneInput.value.trim();
  const display = displayName.value.trim();
  const first = firstName.value.trim();
  const last = lastName.value.trim();
  const dated = date.value;
  const JK = gender;

  function setErrorFor(input, message) {
    const formInput = input.parentElement;
    // console.log(formInput);
    const errText = formInput.querySelector(".error");
    errText.style.display = "flex";
    errText.className = "form-input error";
    errText.innerText = message;
  }

  //validasi input
  if (email === "" && delivered === "" && phone === "") {
    setErrorFor(emailInput, "Email tidak boleh kosong");
    setErrorFor(deliveryAdd, "Alamat tidak boleh kosong");
    setErrorFor(phoneInput, "Nomor tidak boleh kosong");
    return;
  }

  // Validasput email
  if (email === "") {
    setErrorFor(email, "Email tidak boleh kosong");
    return;
  }
  if (!emailRegex.test(email)) {
    setErrorFor(email, "Email tidak valid");
    return;
  }

  // Validasi Phone Number
  if (delivered === "") {
    setErrorFor(deliveryAdd, "Alamat tidak boleh kosong");
    return;
  }

  if (phone === "") {
    setErrorFor(phoneInput, "Nomor tidak boleh kosong");
    return;
  }
  if (!phoneRegex.test(phone)) {
    setErrorFor(phoneInput, "nomor tidak valid");
    return;
  } else {
    const newData = {
      email: email,
      deliveryAdrres: delivered,
      phone_Number: phone,
      displayName: display,
      firstName: first,
      lastName: last,
      Date: dated,
      gender: JK,
    };

    data.push(newData);
    console.log(data);
  }
}
