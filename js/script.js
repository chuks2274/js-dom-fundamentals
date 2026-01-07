/* ==============================
   SECTION 1: Toggle Color Box
============================== */
let boxColor = "Red";
const box = document.getElementById("box");
const colorText = document.getElementById("colorText");
const boxToggleBtn = document.getElementById("toggleBtn");

function toggleBoxColor() {
  boxColor = boxColor === "Red" ? "Green" : "Red";
  box.style.backgroundColor = boxColor;
  colorText.textContent = boxColor;
}

if (boxToggleBtn) boxToggleBtn.addEventListener("click", toggleBoxColor);


/* ==============================
   SECTION 2: Counter
============================== */
let count = 0;
const countEl = document.getElementById("count");
const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");
const resetBtn = document.getElementById("reset");

function updateUI() {
  if (countEl) countEl.textContent = count;
}

function increment() {
  count++;
  updateUI();
}

function decrement() {
  count = Math.max(count - 1, 0);
  updateUI();
}

function reset() {
  count = 0;
  updateUI();
}

if (incBtn) incBtn.addEventListener("click", increment);
if (decBtn) decBtn.addEventListener("click", decrement);
if (resetBtn) resetBtn.addEventListener("click", reset);

updateUI();


/* ==============================
   SECTION 3: Add / Remove List Items
============================== */
let listItems = ["Apple", "Banana", "Orange"];
const listEl = document.getElementById("list");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

function renderList() {
  if (!listEl) return;
  listEl.innerHTML = "";
  listItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${item}`;
    li.dataset.key = index;
    listEl.appendChild(li);
  });
}

function addItem() {
  listItems.push("Mango");
  renderList();
}

function removeItem() {
  listItems.pop();
  renderList();
}

renderList();

if (addBtn) addBtn.addEventListener("click", addItem);
if (removeBtn) removeBtn.addEventListener("click", removeItem);


/* ==============================
   SECTION 4: Registration Form
============================== */
const form = document.getElementById("myForm");
const successMsg = document.getElementById("successMsg");

function handleSubmit(e) {
  e.preventDefault();
  showFormMessage("Form submitted successfully!");
  form.reset();
}

function showFormMessage(message) {
  if (!successMsg) return;
  successMsg.textContent = message;
  setTimeout(() => {
    successMsg.textContent = "";
  }, 3000);
}

if (form) form.addEventListener("submit", handleSubmit);


/* ==============================
   SECTION 5: Toggle List Item Colors
============================== */
const toggleListBtn = document.querySelector(".toggleBtn");
const colorItems = document.querySelectorAll(".item");

colorItems.forEach(item => {
  item.style.backgroundColor = "green";
});

function toggleListColor() {
  colorItems.forEach(item => {
    item.style.backgroundColor =
      item.style.backgroundColor === "green" ? "black" : "green";
  });
}

if (toggleListBtn) toggleListBtn.addEventListener("click", toggleListColor);


/* ==============================
   SECTION 6: Populate Item List
============================== */
const itemListEl = document.getElementById("itemList");
const itemList = ["Apple", "Banana", "Orange"];

if (itemListEl) {
  itemList.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;
    li.dataset.key = index;
    itemListEl.appendChild(li);
  });
}


/* ==============================
   SECTION 7: Toggle Word
============================== */
let word = "Hello World!";
const wordEl = document.getElementById("word");
const wordBtn = document.getElementById("togglebtn");

function toggleWord() {
  word = word === "Hello World!" ? "Goodbye" : "Hello World!";
  if (wordEl) wordEl.textContent = word;
}

if (wordBtn) wordBtn.addEventListener("click", toggleWord);


/* ==============================
   SECTION 8: Toggle Message Display
============================== */
let showMessageFlag = true;
const messageEl = document.getElementById("message");
const messageBtn = document.getElementById("toggleMessageBtn");

function toggleMessage() {
  showMessageFlag = !showMessageFlag;
  if (messageEl) messageEl.style.display = showMessageFlag ? "block" : "none";
}

if (messageBtn) messageBtn.addEventListener("click", toggleMessage);

// SECTION 9: Random Cat Image
const catBtn = document.getElementById("catBtn");
const catImage = document.getElementById("catImage");

async function fetchRandomCat() {
  try {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await res.json();
    catImage.src = data[0].url;
  } catch (err) {
    console.error("Error fetching cat:", err);
  }
}

catBtn.addEventListener("click", fetchRandomCat);

// Export functions for testing
module.exports = {
  toggleBoxColor,
  increment,
  decrement,
  reset,
  addItem,
  removeItem,
  handleSubmit,
  showFormMessage,
  toggleListColor,
  toggleWord,
  toggleMessage,
  fetchRandomCat,
};
