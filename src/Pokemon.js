import React, { useState } from "react";
import { fetchData } from "./helper";
import { Card, Accordion, Row, Col, Image } from "react-bootstrap";

function Pokemon(props) {
  const [data, setData] = useState({
    weight: "",
    height: "",
    base_experience: "",
    sprites: {
      back_default: "",
      back_shiny: "",
      front_default: "",
      front_shiny: ""
    }
  });

  const getDetail = url => {
    fetchData(url).then(res => {
      setData(res.data);
    });
  };

  // const index = props.index
  // const pokemon = props.pokemon
  const { index, pokemon } = props;
  const { weight, sprites, height, base_experience } = data;

  return (
    <tr onClick={getDetail(props.pokemon.url)}>
      <td>
        <Accordion>
          <Card
            style={{
              color: "black"
            }}
          >
            <Accordion.Toggle as={Card.Header} eventKey={index}>
              {pokemon.name}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={index}>
              <Card.Body>
                <div>weight: {weight}</div>
                <div>height: {height}</div>
                <div>base_experience: {base_experience}</div>
                <div>
                  <Row>
                    <Col>
                      <Image src={sprites.back_default} rounded />
                    </Col>
                    <Col>
                      <Image src={sprites.back_shiny} roundedCircle />
                    </Col>
                    <Col>
                      <Image src={sprites.front_default} thumbnail />
                    </Col>
                    <Col>
                      <Image src={sprites.front_shiny} thumbnail />
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </td>
    </tr>
  );
}

export default Pokemon;
