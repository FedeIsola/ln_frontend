export const LeadWithTitle = (props) => {
  const { title, lead, url } = props;

  return (
    <a href={url}>
      <h2 className="title">
        {lead ? <span className="lead">{lead}. </span> : null}
        {title}
      </h2>
    </a>
  );
};
