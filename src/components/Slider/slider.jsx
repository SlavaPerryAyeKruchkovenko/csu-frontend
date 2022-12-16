import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import './slider.less';

const Slider = ({ slides }) => {
    const [slide, setSlide] = useState(slides[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            let index = _.findLastIndex(slides, (x) => x.id === slide.id) + 1;
            nextSlide(index);
        }, 5000);
        return () => clearInterval(interval);
    }, [slide, setSlide]);

    const nextSlide = (index) => {
        setSlide(slides[index === slides.length ? 0 : index]);
    };

    const getClassSlider = (item) => {
        return (
            (slide.id === item.id
                ? 'slide active-anim '
                : 'slide ' + (slide.id > item.id ? 'next-slide' : '')) +
            (item.needPadding ? '' : ' unboard-slide')
        );
    };
    return (
        <div className="container-slider">
            {slides.map((item, index) => {
                return (
                    <div key={item.id} className={getClassSlider(item)}>
                        <div className="text-flow">
                            <h1 className="text-title">{item.title}</h1>
                            <span className="text-description">
                                {item.description}
                            </span>
                            <button className="delivery-btn">
                                Заказать доставку
                            </button>
                        </div>
                        <img src={item.image} className="slider-image" />
                    </div>
                );
            })}

            <div className="container-dots">
                {slides.map((item, index) => (
                    <div
                        onClick={() => nextSlide(index)}
                        key={index}
                        className={`dot ${
                            slide.id === item.id ? 'active' : ''
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
