import { Image, Tail, AuthorImage, LeadWithTitle, MarqueeWithAuthor } from "./components";

export const ComponentsHandler = (data) => ({
  Image: () => <Image image={data.image} title={data.title} url={data.url} />,
  LeadWithTitle: () => <LeadWithTitle lead={data.lead} title={data.title} url={data.url} />,
  Tail: () => <Tail tail={data.tail} url={data.url} />,
  AuthorImage: () => <AuthorImage authorImage={data.authorImage} authorName={data.authorName} url={data.url} />,
  MarqueeWithAuthor: () => <MarqueeWithAuthor marquee={data.marquee} authorName={data.authorName} />,
});
