const card = document.querySelector(".card");
const afterClick = document.querySelector(".click-delete");
const remove = document.querySelector(".delete");
const close = document.querySelector(".close");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const btnDelete = document.getElementById("ok");
const btnCancel = document.getElementById("cancel");
const delivered = document.querySelector(".deliver");

const allCard = 16;

const content = document.querySelector(".grid-hist");
for (let i = 2; i <= allCard; i++) {
  const cardArr = document.createElement("div");

  cardArr.classList.add("card");
  cardArr.style.display = "flex";
  cardArr.innerHTML = card.innerHTML;
  content.appendChild(cardArr);

  // const delivered = content.children[i];
  // console.log(content);

  const options = document.createElement("div");
  options.classList.add("click-delete");

  delivered.textContent = "Delivered " + i;

  const cardRemove = document.createElement("div");
  cardRemove.innerHTML = remove.innerHTML;
  cardRemove.classList.add("delete");

  const cardClose = document.createElement("div");
  cardClose.innerHTML = close.innerHTML;
  cardClose.classList.add("close");

  options.appendChild(cardRemove);
  options.appendChild(cardClose);

  cardArr.appendChild(options);
  cardArr.addEventListener("click", function () {
    cardArr.style.backgroundColor = "#ffffff70";
    options.style.display = "flex";
  });

  cardRemove.addEventListener("click", function (event) {
    event.stopPropagation();
    content.removeChild(cardArr);
    // cardArr.style.display = "none";
    // modal.style.display = "flex";
    // content.dataset.cardId = i;
    // console.log(content.dataset.cardId);
  });

  cardClose.addEventListener("click", function (event) {
    event.stopPropagation();
    options.style.display = "none";
    cardArr.style.backgroundColor = "#ffffff";
    // console.log("p");
  });
}

// btnCancel.addEventListener("click", function (e) {
//   modal.style.display = "none";
// });

// btnDelete.addEventListener("click", function (e) {
//   e.stopPropagation();
//   modal.style.display = "none";
//   // content.children[content.dataset.cardId].style.display = "none";
//   content.removeChild(content.children[content.dataset.cardId]);
//   // console.log(content.children[content.dataset.cardId]);
//   // const cardId = document.querySelector(".grid-hist .card")[0];
//   // console.log(content.children[0]);
// });

const burger = document.querySelector(".burger");
const navToggle = document.querySelector(".nav-toggle");

let showNavbar = false;
burger.addEventListener("click", function () {
  showNavbar = !showNavbar;
  if (showNavbar) {
    navToggle.style.display = "flex";
    console.log(showNavbar);
  } else {
    navToggle.style.display = "none";
    console.log(showNavbar);
  }
});
