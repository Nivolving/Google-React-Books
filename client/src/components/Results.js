import React from 'react';
import { Row, Col, Card, Button } from "react-bootstrap"
import API from '../utils/API';

export const Result = ({book}) => {

  const handleSave = () => {

    API.createBook( book );

  }

  const handleDelete = () => {

    API.deleteBook( book._id ).then(() => {
      console.log("after delete");
      window.location.reload();

    });

  }

  return (
    <Card>
      <Card.Body>
        <Row>
          <Col>
            <Card.Title>{book.title}</Card.Title>
            <p><strong>Authors:</strong> {book.authors.join(", ")}</p>
          </Col>
          <Col className="text-right">
            <Button href={book.link}>View</Button>
            {
              book._id

                ? <Button className="ml-2" onClick={handleDelete}>Delete</Button>

                : <Button className="ml-2" onClick={handleSave}>Save</Button>
            }
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md="4">
            <img src={book.image} alt="" />
          </Col>
          <Col>
            <Card.Text>{book.description}</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );

}


function Results({ results }){

    return (
      <Card>
        <Card.Body>
          <Card.Title>
              Results
          </Card.Title>
           {results.map(item => <Result key={item.googlebookid} book={item}/>)}
        </Card.Body>
      </Card>
    );
}

export default Results