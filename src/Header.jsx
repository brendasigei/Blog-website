/*
  Header
  Description: Displays the name of the blog.
  Connected to: App (parent). No children.
  Props: name
*/
function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;