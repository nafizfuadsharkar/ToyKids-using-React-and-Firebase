<h1 align="center">🎉 ToyTopia – A Local Kids Toy Store Platform</h1>

<p align="center">
  A vibrant and playful online marketplace for kids' toys, encouraging families to discover and support local toy sellers.
</p>

---

## 🚀 Project Overview

ToyTopia is an interactive single-page application where users can:

- Browse and discover local toy sellers.
- View toy details, including price, rating, availability, and description.
- Leave feedback or ratings.
- Try toys via a simple form submission.
- Authenticate via **Email/Password** or **Google Login**.
- Access protected pages like **Toy Details** and **My Profile**.

This project is fully responsive, user-friendly, and designed with vibrant UI to engage children and parents alike.

---

## 📌 Features

### 🖥 Layout
- **Navbar:** Displays site name, Home, My Profile, Login/Logout buttons, and user photo if logged in. Hovering on the user photo shows the user name.
- **Main Section:** Shows dynamic pages based on routes.
- **Footer:** Includes links to terms & conditions, privacy policy, and social media accounts.

### 🧸 Home Page
- **Slider:** Interactive slider showing highlighted toys (3+ slides) using DaisyUI or Swiper.
- **Popular Toys:** Card layout displaying 6+ toy items from JSON data including:
  - Thumbnail
  - Toy Name
  - Rating
  - Available Quantity
  - Price
  - “View More” button

### 📝 Toy Details Page (Protected)
- Shows full toy details.
- “Try Now” form with Name and Email fields.
- Submits a success message without storing data.
- Access restricted to logged-in users; redirects to login if unauthenticated.

### 🔐 Authentication
- **Login Page:** Email/Password, Google Login, Forgot Password link, redirect to register.
- **Register Page:** Name, Email, Photo URL, Password (with validation: uppercase, lowercase, min 6 chars), Google Login, redirect to login.
- **Password Visibility Toggle:** Show/hide password functionality on registration.

### 👤 User Profile (Protected)
- View and edit user information (name, photo URL).
- Updates securely via Firebase `updateProfile()`.

### 🔔 Other Features
- **Forgot Password:** Redirects to Gmail with pre-filled email.
- **404 Page:** Friendly not found page.
- **Dynamic Page Titles**
- **Loader:** Shows while fetching authenticated user info.
- **Extra Protected Route:** Add meaningful content for logged-in users.
- **Animation / Slider:** Implemented using **AOS** or **Swiper**.

---

## 📂 JSON Data Example

```json
{
  "toyId": 1,
  "toyName": "Lego Classic Bricks",
  "sellerName": "Toys R Us Local",
  "sellerEmail": "contact@toysruslocal.com",
  "price": 49.99,
  "rating": 4.7,
  "availableQuantity": 75,
  "description": "A timeless set of colorful Lego bricks that encourages creativity and problem-solving. Kids can build anything they imagine, from houses to vehicles.",
  "pictureURL": "https://cdn.pixabay.com/photo/2016/03/31/20/11/lego-1297582_1280.png",
  "subCategory": "Building Blocks"
}
```
<hr>

## 🛠 Technology Stack

<p>ToyTopia – ToyKids React & Firebase project is built using the following technologies:</p>

<ul>
  <li><strong>Frontend:</strong> HTML, CSS, Tailwind CSS, DaisyUI, React.js, React Router DOM, Axios, AOS, Swiper Slider, React Toastify, SweetAlert2</li>
  <li><strong>Backend / Auth:</strong> Firebase Authentication</li>
  <li><strong>Data:</strong> JSON hosted images for toy data</li>
</ul>

<hr>

## 📦 Dependencies

<p>The frontend project uses the following dependencies:</p>

<h3>Production Dependencies</h3>
<pre>
"dependencies": {
  "axios": "^1.12.2",
  "firebase": "^12.4.0",
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-icons": "^5.5.0",
  "react-router": "^7.9.4",
  "react-router-dom": "^7.9.4",
  "react-toastify": "^11.0.5",
  "sweetalert2": "^11.26.3",
  "swiper": "^12.0.3",
  "tailwindcss": "^4.1.16",
  "daisyui": "^5.3.9",
  "aos": "^2.3.4"
}
</pre>

<h3>Development Dependencies</h3>
<pre>
"devDependencies": {
  "@vitejs/plugin-react": "^5.0.4",
  "@types/react": "^19.1.16",
  "@types/react-dom": "^19.1.9",
  "eslint": "^9.36.0",
  "eslint-plugin-react-hooks": "^5.2.0",
  "eslint-plugin-react-refresh": "^0.4.22",
  "vite": "^7.1.7"
}
</pre>

<hr>

## ⚡ Installation Instructions

<p>Follow these steps to run the ToyKids frontend project on a local machine:</p>

<ol>
  <li><strong>Clone the repository:</strong>
    <pre>git clone https://github.com/nafizfuadsharkar/ToyKids-using-React-and-Firebase.git</pre>
  </li>
  <li><strong>Navigate to the project folder:</strong>
    <pre>cd ToyKids-using-React-and-Firebase</pre>
  </li>
  <li><strong>Install dependencies:</strong>
    <pre>npm install</pre>
    <p>This will install all production and development dependencies listed above.</p>
  </li>
  <li><strong>Start the development server:</strong>
    <pre>npm run dev</pre>
    <p>The project will be available at <code>http://localhost:5173/</code> (Vite default).</p>
  </li>
</ol>

<hr>

## 🌐 Live Website

<p>You can access the deployed live frontend of ToyTopia here:</p>
<ul>
  <li><a href="https://toykids-react-firebase.web.app/" target="_blank">https://toykids-react-firebase.web.app/</a></li>
</ul>

