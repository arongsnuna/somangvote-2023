/* eslint-disable */
import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';

const Cards = () => {
    return (
        <div id="ABOUT">
            <div className="mini-spacer"></div>
            <Container>
                <Row>
                    <Col md="6">
                        <Card body className="card-shadow">
                            <CardText className="font-bold">너희가 나를 택한것이 아니요<br/>내가 너희를 택하여 세웠나니<br/>이는 너희로 가서 열매를 맺게 하고 <br/>또 너희 열매가 항상 있게 하여 <br/>내 이름으로 아버지께 무엇을 구하든지 다 받게 함이라<br/>내가 이것을 너희에게 명함은 <br/>너희로 서로 사랑하게 하려 함이라</CardText>
                            <CardText className="font-bold">요한복음 15장 16-17절</CardText>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <div id="card-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h3 className="title font-bold">2024 소망대학부 2차 총회 안내</h3>
                            <h6 className="subtitle">2024년 소망대학부를 위한 2차 총회가 10월 22일 예배 후에 진행됩니다.</h6>
                            <h6 className="subtitle">기도로 함께 준비해주세요.</h6>
                        </Col>
                        <Col md="7" className="text-center">
                            <h3 className="title font-bold">2024 소망대학부 선거관리위원회</h3>
                            <h6 className="subtitle">선거관리위원회는 선거관리위원장(17 박호정)의 위촉을 받은 7명으로 구성되어 선거 관련 업무를 담당합니다.</h6>
                            <h6 className="subtitle">선거관리위원: 17박하원, 17이가현, 17이재열, 17함신원, 18차수환, 19박은희, 19이상민</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Cards;
