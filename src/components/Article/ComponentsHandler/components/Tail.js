export const Tail = ({ tail, url }) => {
  const TailComponent = () => <p className="tail">{tail}</p>;
  return tail ? (
    url ? (
      <a className="article-link tail-link" href={url}>
        <TailComponent />
      </a>
    ) : (
      <TailComponent />
    )
  ) : null;
};
