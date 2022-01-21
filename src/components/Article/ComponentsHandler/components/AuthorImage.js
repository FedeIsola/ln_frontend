export const AuthorImage = ({ authorName, authorImage }) => {
  return authorImage ? <img className="author-image" src={authorImage} alt={authorName} /> : null;
};
