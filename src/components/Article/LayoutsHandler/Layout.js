import { LayoutsHandler } from "./LayoutsHandler";

export const Layout = (props) => {
  const { type, data } = props;
  const { AuthorScoped, ColorScoped, Default } = LayoutsHandler(data);

  switch (type) {
    case "author-scoped":
      return <AuthorScoped />;
    case "color-scoped":
      return <ColorScoped />;
    default:
      return <Default />;
  }
};
