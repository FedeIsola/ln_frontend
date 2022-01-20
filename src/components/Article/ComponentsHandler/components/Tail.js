export const Tail = (props) => {
  const { tail } = props;

  return tail ? <p className="tail">{tail}</p> : null;
};
