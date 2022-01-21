import "./App.scss";
import { articles } from "./api/articles";
import { Container } from "./components";

const App = () => {
  return (
    <main className="main-content">
      {articles.map((item, index) => {
        return <Container key={index} title={item.title} articles={item.articles} type={item.type} url={item.url} />;
      })}
    </main>
  );
};

export default App;
