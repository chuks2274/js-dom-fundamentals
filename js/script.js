/* ==============================
   SECTION 1: Toggle Color Box
============================== */
const box = document.getElementById("box");
const colorText = document.getElementById("colorText");
const boxToggleBtn = document.getElementById("toggleBtn");

function toggleBoxColor() {
  if (!box || !colorText) return;

  box.classList.toggle("green");
  box.classList.toggle("red");

  const isGreen = box.classList.contains("green");
  colorText.textContent = isGreen ? "Green" : "Red";
}

boxToggleBtn.addEventListener("click", toggleBoxColor);


/* ==============================
   SECTION 2: Counter
============================== */
const countEl = document.getElementById("count");
const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");
const resetBtn = document.getElementById("reset");

function getCount() {
  return Number(countEl.textContent) || 0;
}

function setCount(value) {
  countEl.textContent = value;
}

function increment() {
  if (!countEl) return;
  setCount(getCount() + 1);
}

function decrement() {
  if (!countEl) return;
  setCount(Math.max(getCount() - 1, 0));
}

function reset() {
  if (!countEl) return;
  setCount(0);
}

incBtn.addEventListener("click", increment);
decBtn.addEventListener("click", decrement);
resetBtn.addEventListener("click", reset);


/* ==============================
   SECTION 3: Add / Remove List Items
============================== */
const listEl = document.getElementById("list");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

function addItem() {
  if (!listEl) return;

  const li = document.createElement("li");
  li.textContent = `${listEl.children.length + 1}. Mango`;
  listEl.appendChild(li);
}

function removeItem() {
  if (!listEl || listEl.children.length === 0) return;

  listEl.removeChild(listEl.lastElementChild);
}

addBtn.addEventListener("click", addItem); 
removeBtn.addEventListener("click", removeItem);


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

form.addEventListener("submit", handleSubmit);


/* ==============================
   SECTION 5: Toggle List Item Colors
============================== */
const toggleListBtn = document.querySelector(".toggleBtn");
const colorItems = document.querySelectorAll(".item");

function toggleListColor() {
  colorItems.forEach(item => {
    item.classList.toggle("black"); 
  });
}

toggleListBtn.addEventListener("click", toggleListColor);


/* ==============================
   SECTION 6: Populate Item List
============================== */
const itemListEl = document.getElementById("itemList");

if (itemListEl) {
  Array.from(itemListEl.children).forEach((li, index) => {
    li.dataset.key = index; 
  });
}


/* ==============================
   SECTION 7: Toggle Word
============================== */
const wordEl = document.getElementById("word");
const wordBtn = document.getElementById("togglebtn");

function toggleWord() {
  if(!wordEl) return;
  wordEl.textContent = wordEl.textContent === "Hello World!" ? "Goodbye" : "Hello World!";
  
}

 wordBtn.addEventListener("click", toggleWord);


/* ==============================
   SECTION 8: Toggle Message Display
============================== */
const messageEl = document.getElementById("message");
const messageBtn = document.getElementById("toggleMessageBtn");

function toggleMessage() {
  if (!messageEl) return;

  messageEl.classList.toggle("hidden");
}

messageBtn.addEventListener("click", toggleMessage);

/* ==============================
// SECTION 9: Random Cat Image
============================== */
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
fetchRandomCat();

// Attach functions to window if running in browser
if (typeof window !== "undefined") {
  window.toggleBoxColor = toggleBoxColor;
  window.increment = increment;
  window.decrement = decrement;
  window.reset = reset;
  window.addItem = addItem;
  window.removeItem = removeItem;
  window.handleSubmit = handleSubmit;
  window.showFormMessage = showFormMessage;
  window.toggleListColor = toggleListColor;
  window.toggleWord = toggleWord;
  window.toggleMessage = toggleMessage;
  window.fetchRandomCat = fetchRandomCat;
}

// Export functions if running in Node (Jest)
if (typeof module !== "undefined" && module.exports) {
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
}
