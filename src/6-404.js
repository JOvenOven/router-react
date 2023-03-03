import { Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/perfil">Inicio</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route exact path="/" element={<h1>Inicio</h1>} />
          <Route exact path="/perfil" element={<h1>Perfil</h1>} />
          <Route exact path="*" element={"404: Ruta no encontrada"} />
        </Routes>
      </section>
    </div>
  );
}

export default App;