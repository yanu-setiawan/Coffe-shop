const card = document.querySelector(".card");
const afterClick = document.querySelector(".click-delete");
const remove = document.querySelector(".delete");
const close = document.querySelector(".close");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const btnDelete = document.getElementById("ok");
const btnCancel = document.getElementById("cancel");

const allCard = 15;

const content = document.querySelector(".grid-hist");
for (let i = 1; i <= allCard; i++) {
  const cardArr = document.createElement("div");

  cardArr.classList.add("card");
  cardArr.style.display = "flex";
  cardArr.innerHTML = card.innerHTML;
  content.appendChild(cardArr);

  const options = document.createElement("div");
  options.classList.add("click-delete");

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
    // cardArr.style.display = "none";
    modal.style.display = "flex";
    content.dataset.cardId = i;
  });

  cardClose.addEventListener("click", function (event) {
    event.stopPropagation();
    options.style.display = "none";
    cardArr.style.backgroundColor = "#ffffff";
    console.log("p");
  });
}

btnCancel.addEventListener("click", function (e) {
  modal.style.display = "none";
});

btnDelete.addEventListener("click", function (e) {
  e.stopPropagation();
  modal.style.display = "none";
  // content.children[content.dataset.cardId].style.display = "none";
  content.removeChild(content.children[content.dataset.cardId]);

  // const cardId = document.querySelector(".grid-hist .card")[0];
  // console.log(content.children[0]);
});
