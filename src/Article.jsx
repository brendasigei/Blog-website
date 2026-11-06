/*
  Article
  Description: Displays a single blog post (title, date, preview).
  Connected to: ArticleList (parent). No children.
  Props: title, date, preview
*/
function Article({ title, date, preview }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;