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

## 📦 .Installation Instructions

Before running the app, create a `.env` file in the root directory with the following variables:

```env
VITE_API_BASE_URL=https://your-api-url.com
VITE_API_KEY=your_key_here

# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/siddhaplants.git

# 2. Navigate to the project directory
cd siddhaplants

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev

