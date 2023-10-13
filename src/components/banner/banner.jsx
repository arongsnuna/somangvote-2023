import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';


const scrollToCandidate2 = () => {
    const can2 = document.getElementById('can2');
    if (can2) {
      const offset = can2.offsetTop - 90;
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };



const HeaderBanner = () => {
    return (
        <div className="static-slider-head">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" md="6" className="align-self-center text-center">
                        <h3 className="title">2024<br/>소망대학부 총회<br/>7인 프로필</h3>
                        {/* <h4 className="subtitle font-light">Powerful Reactstrap UI Kit with<br /> Beautiful Pre-Built Demos</h4> */}

                        <Link smooth to="#CANDIDATES" className="btn-get-started btn btn-md m-t-30 font-14" >7인 후보 바로 보러가기</Link>
                        

                        <Link to="/#CANDIDATES" className="btn-get-started btn btn-md m-t-30 font-14">7인 후보 바로 보러가기</Link>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeaderBanner;
