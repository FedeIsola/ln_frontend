import { render, screen } from "@testing-library/react";
import { Article } from "./Article";

const articleData = {
  lead: "Full Lead",
  title: "Full title",
  tail: "Full tail",
  image: "Full image",
  authorName: "Full author",
  url: "Full url",
};
describe("Article render", () => {
  test("renders default article", () => {
    render(<Article data={articleData} />);
    screen.getByText(`${articleData.lead}.`);
    screen.getByText(articleData.title);
    screen.getByText(articleData.tail);
    screen.getByText(`Por ${articleData.authorName}`);
  });

  test("renders author-scoped article", () => {
    render(<Article data={articleData} type="author-scoped" />);
    screen.getByText(articleData.title);
    screen.getByText(`Por ${articleData.authorName}`);
  });

  test("renders color-scoped article", () => {
    render(<Article data={articleData} type="color-scoped" />);
    screen.getByText(`${articleData.lead}.`);
    screen.getByText(articleData.title);
    screen.getByText(`Por ${articleData.authorName}`);
  });
});
