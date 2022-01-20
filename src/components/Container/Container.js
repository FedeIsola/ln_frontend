import "./Container.scss";
import { Layout } from "./LayoutsHandler/Layout";

export const Container = (props) => {
  const { type, articles, title } = props;

  return (
    <section className={`container ${type ? type : null}`}>
      <Layout articles={articles} type={type} title={title} />
    </section>
  );
};
