import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import styled from "styled-components";
import { Container, Row, Col } from 'reactstrap';

export default function CharacterCard(props) {

  return  <Card>
          <Container >
          <CardBody>
          <div><img src={props.img}></img></div>
          <StyledTitle>Name:{props.name}</StyledTitle>
          <StyledSubTitle>Status:{props.status}</StyledSubTitle>
          <StyledSubTitle>Species:{props.species}</StyledSubTitle>
          </CardBody>
          </Container>
          </Card>
 
}

export const StyledTitle = styled.h1`
  font-size:39px;
`;  

export const StyledSubTitle = styled.h2`
  font-size:20px;
`;  