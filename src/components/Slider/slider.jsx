import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import './slider.less';

const Slider = (props) => {
    const { sliders } = props;

    const [slide, setSlide] = useState(sliders[0]);

    /*useEffect(() => {
        const interval = setInterval(() => {
            let index = _.findLastIndex(sliders, (x) => x.id === slide.id) + 1;
            nextSlide(index);
        }, 5000);
        return () => clearInterval(interval); //This is important
    }, [slide, setSlide]);*/

    const nextSlide = (index) => {
        setSlide(sliders[index === sliders.length ? 0 : index]);
    };
    return (
        <div className="container-slider">
            {sliders.map((item, index) => {
                const sliderClass =
                    (slide.id === item.id
                        ? 'slide active-anim '
                        : 'slide ' + (slide.id > item.id ? 'next-slide' : '')) +
                    (item.needPadding ? '' : ' unboard-slide');
                return (
                    <div key={item.id} className={sliderClass}>
                        <div className="text-flow">
                            <h1 className="text-title">{item.title}</h1>
                            <span className="text-description">
                                {item.description}
                            </span>
                            <button className="delivery-btn">
                                Заказать доставку
                            </button>
                        </div>
                        <img src={item.image} />
                    </div>
                );
            })}

            <div className="container-dots">
                {sliders.map((item, index) => (
                    <div
                        onClick={() => nextSlide(index)}
                        key={index}
                        className={slide.id === item.id ? 'dot active' : 'dot'}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
