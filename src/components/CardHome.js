import React from 'react'
import { Card, Row, Col } from "react-bootstrap";
import Homeimage from "../images/home_pic.jpg"

const Card_home = (props) => {
    return (
      <Card className="m-4">
        <Card.Body>
          <Card.Title>
            {props.language ? (
              <h1>Welcome to Lipa Consulting</h1>
            ) : (
              <h1>Bienvenido a Lipa Consulting</h1>
            )}
          </Card.Title>
          <Card.Text>
            <Row>
              <Col xs={12} md={8}>
                {props.language ? (
                  <div>
                    <p>
                      Lipa Consulting .Inc., is a full service Accounting firm
                      geared toward the needs of small to medium size businesses
                      and individual clients. Integrity, innovation, industry
                      expertise, and an on-going commitment to quality are the
                      core values that guide us in our business. Our number one
                      priority is your satisfaction; we welcome you to contact
                      us via email or telephone with any concerns or questions
                      you may have.
                    </p>
                    <p>
                      We are committed to forming a lasting relationship with
                      our clients and offering the highest level of customer
                      service. Your success is our success!
                    </p>
                    <p>
                      This website is designed to provide you with an overview
                      of our firm and the services we provide. We hope this
                      website will become a useful tool or resource for you.
                    </p>
                  </div>
                ) : (
                  <div>
                    <p>
                      Lipa Consulting .Inc. es una firma de contabilidad de
                      servicio completo enfocada en las necesidades de pequeñas
                      y medianas empresas y clientes individuales. La
                      integridad, la innovación, la experiencia en la industria
                      y un compromiso continuo con la calidad son los valores
                      fundamentales que nos guían en nuestro negocio. Nuestra
                      prioridad número uno es tu satisfacción; te invitamos a
                      contactarnos por correo electrónico o teléfono si tienes
                      alguna inquietud o pregunta.
                    </p>
                    <p>
                      Estamos comprometidos en establecer una relación duradera
                      con nuestros clientes y ofrecer el más alto nivel de
                      servicio al cliente. ¡Tu éxito es nuestro éxito!
                    </p>
                    <p>
                      Este sitio web está diseñado para proporcionarte una
                      visión general de nuestra firma y los servicios que
                      ofrecemos. Esperamos que este sitio web se convierta en
                      una herramienta o recurso útil para ti.
                    </p>
                  </div>
                )}
              </Col>
              <Col xs={12} md={4}>
                <div className="image_container">
                  <img src={Homeimage} alt="Home" className="image_card" />
                </div>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    );
}

export default Card_home;