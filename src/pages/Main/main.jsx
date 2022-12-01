import React from 'react';
import Header from '@Components/Header/header.jsx';
import cat from '@Assets/images/cat.jpg';

import './main.less';

const Main = () => (
    <div className="main-page">
        <Header />
        <div>
            <div className="">
                <h1 className="">Срочная доставка день в день</h1>
                <h5 className="">
                    Для тех, кто не может ждать у нас есть услуга срочной
                    курьерской доставки корреспондеции и других видов
                    отправлений.
                </h5>
                <button className="deliver">Заказать доставку</button>
            </div>
        </div>
    </div>
);

export default Main;
