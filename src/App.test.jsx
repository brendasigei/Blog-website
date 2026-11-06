import { describe, test, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import App from "./App";
import Header from "./Header";
import Article from "./Article";
import blog from "./blog";

// Clean up the rendered DOM after each test
afterEach(() => {
  cleanup();
});

describe("Blog props rendering", () => {
  // Verifies App renders the data from blog.js
  test("renders blog name, about text and posts from blog data", () => {
    render(<App />);
    expect(screen.getByText(blog.name)).toBeTruthy();
    expect(screen.getByText(blog.about)).toBeTruthy();
    expect(screen.getByAltText("blog logo")).toBeTruthy();
    expect(screen.getByText(blog.posts[0].title)).toBeTruthy();
  });

  // Verifies content changes when the props change
  test("Header displays whatever name prop it receives", () => {
    render(<Header name="Another Blog" />);
    expect(screen.getByText("Another Blog")).toBeTruthy();
  });

  test("Article displays title, date and preview props", () => {
    render(
      <Article title="Test Title" date="March 3, 2025" preview="Test preview" />
    );
    expect(screen.getByText("Test Title")).toBeTruthy();
    expect(screen.getByText("March 3, 2025")).toBeTruthy();
    expect(screen.getByText("Test preview")).toBeTruthy();
  });
});