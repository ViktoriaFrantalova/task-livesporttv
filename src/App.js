import React, { useState, useEffect } from "react";
import {
  Container,
  Table,
  Spinner,
  Row,
  Col,
  InputGroup,
  FormControl
} from "react-bootstrap";
import Pokemon from "./Pokemon";
import { fetchData } from "./helper";

function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);

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
            <th>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Type your pokemon name"
                  aria-label="Type your pokemon name"
                  aria-describedby="basic-addon2"
                  onChange={e => {
                    setValue(e.target.value.toLowerCase().trim());
                    setActiveSearch(false);
                  }}
                />
                <InputGroup.Append
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setActiveSearch(true);
                  }}
                >
                  <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </th>
          </tr>
          <tr>
            <th>Pokemon name:</th>
          </tr>
        </thead>
        <tbody>
          {activeSearch
            ? data.map((pokemon, index) => {
                if (pokemon.name.includes(value)) {
                  return (
                    <Pokemon pokemon={pokemon} key={index} index={index} />
                  );
                }
                return null;
              })
            : data.map((pokemon, index) => {
                return <Pokemon pokemon={pokemon} key={index} index={index} />;
              })}
        </tbody>
      </Table>
    </Container>
  );
}

export default App;
