import ComponentsHandler from "../ComponentsHandler/ComponentsHandler";
import Layout from "./Layout";

const handleLayout = (data, type) => {
  const { Image, LeadWithTitle, Tail, AuthorImage, MarqueeWithAuthor } = ComponentsHandler(data);

  switch (type) {
    case "author-scoped":
      return <Layout elements={[<LeadWithTitle />, <AuthorImage />, <MarqueeWithAuthor />]} />;
    case "color-scoped":
      return <Layout elements={[<Image />, <LeadWithTitle />, <MarqueeWithAuthor />]} />;
    default:
      return <Layout elements={[<Image />, <LeadWithTitle />, <Tail />, <MarqueeWithAuthor />]} />;
  }
};

export default handleLayout;
