const Image = (props) =>
  props.image ? (
    <a href={props.url}>
      <img className="image" src={props.image} alt={props.title} />
    </a>
  ) : null;

export default Image;
