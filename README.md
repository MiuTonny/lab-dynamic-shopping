# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


Lab: Building a Dynamic Shopping App with React Hooks
Introduction
Your company is developing a new grocery shopping app to improve the shopping experience for customers. You have been assigned to implement three key features:

Dark Mode Toggle – Users can switch between light and dark mode.
Add to Cart – Users can add items to the shopping cart.
Category Filtering – Users can filter products by category.
Your task is to implement these features using React Hooks (useState) while ensuring the app is functional and visually consistent.

Challenge
Implement a dark mode toggle.
Allow users to add items from a shopping cart.
Implement category-based filtering for the shopping list.
Bonus Challenge
Display a cart total showing the number of items added.
Instructions
1️⃣ Fork and Clone the Repository
Fork the provided GitHub repository.
Clone the forked repository to your local machine:
git clone <your-forked-repository-url>
cd react-hooks-state-lab
Open the project in VSCode.
Install dependencies:
npm install
Start the development server:
npm run dev
2️⃣ Implement the Dark Mode Toggle
Implement a button that toggles between light and dark mode.
The text of the toggle button should change dynamically.
Feel free to also play with styling! However, you'll only be tested on the text of the dark mode toggle button.
Use the useState hook to manage the current theme.
3️⃣ Implement the Add to Cart Feature
Each product should have an "Add to Cart" button.
Clicking the button should add the item to the cart.
The cart should display a list of added items with the text 'Item is in your cart' such as 'Milk is in your cart.'
4️⃣ Implement the Category Filter
Create a dropdown menu to filter products by category.
When a user selects a category, only matching products should be displayed.
Use state management (useState) to track the selected category.
Bonus Challenge: Cart Total
Display a cart total showing how many items have been added.
The total should update dynamically when items are added.
Testing and Debugging
Run the test suite:
npm test
Debug any failing tests:
Use browser developer tools (F12 → Console).
Verify that product cards display correctly.
Ensure filtering and cart updates work as expected.
Version Control
Initialize a Git repository:
git init
Regularly commit your changes:
git add .
git commit -m "Initial shopping app setup"
Push to GitHub:
git push origin main
✅ Submission
Submit your project as a GitHub repository to CodeGrade.
Resources
React Docs: useState
Material UI Documentation
CSS Modules Documentation
Jest Testing Framework
React Testing Library