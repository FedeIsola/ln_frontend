import "./Article.scss";
import { Layout } from "./LayoutsHandler/Layout";

export const Article = ({ data, type }) => {
  return (
    <article className={`news-article ${type ? ` ${type}` : ""}`}>
      <Layout data={data} type={type} />
    </article>
  );
};
