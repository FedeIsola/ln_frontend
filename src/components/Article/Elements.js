
const MarqueeSpan = (props) => <span className="bold-text">{props.marquee}</span>;
const AuthorNameSpan = (props) => <span className="bold-text">{props.authorName}</span>;

export const Elements = (data) => (
  {
    Image: () => (data.image && <img className="image" src={data.image} alt={data.title} />),
    LeadWithTitle: () => <h2 className="title"><span className="lead">{data.lead}. </span>{data.title}</h2>,
    Tail: () => <p className="tail">{data.tail}</p>,
    AuthorImage: () => (data.authorImage && <img className="author-image" src={data.authorImage} alt={data.authorName}></img>),
    Marquee: () => <p className="marquee"><MarqueeSpan marquee={data.marquee} /></p>,
    AuthorName: () => <p className="author-name"><AuthorNameSpan authorName={data.authorName} /></p>,
    MarqueeWithAuthor: () => {
      return (
        <p className="marquee-author"><MarqueeSpan marquee={data.marquee} />
          {(data.marquee && data.authorName) ? <span>/</span> : null}
          <AuthorNameSpan authorName={data.authorName} /></p>
      )
    }

  }
)