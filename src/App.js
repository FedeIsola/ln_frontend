import "./App.scss";
import { news } from "./api/news";
import { Article } from "./components";

const App = () => {
  return (
    <main>
      <div className="notasx3">
        {news.map(el => {
          const random = Math.floor(Math.random() * 3) + 1;
          switch (random) {
            case 1:
              return <Article data={el} />
            case 2:
              return <Article data={el} type="author-scoped" />
            case 3:
              return <Article data={el} type="color-scoped" />
            default: <Article data={el} />;
          }
        })}
      </div>
    </main>
  );
}

export default App;
