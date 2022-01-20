import { Image, Tail, AuthorImage, LeadWithTitle, MarqueeWithAuthor } from "./components";

export const ComponentsHandler = (data) => ({
  Image: () => <Image image={data.image} url={data.url} title={data.title} />,
  LeadWithTitle: () => <LeadWithTitle url={data.url} lead={data.lead} title={data.title} />,
  Tail: () => <Tail url={data.url} tail={data.tail} />,
  AuthorImage: () => <AuthorImage url={data.url} authorImage={data.authorImage} authorName={data.authorName} />,
  MarqueeWithAuthor: () => <MarqueeWithAuthor marquee={data.marquee} authorName={data.authorName} />,
});
