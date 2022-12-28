import React from 'react';

import './header.less';
import logo from '@Assets/images/logo.png';
import phone from '@Assets/images/phone.svg';
const Header = ({ openModal, isAdminPage }) => {
    const getMenuClass = () => {
        return `${isAdminPage ? 'admin-menu' : ''} menu`;
    };
    return (
        <header className="header">
            <div className="header-block">
                <nav className={getMenuClass()}>
                    <div className="sub-menu left-menu">
                        <img src={logo} className="logo" />
                        <div className="separator" />
                        <span className="info-link">
                            Курьерская служба доставки
                        </span>
                    </div>
                    <div className="sub-menu wrapper">
                        <a href="tel: +79090231251" className="phone-link">
                            <img src={phone} />
                            <span className="phone">8 (909) 023-12-51</span>
                        </a>
                        <button className="log-in-btn" onClick={openModal}>
                            Вход
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
