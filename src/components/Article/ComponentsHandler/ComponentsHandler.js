import { Image, Tail, AuthorImage, LeadWithTitle, MarqueeWithAuthor } from "./components";

// Este handler se encarga de devolver cada componente de un Artículo con los datos ya procesados.
const ComponentsHandler = (data) => ({
  Image: () => <Image image={data.image} url={data.url} title={data.title} />,
  LeadWithTitle: () => <LeadWithTitle url={data.url} lead={data.lead} title={data.title} />,
  Tail: () => <Tail url={data.url} tail={data.tail} />,
  AuthorImage: () => <AuthorImage url={data.url} authorImage={data.authorImage} authorName={data.authorName} />,
  MarqueeWithAuthor: () => <MarqueeWithAuthor marquee={data.marquee} authorName={data.authorName} />,
});

export default ComponentsHandler;
