import React from "react";
import { SectionTitle } from "../UI";
import { DestaquesContainer, Destaque, Title } from "./styles";

// import { Container } from './styles';

const Destaques = ({ data = [], title = "Tendências no Mundo" }) => (
  <DestaquesContainer>
    <SectionTitle>{title}</SectionTitle>

    {data &&
      data.slice(0, 5).map((item, index) => {
        return (
          <Destaque key={`destaque-${index}`}>
            <small>{item}. Assuntos do mundo</small>
            <Title>#LoremIpsum</Title>
          </Destaque>
        );
      })}
  </DestaquesContainer>
);

export default Destaques;
