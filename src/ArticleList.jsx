import Article from "./Article";

/*
  ArticleList
  Description: Renders one Article for each post it receives.
  Connected to: App (parent), Article (child)
  Props: posts
*/
function ArticleList({ posts }) {
  // Loop over posts; each Article needs a unique key (the post id)
  const articles = posts.map((post) => (
    <Article
      key={post.id}
      title={post.title}
      date={post.date}
      preview={post.preview}
    />
  ));

  return <main>{articles}</main>;
}

export default ArticleList;