export const Image = ({ image, title, url }) => {
  const ImageComponent = () => <img className="image" src={image} alt={title} />;
  return image ? (
    url ? (
      <a className="article-link image-link" href={url}>
        <ImageComponent />
      </a>
    ) : (
      <ImageComponent />
    )
  ) : null;
};
