/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");

// Load HTML before requiring the JS
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

beforeEach(() => {
  // Reset DOM
  document.documentElement.innerHTML = html;

  // Re-require the JS so all getElementById calls work with the fresh DOM
  jest.resetModules();
  script = require("../js/script.js");
});

let script; // declare script outside beforeEach so tests can access it

// --- SECTION 1: Toggle Color Box ---
describe("SECTION 1: Toggle Color Box", () => {
  test("toggleBoxColor changes color from Red to Green and back (via classes)", () => {
    const box = document.getElementById("box");
    const colorText = document.getElementById("colorText");

    script.toggleBoxColor();
    expect(box.classList.contains("green")).toBe(true);
    expect(box.classList.contains("red")).toBe(false);
    expect(colorText.textContent).toBe("Green");

    script.toggleBoxColor();
    expect(box.classList.contains("red")).toBe(true);
    expect(box.classList.contains("green")).toBe(false);
    expect(colorText.textContent).toBe("Red");
  });
});

// --- SECTION 2: Counter ---
describe("SECTION 2: Counter", () => {
  test("increment, decrement, reset work correctly", () => {
    const countEl = document.getElementById("count");

    script.increment();
    expect(countEl.textContent).toBe("1");

    script.increment();
    expect(countEl.textContent).toBe("2");

    script.decrement();
    expect(countEl.textContent).toBe("1");

    script.reset();
    expect(countEl.textContent).toBe("0");

    script.decrement();
    expect(countEl.textContent).toBe("0"); // should not go below 0
  });
});

describe("SECTION 3: Add / Remove List Items", () => {
  test("addItem and removeItem modify the list correctly", () => {
    const listEl = document.getElementById("list");

    expect(listEl.children.length).toBe(3);

    script.addItem();
    expect(listEl.children.length).toBe(4);
    expect(listEl.children[3].textContent).toContain("Mango");

    script.removeItem();
    expect(listEl.children.length).toBe(3);
  });
});

describe("SECTION 4: Registration Form", () => {
  test("handleSubmit displays success message and clears it after 3s", () => {
    jest.useFakeTimers();

    const form = document.getElementById("myForm");
    const successMsg = document.getElementById("successMsg");

    const event = { preventDefault: jest.fn() };
    script.handleSubmit(event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(successMsg.textContent).toBe("Form submitted successfully!");

    jest.advanceTimersByTime(3000);
    expect(successMsg.textContent).toBe("");

    jest.useRealTimers();
  });
});

describe("SECTION 5: Toggle List Item Colors", () => {
  test("toggleListColor toggles .black class", () => {
    const items = document.querySelectorAll(".item");

    script.toggleListColor();
    items.forEach(item => {
      expect(item.classList.contains("black")).toBe(true);
    });

    script.toggleListColor();
    items.forEach(item => {
      expect(item.classList.contains("black")).toBe(false);
    });
  });
});

describe("SECTION 6: Populate Item List", () => {
  test("itemListEl children get dataset.key assigned", () => {
    const itemListEl = document.getElementById("itemList");

    Array.from(itemListEl.children).forEach((li, index) => {
      expect(li.dataset.key).toBe(index.toString());
    });
  });
});

describe("SECTION 7: Toggle Word", () => {
  test("toggleWord switches text correctly", () => {
    const wordEl = document.getElementById("word");

    script.toggleWord();
    expect(wordEl.textContent).toBe("Goodbye");

    script.toggleWord();
    expect(wordEl.textContent).toBe("Hello World!");
  });
});

describe("SECTION 8: Toggle Message Display", () => {
  test("toggleMessage toggles .hidden class", () => {
    const messageEl = document.getElementById("message");

    script.toggleMessage();
    expect(messageEl.classList.contains("hidden")).toBe(true);

    script.toggleMessage();
    expect(messageEl.classList.contains("hidden")).toBe(false);
  });
});

describe("SECTION 9: Random Cat Image", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ url: "cat.jpg" }]),
      })
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("fetchRandomCat sets catImage.src", async () => {
    const catImage = document.getElementById("catImage");
    await script.fetchRandomCat();
    expect(catImage.src).toContain("cat.jpg");
  });
});