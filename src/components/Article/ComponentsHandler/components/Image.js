export const Image = (props) => {
  const { image, title } = props;

  return image ? <img className="image" src={image} alt={title} /> : null;
};
