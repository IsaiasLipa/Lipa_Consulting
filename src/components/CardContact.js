import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Whatsapp } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
const Card_contact = (props) => {
  const openWhatsapp = () => {
    window.open("https://wa.me/16317204949", "_blank");
  }
  const openFacebook = () => {
    window.open("https://www.facebook.com/LipaConsulting/", "_blank");
  }
  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const iconStyle = {
    marginRight: "5px",
  };
  return (
    <Card className="m-4">
      <Card.Body>
        <Card.Title>
          {props.language ? (
            <a>Contact Information</a>
          ) : (
            <a>Informaccion de contacto</a>
          )}
        </Card.Title>
        <Card.Text>
          <Row>
            <Col xs={12} md={4}>
              <div className="image_container">
                <iframe
                  className="image_card"
                  loading="lazy"
                  allowfullscreen
                  src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJMU_YV4Ix6IkRga32gFWLtLc&key=AIzaSyDNZz8yYz_OQYhCfWpgQbM0aiazLBNFEik"
                ></iframe>
              </div>
            </Col>
            <Col xs={12} md={8}>
              {props.language ? (
                <div>
                  <p>
                    To schedule an appointment you can give us a call at: (631)
                    720-4949
                  </p>
                  <p>you can email us at: lipaconsultingserv@gmail.com</p>
                </div>
              ) : (
                <div>
                  <p>
                    Para programar una cita, puedes llamarnos al: (631) 720-4949
                  </p>
                  <p>
                    También puedes enviarnos un correo electrónico a:
                    lipaconsultingserv@gmail.com
                  </p>
                </div>
              )}
              <Button
                variant="outline-success"
                onClick={openWhatsapp}
                style={buttonStyle}
              >
                <div style={iconStyle}>
                  <Whatsapp />
                </div>
                {props.language ? <a>Text our Whatsapp</a> : <a>Contactanos en Whatsapp</a>}
              </Button>
              <br/>
              <Button
                variant="outline-primary"
                onClick={openFacebook}
                style={buttonStyle}
              >
                <div style={iconStyle}>
                  <Whatsapp />
                </div>
                {props.language ? <a>See our Facebook</a> : <a>Ve nuestro Facebook</a>}
              </Button>
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Card_contact;
