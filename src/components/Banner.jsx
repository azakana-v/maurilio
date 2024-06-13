import React from "react";
import styled from "styled-components";
import Maumau from "../assets/maumau.gif";

const BannerWrapper = styled.div`
  width: 100%;
  height: 300px; // ajuste conforme a necessidade
  background-image: url(${Maumau});
  background-size: contain;
`;

const Banner = () => <BannerWrapper />;

export default Banner;
