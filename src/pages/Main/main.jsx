import React from 'react';
import Header from '@Components/Header/header.jsx';
import Slider from '@Components/Slider/slider.jsx';
import Slide from '../../models/slide';
import car from '@Assets/images/s1.png';
import board from '@Assets/images/s2.png';
import './main.less';

const Main = () => {
    const sliders = [
        new Slide(
            1,
            `Срочная доставка день в день`,
            'Для тех, кто не может ждать у нас есть услуга срочной курьерской доставки корреспондеции и других видов отправлений.',
            car,
            true
        ),
        new Slide(
            2,
            `Подписание договора за 1 час`,
            'В течение часа наш курьер заберет вашу посылку и подпишет с Вами договор о предоставлении услуг.',
            board,
            false
        ),
        new Slide(
            3,
            `Подписание договора за 1 час`,
            'В течение часа наш курьер заберет вашу посылку и подпишет с Вами договор о предоставлении услуг.',
            board,
            false
        ),
        new Slide(
            4,
            `Подписание договора за 1 час`,
            'В течение часа наш курьер заберет вашу посылку и подпишет с Вами договор о предоставлении услуг.',
            board,
            false
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
