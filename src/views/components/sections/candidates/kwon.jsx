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

const items_kwon = [
    {
        src: 'image/kwon1.jpeg',
        altText: '',
        caption: ''
    },
    {
        src: 'image/kwon2.jpeg',
        altText: '',
        caption: ''
    }
];

const Kwon = () => {
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

    const slides_kwon = items_kwon.map(item => (
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

            <Container className="custom-container shadow" id='kwon'>
                <br></br>
                <div style={{ backgroundColor: '#E8F5E8', textAlign: 'center', paddingTop:30, paddingBottom:20, borderRadius:20}}>
                    <Col lg="4" className="text-center m-b-30">
                        <Carousel
                            activeIndex={activeIndex}
                            next={next.bind(null)}
                            previous={previous.bind(null)}
                        >
                            <CarouselIndicators items={items_kwon} activeIndex={activeIndex} onClickHandler={goToIndex.bind(null)} />
                            {slides_kwon}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous.bind(null)} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={next.bind(null)} />
                        </Carousel>
                        
                    </Col>
                    <h3 style={{ fontSize: '30px', fontFamily: 'Raleway, sans-serif', fontWeight: 400, paddingTop:5, marginBottom:15 }}>19 권은서</h3>
                    <span style={{ fontSize: '15px'}}>건축학</span>
                </div>

                <div style={{ padding:10, color:'#000000', fontWeight:400}}>
                    <p><span className="text-highlight">후보가 된 소감</span><br/>
                        후보가 되어 대학부의 비전과 방향성에 대해 한번 더 고민할 수 있었기에, 감사했습니다. 또한, 새롭게 선출될 회장과 부회장이 하나님의 뜻에 합한자가 되게 해달라고 기도했기에 뜻하신 자들이 세워질 것이라는 생각에서 오는 평안함이 있습니다.
                    </p>

                    <p>
                        <b><span className="text-highlight">나의 하나님에 대해서 한 문장으로 표현하면?</span></b>
                        <br />‘나의 하나님은 나의 왕이시다.’<br />
                        21살 겨울, 사랑하는 가족이 아프면서 하나님 외에는 붙잡을 수 있는 분이 없었습니다. 기도하다가 죽어도 좋겠다는 생각이 들만큼 간절하게 하나님을 부르짖으며 기도했습니다. 잠언 8장 17절, 나를 사랑하는 자들이 나의 사랑을 입으며 나를 간절히 찾는 자가 나를 만날 것이니라는 말씀처럼 하나님은 저를 인격적으로 만나 주셨습니다. 저의 기도를 바꾸기 시작하셨고, 어느순간 제게서 모든 것들이 다 사라진다고 해도 오직 하나님만 있으면 괜찮다고 고백하기 시작하였습니다. 상황이 아무리 좋지 않더라도 설명할 수 없는 평안으로 제 마음을 가득 채워주셨고, 제가 외로울 때 가장 좋은 친구가, 마음이 낙심될 때 가장 좋은 위로가 되어주셨습니다. 그 이후 저의 삶속에서 하나님은 매순간 함께 동행해주셨고, 하나님의 살아계심을 부정할 수 없습니다. 이사야 43장 21절 말씀, 이 백성은 내가 나를 위하여 지었나니 나를 찬송하게 하려 함이니라는 말씀을 완전히 믿기에, 찬송 받기 합당하신 하나님은 나의 왕이십니다.

                    </p>

                    <p>
                        <span className="text-highlight">개인적으로 의미가 있는 말씀 구절과 그 이유는?</span><br></br>
                        <i>“너는 여호와를 기다릴지어다 강하고 담대하며 여호와를 기다릴지어다" (시편 27편 14절)</i><br/>
                        아무리 기도해도 응답이 없었던 문제를 두고 말씀을 읽던 중 시편 27편 14절 말씀을 보게 되었습니다. 말씀을 보자마자 조급했던 마음은 사라지고 평안과 소망으로 채워졌습니다. 기다리라는 말은 반드시 올 무언가가 있다는 뜻이고, 기다리는 대상이 전능하신 하나님이라는 사실이 다시 인내할 수 있는 힘을 주었습니다. 이 말씀을 받고 난 후, 속히 응답이 되지 않는 문제 앞에서는 항상 이 말씀을 떠올립니다. 특히 강하고 담대하라는 말이 힘을 줍니다. 초조해하고 두려워하며 하나님을 기다리는 것이 아닌 강하고 담대한 마음으로 반드시 오실 약속의 하나님을 기다릴 수 있다는 것이 큰 위로와 소망으로 다가옵니다.

                    </p>

                    <p>
                        <span className="text-highlight">나의 비전</span><br></br>
                        제게 주신 전공분야를 어떻게 살리는 것이 좋을까 지금도 고민하고 있습니다. 여러 관심 분야 중 난민들을 위해서 효율적인 모듈을 개발하는 분야인 재난 건축과 좋은 도시를 만드는 방법에 관해 공부하고자 도시건축대학원에 진학하였습니다, 마음속에 있는 저의 또 다른 꿈은 선교사입니다. 교회가 없는 곳들에 가서 교회를 지어주고, 건축적 재능을 필요로 하는 곳에 가서 복음을 전하고 건물을 지어주는 사람이 되고 싶습니다. 이전에는 뭘 해야할까 고민하고 미래에 대해 걱정했다면, 이제는 하나님께서 어디로 가라고 하시든 순종하겠다고 말할 수 있습니다. 대학원 진학도 기도로 결정했듯이, 앞으로의 모든 과정도 기도로 결정하고 싶습니다.

                        
                    </p>

                    <p>
                        <span className="text-highlight">나에게 대학부란?</span><br></br>
                        교회는 건물이 아닌, 예수님을 따르는 사람들의 공동체임을 알려준 곳입니다.<br></br>
                        건축학과로써 좋은 교회란 무엇인가에 대해 많이 고민하였습니다. 건물 장식이 아름다워야 할까, 아니면 높은 층고와 다양한 방이 있는 교회가 좋은 교회일까 많이 고민하였지만, 대학부에서의 시간을 지나며 진정한 교회란 건물이 아닌, 예수님을 따르는 사람들의 공동체임을 깨달았습니다. 마태복음 18장 20절 말씀에서 두 세 사람이 내 이름으로 모인 곳에는 나도 그들 중에 있다고 말씀하십니다. 예수님을 사랑하는 사람들이 함께 모여 예배하는 곳이면 그 어디든 좋은 교회라는 생각을 하게 되었습니다. 필리핀 선교에 갔을 때, 달리는 트럭 안에서 다 함께 찬양을 했던 순간이 있습니다. 좁고 열악한 공간이었지만, 모두 한마음으로 살아계신 하나님을 찬양하는 그 곳이 천국처럼 느껴졌습니다. 대학부에서 만난 친구들을 통해 살아계신 하나님을 경험하며, 예수님을 따르는 사람들의 공동체가 교회임을 깨달았습니다.

                    </p>
                    
                    <p>
                        <span className="text-highlight">내가 생각하는 리더십</span><br></br>
                        제가 생각하는 리더십은 리더의 자리를 하나님께 완전히 내어드리는 것입니다. 약할 때 강함되시는 하나님이 역사하실 수 있도록 나의 연약함을 철저히 인정하고 모든 공동체를 하나님께서 이끌어달라고 기도하는 것이 진정한 리더십이라고 생각합니다. 양승아 목사님과 필리핀 선교를 갔을 때, 저희 팀에 다가온 어려움 앞에 새벽부터 기도하시던 목사님의 모습을 보았습니다. 시편 147편 10-11절 말씀을 보면 여호와는 말의 힘이 세다 하여 기뻐하지 아니하시며 사람의 다리가 억세다 하여 기뻐하지 아니하시고 자기를 경외하는 자들과 그의 인자하심을 바라는 자들을 기뻐하신다고 합니다. 공동체에 필요한 진정한 리더란 힘이 센 사람도, 말을 잘하는 사람도 아닌, 하나님을 진정으로 경외하며 최고의 리더 되시는 하나님께서 역사하실 수 있도록 기도하는 사람인 것 같습니다.
                    </p>

                    <p>
                        <span className="text-highlight">대학부에 대해 품고 있는 비전</span><br></br>
                        저는 대학부가 고여있는 공동체가 아닌, 흘러가는 공동체가 되어야 한다고 생각합니다. 새로운 친구가 왔을 때 진정으로 환영해주며 한 공동체의 일원으로 느껴지도록 도와주는 것이 중요하다고 생각합니다. 나를 사랑해주는 사람들만 사랑하는 것이 아닌 새로운 친구들을 따뜻하게 맞아주고 환영해주는, 흘러가는 공동체를 위해 함께 노력하고 기도하겠습니다.
                    </p>

                    <p>
                        <span className="text-highlight"></span><br></br>
                    </p>
                    <div className="social">
                        <a href="https://youtu.be/oNHtXMgSXU0?t=10m13s">
                            <i><FontAwesomeIcon icon={faYoutube} /></i>
                        </a>
                    </div>
                </div>
            </Container>

        </div>

    );
}


export default Kwon;
