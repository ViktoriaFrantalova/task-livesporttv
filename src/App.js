import React, { useState, useEffect } from "react";
import "./App.scss";
import { Container, Table, Spinner, Row, Col } from "react-bootstrap";
import axios from "axios";

const fetchData = async url => await axios.get(url);

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData("https://pokeapi.co/api/v2/pokemon?limit=964").then(res => {
      setData(res.data.results);
    });
  }, []);

  if (data === null) {
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
            <th>#</th>
            <th>Meno</th>
          </tr>
        </thead>
        <tbody>
          {data.map((pokemon, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{pokemon.name}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default App;
