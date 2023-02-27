const form = document.getElementById("myForm");
const emailInput = document.getElementById("email");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const btnOk = document.getElementById("ok");
const greeting = document.getElementById("greeting");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const error = document.getElementsByClassName("error");

// Validasput email
function validateForm() {
  const data = [];
  //
  const email = emailInput.value.trim();

  function setErrorFor(input, message) {
    const formInput = input.parentElement;
    // console.log(formInput);
    const errText = formInput.querySelector(".error");
    errText.className = "form-input error";
    errText.innerText = message;
  }
  if (email === "") {
    return setErrorFor(emailInput, "Email tidak boleh kososng");
  } else if (!emailRegex.test(email)) {
    return setErrorFor(emailInput, "Email tidak valid");
  } else {
    error[0].style.display = "none";
    const newData = {
      email: email,
    };
    data.push(newData);
    console.log(data);
    data.forEach((user) => {
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
