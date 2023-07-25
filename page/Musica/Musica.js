import "./Musica.css";
import {albums} from "../../data/data";

const template = () => {
  return `
  <ul id="musica-container"></ul>
  `;
};

const printMusica = () => {
    const musicaContainer = document.querySelector("#musica-container");
    for (const album of albums) {
      const li = document.createElement("li");
      li.innerHTML = `
      <img src='${album.cover}' alt='${album.title}' />
      <h3>${album.title} - ${album.year}</h3>
      <h4>${album.discography}</h4>
      `;
      musicaContainer.appendChild(li);
    }
  };

const Musica = () => {
  document.querySelector("main").innerHTML = template();
  printMusica();
  
};

export default Musica;