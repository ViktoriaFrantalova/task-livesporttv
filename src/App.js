import React from "react";
import "./App.scss";
import { Container, Table } from "react-bootstrap";

function App() {
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
          <tr>
            <td>1</td>
            <td>bulbasaur</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default App;
