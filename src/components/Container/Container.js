import "./Container.scss";
import { Layout } from "./LayoutsHandler/Layout";

export const Container = ({ type, articles, title }) => {
  return (
    <section className="container">
      {title ? <h2 className="container-title">{title}</h2> : null}
      <section className={`inner-container ${type ? type : null}`}>
        <Layout articles={articles} type={type} />
      </section>
    </section>
  );
};
