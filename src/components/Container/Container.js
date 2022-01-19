import "./Container.scss";
import Article from "../Article/Article";

const Container = (props) => (
  <section className={`container ${props.type ? props.type : null}`}>
    {props.articles.map((article, index) => (
      <Article className={`article-${index}`} data={article} type={article.type} key={index} />
    ))}
  </section>
);

export default Container;
