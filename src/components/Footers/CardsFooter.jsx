/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardImg,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer has-cards">
          <Container>
            <Row className="row-grid align-items-center my-md">
              <Col lg="12">
                <h3 className="text-primary font-weight-light mb-2">
                  ¿Quieres conocer más de nuestro trabajo?
                </h3>
                <h4 className="mb-0 font-weight-light">
                  Nuestro equipo experimentado te brindará asesoría sobre los 
                  mejores productos y proyectos que se ajusten a tus necesidades
                  y lo ayudaremos a navegar paso a paso durante todo el proceso 
                  de implementación. Para mayor información nos puedes escribir al correo: 
                <a href = "mailto: contacto@bepoint.cl"> contacto@bepoint.cl</a>
                </h4>
              </Col>
            </Row>
            <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright">
                  © {new Date().getFullYear()}{" "}

                    Bepoint Desarrollos.
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default CardsFooter;
