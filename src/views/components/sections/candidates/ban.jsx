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

const Ban = () => {
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




    return (
        <div id="CANDIDATES" >
            <Link to={"/#CANDIDATE"} className="close-button" >
                <FontAwesomeIcon icon={faTimes} />
            </Link>
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
                        <i>"나는 심었고 아볼로는 물을 주었으되 오직 하나님께서 자라나게 하셨나니 그런즉 심는 이나 물 주는 이는 아무 것도 아니로되 오직 자라게 하시는 이는 하나님뿐이니라" (고린도전서 3:6~7)</i><br/>
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
                        <a href="https://youtu.be/oNHtXMgSXU0?t=12m46s">
                            <i><FontAwesomeIcon icon={faYoutube} /></i>
                        </a>
                    </div>
                </div>
            </Container>

        </div>

    );
}


export default Ban;
