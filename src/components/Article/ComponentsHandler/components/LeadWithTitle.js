export const LeadWithTitle = ({ title, lead }) => {
  return (
    <h2 className="title">
      {lead ? <span className="lead">{lead}. </span> : null}
      {title}
    </h2>
  );
};
