import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import Header from "./components/Header";
import Article from "./components/Article";
import blog from "./blog";

// Verifies App renders the data from blog.js
test("renders blog name, about text and posts from blog data", () => {
  render(<App />);
  expect(screen.getByText(blog.name)).toBeInTheDocument();
  expect(screen.getByText(blog.about)).toBeInTheDocument();
  expect(screen.getByAltText("blog logo")).toBeInTheDocument();
  expect(screen.getByText(blog.posts[0].title)).toBeInTheDocument();
});

// Verifies content changes when the props change
test("Header displays whatever name prop it receives", () => {
  render(<Header name="Another Blog" />);
  expect(screen.getByText("Another Blog")).toBeInTheDocument();
});

test("Article displays title, date and preview props", () => {
  render(<Article title="Test Title" date="March 3, 2025" preview="Test preview" />);
  expect(screen.getByText("Test Title")).toBeInTheDocument();
  expect(screen.getByText("March 3, 2025")).toBeInTheDocument();
  expect(screen.getByText("Test preview")).toBeInTheDocument();
});