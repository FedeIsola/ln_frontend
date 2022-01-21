export const LeadWithTitle = ({ title, lead, url }) => {
  const TitleComponent = (
    <h2 className="title">
      {lead ? <span className="lead">{lead}. </span> : null}
      {title}
    </h2>
  );
  return url ? (
    <a className="article-link title-link" href={url}>
      {TitleComponent}
    </a>
  ) : (
    TitleComponent
  );
};
