# ShoppyGlobe - E-commerce Web Application

ShoppyGlobe is a responsive e-commerce web application built using **React**, **Redux**, and **CSS**. It fetches product data from a public API, allows users to browse items, view product details, manage their cart, and experience a dynamic online shopping interface.

# Features

- Favicon for the application
- Browse Products with Images, Price & Titles
- Real-Time Search Filtering
- Add to Cart with Quantity Tracking
- Cart Page with Persistent State
- Remove the products from Cart
- Product Detail View with "Go Back" Support
- Empty cart View with "Go Back" Support
- 404 Page for Invalid Routes
- Responsive Layout using Tailwind CSS
- Lazy Loading with `React.lazy` and `Suspense`

## Tech Stack

- **Frontend:** React (Vite)
- **State Management:** Redux Toolkit
- **Styling:** Custom CSS
- **Routing:** React Router v6
- **API:** [dummyjson.com/products](https://dummyjson.com/products)
- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT Authentication**
- **ThunderClient** for testing

## Auth Routes

POST /auth/register - Register a new user
POST /auth/login - Login and get JWT token

## Token

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZmY0MzhlZjJjZWRmZGYzYmE1NDc0ZCIsImlhdCI6MTc0NDc5OTYyOCwiZXhwIjoxNzQ0ODg2MDI4fQ.XHd5IN3cvXNXfXBMUvKM-hsQgypCixOLJFUWkbEUYjQ

## Product Routes

GET /products - Get all products
GET /products/:id - Get product by ID

## Cart Routes [Protected by JWT authentication]

Header Authorization JWT <Token>
POST /cart - Add product to cart
GET /cart - Get all cart items
PUT /cart/:id - Update quantity
DELETE /cart/:id - Remove item from cart
