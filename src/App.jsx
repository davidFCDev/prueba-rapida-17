import "./App.css";

function App() {
  return (
    <div>
      <header className="page">
        <h1>Buscador de peliculas</h1>
        <form>
          <input type="text" placeholder="Busca una pelicula" />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>Lista</main>
    </div>
  );
}

export default App;
