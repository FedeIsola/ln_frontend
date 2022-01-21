import { Article } from "../../Article/Article";

export const LayoutsHandler = (articles) => {
  const [article1, article2, article3] = articles;

  return {
    Notas2: () => (
      <>
        <Article data={article1} type={article1.type} />
        <Article data={article2} type={article2.type} />
      </>
    ),
    Notas3: () => (
      <>
        <Article data={article1} type={article1.type} />
        <Article data={article2} type={article2.type} />
        <Article data={article3} type={article3.type} />
      </>
    ),
    Focal: () => (
      <>
        <div className="foco-izquierdo">
          <Article data={article1} type={article1.type} />
        </div>
        <div className="foco-derecho">
          <Article data={article2} type={article2.type} />
          <Article data={article3} type={article3.type} />
        </div>
      </>
    ),
  };
};
