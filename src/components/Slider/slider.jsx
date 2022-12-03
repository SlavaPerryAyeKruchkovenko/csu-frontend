import React, { useState } from 'react';
import _ from 'lodash';
import './slider.less';

const Slider = (props) => {
    const { sliders } = props;
    const [slide, setSlide] = useState(sliders[0]);
    const nextSlide = () => {
        const index = _.findLastIndex(sliders, (x) => x.id() === slide.id());
    };
    return (
        <div className="container-slider">
            {sliders.map((item, index) => {
                return (
                    <div
                        key={item.id}
                        className={
                            slide.id === item.id ? 'slide active-anim' : 'slide'
                        }
                    >
                        <img src={item.image} />
                    </div>
                );
            })}

            <div className="container-dots">
                {sliders.map((item, index) => (
                    <div
                        key={index}
                        className={slide.id === item.id ? 'dot active' : 'dot'}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
