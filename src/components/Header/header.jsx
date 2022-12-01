import React from 'react';

import './header.less';
import logo from '@Assets/images/logo.png';
import phone from '@Assets/images/phone.svg';
const Header = () => {
    return (
        <header className="header">
            <div className="header-block">
                <nav className="menu">
                    <div className="sub-menu">
                        <img src={logo} className="logo" />
                        <span className="separator">|</span>
                        <a className="info-link" href="#">
                            Курьерская служба доставки
                        </a>
                    </div>
                    <div className="sub-menu">
                        <a href="#" className="phone-link">
                            <img src={phone} />
                            <span className="phone">8 (909) 023-12-51</span>
                        </a>
                        <button className="log-in-btn">Вход</button>
                    </div>
                </nav>
                <div>
                    <h1>Срочная доставка день в день</h1>
                </div>
            </div>
        </header>
    );
};

export default Header;
