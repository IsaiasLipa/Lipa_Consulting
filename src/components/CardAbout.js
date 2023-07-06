import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import aboutImage from "../images/stony_brook.png"

const Card_about = (props) => {
  return (
    <Card className="m-4">
      <Card.Body>
        <Card.Title>
          {props.language ? (
            <a>About Lipa Consulting</a>
          ) : (
            <a>Acerca de Lipa Consulting</a>
          )}
        </Card.Title>
        <Card.Text>
          <Row>
            <Col xs={12} md={8}>
              {props.language ? (
                <div>
                  <p>
                    I am a Tax, Accounting, and Business Management Professional
                    offering over 10 years of administrative and office
                    management expertise. Over the course of my career, I have
                    served as a key asset to senior leaders, providing critical
                    support and acting as the main point of contact between
                    leaders and employees. I got my Bachelor's Degree from
                    Farminadale State College and my Master's from Stony Brook
                    University. Among my colleagues, I am known for being a
                    driven and proactive professional and I am continuously
                    anticipating new challenges. Having served in the legal,
                    accounting, finance, healthcare and custom print sectors; I
                    have gained a considerable level of versatility and have
                    learned to grasp new concepts and adapt quickly.
                  </p>
                  <p>
                    I hold core competencies in tax preparation, payroll,
                    administration, business management, interpersonal
                    communication, client and vendor management, relationship
                    development, confidentiality, accounts payable and
                    receivable. My goal is to use all my knowledge and resources
                    to help my community and its diversity at affordable and
                    reasonable prices.
                  </p>
                </div>
              ) : (
                <div>
                  <p>
                    Soy un profesional en Impuestos, Contabilidad y Gestión
                    Empresarial con más de 10 años de experiencia en
                    administración y gestión de oficinas. A lo largo de mi
                    carrera, he sido un recurso clave para líderes senior,
                    brindando un apoyo crítico y actuando como el punto
                    principal de contacto entre líderes y empleados. Obtuve mi
                    Licenciatura en la Universidad Estatal de Farminadale y mi
                    Maestría en la Universidad de Stony Brook. Entre mis
                    colegas, me conocen por ser un profesional motivado y
                    proactivo, y siempre estoy anticipando nuevos desafíos.
                    Habiendo trabajado en los sectores legal, contable,
                    financiero, de atención médica y de impresión personalizada,
                    he adquirido un nivel considerable de versatilidad y he
                    aprendido a comprender nuevos conceptos y adaptarme
                    rápidamente.
                  </p>
                  <p>
                    Poseo competencias fundamentales en preparación de
                    impuestos, nómina, administración, gestión empresarial,
                    comunicación interpersonal, gestión de clientes y
                    proveedores, desarrollo de relaciones, confidencialidad,
                    cuentas por pagar y cuentas por cobrar. Mi objetivo es
                    utilizar todo mi conocimiento y recursos para ayudar a mi
                    comunidad y su diversidad a precios asequibles y razonables.
                  </p>
                </div>
              )}
            </Col>
            <Col xs={12} md={4}>
              <div className="image_container">
                <img src={aboutImage} alt="Home" className="image_card" />
              </div>
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Card_about;
