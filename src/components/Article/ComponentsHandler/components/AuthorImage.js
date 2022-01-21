export const AuthorImage = ({ authorName, authorImage, url }) => {
  const AuthorImageComponent = () => <img className="author-image" src={authorImage} alt={authorName} />;
  return authorImage ? (
    url ? (
      <a className="article-link author-image-link" href={url}>
        <AuthorImageComponent />
      </a>
    ) : (
      <AuthorImageComponent />
    )
  ) : null;
};
