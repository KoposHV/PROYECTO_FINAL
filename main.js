import './style.css'
import Navigator from './comoponents/Navigator/Navigator';
import Inicio from './page/Inicio/Inicio';
import Acerca from './page/Acerca/Acerca';
import Musica from './page/Musica/Musica';
import Tour from './page/Tour/Tour';
import linkPage from './utils/linkPages'; 


Navigator();
Inicio();


const pages = [
    {
      id: "#inicio-link",
      page: Inicio,
    },
    {
      id: "#acerca-link",
      page: Acerca,
    },
    {
      id: "#musica-link",
      page: Musica,
    },
    {
      id: "#tour-link",
      page: Tour,
    },
  ];
  
  for (const page of pages) {
    linkPage(page.id, page.page);
  }
