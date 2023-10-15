/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import { Card, Button, CardTitle, CardText, Row, Col, Container ,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption} 
from 'reactstrap';
import './style.css'; // CSS 파일 임포트

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { faImage } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const items_ji = [
    {
        src: 'image/ji1.jpg',
        altText: '',
        caption: ''
    },
    {
        src: 'image/ji2.jpg',
        altText: '',
        caption: ''
    }
];

const Ji = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // 페이지 맨 위로 스크롤
      }, []);

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === 2 - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? 2 - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides_ji = items_ji.map(item => (
        <CarouselItem
            className="custom-tag"
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
        >
            <img className="img-circle" style={{ width: "250px"}} src={item.src} alt={item.altText} />
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
    ));


    return (
        
        <div id="CANDIDATES" >
            <Link to={"/#CANDIDATE"} className="close-button" >
                <FontAwesomeIcon icon={faTimes} />
            </Link>
            <Container className="custom-container shadow" id='ji'>
                <br></br>
                <div style={{ backgroundColor: '#E8F5E8', textAlign: 'center', paddingTop:30, paddingBottom:20, borderRadius:20}}>
                    <Col lg="4" className="text-center m-b-30">
                        <Carousel
                            activeIndex={activeIndex}
                            next={next.bind(null)}
                            previous={previous.bind(null)}
                        >
                            <CarouselIndicators items={items_ji} activeIndex={activeIndex} onClickHandler={goToIndex.bind(null)} />
                            {slides_ji}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous.bind(null)} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={next.bind(null)} />
                        </Carousel>
                        
                    </Col> 
                    <h3 style={{ fontSize: '30px', fontFamily: 'Raleway, sans-serif', fontWeight: 400, paddingTop:5, marginBottom:15 }}>18 지영선</h3>
                    <span style={{ fontSize: '15px'}}>문화인류학 / 경영학</span>
                </div>

                <div style={{ padding:10, color:'#000000', fontWeight:400}}>
                    <p><span className="text-highlight">후보가 된 소감</span><br/>
                    후보가 되고 가장 먼저 왜? 라는 질문을 던졌습니다. 내가 왜 후보가 되었을까? 그 답을 구하며 하나님의 이끄심과 뜻이 있음을 깨닫게 됩니다. 우리 하임 공동체가 하나님과 끊임없이 소통하고, 주님을 위한 일을 주저하지 않는 공동체, 생명이 살아 숨쉬는 믿음의 공동체로 만들고 싶습니다.

                    </p>

                    <p>
                        <b><span className="text-highlight">나의 하나님에 대해서 한 문장으로 표현하면?</span></b>
                        <br />'나의 하나님은 “나의 모든 일을 예비하시는 분” 이시다'<br />
                        2023년 여름 충북 소여교회로 국내선교를 떠났을 때, 시작부터 예상치 못하게 팀을 두 개로 나누어 사역을 진행해야 할 일이 생겼습니다. 갑작스러운 계획 변경에 당황할 팀원들이 걱정됐고, 팀장으로서 계획대로 사역을 진행하지 못해 답답한 마음이 들었습니다. <br/>
                        하지만 하나님은 이 모든 것을 계획하시고 예비하셨습니다. 우리 선교팀을 둘로 나눔으로써 오히려 더 많은 소여마을 분들과 소통하고 상호작용하며 구원과 천국, 예수님의 사랑을 전하게 하셨습니다.<br/>
                        이 외에도 돌이켜 보면 하나님의 은혜였다고 고백할 것들이 너무나도 많습니다. 앞으로 제 앞길을 예비하실 하나님의 역사를 기대하고 기다리며 나아갑니다.  

                    
                    </p>

                    <p>
                        <span className="text-highlight">개인적으로 의미가 있는 말씀 구절과 그 이유는?</span><br></br>
                        <i>요한계시록 7장 10절 "큰 소리로 외쳐 이르되 구원하심이 보좌에 앉으신 우리 하나님과 어린양에게 있도다 하니"</i><br/>
                        이 말씀은 ‘우리 보좌 앞에 모였네’ 라는 찬양을 통해 접한 말씀입니다. 
                        이 찬양은 제가 어린 시절 때부터 두렵거나 긴장한 순간, 그리고 급박함 속에 침착함을 유지해야 할 때마다 되뇌는 찬양입니다. 
                        어릴 때는 왜 이 찬양을 그렇게 부르는지, 그 이유를 생각해본 적은 없지만, 어느 순간 이 말씀의 의미를 깨달으며 이 찬양의 가사와 말씀이 내 신앙의 고백임을 알게 되었습니다. 
                        그것은 바로, 모든 일은 하나님의 섭리 하에 이루어진다는 것, 전지전능하신 하나님을 믿는 우리는 마지막 때까지 주님을 향한 믿음을 지킴으로 주님께 영광 돌리기만 하면 된다는 것입니다. 그리하면 우리 하나님께서 나의 갈길 인도하시고 나를 아픔과 눈물가운데서 건지신다는 의미입니다.
                        저는 이러한 말씀의 의미 때문에 이 찬양을 부를 때마다 제 마음이 평안해지는 것이라 생각합니다. 


                    </p>

                    <p>
                        <span className="text-highlight">나의 비전</span><br></br>
                        어떠한 일을 하든지 그 본질적인 목적은 하나님의 영광을 나타내는 것이어야 한다고 생각합니다. 
                        단기적으로는 대학원 진학, 장기적으로는 기업의 가치를 극대화하는 의사결정자가 되는 것을 목표로 달려가고 있습니다. 이 목표를 이루는 과정 가운데 하나님의 나라를 확장하고, 또 주님의 이름을 전하는 일에 쓰임 받는 제가 되길 소망합니다. 

                    </p>

                    <p>
                        <span className="text-highlight">나에게 대학부란?</span><br></br>
                        나에게 대학부는 “한 여름 밤의 꿈” 이다.<br></br>
                        대학교 신입생 시절, 대학부는 낯설고 두려운 곳이었습니다. 고등학교 2학년 때부터 소망교회에 다녔던 지라 아는 사람도, 친한 사람도 별로 없던 대학부는 선뜻 발길이 향하지 않던 곳이었습니다. 그렇게 4년, 대학부를 소홀히 하던 저를 하나님이 대학부에 부르셨습니다. 하나님의 일을 할 때 저를 사용하셨고, 대학부와 대학부원들의 사랑과 그 포근함을 느끼게 하셨습니다. 이 감정과 감사함을 왜 진작알아 차리지 못했을까, 늘 당연하게 남아있을 것 같았던 대학부의 마지막 1년을 앞둔 지금, 대학부의 소중함을 다시 한번 깨닫게 됩니다. 마치 “한 여름 밤의 꿈”과 같이요.


                    </p>
                    
                    <p>
                        <span className="text-highlight">내가 생각하는 리더십</span><br></br>
                        대학에서 학과 부회장직을 맡을 때에도, 소망교회 워십퍼스 팀장직을 감당하는 지금도, 공통적으로 드는 리더의 가장 중요한 덕목은 “사람을 잘 관리하는 것”입니다. 경영학원론 첫 장에서 기업의 경영자는 직원이 기업의 목적과 방향에 같이하도록 하고 이를 통해 계획한 목표를 달성해 나가야 한다고 말합니다 
                        이처럼 소망교회 하임 공동체에도 역시 대학부원이 같은 곳을 지향하고 함께 나아가도록 동기부여하고, 하나로 만드는 역량을 가진 리더가 세워지길 바랍니다.

                    </p>

                    <p>
                        <span className="text-highlight">대학부에 대해 품고 있는 비전</span><br></br>
                        Sola Fide(오직 믿음)<br/>
                        일반적인 영리기업의 목표는 “기업의 이윤 추구활동을 통해 기업가치와 주주의 부를 극대화하는 것” 이라고 설명할 수 있습니다. 이와 반대로 교회와 같은 비영리 단체는 “주주를 위해서 자본의 이익을 추구하지 않는 대신에 그 자본으로 어떠한 목적을 달성하는 단체”를 뜻합니다.
                        소망대학부가 달성하고자 하는 이 “어떠한 목적”은 우리 대학부원들의 “믿음”이 되길 소망합니다. 
                        2023년 여름 국내 선교기간 동안 어르신들께 천국에 대한 연극을 하면서 저희가 전달한 메시지는, 돈, 명예, 학위 그 어떤 것도 아닌 오직 예수그리스도를 향한 믿음 하나만이 우리를 천국으로 인도한다는 것입니다. 이 기본적이고도 당연한 말처럼 느껴지는 “믿음”은 종종 잊은 채, 다른 것을 좇아, 본질 외에 것에 집중하지 않았나 하는 반성을 하게 됩니다. 
                        소망대학부 하임 공동체가 2024년, 그리고 앞으로도 Sola Fide, 주님을 향한 강한 믿음으로 본질을 지키며 나아가는 것을 목적을 달성하는 곳이 되길 소망합니다.

                    </p>

                    <p>
                        <span className="text-highlight"></span><br></br>
                    </p>
                    <div className="social">
                        <a href="https://youtu.be/oNHtXMgSXU0?t=5m16s">
                            <i><FontAwesomeIcon icon={faYoutube} /></i>
                        </a>
                    </div>
                </div>
            </Container>


        </div>

    );
}


export default Ji;
