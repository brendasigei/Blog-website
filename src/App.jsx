import blog from "./blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

/*
  App
  Description: Root component. Imports blog data and passes it down as props.
  Connected to: Header, About, ArticleList (children)
*/
function App() {
  return (
    <div>
      <Header name={blog.name} />
      <About image={blog.image} about={blog.about} />
      <ArticleList posts={blog.posts} />
    </div>
  );
}

export default App;