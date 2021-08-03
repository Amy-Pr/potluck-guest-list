// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
const assignButton = document.querySelector(".assign");
const assignedItems = document.querySelector(".assigned-items");

//ACTIVATE THE ADD GUEST BUTTON
addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  //console.log(guest);
  if (guest !== "") {
    addToList(guest);
  }
  clearInput();
  updateGuestCount();
});

//SEPARATE FUNCTION TO CLEAR THE TEXTBOX AFTER ADDING EACH GUEST
const clearInput = function () {
  guestInput.value = "";
};

//FUNCTION TO ADD THE GUESTS TO THE LIST
const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

//FUNCTION TO UPDATE THE COUNTER AND TO LIMIT THE COUNTER TO 8
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

//FUNCTION TO ASSIGN DISHES TO GUESTS
const assignItems = function () {
  const potluckItems = [
    "salad",
    "sandwiches",
    "hummus",
    "chips",
    "beer",
    "lemonade",
    "cookies",
    "macaroni",
    "buns",
    "hot dogs",
    "plates",
    "cups"
  ];

  const allGuests = document.querySelectorAll(".guest-list li");

  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    //let randomPotluckItem = potluckItems[randomPotluckIndex]; //TOOK OUT BECAUSE RESULTED IN DUPLICATE DISHES
    let randomPotluckItem = potluckItems.splice(randomPotluckIndex, 1); //REPLACED WITH THIS SO NO DUPLICATES
    let listItems = document.createElement("li");
    listItems.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    assignedItems.append(listItems);
  }
};

//ACTIVATING THE BUTTON
assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true; //THIS DISABLES THE ASSIGN DISH BUTTON ONCE FINISHED
});
