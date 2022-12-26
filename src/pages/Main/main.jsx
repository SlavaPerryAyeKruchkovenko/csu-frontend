import React from 'react';
import Header from '@Components/Header/header.jsx';
import Slider from '@Components/Slider/slider.jsx';
import Service from '@Components/Service/service';
import Footer from '@Components/Footer/footer.jsx';
import './main.less';
import { API_STATUS, ApiManager } from '@Helpers/apiManager';
import RegisterPortal from '@Components/Portal/registerPortal';
import RegisterForm from '@Components/RegisterForm/registerForm';

const Main = () => {
    const apiManager = new ApiManager(API_STATUS.DEBUG);
    const sliders = apiManager.slides;
    const services = apiManager.services;
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="main-page">
            <div className="title">
                <Header openModal={() => setIsOpen(true)} />
                <Slider slides={sliders} />
            </div>
            <div className="information-block">
                <h2 className="information-title">5 шагов к заявке</h2>
                <Service services={services} />
            </div>
            <div className="other-info">
                <Footer />
            </div>
            {isOpen ? (
                <RegisterPortal>
                    <RegisterForm
                        closeModal={(e) => {
                            setIsOpen(false);
                        }}
                    />
                </RegisterPortal>
            ) : (
                <div />
            )}
        </div>
    );
};

export default Main;
