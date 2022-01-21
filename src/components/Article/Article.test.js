import { render, screen } from "@testing-library/react";
import { Article } from "./Article";

const articleDataFull = {
  lead: "Full Lead",
  title: "Full title",
  tail: "Full tail",
  image: "Full image",
  authorName: "Full author",
  url: "Full url",
};

const articleDataEmpty = {
  title: "Empty title",
  url: "Empty url",
};

describe("Article render", () => {
  test("renders default article", () => {
    render(<Article data={articleDataFull} />);
    screen.getByText(`${articleDataFull.lead}.`);
    screen.getByText(articleDataFull.title);
    screen.getByText(articleDataFull.tail);
    screen.getByText(`Por ${articleDataFull.authorName}`);
  });

  test("renders author-scoped article", () => {
    render(<Article data={articleDataFull} type="author-scoped" />);
    screen.getByText(articleDataFull.title);
    screen.getByText(`Por ${articleDataFull.authorName}`);
  });

  test("renders color-scoped article", () => {
    render(<Article data={articleDataFull} type="color-scoped" />);
    screen.getByText(`${articleDataFull.lead}.`);
    screen.getByText(articleDataFull.title);
    screen.getByText(`Por ${articleDataFull.authorName}`);
  });
});
