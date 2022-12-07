import React from 'react';
import Header from '@Components/Header/header.jsx';
import Slider from '@Components/Slider/slider.jsx';
import Service from '@Components/Service/service';
import './main.less';
import { API_STATUS, ApiManager } from '@Helpers/apiManager';

const Main = () => {
    const apiManager = new ApiManager(API_STATUS.DEBUG);
    const sliders = apiManager.slides;
    const services = apiManager.services;
    return (
        <div className="main-page">
            <div className="title">
                <Header />
                <Slider sliders={sliders} />
            </div>
            <div className="information-block">
                <h2 className="information-title">5 шагов к заявке</h2>
                <Service services={services} />
            </div>
        </div>
    );
};

export default Main;
