import { LayoutsHandler } from "components/Container/LayoutsHandler/LayoutsHandler";

export const Layout = (props) => {
  const { articles, type } = props;
  const { Notas2, Notas3, Focal } = LayoutsHandler(articles);

  switch (type) {
    case "notas-2":
      return <Notas2 />;
    case "notas-3":
      return <Notas3 />;
    case "focal-izquierdo":
      return <Focal />;
    default:
      return <Notas3 />;
  }
};
