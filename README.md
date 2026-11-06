# Personal Blog

A static personal blog built with React, practicing components, JSX and props.

## Component Tree

App
├── Header
├── About
└── ArticleList
    └── Article

## Components

- **App**: root component; passes data from `blog.js` to its children (Header, About, ArticleList).
- **Header**: shows the blog name (prop: `name`). Child of App.
- **About**: shows the logo and description (props: `image`, `about`). Child of App.
- **ArticleList**: renders an Article for each post (prop: `posts`). Child of App; parent of Article.
- **Article**: shows one post (props: `title`, `date`, `preview`). Child of ArticleList.

## How to Run

1. Clone the repository and open the folder:
   git clone <your-repo-url>
   cd <project-folder>
2. Install dependencies:
   npm install
3. Start the app:
   npm start   (or `npm run dev` if the project uses Vite)
4. Open the local address shown in the terminal in your browser.

## Run the Tests

npm test

## Screenshots

![Blog home page](./screenshots/blog.png)