const addGuestButton = document.querySelectorAll(".invite");
const guestInputLabel = document.querySelectorAll(".add-guest label");
const guestInput = document.querySelector(".add-guest input");
const guestList = document.querySelector(".guest-list");
const guestCount = document.querySelector(".attendance");
const guestFull = document.querySelector(".alert");
const assignButton = document.querySelectorAll(".assign");
const assignedItems = document.querySelectorAll(".assigned-items");

addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  if (guest !== "") {
    addToList(guest);
    clearInput();
    updateGuestCount();
  }
});

const clearInput = function () {
  guestInput.value = "";
};

const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;

  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

const assignItems = function () {
  const potluckItems = [
    "cheese",
    "crackers",
    "vegge tray",
    "fresh fruit",
    "sub sandwhiches",
    "apple fritters",
    "potato salad",
    "hummas",
    "chips",
    "ranch dip",
    "cookies",
    "baked beans"
  ];
  const allGuests = document.querySelectorAll(".guest-List li");

  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPotluckItem = potluckItems[randomPotluckIndex];

    let listItem = document.createElement("li");
    listItem.innerText = "${guest.innerText} is bringing ${randomPotluckItem}.";
    assignedItems.append(listItem);

    potluckItems.splice(randomPotluckIndex, 1);
  }
};

assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});
