/*
  About
  Description: Displays the blog logo and a short description of the blog.
  Connected to: App (parent). No children.
  Props: image, about
*/
function About({ image, about }) {
  return (
    <aside>
      {/* alt text keeps the image accessible */}
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;