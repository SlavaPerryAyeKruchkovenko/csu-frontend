import React from 'react';
import Header from '@Components/Header/header.jsx';
import Footer from '@Components/Footer/footer.jsx';

import './admin.less';
import RegisterPortal from '@Components/Portal/registerPortal';
import RegisterForm from '@Components/RegisterForm/registerForm';
import NewsRedactor from '@Components/NewsRedactor/newsRedactor';

const Admin = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="admin-page ">
            <div className="header-block">
                <Header openModal={() => setIsOpen(true)} isAdminPage={true} />
            </div>
            <div className="news-block">
                <NewsRedactor />
            </div>
            <div className="footer-block">
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

export default Admin;
