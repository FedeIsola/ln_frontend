const AuthorImage = (props) =>
  props.authorImage ? (
    <a href={props.url}>
      <img className="author-image" src={props.authorImage} alt={props.authorName} />
    </a>
  ) : null;

export default AuthorImage;
