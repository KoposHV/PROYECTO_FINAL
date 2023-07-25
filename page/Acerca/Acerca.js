import "./Acerca.css";

const template = () => {
    return `
    <img class="portrait" src="https://media.gettyimages.com/id/89670452/es/foto/december-28-2006-palacio-de-los-deportes-de-la-comunidad-de-madrid-madrid-spain-fito-fitipaldis.jpg?s=612x612&w=0&k=20&c=zW0LKrBZBqaGpUx4dE0mPLm79id2kD1SzdqdgLVyc6w=" alt="Adolfo Cabrales Fito portrait" />

    <p><em>Adolfo "Fito" Cabrales Mato</em> (Bilbao, 6 de octubre de 1966)1​ es un músico español. A lo largo de su carrera musical ha sido cantante, guitarrista y compositor del grupo<em>Platero y Tú</em> y de su actual banda, <em>Fito & Fitipaldis</em>. Hasta octubre de 2014 llegó a vender más de <em>2,6 millones de discos</em> a lo largo de su carrera; siendo 1,6 millones correspondientes solamente a las ventas de Fito & Fitipaldis.En 1989 se unió a Iñaki «Uoho» Antón, Juantxu «Mongol» Olano y Jesús «Maguila» García, también originarios del mismo barrio,10​ para formar el grupo de rock and roll Platero y Tú.A lo largo de la década de los 90 colaboraron con La Polla Records (Evaristo colaboró en el tema Juliette), Rosendo Mercado (quien <em>colaboró</em> en Sin solución) y sobre todo <em>con Roberto Iniesta, «Robe»</em>, voz y guitarra de Extremoduro. A lo largo de su trayectoria <em>consiguieron tres discos de Oro y un disco de Platino en España</em> (hasta 2002).</p>

    <details>
    <sumary>Mas información</sumary>
    <p><em>Nació</em> en la calle bilbaína de Zabala,​ pasando parte de su infancia y adolescencia <em>en Laredo</em> (Cantabria) y en Málaga.​ En su juventud trabajó de camarero.En esta época <em>comenzaron también sus problemas con las drogas</em>; aunque posteriormente aseguró «estar limpio»​ durante años <em>abusó del «speed»</em>. </p>
    </details>
    `;
    
};

const Acerca  = () => {
    document.querySelector("main").innerHTML = template();
  };
  
  export default Acerca ;

