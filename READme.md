# JavaScript DOM Interactive Demo

A small project demonstrating **vanilla JavaScript DOM manipulation**, **event handling**, and **dynamic UI updates** with interactive UI components.

---

## Features

1. **Toggle Color Box** – Switch a box's color between red and green.  
2. **Counter** – Increment, decrement, or reset a numeric counter.  
3. **Add / Remove List Items** – Dynamically add "Mango" or remove items from a list.  
4. **Registration Form** – Submit a form and show a temporary success message.  
5. **Toggle List Item Colors** – Switch list items’ background colors between green and black.  
6. **Populate Item List** – Automatically populate a list with predefined items.  
7. **Toggle Word** – Toggle a word between "Hello World!" and "Goodbye".  
8. **Show/Hide Message** – Toggle visibility of a message on the page.  
9. **Random Cat Image** – Fetch and display a random cat image from an API.

## CSS Styling

The project includes a fully styled CSS file for layout and design:
Reset & global styles, navigation, two-column grid layout
Styled containers, cards, headings, buttons, forms, lists
Interactive components like todo, fetch demos, and cat image display
Responsive design for screens <900px and <480px

## Unit Testing

This project uses Jest to test all interactive features:
Features tested include:
Toggle Color Box
Counter increment/decrement/reset
Add/Remove list items
Registration form submission and success message
Toggle list item colors
Populate item list
Toggle word
Show/Hide message
Random cat image fetch
---

## CI/CD Workflow

This project includes a GitHub Actions workflow to automatically test and deploy the project to Vercel on every push to the main branch:
Linting & Tests: Runs ESLint and Jest tests.
Deployment: Deploys the project to Vercel automatically if tests pass.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/chuks2274/js-dom-fundamentals.git
   cd js-dom-fundamentals
