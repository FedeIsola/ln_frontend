import { Article } from "../../Article/Article";

export const LayoutsHandler = (title, articles) => {
  const [article1, article2, article3] = articles;

  return {
    Notas3: () => (
      <>
        <Article data={article1} type={article1.type} />
        <Article data={article2} type={article2.type} />
        <Article data={article3} type={article3.type} />
      </>
    ),
    FocalIzquierdo: () => (
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
