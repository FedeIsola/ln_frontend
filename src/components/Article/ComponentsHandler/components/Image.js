export const Image = (props) => {
  const { image, url, title } = props;

  return image ? (
    <a href={url}>
      <img className="image" src={image} alt={title} />
    </a>
  ) : null;
};
