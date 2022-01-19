const MarqueeSpan = (props) => <span className="marquee bold-text">{props.marquee}</span>;
const AuthorNameSpan = (props) => <span className="author-name bold-text">Por {props.authorName}</span>;

const MarqueeWithAuthor = (props) =>
  props.marquee || props.author ? (
    <p className="marquee-with-author">
      {props.marquee ? <MarqueeSpan marquee={props.marquee} /> : null}
      {props.marquee && props.authorName ? <span> / </span> : null}
      {props.authorName ? <AuthorNameSpan authorName={props.authorName} /> : null}
    </p>
  ) : null;

export default MarqueeWithAuthor;
