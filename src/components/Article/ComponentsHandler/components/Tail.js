const Tail = (props) =>
  props.tail ? (
    <a href={props.url}>
      <p className="tail">{props.tail}</p>
    </a>
  ) : null;

export default Tail;
