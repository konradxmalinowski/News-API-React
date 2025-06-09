# News API React

A modern and responsive web application for browsing the latest news, built with **React**, **TypeScript**, **TailwindCSS**, and powered by **Vite** for lightning-fast development and build times.

<br>

## Features

- **Fast & Modern Stack:** Built with React, TypeScript, Vite, and styled using TailwindCSS.
- **Latest News:** Fetches and displays current news articles from a news API.
- **Search & Filter:** Easily search and filter news articles by keywords or categories.
- **Responsive Design:** Fully responsive layout that looks great on all devices.
- **Dark Mode:** Seamlessly switch between light and dark themes.
- **Easy Setup:** Quick start with minimal configuration.

<br>

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/) or [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/konradxmalinowski/News-API-React.git
   cd News-API-React
   ```

2. **Install dependencies:**

   ```bash
   yarn install
   # or
   npm install
   ```

3. **Configure API Key:**

   Create a file named `API.ts` inside the `src` directory with the following content:

   ```ts
   export const API_KEY: string = 'API_KEY';
   ```

   Replace `"API_KEY"` with your actual News API key.

   > You can obtain a free API key from [NewsAPI.org](https://newsapi.org/) or another news provider.

4. **Run the development server:**

   ```bash
   yarn dev
   # or
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) to view the app.

### Building for Production

```bash
yarn build
# or
npm run build
```

The production-ready files will be in the `dist` directory.

<br>

## Project Structure

```
├── public/
├── src/
│   ├── components/
│   ├── api/
│   ├── styles/
│   ├── API.ts        # <-- Place your API key here
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

<br>

## Technologies Used

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [News API](https://newsapi.org/) (or similar)

<br>

## Customization

- **Change News Source:** Edit the API URL or key in `src/API.ts`.
- **Styling:** Modify Tailwind classes or add custom CSS for your needs.
- **Features:** Extend the app with user authentication, bookmarks, or offline mode.

<br>

## Screenshots
![image](https://github.com/user-attachments/assets/8eb053d2-1d21-4b10-9798-fa7ad6dec6ec)


<br>


## Contact

If you have any questions, feel free to contact me: [malinowski.konrad45@gmail.com](malinowski.konrad45@gmail.com)


