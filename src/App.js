import React, { useState, useEffect } from "react";
import { Container, Table, Spinner, Row, Col } from "react-bootstrap";
import Pokemon from "./Pokemon";
import { fetchData } from "./helper";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData("https://pokeapi.co/api/v2/pokemon?limit=964").then(res => {
      setData(res.data.results);
    });
  }, []);

  if (data.length === 0) {
    return (
      <Container className="h-100">
        <Row className="text-center align-items-center h-100">
          <Col>
            <Spinner animation="border" />
            <h2 className="pt-4">Loading...</h2>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Meno</th>
          </tr>
        </thead>
        <tbody>
          {data.map((pokemon, index) => {
            return <Pokemon pokemon={pokemon} key={index} index={index} />;
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default App;
