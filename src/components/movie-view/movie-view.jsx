import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Card, Button, Row, Col, Modal, Form } from "react-bootstrap";

export const MovieView = ({ movies }) => {
  const { MovieID } = useParams();

  const movie = movies.find((b) => b.id === MovieID)

  console.log(movie)

    return (
      <Card>
        <Card.Body>
        <Card.Img className="w-100" src={movie.image} />
        </Card.Body>
        <Card.Body>
          <Card.Title>Title: </Card.Title>
          <Row>{movie.title}</Row>
        </Card.Body>
        <Card.Body>
          <Card.Title>Description: </Card.Title>
          <Row>{movie.description}</Row>
        </Card.Body>
        <Card.Body>
          <Card.Title>Genre: </Card.Title>
          <Row>{movie.genre}</Row>
        </Card.Body>
        <Card.Body>
          <Card.Title>Director: </Card.Title>
          <Row>{movie.director}</Row>
        </Card.Body>
        <Link to={`/`}>
        <Button className="back-button">Back</Button>
        </Link>
      </Card>
    );
  };