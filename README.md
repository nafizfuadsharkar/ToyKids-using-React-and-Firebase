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

## 🛠 Tech Stack & Packages

- **React** – Frontend library
- **React Router DOM** – Routing
- **Firebase** – Authentication & backend
- **DaisyUI / TailwindCSS** – Styling
- **React Toastify / SweetAlert2** – Notifications
- **Swiper / AOS** – Slider & Animations
- JSON hosted images for toy data (`imgbb` / `postimages`)

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
