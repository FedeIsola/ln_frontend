export const AuthorImage = (props) => {
  const { authorName, authorImage } = props;

  return authorImage ? <img className="author-image" src={authorImage} alt={authorName} /> : null;
};
