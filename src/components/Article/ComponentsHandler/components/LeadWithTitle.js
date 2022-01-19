const LeadWithTitle = (props) => (
  <a href={props.url}>
    <h2 className="title">
      {props.lead ? <span className="lead">{props.lead}. </span> : null}
      {props.title}
    </h2>
  </a>
);

export default LeadWithTitle;
