/* DEPRECATED */
import { Routes, Route, NavLink, useParams } from 'react-router-dom'

const Proyecto = () => {
  const params = useParams()
  const { proyecto_id } = params
  return (
    <h2>Proyecto {proyecto_id}</h2>
  )
}

const Portafolio = () => {
  return (
    <div>
      <h1>Portafolio</h1>
      <ul>
        <li>
          <NavLink activeClassName='activado' exact to={'/portafolio/proyecto-1'}>Proyecto 1</NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ fontSize: 20 }} exact to={'/portafolio/proyecto-2'}>Proyecto 2</NavLink>
        </li>
      </ul>
      <div>
        <Routes>
          <Route path={':proyecto_id'} element={<Proyecto />} />
        </Routes>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink exact to="/portafolio/">Portafolio</NavLink>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route exact path="/" element={<h1>Portafolio</h1>} />
          <Route path="/portafolio/*" element={<Portafolio />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
