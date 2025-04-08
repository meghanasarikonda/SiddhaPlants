# 🌿 SiddhaPlants – Buy Plants Without the Fuss

A minimalist plant e-commerce platform built with **React**, focused on simplicity, responsiveness, and a user-friendly shopping experience.

---

## 🚀 Features

- 🪴 **Clean UI/UX** – A distraction-free interface designed for plant lovers.
- 🔐 **Global Auth State via Context API** – Manages authentication state across the app.
- 🚪 **Route Guards via Wrapper Components** – Components like `RedirectToPlantsIfSigned` prevent signed-in users from accessing auth pages.
- 📱 **Responsive Design** – Mobile-first and optimized for all screen sizes.
- ⚛️ **Component-Based Architecture** – Modular and maintainable React codebase.
- 🎨 **Tailwind CSS** – Rapid styling with utility-first classes.

---

## 🛠️ Tech Stack

- **React**
- **Tailwind CSS**
- **React Router**
- **Context API**
- **Custom Wrapper Components for Route Protection**

---

## 🔐 .env Setup

Before running the app, create a `.env` file in the root directory with the following variables:

```env
VITE_API_BASE_URL=https://your-api-url.com
VITE_API_KEY=your_key_here
