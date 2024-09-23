# Filterable Product List

This repository contains a dynamic, filterable product list application built in two phases:

### **Phase 1**: Static Website (HTML, CSS, JavaScript)

-   The first phase of the project is built using pure HTML, CSS, and JavaScript.
-   It includes a dynamic product listing, where users can filter products by category.
-   Categories and products are dynamically generated, and the filtering is handled efficiently.
-   The design is fully responsive, ensuring that the product list and filter buttons adapt to mobile and desktop screens.
-   **Security Focus**: The project avoids the use of `innerHTML` to prevent XSS vulnerabilities by using safe DOM manipulation techniques.
-   **Debounce Function**: Implemented for the category filter buttons to prevent rapid clicks from triggering unnecessary renders. This improves performance.

### **Phase 2**: React Application with Debounce

-   In the second phase, the same project is rebuilt using React, introducing better modularity and state management.
-   The application is split into reusable components:
    -   `App.js`: Manages the product state and category filtering.
    -   `components/ProductList.js`: Displays the list of products.
    -   `components/FilterButtons.js`: Dynamically generates category buttons for filtering.
-   **Debounce Function**: Implemented for the category filter buttons to prevent rapid clicks from triggering unnecessary renders. This improves performance.
-   **State Management**: Uses React’s `useState` and `useMemo` hooks to ensure optimal performance and re-rendering behavior.
-   The project maintains responsiveness, with the same design and layout as Phase 1.

### Features:

-   Dynamic product list with filtering by category.
-   Responsive design for mobile and desktop.
-   Clean and optimized JavaScript code in Phase 1.
-   Modern React architecture in Phase 2, with modular components and hooks.
-   **Debounce**: Prevents excessive re-rendering when filter buttons are clicked in quick succession.
-   Security measures implemented by using safe DOM manipulation (avoiding `innerHTML`).
-   Enhanced user interface with smooth hover effects and animations.

### Technologies Used:

-   **Phase 1**: HTML, CSS (Flexbox), JavaScript (ES6)
-   **Phase 2**: React, JSX, CSS

---

## Getting Started

### Phase 1:

1. Open the `phase-one` folder.
2. Open `index.html` in your browser to see the static product list.

### Phase 2:

1. Open the `phase-two` folder.
2. Install dependencies:
    ```bash
    npm install
    npm start
    ```

### Project Structure:

-   **phase-one/**: Contains the HTML, CSS, and JavaScript version of the project.
-   **phase-two/**: Contains the React version of the project, with the following structure:
    -   **components/**: Contains reusable React components (`FilterButtons.js` and `ProductList.js`).

### Code Explanation:

### Phase 1 (HTML, CSS, JavaScript):

-   **index.html**:
    -   Basic structure for rendering the product list and buttons.
    -   JavaScript dynamically creates and updates product listings and category buttons.
-   **styles.css**:
    -   Uses Flexbox for layout and ensures the design is responsive for both desktop and mobile views.
-   **script.js**:
    -   Contains logic for generating product elements and filtering them by category.

### Phase 2 (React):

-   **App.js**:
    -   Manages the main state of the app, including the current category filter and filtered product list.
    -   Debounces the category filter using a custom debounce function.
    -   Uses `useMemo` to memoize expensive calculations (like filtering products) to avoid unnecessary re-renders.
-   **components/FilterButtons.js**:
    -   Dynamically generates filter buttons based on available categories.
    -   Each button applies the `debouncedFilterProducts` function to prevent immediate re-rendering on rapid clicks.
-   **components/ProductList.js**:
    -   Renders the filtered list of products.
