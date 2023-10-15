/* eslint-disable */
import React, { useState,useEffect } from 'react';
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


const items_han = [
    {
        src: 'image/han1.jpg',
        altText: '',
        caption: ''
    },
    {
        src: 'image/han2.jpg',
        altText: '',
        caption: ''
    }
];


const Han = () => {
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

    const slides_han = items_han.map(item => (
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

            <Container className="custom-container shadow" id='han'>
                <br></br>
                <div style={{ backgroundColor: '#E8F5E8', textAlign: 'center', paddingTop:30, paddingBottom:20, borderRadius:20}}>
                    <Col lg="4" className="text-center m-b-30">
                        <Carousel
                            activeIndex={activeIndex}
                            next={next.bind(null)}
                            previous={previous.bind(null)}
                        >
                            <CarouselIndicators items={items_han} activeIndex={activeIndex} onClickHandler={goToIndex.bind(null)} />
                            {slides_han}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous.bind(null)} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={next.bind(null)} />
                        </Carousel>
                        
                    </Col> 
                    <h3 style={{ fontSize: '30px', fontFamily: 'Raleway, sans-serif', fontWeight: 400, paddingTop:5, marginBottom:15 }}>18 한승재</h3>
                    <span style={{ fontSize: '15px'}}>신학과</span>
                </div>

                <div style={{ padding:10, color:'#000000', fontWeight:400}}>
                    <p><span className="text-highlight">후보가 된 소감</span><br/>
                        대학부를 열심히 섬기는 신실하고 귀한 인재들이 많기에 제가 후보가 되었다는 연락을 받았을 때 많이 놀랐습니다. 또 한편으로는 저를 좋게 봐주시는 분들이 많이 있다는 사실에 감사한 마음이 들었습니다. 후보가 되었다는 연락은 지금까지 잘 해왔고, 앞으로의 삶에 있어서 더 열심히 신앙생활을 하라는 주님의 뜻으로 다가왔습니다. 귀한 후보의 자리에 오른 만큼 대학부를 위해 더욱 열심히 기도하고 헌신하겠습니다.

                    </p>

                    <p>
                        <b><span className="text-highlight">나의 하나님에 대해서 한 문장으로 표현하면?</span></b>
                        <br />‘나의 하나님은 수호자입니다’<br />                    
                        그 이유는 제가 하나님을 잊거나 하나님과의 관계가 멀어져도 항상 나의 곁에 계시며 나를 지켜 주신다는 것을 확신하기 때문입니다. 그 당시에는 몰랐지만 돌이켜보면 하나님이 나의 기도를 응답해 주셨고 나를 지켜주셨던 은혜의 순간들이 많았습니다. 그리고 저는 특히 일상에서 매 순간 주님이 저를 지켜주신다고 느끼고 있습니다. 그 이유는 제가 선천적으로 심장병을 앓고 있기 때문입니다. 어렸을 때 심장병으로 고생을 좀 했습니다. 중학생 때는 심장이 너무 아파 입원해서 수련회에 참석하지 못한 적도 있었으며 고등학생 때까지 부정맥 때문에 불편함을 겪었습니다. 하지만 성인이 된 이후에는 신기하게 부정맥이 다시 발병한 적이 없었으며 많은 사람의 우려 속에서 무사히 군대도 다녀왔습니다. 학창 시절에 부정맥으로 고생했을 때 수술을 계속해야 한다고 의사 선생님들이 권했지만 개인적인 이유로 수술을 미루며 살아왔는데 수술을 아직 안 했음에도 크게 신경을 안 써도 될 만큼 지금은 상태가 좋습니다. 
                        저는 힘든 상황 속이나 사건이 터져도 주님이 최악의 상황으로부터는 보호해 주실거라는 믿음을 가지며 삽니다. 그리고 요즘은 다행이도 큰 사고나 힘든 일 없이 잘 지내고 있습니다. 그래서 평범하게 일상을 살아갈 수 있는 것에 가장 감사함을 느끼게 되는 것 같습니다. 하루를 살아가고 아침에 눈을 뜨고 밤에 편히 잘 수 있는 것 또한 당연한 것이 아니라 주님의 은혜라고 생각합니다. 이 모든 것이 가능한 이유는 언제나 저를 사랑하고 지금 이 순간에도 제 곁에서 저를 지켜주시는 주님이 살아 계신 하나님이기 때문입니다. 
                    
                    </p>

                    <p>
                        <span className="text-highlight">개인적으로 의미가 있는 말씀 구절과 그 이유는?</span><br></br>
                        <i>"대답하여 이르되 네 마음을 다하며 목숨을 다하며 힘을 다하며 뜻을 다하여 주 너의 하나님을 사랑하고 또한 네 이웃을 네 자신 같이 사랑하라 하였나이다" (눅 10:27)</i><br/>
                        저는 이 말씀을 그리스도인이 살아가야 하는 가이드라인이라고 느꼈습니다. 그렇기에 처음 마음에 자리 잡았던 고등학교 2학년 말부터 지금까지 저의 방향을 이끌어 주는 말씀으로 생각하며 살아가고 있습니다. <br/>
                        이 말씀을 통해 배운 것은 하나님 사랑을 하기 위해서는 이웃 사랑을 할 줄 알아야 하고 이웃 사랑을 하기위해선 자신을 사랑할 줄 알아야 한다는 것입니다. 저는 하나님 사랑과 이웃 사랑은 하고 있었지만, 제 자신을 사랑하지 못했습니다. 부족한 부분만 보이며 남들과 비교하기 바빴습니다. 하지만 주님은 저를 조건 없이 사랑하신다는 것을 믿으며 진정한 사랑은 본인을 사랑하는 것부터 이루어진다는 것을 깨닫는 순간 오히려 저의 부족한 부분들을 통해 하나님을 만나고, 하나님이 내 곁에 함께하시고 저를 도와주고 있다는 것을 체험했습니다. 그리고 하나님이 함께하는 것을 느끼기에 내게 능력 주시는 자 안에서 내가 무엇이든 할 수 있다고 자신감을 얻었습니다. 하나님의 조건 없는 무한한 사랑을 알게 되면서 자존감이 높아지고, 자존감이 높아지면서 더 전심으로 남을 섬길 수 있게 되었습니다. 그리고 하나님을 더 크게 사랑할 수 있게 되었습니다.

                    </p>

                    <p>
                        <span className="text-highlight">나의 비전</span><br></br>
                        저의 비전은 선교에 있다고 생각합니다. <br/>
                        저는 중학생 때부터 지금까지 6번의 해외선교를 다녀왔습니다. 나라는 달랐지만, 공통된 점이 있었다면 선교지를 가면 항상 미완성된 건물이 있다는 것입니다. 하나님의 이끄심을 따라 메마른 땅에 복음의 씨앗을 심고 키우시기 위해 타지로 떠나신 선교사님들의 모습은 너무나도 멋지고 큰 은혜와 감동을 줍니다. 하지만 선교사님들이 부족한 자원으로 힘들게 하루하루를 전도하며 살아가는 환경은 저에게 큰 아픔으로 다가왔습니다. 부족해도 웃으며 긍정적으로 사역을 하시지만 그래도 저는 선교사님들이 조금은 풍족한 상태에서 선교할 수 있길 바랬습니다. 그래서 저는 파송 보낸 자로서 전 세계에 계신 선교사님들이 물질적으로 도움을 줄 수 있는 사람이 되길 원합니다. 그래서 저의 비전은 선교사님들을 도울 수 있게 선교지에 물질적인 도움을 보내는 것입니다. 저는 마음이 맞는 사람들을 모아 전 세계에 계신 선교사님들을 도울 수 있는 후원 프로그램을 만들어 선교사님들에게 도움의 손길을 내어드릴 수 있길 소망합니다. 그래서 미완공된 건물들이 완공되어 전도의 시설, 교육의 시설이 자리 잡고, 그 땅의 의식주가 해결될 수 있게 도와주며 그 땅에 복음의 씨앗이 심어지고 무럭무럭 자랄 수 있게 서포트를 하고 싶습니다.
   
                    </p>

                    <p>
                        <span className="text-highlight">나에게 대학부란?</span><br></br>
                        나에게 대학부는 광야이자 작은 천국입니다.<br></br>
                        광야는 주님을 만나고 믿음의 성장이 이루어지는 곳입니다. 대학부는 저를 가장 많이 성장시켜 준 곳입니다. 많은 힘듦과 아픔이 있었지만, 그것을 이겨낼 힘과 손길을 허락해 주셨고 저의 청년의 때에 믿음이 올바르고 단단해지게 만든 곳입니다. 저는 이곳에서 진정으로 중요한 것은 예수 그리스도라는 것을 깨달았습니다. 그러면서 세상의 물질적인 것, 눈에 보이는 것이 중요한 것이 아닌 믿음과 말씀에 집중할 수 있게 저를 인도해 준 곳입니다. <br/>
                        작은 천국이라고 생각하는 이유는 믿음의 지체들이 다 같이 함께 찬양하고 예배하며 뛰놀며 주님 안에서 기뻐할 수 있는 공간이자 공동체이기 때문입니다. 저는 대학부를 다니며 라온 미디어, 미소스쿨을 섬기고 많은 수련회와 국내, 해외 선교를 다녀왔습니다. 많은 일들이 있었고 그 과정이 순탄했던 것은 아니지만 이곳에 있었던 모든 일들이 너무나도 소중하고 행복한 추억들입니다. 그 모든 과정은 저에게 기쁨이며, 보람이며, 은혜입니다. 아픔과 힘듦이 있어도 대학부는 함께 그것을 이겨낼 믿음의 지체들이 있는 곳입니다. 다 같이 주님을 바라보고 함께 웃고 울 수 있는 공동체가 있다는 것은 축복입니다. 좋은 사람들이 있는 이 공동체와 함께했던 순간들이 천국에서도 크게 다를 것 같지 않기에 이 소중하고 아름다운 대학부를 작은 천국으로 생각합니다.<br/>
                        
                    </p>
                    
                    <p>
                        <span className="text-highlight">내가 생각하는 리더십</span><br></br>
                        제가 생각하는 리더십이란 하나님이 주신 거룩한 부담감을 가지고 자신을 낮추고 남들보다 더 뛰는 것입니다. 저는 리더의 자리는 하나님께서 허락하시는 귀한 섬김의 자리라고 생각합니다. 그렇기에 더욱 책임감을 가지고 헌신해야 한다고 생각합니다.

                    </p>

                    <p>
                        <span className="text-highlight">대학부에 대해 품고 있는 비전</span><br></br>
                        저에게 대학부는 주님이 주신 소중한 공동체입니다. 힘든 순간들도 있었지만, 이곳에 있는 믿음의 동역자들이 함께했기에 이겨낼 수 있었고 연약했던 제가 성장할 수 있도록 도와준 곳입니다. 저에게 대학부가 없었으면 주님을 온전히 믿지 못하며 소망 없는 삶을 살았을 거 같습니다. 그래서 저는 지금까지 대학부에게 받은 많은 은혜를 돌려드리고 싶습니다. <br/>
                        저는 대학부에서 라온 미디어로 섬기며 여러분들을 한걸음 뒤에서 바라보았습니다. 그동안 여러분들의 아름다운 모습을 카메라를 통해 바라보고 섬겼습니다. 하지만 이젠 조금 깊숙하게 들어가서 제 눈으로 여러분 한분 한분을 바라보며 섬기겠습니다. <br/>
                        저는 대학부 인원들이 제가 대학부에서 그랬던 것처럼 주님을 만나고 주님과 가까워질 수 있으면 좋겠습니다. 그러기 위해 저는 대학부가 오면 편하고 즐겁고 은혜 받을 수 있는 열린 안식처가 될 수 있게끔 최선을 다해 뛰며 여러분들을 위해 기도하겠습니다. 대학부원들에게 다가가 소통하며 함께 웃고 울 수 있는 대학부를 만들기 위해 노력하겠습니다.

                    </p>

                    <p>
                        <span className="text-highlight"></span><br></br>
                    </p>
                    <div className="social">
                        <a href="https://youtu.be/oNHtXMgSXU0?t=7m42s">
                            <i><FontAwesomeIcon icon={faYoutube} /></i>
                        </a>
                    </div>
                </div>
            </Container>


        </div>

    );
}


export default Han;
