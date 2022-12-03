import React from 'react';
import Header from '@Components/Header/header.jsx';
import Slider from '@Components/Slider/slider.jsx';
import Slide from '../../models/slide';
import slide from '@Assets/images/s1.png';
import './main.less';

const Main = () => {
    const sliders = [
        new Slide(
            1,
            `Срочная доставка день в день`,
            'Для тех, кто не может ждать у нас есть услуга срочной курьерской доставки корреспондеции и других видов отправлений.',
            slide
        ),
    ];
    return (
        <div className="main-page">
            <div className="title">
                <Header />
                <Slider sliders={sliders} />
            </div>
        </div>
    );
};

export default Main;
