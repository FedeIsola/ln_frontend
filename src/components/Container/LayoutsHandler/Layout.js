import { LayoutsHandler } from "components/Container/LayoutsHandler/LayoutsHandler";

export const Layout = (props) => {
  const { articles, type, title } = props;
  const { Notas3, FocalIzquierdo } = LayoutsHandler(title, articles);

  switch (type) {
    case "notas-3":
      return <Notas3 />;
    case "focal-izquierdo":
      return <FocalIzquierdo />;
    default:
      return <Notas3 />;
  }
};
