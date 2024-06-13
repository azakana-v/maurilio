import React from "react";
import Banner from "./components/Banner";
import PhotoTable from "./components/PhotoTable";
import Sim1 from "./assets/sins/1.png";
import Sim2 from "./assets/sins/2.png";
import Sim3 from "./assets/sins/3.png";
import Sim4 from "./assets/sins/4.png";
import Sim5 from "./assets/sins/5.png";
import Nao1 from "./assets/naus/1.png";
import Nao2 from "./assets/naus/2.png";
import Nao3 from "./assets/naus/3.png";
import Nao4 from "./assets/naus/4.png";
import Nao5 from "./assets/naus/5.png";

const photos = [
  { yes: { Sim1 }, no: { Nao1 } },
  { yes: { Sim2 }, no: { Nao2 } },
  { yes: { Sim3 }, no: { Nao3 } },
  { yes: { Sim4 }, no: { Nao4 } },
  { yes: { Sim5 }, no: { Nao5 } },

  // Adicione mais fotos conforme necessário
];

function App() {
  return (
    <div>
      <Banner />
      <marquee behavior="|" direction="|">
        <h1>MAURILIO</h1>
      </marquee>
      <PhotoTable photos={photos} />
    </div>
  );
}

export default App;
