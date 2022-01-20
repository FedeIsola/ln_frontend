export const Tail = (props) => {
  const { tail, url } = props;

  return tail ? (
    <a href={url}>
      <p className="tail">{tail}</p>
    </a>
  ) : null;
};
