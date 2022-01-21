import { LayoutsHandler } from "./LayoutsHandler";

export const Layout = ({ type, data }) => {
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
