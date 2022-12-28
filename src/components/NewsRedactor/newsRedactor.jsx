import React, { useState } from 'react';

import './newsRedactor.less';
import imageBtn from '@Assets/images/image.png';
import NewsImage from '@Models/newsImage';
import closeBtn from '@Assets/images/Shape.svg';

const NewsRedactor = () => {
    const [image, setImage] = useState(null);
    const [text, setText] = useState('');
    const [errorText, setErrorText] = useState('');
    const [isCounterVisible, setIsCounterVisible] = useState(false);
    const fileInput = React.createRef();
    const removeImage = () => {
        setErrorText('');
        setImage(null);
    };
    const triggerInput = () => {
        fileInput.current.click();
    };
    const changeText = (e) => {
        e.target.classList.remove('news-text-error');
        setText(e.target.value);
        if (e.target.value.length <= 150) {
            const counter = document.getElementById('counter');
            if (counter.classList.contains('red-alert')) {
                counter.classList.remove('red-alert');
            }
        }
    };
    const getFormStyle = () => {
        return `image-form ${
            !isCounterVisible ? 'image-form-without-counter' : ''
        }`;
    };
    const addImage = () => {
        const inputValue = fileInput.current.value;
        const validator = new RegExp('.*.(jpg|jpeg|png)');
        if (validator.test(inputValue)) {
            const block = document.createElement('div');
            const img = new Image();
            img.addEventListener('load', () => {
                block.appendChild(img);
                if (img.width === 270 && img.height === 270) {
                    const userImage = new NewsImage(
                        fileInput.current.files[0].name,
                        URL.createObjectURL(fileInput.current.files[0])
                    );
                    setImage(userImage);
                } else {
                    setErrorText('Неправельный размер изображения');
                }
            });
            img.src = URL.createObjectURL(fileInput.current.files[0]);
            block.remove();
        } else {
            setErrorText('Неверный формат изображения');
        }
    };
    const submitNews = (e) => {
        e.preventDefault();

        if (!text.length) {
            const textArea = document.getElementById('news-text');
            textArea.classList.add('news-text-error');
            return false;
        } else if (text.length > 150) {
            const counter = document.getElementById('counter');
            counter.classList.add('red-alert');
            return false;
        }

        return false;
    };
    return (
        <form method="post" className="news-form" onSubmit={submitNews}>
            <h1 className="title news-title">Добавить новость</h1>
            <span className="description news-description">
                Введите текст новости, а также приложите изображение (размер:
                270х270px)
            </span>
            <div className="text-block">
                <textarea
                    className="news-text"
                    placeholder="Введите текст новости"
                    onChange={changeText}
                    value={text}
                    minLength="3"
                    id="news-text"
                    onFocus={() => setIsCounterVisible(true)}
                    onBlur={() =>
                        !text.length ? setIsCounterVisible(false) : ''
                    }
                />
                {isCounterVisible ? (
                    <span className="letter-counter" id="counter">
                        символов: {text.length}/150
                    </span>
                ) : (
                    ''
                )}
            </div>
            <div className={getFormStyle()}>
                <div className="news-input" onClick={triggerInput}>
                    <img src={imageBtn} />
                    <input
                        type="file"
                        className="image-input"
                        ref={fileInput}
                        onChange={addImage}
                    />
                    <label className="image-input-text">
                        + Добавить изображение
                    </label>
                </div>
                {image ? (
                    <div className="image-wrapper">
                        <img src={image.image} alt="" className="news-logo" />
                        <span className="image-title">{image.title}</span>
                        <img
                            src={closeBtn}
                            alt="close"
                            className="image-wrapper-delete"
                            onClick={removeImage}
                        />
                    </div>
                ) : errorText ? (
                    <span className="error-text">{errorText}</span>
                ) : (
                    ''
                )}
            </div>

            <button type="submit" className="submit-btn news-btn">
                Войти
            </button>
        </form>
    );
};

export default NewsRedactor;
