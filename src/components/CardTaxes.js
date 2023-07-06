import React from "react";
import taxImage from "../images/irs-logo.jpg"
import { Card, Row, Col } from "react-bootstrap";


const Card_taxes = (props) => {
  return (
    <Card className="m-4">
      <Card.Body>
        <Card.Title>
          {props.language ? <a>Tax Services</a> : <a>Servicio de Impuestos</a>}
        </Card.Title>
        <Card.Text>
          <Row>
            <Col xs={12} md={4}>
              <div className="image_container">
                <img src={taxImage} alt="Tax" className="image_card" />
              </div>
            </Col>
            <Col xs={12} md={8}>
              {props.language ? (
                <p>
                  We specialize in tax preparation services for individuals and
                  small businesses. By completing the annual continued education
                  courses required by the IRS (Internal Revenue Service) I can
                  guarantee to my clients to be current in Federal Tax Law
                  Changes and Ethical Standards. We will get to our clients the
                  maximum allowed refund and low their tax liability. Our job
                  does not end once we file your taxes, we are here for you any
                  day during the year. We assist small business owners in making
                  more informed decisions by providing timely and valuable
                  information that can be used to improve decision making, add
                  revenue, and boost profitability. We offer bookkeeping, and
                  payroll services. The preparation of Personal taxes is $140
                  The preparation of Business taxes is $350 Book Keeping starts
                  at $120
                </p>
              ) : (
                <p>
                  Nos especializamos en servicios de preparación de impuestos
                  para individuos y pequeñas empresas. Al completar los cursos
                  de educación continua anuales requeridos por el IRS (Servicio
                  de Impuestos Internos), puedo garantizar a mis clientes estar
                  al día en los cambios en la Ley Federal de Impuestos y los
                  estándares éticos. Nos aseguraremos de que nuestros clientes
                  obtengan el reembolso máximo permitido y reduzcan su
                  responsabilidad tributaria. Nuestro trabajo no termina una vez
                  que presentamos sus impuestos, estamos aquí para usted en
                  cualquier día del año. Ayudamos a los propietarios de pequeñas
                  empresas a tomar decisiones más informadas al proporcionar
                  información oportuna y valiosa que se puede utilizar para
                  mejorar la toma de decisiones, aumentar los ingresos y mejorar
                  la rentabilidad. Ofrecemos servicios de contabilidad y nómina.
                  La preparación de impuestos personales tiene un costo de $140.
                  La preparación de impuestos empresariales tiene un costo de
                  $350. Los servicios de contabilidad comienzan en $120.
                </p>
              )}
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Card_taxes;
