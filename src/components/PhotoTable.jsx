import React from "react";
import styled from "styled-components";

import Sim1 from "../assets/sins/1.png";
import Sim2 from "../assets/sins/2.png";
import Sim3 from "../assets/sins/3.png";
import Sim4 from "../assets/sins/4.png";
import Sim5 from "../assets/sins/5.png";
import Nao1 from "../assets/naus/1.png";
import Nao2 from "../assets/naus/2.png";
import Nao3 from "../assets/naus/3.png";
import Nao4 from "../assets/naus/4.png";
import Nao5 from "../assets/naus/5.png";

const photos = [
  { yes: Sim1, no: Nao1 },
  { yes: Sim2, no: Nao2 },
  { yes: Sim3, no: Nao3 },
  { yes: Sim4, no: Nao4 },
  { yes: Sim5, no: Nao5 },

  // Adicione mais fotos conforme necessário
];

const Table = styled.table`
  width: 100vw;
  border-collapse: collapse;

  @media (max-width: 768px) {
    display: block;
    &tbody {
      width: 100vw;
    }
  }
`;

const Th = styled.th`
  background-color: #f4f4f4;
  padding: 10px;

  @media (max-width: 768px) {
    /* display: none; */
  }
`;

const Td = styled.td`
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;

  @media (max-width: 768px) {
    display: block;
    width: 100vw;
    text-align: center;
    padding: 0px;
    border-bottom: 2px solid #ddd;

    &:last-child {
      border-bottom: none;
    }

    img {
      width: 90%;
    }
  }
`;

const Tr = styled.tr`
  @media (max-width: 768px) {
    display: block;
    margin-bottom: 10px;
  }
`;

const PhotoTable = () => (
  <Table>
    <thead>
      <tr>
        <Th>Sim</Th>
        <Th>Não</Th>
      </tr>
    </thead>
    <tbody>
      {photos.map((photo, index) => (
        <Tr key={index}>
          <Td>
            {window.innerWidth < 768 ? "SIM" : ""}
            <img src={photo.yes} alt="Sim" />
          </Td>
          <Td>
            {window.innerWidth < 768 ? "NAO" : ""}
            <img src={photo.no} alt="Não" />
          </Td>
        </Tr>
      ))}
    </tbody>
  </Table>
);

export default PhotoTable;
