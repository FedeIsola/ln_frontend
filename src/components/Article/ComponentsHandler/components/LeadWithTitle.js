export const LeadWithTitle = (props) => {
  const { title, lead } = props;

  return (
    <h2 className="title">
      {lead ? <span className="lead">{lead}. </span> : null}
      {title}
    </h2>
  );
};
