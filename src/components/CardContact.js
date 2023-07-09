import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
const Card_contact = (props) => {
  const openWhatsapp = () => {
    window.open("https://wa.me/16317204949", "_blank");
  }
  const openFacebook = () => {
    window.open("https://www.facebook.com/LipaConsulting", "_blank");
  }
  const openInstagram= () => {
    window.open("https://www.instagram.com/lipaconsulting", "_black");
  }
  
  return (
    <Card className="m-4">
      <Card.Body>
        <Card.Title>
          {props.language ? (
            <p>Contact Information</p>
          ) : (
            <p>Informaccion de contacto</p>
          )}
        </Card.Title>
        <Card.Text>
          <Row>
            <Col xs={12} md={4}>
              <div className="image_container">
                <iframe
                  title="map"
                  className="image_card"
                  loading="lazy"
                  allowfullscreen
                  src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJMU_YV4Ix6IkRga32gFWLtLc&key=AIzaSyDNZz8yYz_OQYhCfWpgQbM0aiazLBNFEik"
                />
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
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                  textAlign: "center",
                }}
              >
                <i class="fa-brands fa-whatsapp "></i>

                <span>
                  {props.language
                    ? "Text our Whatsapp"
                    : "Contactanos en Whatsapp"}
                </span>
              </Button>
              <br />
              <Button
                variant="outline-dark"
                onClick={openInstagram}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                  textAlign: "center",
                  borderColor: "#E4405F",
                  color: "#E4405F",
                }}
              >
                <i class="fa-brands fa-instagram"></i>

                <span>
                  {props.language
                    ? "See our Instagram"
                    : "Ve nuestro Instagram"}
                </span>
              </Button>

              <br />
              <Button
                variant="outline-primary"
                onClick={openFacebook}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                  textAlign: "center",
                }}
              >
                <i class="fa-brands fa-facebook"></i>
                <span>
                  {props.language ? "See our Facebook" : "Ve nuestro Facebook"}
                </span>
              </Button>
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Card_contact;
