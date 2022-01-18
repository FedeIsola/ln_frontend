import { Elements } from "./Elements.js";

export const handleLayout = (data, type) => {

  const { Image, LeadWithTitle, Tail, AuthorImage, Marquee, AuthorName, MarqueeWithAuthor } = Elements(data);

  switch (type) {
    case "author-scoped":
      return (
        <>
          <LeadWithTitle />
          <AuthorImage />
          <AuthorName />
        </>
      )
    case "color-scoped":
      return (
        <>
          <Image />
          <LeadWithTitle />
          <Marquee />
        </>
      )
    default:
      {
        return (
          <>
            <Image />
            <LeadWithTitle />
            <Tail />
            <MarqueeWithAuthor />
          </>
        )
      }
  }
}