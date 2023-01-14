# crudapp
CRUD app in react typescript and tailwind

## install tailwind css

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

/* ./your-css-folder/styles.css */
@tailwind base;
@tailwind components;
@tailwind utilities;