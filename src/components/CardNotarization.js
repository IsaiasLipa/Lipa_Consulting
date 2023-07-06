import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import notarizationImage from "../images/new_york_state.png"
const Card_notarization = (props) => {
  return (
    <Card className="m-4">
      <Card.Body>
        <Card.Title>
          {props.language ? (
            <a>Notarization Services</a>
          ) : (
            <a>Servicio de Notarization</a>
          )}
        </Card.Title>
        <Card.Text>
          <Row>
            <Col xs={12} md={8}>
              {props.language ? (
                <p>
                  I am a registered New York State Public Notary offering on-
                  site and mobile services traveling to homes, businesses,
                  hospitals, convalescent centers, local coffee shops, and
                  mutually agreed public locations Power of Attorneys Travel
                  Documents/Travel Consent for Minors Birth Certificates
                  applications Passport Certificates applications for minors
                  Affidavits Various Documents We are also equipped and
                  qualified to perform virtual notarizations as per Governor
                  Cuomo’s Executive Order Document Notarization starts at $3
                </p>
              ) : (
                <p>
                  Soy un notario público registrado en el estado de Nueva York
                  que ofrece servicios en el lugar y móviles, viajando a
                  hogares, negocios, hospitales, centros de convalecencia,
                  cafeterías locales y lugares públicos acordados mutuamente.
                  Ofrezco servicios de Poderes Notariales, Documentos de
                  Viaje/Consentimiento de Viaje para Menores, solicitudes de
                  Certificados de Nacimiento, solicitudes de Pasaportes para
                  menores, Declaraciones Juradas y varios documentos. También
                  estamos equipados y calificados para realizar notarizaciones
                  virtuales según la Orden Ejecutiva del Gobernador Cuomo. El
                  costo de la notarización de documentos comienza en $3.
                </p>
              )}
            </Col>
            <Col xs={12} md={4}>
              <div className="image_container">
                <img
                  src={notarizationImage}
                  alt="Notarization"
                  className="image_card"
                />
              </div>
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Card_notarization;
