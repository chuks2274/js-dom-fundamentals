/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");

// Load HTML
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

let script;

beforeEach(() => {
  // Reset DOM
  document.documentElement.innerHTML = html;

  // Reset modules so all variables/functions reload
  jest.resetModules();
  script = require("../js/script.js");  
});

describe("SECTION 1: Toggle Color Box", () => {
  test("toggleBoxColor changes color from Red to Green and back", () => {
    const box = document.getElementById("box");
    const colorText = document.getElementById("colorText");

    script.toggleBoxColor();
    expect(colorText.textContent).toBe("Green");  
    expect(box.style.backgroundColor).toBe("green");  

    script.toggleBoxColor();
    expect(colorText.textContent).toBe("Red");    
    expect(box.style.backgroundColor).toBe("red");    
  });
});

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

    // count should not go below 0
    script.decrement();
    expect(countEl.textContent).toBe("0");
  });
});

describe("SECTION 3: Add / Remove List Items", () => {
  test("addItem and removeItem modify the list correctly", () => {
    const listEl = document.getElementById("list");

    // Initial list
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
    jest.useFakeTimers(); // <-- enable fake timers

    const form = document.getElementById("myForm");
    const successMsg = document.getElementById("successMsg");

    const event = { preventDefault: jest.fn() };
    script.handleSubmit(event);

    expect(successMsg.textContent).toBe("Form submitted successfully!");
    expect(event.preventDefault).toHaveBeenCalled();

    jest.advanceTimersByTime(3000);  
    expect(successMsg.textContent).toBe("");

    jest.useRealTimers(); // restore timers
  });
});

describe("SECTION 5: Toggle List Item Colors", () => {
  test("toggleListColor switches colors between green and black", () => {
    const items = document.querySelectorAll(".item");

    script.toggleListColor();
    items.forEach(item => {
      expect(item.style.backgroundColor).toBe("black");
    });

    script.toggleListColor();
    items.forEach(item => {
      expect(item.style.backgroundColor).toBe("green");
    });
  });
});

describe("SECTION 6: Populate Item List", () => {
  test("itemListEl populates correctly with items", () => {
    const itemListEl = document.getElementById("itemList");

    expect(itemListEl.children.length).toBe(3);
    expect(itemListEl.children[0].textContent).toBe("Apple");
    expect(itemListEl.children[1].textContent).toBe("Banana");
    expect(itemListEl.children[2].textContent).toBe("Orange");
  });
});

describe("SECTION 7: Toggle Word", () => {
  test("toggleWord changes word correctly", () => {
    const wordEl = document.getElementById("word");

    script.toggleWord();
    expect(wordEl.textContent).toBe("Goodbye");

    script.toggleWord();
    expect(wordEl.textContent).toBe("Hello World!");
  });
});

describe("SECTION 8: Toggle Message Display", () => {
  test("toggleMessage hides and shows message", () => {
    const messageEl = document.getElementById("message");

    script.toggleMessage();
    expect(messageEl.style.display).toBe("none");

    script.toggleMessage();
    expect(messageEl.style.display).toBe("block");
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
