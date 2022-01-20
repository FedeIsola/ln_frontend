export const AuthorImage = (props) => {
  const { authorName, authorImage, url } = props;

  return authorImage ? (
    <a href={url}>
      <img className="author-image" src={authorImage} alt={authorName} />
    </a>
  ) : null;
};
