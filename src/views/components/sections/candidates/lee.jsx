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
const Lee = () => {
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



    return (
        
        <div id="CANDIDATES" >
            <Link to={"/#CANDIDATE"} className="close-button" >
                <FontAwesomeIcon icon={faTimes} />
            </Link>

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
                    <span style={{ fontSize: '15px'}}>인터렉션사이언스학과</span>
                </div>

                <div style={{ padding:10, color:'#000000', fontWeight:400}}>
                    <p><span className="text-highlight">후보가 된 소감</span><br/>
                        어느새 대학부에서의 시간이 1년하고 2개월 남짓 남았네요. 길다면 길고, 짧다면 짧은 시간동안 대학부에서 여러 위치에 머무르면서, 공동체 곳곳에서 빛을 발해주는 여러 손길들과 마음들이 모여 이 대학부를 만들고 있음을 보게 되었습니다. 그랬기에, 그 가운데서 저를 기억해주신 것에 더 크게 감사할 수밖에 없는 것 같습니다. 

                    </p>

                    <p>
                        <b><span className="text-highlight">나의 하나님에 대해서 한 문장으로 표현하면?</span></b>
                        <br />‘나의 하나님은 내 인생의 도예가 이시다’<br />
                        우리의 어떠한 언어로도 규정할 수 없으신 하나님께서는, 제게 매년 당신을 새롭게 경험하는 은혜를 허락해 주셔서 무한하신 그분의 능력과 분명하게 역사하심을 경험하게 하셨습니다.<br/>
                        올 한 해를 보내며, 저는 저를 빚으시는 하나님을 줄곧 마주하게 되었습니다. 이곳 저곳 여행하면서 넓고 푸른 초장을 바라볼 기회가 많았던 작년에는 그 광활한 자연 앞에서 창조주 하나님을 바라볼 수 있었는데, 올해는 그 크신 하나님께서 우리의 작은 일상과 순간 속에 긴밀히 역사하심을 경험할 수 있었습니다.<br/>
                        사람의 노력만으로 이룰 수 있는 건 없지마는, 특히 관계 속에서 다른 사람의 마음과 행동을 헤아리는 일은 더욱이 사람의 영역이 아닌 것 같습니다. 다른 이들의 모습들 중에 나의 좁은 마음과 시선에서 이해할 수 없던 경험을 지나며, ‘하나님께서 말씀하셨으니까 이해 해야지’ 라는 작은 다짐만으로는 온전한 이해를 이룰 수 없음을 깨달았습니다. 그래서 저는 하나님께서 말씀하시는 이웃에 대한 온전한 이해와 사랑을 억지로, 애써서 이해하기 보다는 자연스럽게 품어갈 수 있는 마음을 바라며 흘려 보내곤 했습니다.<br/>
                        그렇게 간구하는 마음조차도 잊고 지낼 만큼 정신없이 일상과 사역을 이어가던 중, 기도를 통해 문득 제가 예전에 용납하지 못했던 상황에 대해 어느 순간 이해하고 있는 제 모습을 바라보게 되었습니다. 같은 상황이 또 일어나지 않는 것이 가장 선한 일이라고 생각했는데, 하나님께선 상황이 아닌 제 관점과 마음을 바꾸시며 하나님 앞에 제가 합당한 사람이 되도록 빚으신다고 기도하는 시간을 통해 깨닫게 하셨습니다.<br/>
                        여전히 저는 제게 주어진 상황을 제 머리로, 제 경험으로 이해하려고 하는 연약한 사람입니다. 그러나 저를 포기하지 아니하시고, 저를 마땅히 쓰일 그릇으로 빚으시고 계시다는 것을 기억하게 하시며 조금씩 더 나은 하나님의 자녀로 인도하실 하나님께 의지합니다.
                        제 인생이라는 도자기를 끊임없이 돌보시는 하나님께서, 그렇게 제 삶의 도예가 되심을 고백합니다.
                        그리고 이 고백이 제게만 머무르지 않고, 대학부 곳곳에서 기쁘게 터져 나오길 소망합니다.
                        “여호와여 주께서 하신 일이 어찌 그리 많은지요 주께서 지혜로 그들을 다 지으셨으니 주께서 지으신 것들이 땅에 가득하나이다” (시 100:3)

                    
                    </p>

                    <p>
                        <span className="text-highlight">개인적으로 의미가 있는 말씀 구절과 그 이유는?</span><br></br>
                        <i>"그런즉 믿음, 소망, 사랑, 이 세 가지는 항상 있을 것인데 그 중의 제일은 사랑이라" (고전 13:13)</i><br/>
                        ‘사랑’이라는 표현을 좋아합니다. 그래서 ‘사랑’이 들어간 말씀을 줄곧 새기는데, 올해는 이 말씀이 마음에 가장 깊게 새겨집니다.<br/>
                        올해 초, 인도네시아 선교를 통해 들었던 선교사님의 이야기가 사랑을 먼저 바라보도록 시선을 두게 하였습니다. 결국은 사랑하기 위해 선교를 하신다는 이야기를 해주시며, 사랑을 먼저 이뤘을 때 믿음이 가능하게 된다고 하신 선교사님의 나눔은 제가 믿고 소망하는 모든 것들의 근원을 사랑으로 바라보게 했습니다.<br/>
                        치열하게 일상을 살아내는 가운데 그 사랑은 희미해지는 듯 했으나, 우리를 재단하려고 하는 수많은 세상의 기준 속에서 그 치열한 싸움 끝에 결국 승리하는 건 하나님의 사랑이었습니다. 세상에 결코 무너지지 않게, 세상이 말하는 실패-원했던 결과를 맞이하지 못하는 것, 내 뜻이 이뤄지지 않은 것 등-에 좌절하지 않게 붙들어주시고 회복하게 하신 하나님의 사랑은 제 머리로 이해할 수 있는 영역이 아니었습니다. 다만, 모든 것을 이기는 사랑에 소망을 품고 믿으며 나아갈 수 있음을 바라봤습니다.<br/>
                        믿음과 소망도 사랑과 항상 함께 있을 것이라고 하는 고린도전서의 말씀은, 사랑하기를 포기하지 않게 해줍니다. 이 자리를 통해 사랑으로 오신 예수님을 묵상하는 것은 결국 하나님을 향한 믿음이 되고, 하나님 나라를 향한 소망이 됨을 다시금 고백합니다.

                    </p>

                    <p>
                        <span className="text-highlight">나의 비전</span><br></br>
                        하나님께서 보이신 길과 뜻이 무엇인지 치열하게 고민하는 시기를 보내고 있습니다. 제가 어떤 사람이 되어야 하는지, 하게 될 직업과 직책으로 무엇을 하고자 하는지, 열심히 헤매고 있습니다.<br/>
                        비전을 직업으로 본다면, 그 단어는 여전히 제게는 거창하고도 아직 분명하지 않는 것으로 보이는 듯 합니다. 다만 사람과 기술을 연결하는 방식을 공부하는 과정 속에 있는 현재의 시점에서는, 우리가 일상에서 마주하는 기술이 좀 더 많은 세상을 품기를 바라는 마음을 갖게 하신 것 같습니다. 하나님께서 이 세상을 사랑으로 창조하셨고, 그 창조의 아름다움 속에서 인간을 만드실 때 가장 행복하셨다고 하신 것을 기억하며, 사람이 배제되지 않는 사회를 위한 일을 막연하게나마 바라봅니다.<br/>
                        직업적 소명에서 벗어나서 생각하면, 저는 하나님을 찬양하며 하나님 나라의 청지기 역할을 감당할 수 있도록 인도해주실 것을 바라봅니다. 낮은 곳으로 오신 예수님을 기억하며 세상 속 낮은 곳에서 겸허히 일할 수 있는 마음을 품고 싶습니다. <br/>
                        그러나 연약한 사람이기에, 이렇게 글을 쓰는 중에도 마음 한 켠에 세상에서 말하는 그런 좋은 직장, 멋진 자리나 스스로가 정한 기준에 부합하는 커리어에 대한 욕심이 있는 제 모습을 마주합니다. 그러기에 지금의 위치에서는, 제가 품는 마음이 하나님의 뜻과 합할 수 있기를 바라고 있습니다. 그게 제 마음처럼, 제 뜻처럼 되지 않더라도, 끝내 하나님의 일하심과 영광이 드러나는 것이 진정한 제 기쁨이 되길 소망합니다.<br/>
                        무엇보다도 제가 어떤 일을 하게 되더라도, 어떤 위치에 서 있게 되더라도 저라는 사람으로 하여금 예수님의 모습을 보일 수 있는 어른이 되고 싶습니다. 세상 그 어떤 이들보다도 하나님을 가장 높이 바라보며 제가 마주하는 사람들에게 예수님을 드러내는 삶을 살아가면 합니다. 그렇게 제 삶의 태도를 통해 나의 하나님께 호기심을 갖고 예수님을 알아가고 싶어하는 마음의 문을 열어줄 수 있으면 좋겠다는 생각이 들었습니다.<br/>
                        그리고 이렇게 다짐한 모든 언어가 그저 이곳에 기록되어 사라지는 것이 아닌, 정말로 제 삶을 만들어 가시는 하나님의 역사가 되기를 바라며 나아갑니다.

                    </p>

                    <p>
                        <span className="text-highlight">나에게 대학부란?</span><br></br>
                        ‘나에게 대학부란 모두가 둘러 모일 수 있는 벽난로 앞과 같은 곳입니다.’<br></br>
                        저에게 대학부는, 온 가족 구성원들을 모이게 하는 벽난로입니다.<br/>
                        대학부에서 지낸 시간을 생각해보니 참 많은 장면들이 지나갔습니다. 그 장면들 끝에 저는, 서로 다른 우리들이 한데 어우러져 있는 모습을 보게 되었습니다. 모인 우리를 둘러보니, 우리는 서로 다른 힘과 연약함을 품고 있었습니다.<br/>
                        영화나 드라마에서 종종 서양 가정집에서 추운 계절이 되면 가족들이 벽난로 앞에 모이는 모습을 볼 수 있었습니다. 각자의 분주한 일상을 살아내고 모인 이들이, 그렇게 모여 서로를 향한 따뜻한 시선과 이야기를 나누는 장면의 잔상이 따뜻하게 남았던 것 같습니다.<br/>
                        그리고 그런 장면은 이곳에 모인 우리들이, 서로의 다른 삶을 살다가 이곳 주님의 집으로 모이는 모습에 투영되어서, 대학부를 떠올렸을 때 벽난로를 연상하게 되었습니다.<br/>
                        국제적 질병의 시기, 개인의 방황의 시기를 대학부와 함께 관통하며, 그렇게 따뜻하게 모일 수 있는 이 공동체로 하여금 깊은 사랑을 묵상할 수 있었습니다. 나이를 불문한 사랑은 제가 어떤 위치에 있건 그 시기의 저에게 필요했던 동역자들의 이야기를 듣게 하시고, 그들을 통해 하나님을 바라보게 하시며 하나님 앞으로 돌아가게 하셨습니다. 때론 부장단, 교역자님들이나 언니, 오빠들로부터 비롯되는 하강의 사랑이, 때로는 비슷한 시기를 함께 겪는 또래 친구들의 수평의 사랑이, 때로는 동생들이 주는 샘솟는 사랑이 저를 붙들었습니다.<br/>
                        그렇기에 이곳 대학부는, 그렇게 벽난로 앞에 모이기만 하는 것에서 그치지 않는 듯 합니다. 제게 대학부는 그렇게 나눔과 실천으로 사랑을 배우고 다짐하며, 그 사랑을 실전인 우리네 일상에서 행할 수 있는 힘을 충전 받고 다져질 수 있는 공동체로 남아 있습니다. 


                    </p>
                    
                    <p>
                        <span className="text-highlight">내가 생각하는 리더십</span><br></br>
                        믿음과 사랑의 선배들을 통해 흐르는 사랑을 다짐하게 되었고, 저는 그 흘러가는 사랑에서 사랑의 리더십이 비롯된다고 바라보게 되었습니다.<br/>
                        그러기에 더 많이 듣고, 더 많이 살펴보면서도 자신의 중심을 단단하게 지킬 수 있는 모습에서 리더십을 새깁니다. 어느 한쪽으로 치우치지 않고 고루 눈길과 귀를 열어둘 수 있는 감각의 여유를, 사랑이 고이지 않고 흐를 수 있도록 부단히 보듬을 수 있는 마음의 여유를 구하며 나아가야 하는 자리라고 생각하였습니다. 동시에 세상의 기준에 말하는 착한 사람, 바른 사람이 아닌, 하나님께서 말씀하시는 선하고 자녀의 삶을 살아가는 구할 수 있는 단단함을 품는 자리라고 생각합니다.<br/>
                        무엇보다도 사역이 하나님보다 앞서지 않고, 사람이 하나님보다 앞서지 않는 중심을 기억할 수 있는 힘을 구하며 나아가야 한다고 바라봅니다. 여러 사람에게 보여지는 자리인 만큼, 리더십의 하나님을 사랑하는 마음과 그 사랑을 실천하는 삶을 살아가며 선한 영향력을 올곧게 전달해주고 보여줄 수 있는 역할을 맡게 되는 것 같습니다. 그래서 리더십은 보이지 않는 곳에서의 섬김을 마다하지 않고, 우리가 함께 다양한 이야기에 같이 울고 웃으며 기도해줄 수 있도록 서로를 연결해주는 역할을 새기게 하는 자리인 듯 합니다.<br/>
                        하나님께서는 각 자리에 필요한 사람을 부르시고 그 자리에 필요한 능력을 넉넉히 채워 주실 분이십니다. 앞으로 세워질 리더십을 위한 하나님의 계획을 바라보며 함께 기도함으로 나아가면 좋겠습니다.
                                            
                    </p>

                    <p>
                        <span className="text-highlight">대학부에 대해 품고 있는 비전</span><br></br>
                        교회 안에서만 사랑하는 것이 아니라, 사랑이 어려운 곳에서 사랑을 선포할 수 있는 마음을 서로를 하여금 다질 수 있는 공동체가 되기를 소망합니다. 우리가 서로 하나님의 성전임을 상기시켜주고, 일상에서도 그리스도의 자녀로 살아갈 수 있도록 독려해줄 수 있는 성숙한 사랑의 모임으로 나아갈 수 있기를 바라봅니다. 그렇게 함께 깊은 신앙으로 성장할 수 있는 공동체가 되면 좋겠습니다.<br/>
                        사랑이 긴밀히 연결되어 있는 이 공동체의 사슬 가운데, 누구든지 함께하고 싶은 이들과 함께 연결될 수 있는 그런 헐겁고도 강한 사랑의 공동체를 바라봅니다. 방황하는 이들에게 손을 내밀어줄 수 있고, 고통과 슬픔을 홀로 감당하고 있는 이들을 살펴볼 수 있는 공동체가 되어, 모난 세상 속에 둥근 공동체가 가능하다는 것을 대학부를 통해 역사하시길 소망합니다.<br/>
                        대학부를 사랑하시는 하나님께서 가장 선한 길로 인도해주실 것입니다. 지금까지 사랑으로 역사하신 하나님께서, 앞으로의 대학부도 사랑으로 이끌어 주실 것입니다.  

                    </p>

                    <p>
                        <span className="text-highlight"></span><br></br>
                    </p>
                    <div className="social">
                        <a href="https://youtu.be/oNHtXMgSXU0?t=2m32s">
                            <i><FontAwesomeIcon icon={faYoutube} /></i>
                        </a>
                    </div>
                </div>
            </Container>


        </div>

    );
}


export default Lee;
