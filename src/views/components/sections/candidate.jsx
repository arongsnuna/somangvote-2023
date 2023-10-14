/* eslint-disable */
import React, { useState } from 'react';

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
import { faImage } from '@fortawesome/free-regular-svg-icons';

const items = [
    {
        src: 'image/kim1.jpeg',
        altText: '',
        caption: ''
    },
    {
        src: 'image/kim2.jpeg',
        altText: '',
        caption: ''
    }
];

const items_kim = [
    {
        src: 'image/kim1.jpeg',
        altText: '',
        caption: ''
    },
    {
        src: 'image/kim2.jpeg',
        altText: '',
        caption: ''
    }
];

const items_lee = [
    {
        src: 'image/lee1.jpg',
        altText: '',
        caption: ''
    },
    {
        src: 'image/lee2.jpg',
        altText: '',
        caption: ''
    }
];

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

const items_ban = [
    {
        src: 'image/ban1.jpg',
        altText: '',
        caption: ''
    },
    {
        src: 'image/ban2.jpg',
        altText: '',
        caption: ''
    }
];

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

const Candidate1 = () => {
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

    const slides = items.map(item => (
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

    const slides_kim = items_kim.map(item => (
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

    const slides_lee = items_lee.map(item => (
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

    const slides_ban = items_ban.map(item => (
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
        
        <div id="CANDIDATES" >

            <Col md="7" className="text-center" style={{paddingTop:70, marginBottom:30}}>
                <h1 className="title font-bold">CANDIDATES</h1>
            </Col>

            <Container className="custom-container shadow" id='kim'>
                <br></br>
                <div style={{ backgroundColor: '#E8F5E8', textAlign: 'center', paddingTop:30, paddingBottom:20, borderRadius:20}}>
                    <Col lg="4" className="text-center m-b-30">
                        <Carousel
                            activeIndex={activeIndex}
                            next={next.bind(null)}
                            previous={previous.bind(null)}
                        >
                            <CarouselIndicators items={items_kim} activeIndex={activeIndex} onClickHandler={goToIndex.bind(null)} />
                            {slides_kim}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous.bind(null)} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={next.bind(null)} />
                        </Carousel>
                        
                    </Col> 
                    <h3 style={{ fontSize: '30px', fontFamily: 'Raleway, sans-serif', fontWeight: 400, paddingTop:5, marginBottom:15 }}>18 김정민</h3>
                    <span style={{ fontSize: '15px'}}>식품공학과</span>
                </div>

                <div style={{ padding:10, color:'#000000', fontWeight:400}}>
                    <p><span className="text-highlight">후보가 된 소감</span><br/>
                        2024년 대학부 회장/부회장 후보로 선정되었다는 연락을 받고나서 저를 회장/부회장 후보로 생각해주셨음에 대학부원들에게 큰 감사함을 느꼈습니다. 내년에 대학부에서의 마지막 한 해를 보내게 되는데 제가 여태 지내 온 6년에 가까운 대학부에서의 생활과 많은 추억들이 쭉 생각났습니다. 대학부에서의 마지막 한 해를 보낸다는 것도 굉장히 아쉬운데, 또 그 한 해 대학부를 대표하는 회장/부회장 7인의 후보로 선정되어서, 저에게 대학부라는 공동체가 뜻 깊게 다가옵니다. 7인의 후보로 나서겠다는 마음을 먹고 대학부 회장, 부회장 자리에 대해 깊게 생각을 해보았습니다. 2024년 한 해 동안 대학부를 대표해서 대학부원들의 신앙생활을 잘 이어 나갈 수 있게 하는 그런 무거운 자리임을 압니다. 그래서 이번 총회에 후보로 선정된 7인의 후보들이 모두 무거운 마음일 것임을 알기에 7인의 후보들이 기도로 잘 준비할 수 있도록, 그리고 또한 이번 총회가 잘 마무리되기를 기도로 나아갑니다.
                    </p>

                    <p>
                        <b><span className="text-highlight">나의 하나님에 대해서 한 문장으로 표현하면?</span></b>
                        <br />‘나의 하나님은 내가 절대 평생 놓치지 않을 분이시다.’<br />
                        모태신앙인 저는 어릴 적부터 교회를 쭉 다녔습니다. 교회 다니는 것을 당연시 여겼던 저에게는 하나님이라는 존재가 크게 안 느껴졌습니다. 교회에서 하나님이라는 분을 매주 듣다 보니 그냥 어린 저에게는 하나님은 그냥 당연한 분이셨던 것 같습니다. 그러나 사람이 익숙해지면 그 소중함을 잊기 쉽듯이 저는 그동안 하나님의 소중함을 잊고 살아왔던 것 같습니다. <br/>
                        성인이 되기 전에는 큰 책임이라고 할 것이 많이 없었는데, 성인이 되고 나서는 자유가 생기고 그 자유가 생김에 따라 책임이 생겼습니다. 이렇게 제가 책임져야 할 것들이 많아지면서 하나님의 존재가 저에게 얼마나 필요한 분이신지 많이 느꼈습니다. 제가 너무 나약한 존재라는 것을 알고 주님 없이는 세상 속에서 살아갈 수 없음을 고백하는 날들이 많아졌습니다. <br/>
                        더불어 주님은 저에게는 든든한 분이십니다. 주님은 제가 잘못된 길로 가면 시간이 걸리더라도 다시 올바른 방향으로 나아갈 수 있도록 저를 돌아오게 하시고, 또 제가 지치고 힘들 때면 제 곁에서 나무 그늘과 같이 잠시 기대어 편히 쉴 수 있게 해주십니다. 학창시절부터 친구들이 저에게 늘 ‘교회를 왜 다니냐면서 하나님이라는 걸 왜 믿냐’고 말하는 친구들이 많았습니다. 저는 그 때마다 늘 “세상을 혼자 살아갈 때에 누군가에게 의지한 채로 살아가면 마음이 편하지 않겠냐고, 아무리 내가 힘들고 바닥을 쳤을 때 언제든 누군가에게 털어놓고 도움을 청할 수만 있다면 든든하지 않겠냐고, 나에게 그런 분이 하나님이다.” 라고 대답을 하곤 했었습니다. 물론 그 친구들은 저를 이상하게 봤을 수도 있지만 저에게는 하나님이 그만큼 큰 존재이셨습니다.<br/>
                        이렇듯 제가 살아가는 데에 있어서 주님은 저에게 절대 없어서는 안 될 분이십니다. 앞으로 제가 살아가면 살아갈수록 더욱 힘들고 어려운 상황들이 저에게 닥쳐올 것입니다. 그런 상황들이 올 때마다 분명히 두렵고 어찌해야 할 줄 모르는 상황들이 많이 다가올 수도 있습니다. 하지만 주님이 제 곁에 계심을 굳게 믿고 제가 주를 붙잡고 나아가기만 한다면 주님께서 두려움을 없애 주시리라 굳게 믿습니다.<br/>
                        지금도, 그리고 앞으로도 제가 살면서 절대 놓치지 않을 분, ‘하나님’이십니다.
                    
                    </p>

                    <p>
                        <span className="text-highlight">개인적으로 의미가 있는 말씀 구절과 그 이유는?</span><br></br>
                        “하나님이 우리를 사랑하시는 사랑을 우리가 알고 믿었노니 하나님은 사랑이시라 사랑 안에 거하는 자는 하나님 안에 거하고 하나님도 그의 안에 거하시느니라” (요한일서 4장 16절)<br/>
                        이 말씀은 올해 대학부 물댄동산교회 국내선교팀 주제 말씀이었습니다. 저는 이번 물댄동산교회 국내선교팀의 팀장으로 국내선교를 다녀왔는데 이 주제 말씀이 저에게 정말 크게 와닿았습니다. 국내선교를 다녀오면서 저에게는 정말 크고 그 무엇과도 바꿀 수 없는 소중한 경험을 하였습니다. 국내선교를 열심히 준비해서 국내선교가 수월할 것이라고 생각했지만 예상치도 못한 여러 시행착오들이 있었고 그 상황 가운데에 육체적으로 그리고 심적으로 많이 무너졌습니다. <br/>
                        국내선교를 다녀온 후에 육체적으로 그리고 심적으로 많이 지쳐 있는 상황 속에서 여름수련회를 다녀오게 되었고, 양일간 진행된 설교 말씀을 통해 왜 국내선교를 통해 저에게 주님이 그리 큰 힘듦을 겪게 하셨는지 알게 되었습니다. 더불어 늘 하나님의 사랑이 무엇일까 의문을 품고 살았던 저에게 하나님의 사랑이 정확히 무엇인지 알게 해주셨습니다.<br/>
                        하나님의 사랑이란 ‘상대방보다 본인을 낮추고 상대방을 지키며 상대방을 꽃 피우게 하는 것’ 이라고 하셨습니다. 항상 낮은 자세로 남을 위하는 삶, 본인보다는 남들이 꽃 피울 수 있도록 하는 삶, 이런 삶이 하나님의 사랑이 우리를 통해 흘러가는 삶이라는 것을 알 수 있게 하셨습니다. <br/>
                        국내선교 뿐만 아니라 올해 초에 있었던 해외선교를 통해서도 하나님의 사랑을 알 수 있게 되었습니다. 해외선교를 인도네시아로 다녀오게 되었는데 인도네시아 현지에 계신 선교사님과 당시에 말씀을 많이 나눴습니다. 저는 그동안 선교라는 것은 오로지 믿음을 전파하는 것만이 선교라고 생각했었습니다. 하지만 현지에 계신 선교사님으로부터 들은 이야기는 선교사님께서 수많은 무슬림 친구들과 상대하면서 그들에게 믿음보다는 하나님의 사랑을 우선시 전하는 그런 사역을 하고 계신다는 말씀을 들었습니다.<br/>
                        현지에 있는 무슬림 친구들이 오로지 회심하기를 바라며 사역을 하시는 것이 아닌 주님의 사랑이 선교사님을 통해 그들에게 전달되기를 바라신다고 하셨습니다. 주님의 사랑이 진심으로 그들에게 전달만 되었다면 선교사님은 그들이 회심을 안 했을지라도 괜찮다고 하셨습니다. 그래서 저도 그 상황 속에서 하나님의 사랑이 얼마나 크고 위대한 것인지 느꼈습니다. 그리고 저 또한 주님의 사랑이 저로 인해 주변으로 흘러갈 수 있기를 바랬던 것 같습니다.<br/>
                        이렇듯 올 한 해를 지내오면서 하나님의 사랑이 무엇인지 알고 또 하나님의 사랑을 많이 느낄 수 있었습니다. 가족들을 통해, 지인들을 통해, 대학부 공동체를 통해 하나님의 사랑을 많이 느꼈습니다. 서로가 서로를 위하며, 서로가 꽃 피울 수 있게 하는 소중한 경험들을 많이 하였습니다. 사랑을 받기만 하면 안 되고 받은 사랑이 저희를 통해 흘러가야 하듯이, 저도 주위에 많은 사랑을 전하려 노력을 하고 있습니다. <br/>
                        위 말씀처럼 사랑 안에 거하는 자는 하나님 안에 거하고 하나님도 그의 안에 거하시기에 저희가 하나님 안에 거하기 위해서는 하나님의 사랑 안에 거해야 함을 다시 한번 느꼈습니다. 그래서 위 말씀(요한일서 4장 16절)이 저에게 올 한해 굉장히 의미 있게 다가온 말씀입니다.
                    </p>

                    <p>
                        <span className="text-highlight">나의 비전</span><br></br>
                        제 비전은 신앙적인 믿음과 세상에서의 실력이 균형을 이루고, 그 과정 가운데에 남들에게 행복과 사랑을 베푸는 삶을 사는 것입니다.<br/>
                        졸업을 1년 앞두고 있는 상황 속에서 1년 후면 제가 사회에 나가게 됩니다. 사회에 나가게 되면 수많은 위기가 도래할 것입니다. 신앙적으로도 많이 흔들릴 수 있고, 또 사회에서도 불안을 안고 살아갈 가능성이 큽니다.<br/>
                        허나 제가 어느 상황에 놓여있던 주님을 향한 굳은 믿음과 세상에서 제 실력을 잘 길러 놓으면 두려울 것이 없다고 생각합니다. 그러한 상황 속에서 주위 사람들에게 악을 행하는 것이 아닌 행복과 사랑을 베풀며 선을 행하는 삶을 살아갈 것입니다. <br/>
                        
                        
                    </p>

                    <p>
                        <span className="text-highlight">나에게 대학부란?</span><br></br>
                        ‘나에게 대학부란 나를 매 순간 성장시켜준 곳이다.’<br></br>
                        2018년과 2019년, 대학부 초창기의 저를 되돌아보면 저에게 대학부는 많은 사랑과 챙김을 받을 수 있었던 공동체였습니다. 이제 막 성인이 되고 신앙에 대해 깊게 생각을 많이 해보지도 않은 저에게 대학부 교역자님들과 형, 누나들은 제가 신앙을 더욱 깊게 생각할 수 있도록 문을 열어준 감사한 분들이었습니다.<br/>
                        지금 생각해보면 부끄럽지만 마냥 어리숙하고 신앙에 있어서도 깊게 생각하지 않던 저에게 조건 없는 사랑과 관심을 주셨습니다. 대학부라는 공동체가 누구에게나 열려있고 또 그 안에서 서로가 서로를 소중하게 여기며 믿음의 동역자로 서로에게 선한 영향력을 행사하고 있음을 느끼게 해주었습니다.<br/>
                        20년도와 21년도에는 제가 군복무를 하고 또 코로나가 유행하게 되면서 교회에 못 나오는 상황이었습니다. 근데 그 상황 속에서 대학부의 소중함을 더욱 더 크게 느낄 수 있었습니다. 다같이 모이지는 못해도 각자의 자리에서 다같이 주님을 바라보고 또 서로를 챙기며 신앙생활을 계속 이어 나가는 것을 보았습니다. 대학부라는 공동체 없이 혼자 신앙생활을 했었더라면 아마 많은 지체들이 교회를 떠났을 수도 있었을 것입니다. <br/>
                        저 또한 20년도와 21년도에는 군대에 있었기에 휴가도 못 나오고 꼼짝없이 부대에만 있었는데 그 당시 조장이었던 친구가 저를 끝까지 붙잡아주었기에 지금의 제가 신앙생활을 이어 나갈 수 있는 거라고 확신합니다. 조장 친구를 통해 주님이 일하심을 느낄 수 있었고 믿음의 공동체가 얼마나 소중하고 감사한 것인지 깨달았습니다.<br/>
                        22년도와 23년도에는 새가족조 조장으로 섬기게 되면서 많은 새가족 지체들을 만났습니다. 교회를 예전에 다니다가 다시 나온 지체들도 많았고, 아예 교회에 처음 나온 지체들 또한 많았습니다. 새가족조 조장으로 섬기며 만났던 한명한명 모두 소중한 인연들이었고 그들을 통해 제가 많이 배우고 성장할 수 있었습니다. <br/>
                        하나님이 어떻게 일하시는지 그들을 통해 많이 보여주셨는데 특히 잠시 교회를 떠났던 지체들이 다시 주님의 품으로 돌아오게 해주시고, 또 주님을 아예 몰랐던 지체들에게는 주님을 알게 해주셔서 주님을 붙잡으며 살아나가게 해주심을 보여주셨습니다. 어릴 때부터 교회에 나오는 것이 당연하고 습관처럼 교회를 다니던 저에게 큰 가르침을 주셨습니다.<br/>
                        제가 지내온 6년의 대학부 생활을 돌아보면 한 순간도 빠짐없이 주님은 대학부를 통해 저에게 많은 것들을 알려주셨습니다. 매 순간들이 제가 성장할 수 있는 순간들이었고 또 주의 자녀로 한 발자국 더 나아갈 수 있게 해주셨습니다. 대학부를 통해 저를 매 순간 성장시킬 수 있었음에 감사를 드립니다.<br/>


                    </p>
                    
                    <p>
                        <span className="text-highlight">내가 생각하는 리더십</span><br></br>
                        제가 생각하는 리더십은 ‘중심이 잘 잡힌 채 주변 의견에 귀를 기울이고 공동체가 더 나은 방향으로 나아가게끔 뒤에서 묵묵히 밀어주는 것’ 입니다. <br/>
                        우선 중심이 잘 잡혀야 하는 이유는 리더가 흔들리면 공동체가 흔들리기 때문입니다. 리더는 책임져야 하는 상황들이 많고 공동체를 대표하기 때문에 악한 상황에 흔들려서는 안 됩니다. 리더가 주님을 붙잡은 채 중심이 잘 잡혀 있어야 공동체 또한 흔들리지 않을 것이라 생각합니다.<br/>
                        그리고 주변 의견에 귀를 기울여야 합니다. 리더는 모든 면에서 유능하지가 않고 또 절대권력자가 아니기에 주변 의견에 꼭 귀를 기울여야 합니다. 모든 의견에 귀를 기울여 공동체가 올바른 방향으로 나아가게끔 조율해야 하는 것이 리더의 역할이라 생각합니다.<br/>
                        마지막으로 리더는 묵묵히 뒤에서 밀어줘야 된다고 생각합니다. 리더가 가장 앞에서 공동체를 이끌다 보면 뒤에 누가 소외되고 뒤쳐졌는지 모를 가능성이 큽니다. 오히려 앞보단 뒤에서 공동체에 속해 있는 모두가 올바른 길로 나아갈 수 있도록 밀어주는 것이 더 낫다고 생각합니다. 또 리더의 자리에 있는 사람으로서 말과 행동에 신중을 기하여 묵묵히 밀어주는 것이 올바른 리더십이라 생각합니다.<br/>

                    </p>

                    <p>
                        <span className="text-highlight">대학부에 대해 품고 있는 비전</span><br></br>
                        제가 대학부에 대해 품고 있는 비전은 대학부의 모든 지체들이 주님을 간절히 붙잡고 주님을 바라보며, 또 사회에 나가서는 중심이 잘 잡힌 채 선한 영향력을 행사하며 살아가기를 바라는 것이 제 비전입니다.<br/>
                        요즘 세상은 선한 것들보다는 악한 것들이 많이 오가는 상황 같습니다. 서로를 험담하며 비난하고 끌어내리고 악한 마음을 품고 사는 자들이 많아지고 있습니다. 또 주님이 바라는 모습이 아닌 세상 것들에 목표를 두고 살아가는 경우가 많아졌습니다.<br/>
                        아무리 세상이 잘못된 상황이더라도 그러한 세상 속에서 그리스도를 믿는 자들이라면 세상 사람들과는 달라야 한다고 생각합니다. 세상이 지향하는 것들을 따라가는 것이 아닌 주님이 바라시는 것들을 따라가는 삶을 살아가야 된다고 생각합니다.<br/>
                        주를 믿는 청년들이 점차 줄어드는 가운데 우리 소망교회 대학부 공동체가 매우 소중합니다. 그래서 저희 대학부는 주님을 잘 붙잡고 살아가는 공동체가 되었으면 합니다. 단순히 교회에 나와서 그냥 예배만 드리고 가는 것이 아닌 주님을 바라보며 서로가 서로에게 선한 영향력을 미쳐 서로가 믿음으로 꽃 피울 수 있는 그런 공동체가 되길 바랍니다. 그리고 그러한 믿음과 세상에서의 실력이 균형을 이루어 주님이 쓰시는 자들로 살아가길 바라는 것이 제가 대학부에 품고 있는 비전입니다.<br/>
                        
                    </p>

                    <p>
                        <span className="text-highlight"></span><br></br>
                    </p>
                    <div className="social">
                        <a href="https://youtu.be/CyJy6B5E2yE?t=33">
                            <i><FontAwesomeIcon icon={faYoutube} /></i>
                        </a>
                        <a href="image/kim1.jpeg">  
                            <i><FontAwesomeIcon icon={faImage} /></i>
                        </a>
                    </div>
                </div>
            </Container>



            <Container className="custom-container shadow" id='lee'>
                <br></br>
                <div style={{ backgroundColor: '#E8F5E8', textAlign: 'center', paddingTop:30, paddingBottom:20, borderRadius:20}}>
                    <Col lg="4" className="text-center m-b-30">
                        <Carousel
                            activeIndex={activeIndex}
                            next={next.bind(null)}
                            previous={previous.bind(null)}
                        >
                            <CarouselIndicators items={items_lee} activeIndex={activeIndex} onClickHandler={goToIndex.bind(null)} />
                            {slides_lee}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous.bind(null)} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={next.bind(null)} />
                        </Carousel>
                        
                    </Col> 
                    <h3 style={{ fontSize: '30px', fontFamily: 'Raleway, sans-serif', fontWeight: 400, paddingTop:5, marginBottom:15 }}>18 이해윤</h3>
                    <span style={{ fontSize: '15px'}}>???</span>
                </div>

                <div style={{ padding:10, color:'#000000', fontWeight:400}}>
                    <p><span className="text-highlight">후보가 된 소감</span><br/>
                        2024년 대학부
                    </p>

                    <p>
                        <b><span className="text-highlight">나의 하나님에 대해서 한 문장으로 표현하면?</span></b>
                        <br />‘나의 하나님은 내가 절대 평생 놓치지 않을 분이시다.’<br />
                        모태신앙인 저는 
                    
                    </p>

                    <p>
                        <span className="text-highlight">개인적으로 의미가 있는 말씀 구절과 그 이유는?</span><br></br>
                        “하나님이 우리를 
                    </p>

                    <p>
                        <span className="text-highlight">나의 비전</span><br></br>
                        제 비전은 신앙적인 믿음과 세향
                        
                    </p>

                    <p>
                        <span className="text-highlight">나에게 대학부란?</span><br></br>
                        ‘나에게 대학부란 나를 매 순간 성장시켜준 곳이다.’<br></br>
                        2018년과 2019년, 

                    </p>
                    
                    <p>
                        <span className="text-highlight">내가 생각하는 리더십</span><br></br>
                        제가 생각하는 리더십은 ‘
                    </p>

                    <p>
                        <span className="text-highlight">대학부에 대해 품고 있는 비전</span><br></br>
                        제가 대학부에 대해 품고 있는 비전은
                    </p>

                    <p>
                        <span className="text-highlight"></span><br></br>
                    </p>
                    <div className="social">
                        <a href="https://youtu.be/CyJy6B5E2yE?t=33">
                            <i><FontAwesomeIcon icon={faYoutube} /></i>
                        </a>
                        <a href="image/lee1.jpg">  
                            <i><FontAwesomeIcon icon={faImage} /></i>
                        </a>
                    </div>
                </div>
            </Container>


            <Container className="custom-container shadow" id='ji'>
                <br></br>
                <div style={{ backgroundColor: '#E8F5E8', textAlign: 'center', paddingTop:30, paddingBottom:20, borderRadius:20}}>
                    <Col lg="4" className="text-center m-b-30">
                        <Carousel
                            activeIndex={activeIndex}
                            next={next.bind(null)}
                            previous={previous.bind(null)}
                        >
                            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex.bind(null)} />
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
                        요한계시록 7장 10절 "큰 소리로 외쳐 이르되 구원하심이 보좌에 앉으신 우리 하나님과 어린양에게 있도다 하니"<br/>
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
                        <a href="https://youtu.be/CyJy6B5E2yE?t=33">
                            <i><FontAwesomeIcon icon={faYoutube} /></i>
                        </a>
                        <a href="image/ji1.jpg">  
                            <i><FontAwesomeIcon icon={faImage} /></i>
                        </a>
                    </div>
                </div>
            </Container>



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
                        대답하여 이르되 네 마음을 다하며 목숨을 다하며 힘을 다하며 뜻을 다하여 주 너의 하나님을 사랑하고 또한 네 이웃을 네 자신 같이 사랑하라 하였나이다(눅 10:27)<br/>
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
                        <a href="https://youtu.be/CyJy6B5E2yE?t=33">
                            <i><FontAwesomeIcon icon={faYoutube} /></i>
                        </a>
                        <a href="image/han1.jpg">  
                            <i><FontAwesomeIcon icon={faImage} /></i>
                        </a>
                    </div>
                </div>
            </Container>




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
                    <h3 style={{ fontSize: '30px', fontFamily: 'Raleway, sans-serif', fontWeight: 400, paddingTop:5, marginBottom:15 }}>18 권은서</h3>
                    <span style={{ fontSize: '15px'}}>???</span>
                </div>

                <div style={{ padding:10, color:'#000000', fontWeight:400}}>
                    <p><span className="text-highlight">후보가 된 소감</span><br/>
                        2024년 대학부
                    </p>

                    <p>
                        <b><span className="text-highlight">나의 하나님에 대해서 한 문장으로 표현하면?</span></b>
                        <br />‘나의 하나님은 내가 절대 평생 놓치지 않을 분이시다.’<br />
                        모태신앙인 저는 
                    
                    </p>

                    <p>
                        <span className="text-highlight">개인적으로 의미가 있는 말씀 구절과 그 이유는?</span><br></br>
                        “하나님이 우리를 
                    </p>

                    <p>
                        <span className="text-highlight">나의 비전</span><br></br>
                        제 비전은 신앙적인 믿음과 세향
                        
                    </p>

                    <p>
                        <span className="text-highlight">나에게 대학부란?</span><br></br>
                        ‘나에게 대학부란 나를 매 순간 성장시켜준 곳이다.’<br></br>
                        2018년과 2019년, 

                    </p>
                    
                    <p>
                        <span className="text-highlight">내가 생각하는 리더십</span><br></br>
                        제가 생각하는 리더십은 ‘
                    </p>

                    <p>
                        <span className="text-highlight">대학부에 대해 품고 있는 비전</span><br></br>
                        제가 대학부에 대해 품고 있는 비전은
                    </p>

                    <p>
                        <span className="text-highlight"></span><br></br>
                    </p>
                    <div className="social">
                        <a href="https://youtu.be/CyJy6B5E2yE?t=33">
                            <i><FontAwesomeIcon icon={faYoutube} /></i>
                        </a>
                        <a href="image/kwon1.jpeg">  
                            <i><FontAwesomeIcon icon={faImage} /></i>
                        </a>
                    </div>
                </div>
            </Container>




            <Container className="custom-container shadow" id='ban'>
                <br></br>
                <div style={{ backgroundColor: '#E8F5E8', textAlign: 'center', paddingTop:30, paddingBottom:20, borderRadius:20}}>
                    <Col lg="4" className="text-center m-b-30">
                        <Carousel
                            activeIndex={activeIndex}
                            next={next.bind(null)}
                            previous={previous.bind(null)}
                        >
                            <CarouselIndicators items={items_ban} activeIndex={activeIndex} onClickHandler={goToIndex.bind(null)} />
                            {slides_ban}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous.bind(null)} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={next.bind(null)} />
                        </Carousel>
                        
                    </Col> 
                    <h3 style={{ fontSize: '30px', fontFamily: 'Raleway, sans-serif', fontWeight: 400, paddingTop:5, marginBottom:15 }}>19 반유빈</h3>
                    <span style={{ fontSize: '15px'}}>치의예과</span>
                </div>

                <div style={{ padding:10, color:'#000000', fontWeight:400}}>
                    <p><span className="text-highlight">후보가 된 소감</span><br/>
                        처음에는 당황스러웠지만, 다른 후보들을 지지하는 입장이기에, 오히려 마음이 가볍습니다. 한 해 동안 교회에서, 일상에서 느낀 점들을 대학부원들을 상대로 나누는 자리로 여기고 있습니다.

                    </p>

                    <p>
                        <b><span className="text-highlight">나의 하나님에 대해서 한 문장으로 표현하면?</span></b>
                        <br />‘나의 하나님은 실수 없으신 부모님 이시다’<br />
                        육아 프로그램을 보면, 자녀를 양육하는 일에는 많은 노력과 배움이 필요하다는 생각을 하게 됩니다. 부모는 처음이기에, 의도하지 않게 자식에게 상처를 주기도 하고, 부모 스스로 치유 받지 못한 상처가 남아있기 때문에 잘못된 방향으로 훈육을 하기도 합니다. 부모님도 인간이기에, 실수를 합니다. 당연합니다. 부모님도 양육을 하며 성장을 합니다. 그리고 언젠가는, 자녀도 그런 부모님의 인간적인 모습을 받아들이고, 자식을 사랑으로 양육하려던 노력을 이해합니다. <br/>
                        그러나 하나님은 실수가 없으시고 전지 전능 하십니다. 그분께서 주시는 모든 것들이 선하며, 사랑과 지혜의 방향으로 이끌어 주십니다. 그런 하나님을 신뢰합니다. 하나님께서는 “양심”이란 지침을 주셔서, 타인에게 피해가 되거나 제 자신에게 해로운 일을 하는 것에 대한 거리낌을 느끼게 하십니다. “회복력”을 주셔서 실수하고 실패해도 다시 일어날 힘을 주십니다. “노력”할 기회를 주셔서 세상에 당연한 것은 아무 것도 없다는 것과 그렇기에 주어진 것에 감사할 수 있는 마음을 갖게 하십니다. 끊임없이 세상 아닌 당신께로 시선을 돌리시며, 결과가 아닌, 당신과 함께 하는 과정에 집중하게 하십니다. 때로는 “침묵”하시면서, 제 스스로 고군분투하게 하시지만, 그 시간을 통해 저를 성장하게 하시며, 진정으로 하나님께로 시선을 돌리는 것이 무엇인 지 알게 하십니다. 그리고 그 때조차도 제 곁을 든든히 지켜 주십니다. 도저히 감당할 수 없는 일에 대해선 피할 길도 내어 주시며, 최선을 다한 것으로 충분하다며 위로를 하십니다. <br/>
                        주변이나 방송을 보면, 제 인간적인 시선으로 봤을 때에, 정말 감당하기 어려운 것만 같은 아이들도 있습니다. 그러나 그런 아이들도, 부모의 인내와 올바른 지도로 조금씩 변화합니다. 하나님은 부족하고 어린 나도 참아 주십니다. 이러한 시기도 거쳐야 성장을 한다며 기다리십니다. 따끔한 훈육도 하십니다. 제가 잘못을 했을 때에는 무엇이 왜 잘못되었는 지 깨닫게 하시고, 잘못한 대상이 있다면 진심으로 사과할 수 있는 용기를 주십니다. 편협한 생각을 가지고 있다면, 저를 깨뜨리시며, 제가 가진 생각과 판단을 내려놓게 하십니다. 그리고 실수 없으신 부모님 되시는 당신을 통해 배우고 느끼고 받은 것들을 삶과 세상에 적용해 볼 수 있는 기회를 주십니다. 그리고 그 기회를 통해, 사랑을 배워가게 하시고, 세상에는 정말 다양한 부류의 사랑스러운 사람들이 있음을 깨닫게 하십니다. 
                    
                    </p>

                    <p>
                        <span className="text-highlight">개인적으로 의미가 있는 말씀 구절과 그 이유는?</span><br></br>
                        "나는 심었고 아볼로는 물을 주었으되 오직 하나님께서 자라나게 하셨나니 그런즉 심는 이나 물 주는 이는 아무 것도 아니로되 오직 자라게 하시는 이는 하나님뿐이니라" (고린도전서 3:6~7)
                        제게는 감동이 되는 말씀입니다. 최선을 다한 이후의 결과는 저의 영역이 아니라고 인정하면, 결과에 집착하지 않는 자유로운 마음이 생깁니다. 펼쳐질 모든 길들은 하나님께서 만드시고 열어 주시는 길이니, 제가 뜻한 바와 같지 않더라도 감사로 나아갈 수 있습니다. 결국에는 제게 가장 좋은 길일 것이기 때문입니다. 상상도 못해 본 길이라 하더라도, 결국에는 제가 가장 즐거워할 수 있는 길이거나 그 과정 중에 있는 길일 것이고, 제 역할을 필요로 하는 길이겠지요. 심는 이나 물 주는 이는 아무 것도 아니라 하였지만, 하나님께서는 그 아무 것도 아닌 일을 크게 여기십니다. 부모님이 어린 아이에게 작은 하나를 제외한 모든 것들을 다 해주시고 아이가 하나 해냈을 때, 너가 다 했다며 박수 쳐 주시는 것처럼 말입니다. <br/>
                        자라나게 하시는 하나님은, 심는 역할과 물 주는 역할이 당신께 얼마나 중요한 지에 대해서 알게 하십니다. 남들이 알아주지 않아도, 그 역할을 성실히 하다 보면, 자라나는 것을 볼 때에 더 큰 기쁨을 누리게 됩니다. 하나님 나라의 일을 하는 것의 기쁨이 이런 것이 아닐까 하는 생각이 듭니다. 하나님이 다 하셨지만, 작은 하나를 맡겨 주셔서 큰 일에 동참하는 것에 대한 사명감과 자긍심을 갖게 하십니다. 그리고 맡은 역할을 최선을 다해 수행하는 과정에서 세상을 보는 시야를 넓혀 주시고 성장하게 하십니다. 하나님의 사역에 함께하고 있음을 실감할 수 있고, 펼쳐질 일들에 대한 기대를 갖게 하는 이 말씀이 저에게 개인적으로 가장 의미 있는 말씀입니다. <br/>

                    </p>

                    <p>
                        <span className="text-highlight">나의 비전</span><br></br>
                        매 순간 최선을 다하는 삶을 살며, 보여주시는 길을 즐겁게 걸어가고 싶습니다. 제가 잘 할 수 있는 분야를 통해, 사회에 필요한 역할을 해내는 보람을 느끼고, 제가 좋아하는 분야를 통해 순수한 즐거움을 느끼며 살고 싶습니다. 전공과 관련 지어 얘기를 해 보자면, 치과 공부를 열심히 해서 치아 관련 질환으로 아파하는 사람들에게 도움을 주고 싶습니다. 또한 제게 보내주신 주변의 사람들을 최선을 다해 사랑하고 싶습니다. 그리고 그 주변의 영역을 점차 넓혀가고 싶습니다. 
                        
                    </p>

                    <p>
                        <span className="text-highlight">나에게 대학부란?</span><br></br>
                        ‘학교이다.’<br></br>
                        저에게 대학부는 배움의 장, 말 그대로 학교입니다. 섬김의 자리를 통해, 함께하는 사람들을 통해 많은 것을 배웁니다. 다른 해에 비해, 올 해 유독 대학부 내에서 다양한 역할들을 많이 경험하게 되었습니다. 그리고 그 모든 역할들은 반드시, 다른 사람들과의 소통을 필요로 했습니다. 그러면서 보이지 않는 곳에서 섬기는 분들이 많다는 것을 알게 되었고, 드러나지 않더라도 중요하고 필요한 역할들을 묵묵히 감당하는 이들을 보며 존경스러운 마음도 들었습니다. 대학부 내에서도 이렇게 수고하는 손길들이 많은데, 하물며 우리 사회에는 얼마나 많을까 하는 생각이 들었습니다. 세상의 기준에서 많이 벗어나고, 관심을 받는 분야가 아니더라도, 세상에는 반드시 필요하고 중요한 많은 일들이 있습니다. 주목받지 못한다고 하더라도, 나름의 자긍심을 가지고 즐겁게 일을 하는 이들을 바라볼 수 있는 시선을 갖게 되어 감사했습니다.<br/>
                        2019년 대학부에 처음 왔을 때에, 저는 지금보다 더 내성적이고 자기중심적인 사람이었습니다. 그런 저의 모습을 참아주고 다가와 준 많은 사람들이 있습니다. 또한 제가 나누고 싶은 마음을 기쁘게 받아준 사람들이 있었기에, 주고 싶은 사랑을 마음껏 펼쳐보는 시간도 가져볼 수 있었습니다. 사실은, 상대에게는 부담이나 피로감으로 다가왔을 지도 모릅니다. 제가 주고 싶은 사랑을 부담으로 여기지 않고, 고맙게 받아주었던 것이 그들의 큰 사랑이었음을 이제야 깨닫게 되었습니다. 사랑을 마음껏 나누고 싶은 마음이 있는 사람들이 교회 밖에도 많이 있었습니다. 그리고 그 사랑을 저도 감사히 받고 표현을 할 수 있었던 것은, 대학부에서 배운 사랑이 있었기 때문입니다. <br/>
                        대학부에는, 사랑과 인내심이 많은 사람들이 많았습니다. 그래서 배운 말씀을 적용할 수 있는 용기도 보다 쉽게 가질 수 있었고, 사람과 사랑을 배워갈 수 있었습니다. 그래서 저에게 대학부는 감사한 학교입니다. 
                        
                    </p>
                    
                    <p>
                        <span className="text-highlight">내가 생각하는 리더십</span><br></br>
                        말씀을 사랑하고, 말씀대로 살아가려 노력하는 태도가 필요하다고 생각합니다. 다른 대학부원들에게 말씀으로 위로를 건네고, 말씀에 더 가까이 다가갈 수 있도록 도와주는 리더가 좋은 리더라고 생각합니다. <br/>
                        소통의 능력이 중요하다고 생각합니다. 여러 부팀들과 소통을 하고 전체적인 일정을 운영해야 하며, 결정된 사항들을 대학부원들이 이해할 수 있게 잘 전달해야 하기 때문에, 따뜻하고 지혜로운 소통을 할 수 있어야 한다고 생각합니다. <br/>
                        함께 나아가자고 격려하며, 공동체가 성장할 수 있는 방향을 모색해야 한다고 생각합니다. 우리는 교회 안에 머무르는 것이 아니라 세상 밖으로 나아가 각자의 사명을 살아야 하기 때문입니다. 

                    </p>

                    <p>
                        <span className="text-highlight">대학부에 대해 품고 있는 비전</span><br></br>
                        대학부에 품고 있는 비전이라기 보다는, 개인적으로 바라는 점에 대해 애기하고 싶습니다. <br/>
                        대학부 내에는 정말로 다양한 사람들이 있습니다. 서로 다른 모습들에 부딪히고 상처받는 일도 생긴다는 걸 압니다. 저는 소망 대학부가 다양성이 존중받는 공동체가 되었으면 좋겠습니다. 감정적인 면이 어린 애 같은 모습이 아닌 순수하고 예쁜 모습으로 받아들여지면 좋겠습니다. 이성적이고 논리적인 말이 사람에 대한 공격이 아닌, 함께 나아가기 위한 하나의 의견으로 받아들여지면 좋겠습니다. 외향적인 사람이 사람에게 의존적인 사람이 아닌, 나눌 수 있는 사랑이 많은 사람으로 여겨지면 좋겠습니다. 내향적인 사람이 사회성이 부족한 것이 아니라 깊게 생각하기 위해 혼자만의 시간이 필요한 사람으로 여겨지면 좋겠습니다. 물론, 부족해 보이는 측면이 도드라져 보일 수도 있지만, 발전시킬 수 있는 긍정적인 면을 바라봐 주셨으면 좋겠습니다. 그렇게, 다른 서로를 이해하고 존중하는 문화가 더 활성화되었으면 좋겠습니다. 그리고 그런 서로를 통해 배우면서 색다른 균형을 맞춰가면 좋겠습니다. 사람은 서로 너무나 다르기에, 각자가 맞추어 갈 균형의 경로 또한 각양각색일 거라 생각합니다. 하나님 안에서의 다양성이 그렇게 빛이 났으면 좋겠습니다. <br/>
                        우리 모두가 신앙적으로 단단하게 성장하고, 큰 용기를 가지고 세상으로 나아갔으면 좋겠습니다. 교회 안에서만 머무르는 것이 아니라, 세상 밖으로 하나님의 사랑과 지혜를 전하는 일에 더 적극적인 우리들이 되었으면 좋겠습니다. 세상의 사교 방식을 교회 내에 적용하는 것이 아니라, 교회 내에서 배운 사귐을 세상에 적용할 수 있으면 좋겠습니다. 일어날 힘이 없는 이가 있다면 충분히 기다려주고, 만약 내게 힘이 없다면 건네주는 손을 잡을 수 있는 용기를 가졌으면 좋겠습니다. 세상과 다른 하나님 나라의 가치관과 태도를 갖고, 세상에는 나 같은 사람도 있는 거라며 당당히 살았으면 좋겠습니다. 중심을 지키기 위한 행동이라면 미움 받을 용기도 가지면서 말입니다. <br/>
                        삶과 닿아 있는 신앙 생활을 하며, 매일 신앙적으로 성장하고 세상으로 나아가는 대학부 공동체 되었으면 좋겠습니다. 일단 저부터, 많은 노력이 필요할 것 같습니다.

                    </p>

                    <p>
                        <span className="text-highlight"></span><br></br>
                    </p>
                    <div className="social">
                        <a href="https://youtu.be/CyJy6B5E2yE?t=33">
                            <i><FontAwesomeIcon icon={faYoutube} /></i>
                        </a>
                        <a href="image/ban1.jpg">  
                            <i><FontAwesomeIcon icon={faImage} /></i>
                        </a>
                    </div>
                </div>
            </Container>




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
                        “사람이 마음으로 자기의 길을 계획할지라도 그의 걸음을 인도하시는 이는 여호와시니라" (잠16:9) <br/>
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
                        <a href="https://youtu.be/CyJy6B5E2yE?t=33">
                            <i><FontAwesomeIcon icon={faYoutube} /></i>
                        </a>
                        <a href="image/jang1.jpeg">  
                            <i><FontAwesomeIcon icon={faImage} /></i>
                        </a>
                    </div>
                </div>
            </Container>


        </div>

    );
}


export default Candidate1;
