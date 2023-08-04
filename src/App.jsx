import "./App.css";
import { Movies } from "./components/Movies";
import responseMovies from "./mocks/with-results.json";

function App() {
  const movies = responseMovies.Search;

  return (
    <div>
      <header className="page">
        <h1>Buscador de peliculas</h1>
        <form>
          <input type="text" placeholder="Busca una pelicula" />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
