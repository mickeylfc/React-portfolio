import React from "react";
import {
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ListGroup,
  ListGroupItem,
  Jumbotron
} from "reactstrap";

const ProjectModal = props => {
  return (
    <div>
      <div>
        <div>
          <Modal
            size="lg"
            centered={true}
            isOpen={props.isOpen}
            toggle={props.toggleModal}
            className={props.className}
          >
            <ModalHeader toggle={props.toggleModal}>{props.title}</ModalHeader>

            <div className="d-flex modal-sub-heading">
              <strong>
                <p>About the project</p>
              </strong>
            </div>
            <ModalBody>{props.body}</ModalBody>

            <ModalBody>
              <strong>
                <p>Project Features</p>
              </strong>

              <ListGroup flush>
                <ListGroupItem>{props.feature1}</ListGroupItem>
                <ListGroupItem>{props.feature2}</ListGroupItem>
                <ListGroupItem>{props.feature3}</ListGroupItem>
                <ListGroupItem>{props.feature4}</ListGroupItem>
              </ListGroup>

              <Col>
                <Jumbotron className="project-data">
                  <strong>
                    <p>Project Data</p>
                  </strong>
                  <p>Name: {props.projectName}</p>
                  <p>Date: {props.projectDate}</p>
                  <p>Technology: {props.projectTech}</p>
                </Jumbotron>
                <p>{props.login}</p>
                <p>{props.username}</p>
                <p>{props.password}</p>
              </Col>
            </ModalBody>

            <ModalFooter>
              <a href={props.url} target="_blank">
                <Button className="visit-site-button" color="primary">
                  Visit the website
                </Button>
              </a>

              <a href={props.github} target="_blank">
                <Button className="visit-site-button" color="primary">
                  Github
                </Button>
              </a>

              <Button
                className="cancel-site-button"
                color="secondary"
                onClick={props.toggleModal}
              >
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
