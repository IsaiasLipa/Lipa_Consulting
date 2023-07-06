import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import immigrationImage from "../images/latin_america.jpg"

const Card_immigration = (props) => {
  return (
    <Card className="m-4">
      <Card.Body>
        <Card.Title>
          {props.language ? (
            <a>Immigration Services</a>
          ) : (
            <a>Servicio de Immigraccion</a>
          )}
        </Card.Title>
        <Card.Text>
          <Row>
            <Col xs={12} md={4}>
              <div className="image_container">
                <img src={immigrationImage} alt="Tax" className="image_card" />
              </div>
            </Col>
            <Col xs={12} md={8}>
              {props.language ? (
                <p>
                  Immigration forms assistance, with plenty of experience
                  preparing family based immigration forms. We will help you
                  fill out your forms, and assist you through your immigration
                  process for a fraction of what an immigration attorney
                  charges. TPS - Temporary Protected Status DACA - Deferred
                  Action for Childhood Arrivals Employment Authorization Renewal
                  Family Petitions Adjustments of Status Green Card Renewal
                  Citizenships Affidavits Travel Documents - Advanced Parole
                  Student Visa Visa Invitations No legal advice will be offered.
                  We don't do any representation with immigration officials.
                </p>
              ) : (
                <p>
                  Asistencia con formularios de inmigración, con amplia
                  experiencia en la preparación de formularios de inmigración
                  basados en la familia. Te ayudaremos a completar tus
                  formularios y te asistiremos durante tu proceso de inmigración
                  por una fracción de lo que cobra un abogado de inmigración.
                  TPS: Estatus de Protección Temporal DACA: Acción Diferida para
                  los Llegados en la Infancia Renovación de Autorización de
                  Empleo Peticiones Familiares Ajustes de Estatus Renovación de
                  la Tarjeta Verde Ciudadanías Declaraciones Juradas Documentos
                  de Viaje - Permiso de Viaje Avanzado Visa de Estudiante
                  Invitaciones de Visa No se ofrecerá asesoramiento legal. No
                  realizamos ninguna representación ante funcionarios de
                  inmigración.
                </p>
              )}
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Card_immigration;
