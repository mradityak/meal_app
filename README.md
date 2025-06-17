# Sample Snack app
Here's a professional `README.md` for your Meal App project:

---

# 🍽️ Meal App

A beautiful React Native app to browse and explore delicious meals. Built with Expo, Redux Toolkit, and React Navigation, this app allows users to view meal details, ingredients, and steps — and mark meals as favorites.

## ✨ Features

* Browse a curated list of meals with images.
* View detailed ingredients and cooking steps.
* Mark/unmark meals as **Favorite** using **Redux Toolkit**.
* Smooth **navigation** between screens.
* Stylish UI with custom components.
* Toast notifications for user actions.

## 📱 Screenshots

| Meals List                                   | Meal Detail                                   | Favorites                                   |
| -------------------------------------------- | --------------------------------------------- | ------------------------------------------- |
| ![screenshot1](./screenshots/meals-list.png) | ![screenshot2](./screenshots/meal-detail.png) | ![screenshot3](./screenshots/favorites.png) |

## 🚀 Tech Stack

* **React Native (Expo)**
* **Redux Toolkit** – for global state management
* **React Navigation** – for handling navigation
* **react-native-toast-message** – for toast notifications

## 📦 Installation & Setup

1️⃣ **Clone the repository**:

```bash
git clone https://github.com/your-username/meal-app.git
cd meal-app
```

2️⃣ **Install dependencies**:

```bash
npm install
```

3️⃣ **Start the development server**:

```bash
npx expo start
```

4️⃣ **Run on device/emulator**:

* Android: Press `a`
* iOS: Press `i` (Mac required)
* Web: Press `w`

## 🛠️ Important Packages Used

| Package                      | Purpose                      |
| ---------------------------- | ---------------------------- |
| `@react-navigation/native`   | Navigation between screens   |
| `@reduxjs/toolkit`           | State management (favorites) |
| `react-native-toast-message` | Showing toast notifications  |

## ⚙️ Redux Setup Overview

* **`store/redux/favorites.js`** → Manages favorite meals using Redux slice.
* Uses actions:

  * `addFavorite`
  * `removeFavorite`

## ✅ Toast Example Usage

```js
import Toast from 'react-native-toast-message';

Toast.show({
  type: 'success',
  text1: 'Added to Favorites!',
});
```

## 📄 Folder Structure

```
/components
/screens
/store
 └── redux
 └── context (if used)
```

## 👨‍💻 Author

Aditya Kumar
🔗 [LinkedIn](www.linkedin.com/in/aditya-kumar-141a202b2)


## 📃 License

This project is licensed under the [MIT License](LICENSE).

---

Let me know if you want me to generate this with images or add contribution guidelines, too!
