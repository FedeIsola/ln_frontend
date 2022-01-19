import { ElementsHandler } from "../ElementsHandler/ElementsHandler";

export const handleLayout = (data, type) => {
  // El handler de Elementos se encarga de devolverme un componente correspondiente a cada elemento del artículo
  // sacandole la responsabilidad al layout de tener que gestionar la data para cada componente.
  const { Image, LeadWithTitle, Tail, AuthorImage, MarqueeWithAuthor } = ElementsHandler(data);

  // Los elementos consideran el renderizado condicional, por lo tanto si renderizamos un elemento Imagen
  // pero en nuestra data no hay ninguna imagen para ese elemento, no se va a renderizar. Esto nos brinda una mayor flexibilidad
  // al momento de armar layouts, por ejemplo en el caso default ya estamos considerando el artículo que tiene y el que no tiene imagen
  // simplemente declarando que en esa posición va un <Image />, todo dependerá de los datos que le pasemos.

  // Sin embargo consideramos que todo artículo va a tener una URL y un título.
  switch (type) {
    case "author-scoped":
      return (
        <>
          <LeadWithTitle />
          <AuthorImage />
          <MarqueeWithAuthor />
        </>
      );
    case "color-scoped":
      return (
        <>
          <Image />
          <LeadWithTitle />
          <MarqueeWithAuthor />
        </>
      );
    default: {
      return (
        <>
          <Image />
          <LeadWithTitle />
          <Tail />
          <MarqueeWithAuthor />
        </>
      );
    }
  }
};
