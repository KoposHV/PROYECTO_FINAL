import "./Inicio.css";

const template = () => {
  return `<img class="logo" src="public/images/download-removebg-preview.png" alt="Platero y Tú logo"/>`;
};

const Inicio = () => {
  document.querySelector("main").innerHTML = template();
};

export default Inicio;
