export const Image = ({ image, title }) => {
  return image ? <img className="image" src={image} alt={title} /> : null;
};
