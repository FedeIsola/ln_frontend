import "./Article.scss";
import { handleLayout } from "./Layouts";

const Article = (props) => {

  const { data, type } = props;

  return (
    <article className={`news-article${type ? ` ${type}` : ''}`}>
      {handleLayout(data, type)}
    </article>
  )
}

export default Article