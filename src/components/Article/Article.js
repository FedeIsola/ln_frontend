import "./Article.scss";
import { Layout } from "./LayoutsHandler/Layout";

export const Article = (props) => {
  const { data, type } = props;

  return (
    <article className={`news-article ${type ? ` ${type}` : ""}`}>
      <Layout data={data} type={type} />
    </article>
  );
};
