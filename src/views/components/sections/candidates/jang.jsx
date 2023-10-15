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


const items_jang = [
    {
        src: 'image/jang1.jpeg',
        altText: '',
        caption: ''
    },
    {
        src: 'image/jang2.jpeg',
        altText: '',
        caption: ''
    }
];

const Jang = () => {
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


    const slides_jang = items_jang.map(item => (
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
        
        <div id="JANG" >
            <Link to={"/#CANDIDATE"} className="close-button" >
                <FontAwesomeIcon icon={faTimes} />
            </Link>


            <Container className="custom-container shadow" id='jang'>
                <br></br>
                <div style={{ backgroundColor: '#E8F5E8', textAlign: 'center', paddingTop:30, paddingBottom:20, borderRadius:20}}>
                    <Col lg="4" className="text-center m-b-30">
                        <Carousel
                            activeIndex={activeIndex}
                            next={next.bind(null)}
                            previous={previous.bind(null)}
                        >
                            <CarouselIndicators items={items_jang} activeIndex={activeIndex} onClickHandler={goToIndex.bind(null)} />
                            {slides_jang}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous.bind(null)} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={next.bind(null)} />
                        </Carousel>
                        
                    </Col> 
                    <h3 style={{ fontSize: '30px', fontFamily: 'Raleway, sans-serif', fontWeight: 400, paddingTop:5, marginBottom:15 }}>20 장종신</h3>
                    <span style={{ fontSize: '15px'}}>기독교교육</span>
                </div>

                <div style={{ padding:10, color:'#000000', fontWeight:400}}>
                    <p><span className="text-highlight">후보가 된 소감</span><br/>
                        20학번인 저였기에 전혀 예상하지 못했습니다. 그래서 포기할까도 고민했습니다. 하지만 그 모든 생각은 주님보다 앞서는 생각들이었습니다. 내가 앞서던 모든 생각들을 내려놓고 하나님 손에 맡기기로 했습니다. 어떤 방식으로든 일하실 하나님을 찬양합니다. 믿고 뽑아주신 모든 분께도 감사를 드립니다. 타의 모범이 되도록 노력하겠습니다.

                    </p>

                    <p>
                        <b><span className="text-highlight">나의 하나님에 대해서 한 문장으로 표현하면?</span></b>
                        <br />‘나의 하나님은 크신 분 이시다’<br />
                        나의 작음을 인정하고 하나님의 크심을 인정할 때 찾아오는 자유와 평안, 그리고 든든함이 나를 나 되게 만듭니다. 
                    
                    </p>

                    <p>
                        <span className="text-highlight">개인적으로 의미가 있는 말씀 구절과 그 이유는?</span><br></br>
                        <i>“사람이 마음으로 자기의 길을 계획할지라도 그의 걸음을 인도하시는 이는 여호와시니라" (잠16:9)</i> <br/>
                        저에게 말씀하시는 것 같은 말씀들이 자주 바뀌기는 하지만 지금은 위의 말씀이 떠오릅니다. 저의 만족과 유익을 위해 계산을 하며 따질 때마다 항상 하나님은 저의 길을 틀어 하나님을 보게 하셨습니다. 그 과정은 항상 하나님께 삐치고 따지는 것의 반복이었지만 결국엔 저를 사랑하시는 하나님을 보게되는 과정들이었습니다. 저는 당장 한치 앞도 보지 못하지만 하나님께서 인도하실 것이라는 확신과 그 하나님은 사랑이시라는 믿음이 있기 때문에 한발을 내딛습니다.  
                    </p>

                    <p>
                        <span className="text-highlight">나의 비전</span><br></br>
                        “삶의 작은 일에도 그 맘을 알기 원하네<br/>
                        그길 그 좁은 길로 가기 원해<br/>
                        나의 작음을 알고 그 분의 크심을 알며<br/>
                        소망 그 깊은 길로 가기 원하네<br/>
                        저 높이 솟은 산이 되기보다 여기 오름직한 동산이 되길<br/>
                        내 가는 길만 비추기보다는 누군가의 길을 비춰준다면<br/>
                        내가 노래하듯이 또 내가 얘기하듯이 살길 난 그렇게 죽기 원하네<br/>
                        삶의 한절이라도 그 분을 닮기 원하네<br/>
                        사랑 그 높은 길로 가기 원하네”<br/>
                        &lt;소원&gt; 한웅재<br/><br/>
                        높은 산이 되기보다는 오름직한 동산이 되며 내가 가는 길만 비추기보다는 누군가의 길도 비춰줄 수 있는 삶을 살 때에 하나님의 나라가 확장되지 않을까 항상 생각합니다. 그리고 하나님 나라의 확장을 위한 도구로 사역의 길을 생각하고 있습니다.
                        
                    </p>

                    <p>
                        <span className="text-highlight">나에게 대학부란?</span><br></br>
                        ‘ 나에게 대학부란 언제나 돌아오고 싶을 고향이다.’<br></br>
                        저는 언젠간 소망대학부를 떠나게 될 사람임을 생각해볼 때 20대 초반에 뜨거운 신앙으로 함께 신앙생활을 했던 공동체에 대해 생각하면 벌써부터 애틋한 마음이 들지 않을 수가 없습니다. 그 삶을 함께해준 대학부원 분들께 감사를 드립니다. 앞으로 있는 동안 어떤 형태로든 대학부와 대학부원을 섬기고 싶은 생각이 큽니다.

                    </p>
                    
                    <p>
                        <span className="text-highlight">내가 생각하는 리더십</span><br></br>
                        지난 여름수련회 때 주강사로 오셨던 김영석 목사님의 말씀이 떠오릅니다. 하나님은 아담과 하와를, 또 가인과 아벨을 보내실 때 서로를 지키는 존재로 보내셨다고 말씀하시면서, 사랑은 서로를 지켜주는 것이라고 말씀하셨습니다. 리더는 하나님의 전신갑주를 취하여 무엇이 옳고 그른지 분별하고 공동체원들을 지킬 수 있어야한다고 생각합니다.
                    </p>

                    <p>
                        <span className="text-highlight">대학부에 대해 품고 있는 비전</span><br></br>
                        대학부원 모두가 하나님을 알고 하나님을 찬양하고 예수님을 닮아 서로 사랑하며 각자의 자리에서 하나님의 영광을 드러내는 삶을 살아가는 모두가 되기를 소망합니다. 대학부원들로부터 세상 사람들이 예수님을 알게 되기를 소망합니다. <br/>
                    
                        (요13:34-35)<br/>
                        34 새 계명을 너희에게 주노니 서로 사랑하라 내가 너희를 사랑한 것 같이 너희도 서로 사랑하라<br/>
                        35 너희가 서로 사랑하면 이로써 모든 사람이 너희가 내 제자인 줄 알리라

                    </p>

                    <p>
                        <span className="text-highlight"></span><br></br>
                    </p>
                    <div className="social">
                        <a href="https://youtu.be/oNHtXMgSXU0?t=15m31s">
                            <i><FontAwesomeIcon icon={faYoutube} /></i>
                        </a>
                    </div>
                </div>
            </Container>


        </div>

    );
}


export default Jang;
