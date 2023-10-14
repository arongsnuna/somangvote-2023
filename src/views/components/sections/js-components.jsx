import React, { useState } from 'react';
import {
    Button, Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Container,
    Row,
    Col
} from 'reactstrap';

// import img1 from '../../../assets/images/ui/img4.jpg';
// import img2 from '../../../assets/images/ui/img5.jpg';
// import img3 from '../../../assets/images/ui/img6.jpg';

const items = [
    {
        src: 'image/kim1.jpeg',
        altText: '',
        caption: ''
    },
    {
        src: 'image/kim1.jpeg',
        altText: '',
        caption: ''
    }
];

const JsComponents = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
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
            <img className="img-circle" width="250" src={item.src} alt={item.altText} />
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
    ));

    return (
        <div>
            <Container>
                <Row className="m-b-40">
                    <Col lg="4" className="text-center m-b-30">
                        <Carousel
                            activeIndex={activeIndex}
                            next={next.bind(null)}
                            previous={previous.bind(null)}
                        >
                            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex.bind(null)} />
                            {slides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous.bind(null)} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={next.bind(null)} />
                        </Carousel>
                        
                    </Col>            

                </Row>
            </Container>
        </div>
    );
}

export default JsComponents;
