import React from "react";
// Bootstrap
import {
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";

function Profile(props) {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs={10} md={10} xl={6}>
          <Card className="card rounded-3 shadow border-0">
            <Card.Body>
              <Card.Title className="text-center mb-4">Profile</Card.Title>
              <img src={props.user.userImage} height="200" className="d-inline-block align-top"></img>
              {props.user.firstname} {props.user.lastname} {props.user.email}
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Profile;
