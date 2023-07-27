import "./Navigator.css";
const template = () => {
    return `
    <nav>
        <label for="hamburguesa">≡</label>
        <input type="checkbox" id="hamburguesa" />
      <ul>
      <li>
          <a href="#null" id="inicio-link">Inicio</a>
        </li>
        <li>
          <a href="#null" id="acerca-link">Acerca</a>
        </li>
        <li>
          <a href="#null" id="musica-link">Musica</a>
        </li>
        <li>
          <a href="#null" id="tour-link">Tour</a>
        </li>
      </ul>
     </nav>
    `;
  };
  const Navigator = () => {
    document.querySelector("header").innerHTML = template();
  };
  
  export default Navigator;