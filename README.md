# Paradise Nursery

## Project Overview

Paradise Nursery is a React-based online shopping application for browsing and purchasing houseplants. The application allows users to explore different categories of plants, add plants to a shopping cart, modify quantities, remove items, and view the total cost of their cart.

## Features

* Landing page for Paradise Nursery
* Company information section
* Get Started button to access the plant listing
* Navigation between Home, Plants, and Cart
* Houseplants organized into multiple categories
* Plant cards with:

  * Thumbnail image
  * Plant name
  * Description
  * Price
  * Add to Cart button
* Add to Cart button becomes disabled after adding a plant
* Dynamic shopping cart item count
* Shopping cart with:

  * Plant thumbnail
  * Plant name
  * Unit price
  * Quantity
  * Total price for each plant
  * Increase quantity button
  * Decrease quantity button
  * Delete button
* Total number of plants in the cart
* Total cost of all plants
* Continue Shopping button
* Checkout button displaying a Coming Soon message
* Redux Toolkit for centralized cart state management

## Plant Categories

The application contains multiple houseplant categories, including:

1. Medicinal Plants
2. Aromatic Plants
3. Decorative Plants

## Technologies Used

* React
* JavaScript
* JSX
* CSS
* Vite
* Redux Toolkit
* React Redux
* Git
* GitHub

## React Concepts Used

This project demonstrates:

* Functional React components
* Component composition
* Props
* `useState`
* `useEffect`
* Event handling
* Conditional rendering
* Array `map()` method
* Dynamic rendering
* Redux state management
* Redux Toolkit slices
* React Redux `useSelector`
* React Redux `useDispatch`

## Redux Cart Management

The shopping cart is managed using Redux Toolkit.

The cart slice provides actions for:

* Adding a plant to the cart
* Increasing plant quantity
* Decreasing plant quantity
* Removing a plant from the cart

The Redux store provides centralized access to the shopping cart state throughout the application.

## Project Structure

```text
e-plantShopping/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── AboutUs.jsx
│   ├── ProductList.jsx
│   ├── CartItem.jsx
│   ├── CartSlice.jsx
│   │
│   ├── redux/
│   │   └── store.js
│   │
│   └── main.jsx
│
├── public/
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/Adi086/e-plantShopping.git
```

Navigate into the project:

```bash
cd e-plantShopping
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at the local Vite development URL.

## Build

To create a production build:

```bash
npm run build
```

## Project Files

### `App.jsx`

Contains the main application structure, landing page, navigation, and page switching between Home, Plants, and Cart.

### `AboutUs.jsx`

Contains information about Paradise Nursery and the company description.

### `App.css`

Contains the application's styling, including the landing page background image, product cards, navigation bar, cart layout, and responsive styling.

### `ProductList.jsx`

Displays the plant products grouped by category and provides the Add to Cart functionality.

### `CartSlice.jsx`

Contains the Redux Toolkit slice responsible for managing shopping cart state and cart actions.

### `CartItem.jsx`

Displays the shopping cart, item quantities, individual totals, overall total, increase/decrease controls, delete controls, and checkout functionality.

### `store.js`

Configures the Redux store and connects the cart reducer to the application.

## Deployment

The application can be deployed using GitHub Pages or another public hosting platform.

The GitHub repository should be public so that the project source code can be accessed for evaluation.

## Repository

**Repository Name:** `e-plantShopping`

**GitHub Repository:**
`https://github.com/Adi086/e-plantShopping`

## Project Objective

The objective of Paradise Nursery is to demonstrate the use of React functional components, React Hooks, dynamic rendering, event handling, and Redux Toolkit to create a functional online plant shopping cart application.

## Author

**Aditya Shirse**
