import React from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';



const PageTable = () => {
    return (
        <div id="CANDIDATE">
            <div className="spacer" id="table-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">CANDIDATES</h1>
                            <h6 className="subtitle">7인의 후보는 학번과 이름 순으로 정렬하였습니다.</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col md="12">
                        <div className="table-responsive">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>학번</th>
                                        <th>이름</th>
                                        <th>프로필</th>
                                        <th>연설</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>18</td>
                                        <td>김정민</td>
                                        <td>
                                            <Link to="/Kim" className="label label-info">
                                                보러가기
                                            </Link>
                                        </td>
                                        <td>
                                        <a className="label label-red" href="https://youtu.be/oNHtXMgSXU0?t=28s">
                                            <i><FontAwesomeIcon icon={faYoutube} /></i>
                                        </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>18</td>
                                        <td>이해윤</td>
                                        <td>
                                            <Link to="/Lee" className="label label-info">
                                                보러가기
                                            </Link>
                                        </td>
                                        <td>
                                            <a className="label label-red" href="https://youtu.be/oNHtXMgSXU0?t=2m32s">
                                                <i><FontAwesomeIcon icon={faYoutube} /></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>18</td>
                                        <td>지영선</td>
                                        <td>
                                            <Link to="/Ji" className="label label-info">
                                                보러가기
                                            </Link>
                                        </td>
                                        <td>
                                            <a className="label label-red" href="https://youtu.be/oNHtXMgSXU0?t=5m16s">
                                                <i><FontAwesomeIcon icon={faYoutube} /></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>18</td>
                                        <td>한승재</td>
                                        <td>
                                            <Link to="/Han" className="label label-info">
                                                보러가기
                                            </Link>
                                        </td>
                                        <td>
                                            <a className="label label-red" href="https://youtu.be/oNHtXMgSXU0?t=7m42s">
                                                <i><FontAwesomeIcon icon={faYoutube} /></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>19</td>
                                        <td>권은서</td>
                                        <td>
                                            <Link to="/Kwon" className="label label-info">
                                                보러가기
                                            </Link>
                                        </td>
                                        <td>
                                            <a className="label label-red" href="https://youtu.be/oNHtXMgSXU0?t=10m13s">
                                                <i><FontAwesomeIcon icon={faYoutube} /></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>19</td>
                                        <td>반유빈</td>
                                        <td>
                                            <Link to="/Ban" className="label label-info">
                                                보러가기
                                            </Link>
                                        </td>
                                        <td>
                                            <a className="label label-red" href="https://youtu.be/oNHtXMgSXU0?t=12m46s">
                                                <i><FontAwesomeIcon icon={faYoutube} /></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>20</td>
                                        <td>장종신</td>
                                        <td>
                                            <Link to="/Jang" className="label label-info">
                                                보러가기
                                            </Link>
                                        </td>
                                        <td>
                                            <a className="label label-red" href="https://youtu.be/oNHtXMgSXU0?t=15m31s">
                                                <i><FontAwesomeIcon icon={faYoutube} /></i>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PageTable;
