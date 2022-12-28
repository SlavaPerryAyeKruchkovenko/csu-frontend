import React from 'react';

import './registerForm.less';
import closeBtn from '@Assets/images/Shape.svg';

const RegisterForm = ({ closeModal }) => {
    const closeModalWindow = (e) => {
        if (e.target.classList.contains('form-container')) {
            closeModal();
        }
    };
    return (
        <div className="form-container" onClick={closeModalWindow}>
            <div className="form-block">
                <form
                    method="post"
                    className="message-box"
                    onSubmit={(e) => {
                        e.preventDefault();
                        return false;
                    }}
                >
                    <img
                        src={closeBtn}
                        className="close-btn"
                        onClick={closeModal}
                    />
                    <h1 className="title">Авторизация</h1>
                    <span className="form-description description">
                        Введите логин и пароль, чтобы войти в личный кабинет
                    </span>
                    <input
                        type="email"
                        className="form-input email-input"
                        placeholder="Логин"
                    />
                    <input
                        type="password"
                        minLength="3"
                        className="form-input password-input"
                        placeholder="Пароль"
                    />
                    <button className="submit-btn form-btn" type="submit">
                        Войти
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
