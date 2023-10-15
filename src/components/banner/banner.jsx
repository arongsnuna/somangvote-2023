import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';



const HeaderBanner = () => {
    return (
        <div className="static-slider-head">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" md="6" className="align-self-center text-center">
                        <h3 className="title">2024<br/>소망대학부 총회<br/>7인 프로필</h3>

                        <Link smooth to="#CANDIDATE" className="btn-get-started btn btn-md m-t-30 font-14" >7인 후보 바로 보러가기</Link>


                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeaderBanner;
