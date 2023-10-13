/* eslint-disable */
import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import './style.css'; // CSS 파일 임포트

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';


const Candidate1 = () => {
    return (
        
        <div id="CANDIDATES" >

            <Col md="7" className="text-center" style={{paddingTop:70, marginBottom:30}}>
                <h1 className="title font-bold">CANDIDATES</h1>
            </Col>

            <Container className="custom-container shadow" id='can1'>
                <br></br>
                <div style={{ backgroundColor: '#E8F5E8', textAlign: 'center', paddingTop:30, paddingBottom:20, borderRadius:20}}>
                    <Col lg="4" className="text-center m-b-30">
                        {/* <h4 className="card-title">Image with circle</h4>
                        <h6 className="card-subtitle"><code>.img-circle</code> Make sure the image is square not ractangle</h6> */}
                        <img src='image/song.jpg' alt="img" className="img-circle" width="250" />
                        {/* <p className="m-t-15 m-b-0"></p> */}
                    </Col>
                    <h3 style={{ fontSize: '30px', fontFamily: 'Raleway, sans-serif', fontWeight: 400, paddingTop:5, marginBottom:15 }}>17 박호정</h3>
                    <span style={{ fontSize: '15px'}}>사회복지학</span>
                </div>

                <div style={{ padding:10, color:'#000000', fontWeight:400}}>
                    <p><span className="text-highlight">후보가 된 소감</span><br/>여러 의미에서 웃음이 나왔습니다.</p>
                    <p>
                        <b><span className="text-highlight">나의 하나님에 대해서 한 문장으로 표현하면?</span></b>
                        <br />'나의 하나님은 경계 없으신 분 이시다'<br />
                        지금까지 꽤 자주 기도해왔던 것은 나의 결핍을 채워 달라는 기도제목입니다.
                        외로움, 무의미함, 불안함을 느낄 때가 많았고, 때에 맞게 나의 필요를 채우시는 하나님을 만났습니다. <br />
                        그러나 하나님은 나를 채워 주시는 그 잠깐을 넘어서 시간과 공간을 뚫고 인간의 몸으로 이 땅에,
                        영으로 나의 마음 속에 찾아오신 하나님이셨습니다. 하나님의 능력을 적정선 까지만 인정하고 있던 제 자신을 돌아봅니다.
                        하나님께 채워짐의 경계를 정하고 구하는 것이 아닌,
                        사실은 아무런 경계가 없으시고 크고 무한하신 하나님 안에 온전히 거할 수 있기를 소망합니다.
                    </p>

                    <p>
                        <span className="text-highlight">개인적으로 의미가 있는 말씀 구절과 그 이유는?</span><br></br>
                        "먼저 그의 나라와 그의 의를 구하라 그리하면 이 모든 것을 채우시리라" (마 6:33)<br></br>
                        평소에 불안과 걱정이 많아서 다른 것보다도 나의 것을 먼저 구하는 편입니다. 하나님 앞에서 마냥 솔직한 기도를 드리는 것은 좋지만, 그보다 먼저 될 것은 하나님의 주권과 주의 말씀을 구하는 것임을 깨닫게 해준 구절입니다.
                        대학 입시를 준비하던 고등학생 시절부터, 그리고 성인이 된 지금까지도 연약한 나의 마음을 다잡아 주는 힘 있는 말씀입니다. 삶의 구석 구석을 하나님께서 다스려 주시기를 간구하고, 모든 일의 결과까지도 주님께 맡길 수 있게 해달라고 기도하게 만드는 구절이기에 더 큰 의미로 다가옵니다.
                    </p>

                    <p>
                        <span className="text-highlight">나의 비전</span><br></br>
                        지금 떠오르는 비전은
                        집착하지 않는 것,
                        눈 앞에 보이는 것을 물고 늘어지지 않는 것,
                        불안해하지 않는 것,
                        주님이 주시는 평안을 온전히 누리는 것,
                        하나님의 임재 안에 나의 삶을 담그는 것,
                        하나님을 사랑하고 나 또한 소중하게 사랑하는 것입니다.
                    </p>

                    <p>
                        <span className="text-highlight">나에게 대학부란?</span><br></br>
                        '미온수'입니다. <br></br>
                        뜨겁지도, 차갑지도 않은 미온수는 가장 적절한 온도의 물이라고 생각합니다. 대학부 공동체는 지금의 저에게 가장 편안한 온도 같습니다. 스무살이 되어 처음 대학부에 왔을 때부터 지금 이 편안함을 느끼게 되기까지는 자잘한 굴곡과 변화가 있었습니다. 이제 대학부는 내가 마시기에도 좋고, 몸 담기에도 좋은 딱 적절한 미온수가 되었습니다. 미온수의 온도가 맞춰지도록 저를 살살 어루만지며 함께해준 사람들에게 감사합니다.
                    </p>
                    
                    <p>
                        <span className="text-highlight">내가 생각하는 리더십</span><br></br>
                        사람과 일을 함께 챙길 줄 아는 것이 지혜로운 리더십이라고 생각합니다. 하나님 말씀을 반석으로 삼고 그 위에 사람과 일을 함께 세워가는 리더십이 단단한 공동체를 이룰 수 있는 것 같습니다.
                    </p>

                    <p>
                        <span className="text-highlight">대학부에 대해 품고 있는 비전</span><br></br>
                        "한 손에 복음 들고, 한 손에 사랑을 들고" 라는 찬양의 가사처럼 소망교회 대학부가 복음과 사랑을 균형 있게 가져가는 공동체가 되기를 소망합니다. 하나님이 가르쳐 주신 복음을 무기로 쓰지 않고 힘껏 사랑하는 일, 생명을 살리는 일에 흘러 보내기를 바랍니다. 그래서 대학부 안과 밖, 교회를 떠난 이들까지도 다시 돌아오게 하고 그들을 품을 줄 아는 넉넉한 공동체가 되기를 소망합니다.
                    </p>

                    <p>
                        <span className="text-highlight"></span><br></br>
                    </p>
                    <div className="social">
                        <a href="https://youtu.be/CyJy6B5E2yE?t=33">
                            <i><FontAwesomeIcon icon={faYoutube} /></i>
                        </a>
                        <a href="image/song.jpg">  
                            <i><FontAwesomeIcon icon={faImage} /></i>
                        </a>
                    </div>
                </div>
            </Container>




            <Container className="custom-container shadow" id='can2'>
                <br></br>
                <div style={{ backgroundColor: '#E8F5E8', textAlign: 'center', paddingTop:30, paddingBottom:20, borderRadius:20}}>
                    <Col lg="4" className="text-center m-b-30">
                        {/* <h4 className="card-title">Image with circle</h4>
                        <h6 className="card-subtitle"><code>.img-circle</code> Make sure the image is square not ractangle</h6> */}
                        <img src='image/song.jpg' alt="img" className="img-circle" width="250" />
                        {/* <p className="m-t-15 m-b-0"></p> */}
                    </Col>
                    <h3 style={{ fontSize: '30px', fontFamily: 'Raleway, sans-serif', fontWeight: 400, paddingTop:5, marginBottom:15 }}>17 박호정</h3>
                    <span style={{ fontSize: '15px'}}>사회복지학</span>
                </div>

                <div style={{ padding:10, color:'#000000', fontWeight:400}}>
                    <p><span className="text-highlight">후보가 된 소감</span><br/>여러 의미에서 웃음이 나왔습니다.</p>
                    <p>
                        <b><span className="text-highlight">나의 하나님에 대해서 한 문장으로 표현하면?</span></b>
                        <br />'나의 하나님은 경계 없으신 분 이시다'<br />
                        지금까지 꽤 자주 기도해왔던 것은 나의 결핍을 채워 달라는 기도제목입니다.
                        외로움, 무의미함, 불안함을 느낄 때가 많았고, 때에 맞게 나의 필요를 채우시는 하나님을 만났습니다. <br />
                        그러나 하나님은 나를 채워 주시는 그 잠깐을 넘어서 시간과 공간을 뚫고 인간의 몸으로 이 땅에,
                        영으로 나의 마음 속에 찾아오신 하나님이셨습니다. 하나님의 능력을 적정선 까지만 인정하고 있던 제 자신을 돌아봅니다.
                        하나님께 채워짐의 경계를 정하고 구하는 것이 아닌,
                        사실은 아무런 경계가 없으시고 크고 무한하신 하나님 안에 온전히 거할 수 있기를 소망합니다.
                    </p>

                    <p>
                        <span className="text-highlight">개인적으로 의미가 있는 말씀 구절과 그 이유는?</span><br></br>
                        "먼저 그의 나라와 그의 의를 구하라 그리하면 이 모든 것을 채우시리라" (마 6:33)<br></br>
                        평소에 불안과 걱정이 많아서 다른 것보다도 나의 것을 먼저 구하는 편입니다. 하나님 앞에서 마냥 솔직한 기도를 드리는 것은 좋지만, 그보다 먼저 될 것은 하나님의 주권과 주의 말씀을 구하는 것임을 깨닫게 해준 구절입니다.
                        대학 입시를 준비하던 고등학생 시절부터, 그리고 성인이 된 지금까지도 연약한 나의 마음을 다잡아 주는 힘 있는 말씀입니다. 삶의 구석 구석을 하나님께서 다스려 주시기를 간구하고, 모든 일의 결과까지도 주님께 맡길 수 있게 해달라고 기도하게 만드는 구절이기에 더 큰 의미로 다가옵니다.
                    </p>

                    <p>
                        <span className="text-highlight">나의 비전</span><br></br>
                        지금 떠오르는 비전은
                        집착하지 않는 것,
                        눈 앞에 보이는 것을 물고 늘어지지 않는 것,
                        불안해하지 않는 것,
                        주님이 주시는 평안을 온전히 누리는 것,
                        하나님의 임재 안에 나의 삶을 담그는 것,
                        하나님을 사랑하고 나 또한 소중하게 사랑하는 것입니다.
                    </p>

                    <p>
                        <span className="text-highlight">나에게 대학부란?</span><br></br>
                        '미온수'입니다. <br></br>
                        뜨겁지도, 차갑지도 않은 미온수는 가장 적절한 온도의 물이라고 생각합니다. 대학부 공동체는 지금의 저에게 가장 편안한 온도 같습니다. 스무살이 되어 처음 대학부에 왔을 때부터 지금 이 편안함을 느끼게 되기까지는 자잘한 굴곡과 변화가 있었습니다. 이제 대학부는 내가 마시기에도 좋고, 몸 담기에도 좋은 딱 적절한 미온수가 되었습니다. 미온수의 온도가 맞춰지도록 저를 살살 어루만지며 함께해준 사람들에게 감사합니다.
                    </p>
                    
                    <p>
                        <span className="text-highlight">내가 생각하는 리더십</span><br></br>
                        사람과 일을 함께 챙길 줄 아는 것이 지혜로운 리더십이라고 생각합니다. 하나님 말씀을 반석으로 삼고 그 위에 사람과 일을 함께 세워가는 리더십이 단단한 공동체를 이룰 수 있는 것 같습니다.
                    </p>

                    <p>
                        <span className="text-highlight">대학부에 대해 품고 있는 비전</span><br></br>
                        "한 손에 복음 들고, 한 손에 사랑을 들고" 라는 찬양의 가사처럼 소망교회 대학부가 복음과 사랑을 균형 있게 가져가는 공동체가 되기를 소망합니다. 하나님이 가르쳐 주신 복음을 무기로 쓰지 않고 힘껏 사랑하는 일, 생명을 살리는 일에 흘러 보내기를 바랍니다. 그래서 대학부 안과 밖, 교회를 떠난 이들까지도 다시 돌아오게 하고 그들을 품을 줄 아는 넉넉한 공동체가 되기를 소망합니다.
                    </p>

                    <p>
                        <span className="text-highlight"></span><br></br>
                    </p>
                    <div className="social">
                        <a href="https://youtu.be/CyJy6B5E2yE?t=33">
                            <i><FontAwesomeIcon icon={faYoutube} /></i>
                        </a>
                        <a href="image/song.jpg">  
                            <i><FontAwesomeIcon icon={faImage} /></i>
                        </a>
                    </div>
                </div>
            </Container>


        </div>

    );
}


export default Candidate1;
