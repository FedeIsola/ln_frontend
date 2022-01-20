const MarqueeSpan = (props) => <span className="marquee bold-text">{props.marquee}</span>;
const AuthorNameSpan = (props) => <span className="author-name bold-text">Por {props.authorName}</span>;

export const MarqueeWithAuthor = (props) => {
  const { marquee, authorName } = props;

  return marquee || authorName ? (
    <p className="marquee-with-author">
      {marquee ? <MarqueeSpan marquee={marquee} /> : null}
      {marquee && authorName ? <span> / </span> : null}
      {authorName ? <AuthorNameSpan authorName={authorName} /> : null}
    </p>
  ) : null;
};
