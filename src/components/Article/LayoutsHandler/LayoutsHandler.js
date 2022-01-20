import { ComponentsHandler } from "../ComponentsHandler/ComponentsHandler";

export const LayoutsHandler = (data) => {
  const { Image, LeadWithTitle, Tail, AuthorImage, MarqueeWithAuthor } = ComponentsHandler(data);

  return {
    AuthorScoped: () => (
      <>
        <LeadWithTitle />
        <AuthorImage />
        <MarqueeWithAuthor />
      </>
    ),
    ColorScoped: () => (
      <>
        <Image />
        <LeadWithTitle />
        <MarqueeWithAuthor />
      </>
    ),
    Default: () => (
      <>
        <Image />
        <LeadWithTitle />
        <Tail />
        <MarqueeWithAuthor />
      </>
    ),
  };
};
