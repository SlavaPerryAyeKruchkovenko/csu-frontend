import React from 'react';
import * as ReactDOM from 'react-dom';
import './registerPortal.less';

const RegisterPortal = ({ children }) => {
    const modalRoot = document.getElementById('modal-root');
    const [el] = React.useState(() => {
        return document.createElement('div');
    });

    React.useEffect(() => {
        el.classList.add('portal-wrapper');
        modalRoot.appendChild(el);
        return () => {
            modalRoot.removeChild(el);
        };
    }, []);

    return ReactDOM.createPortal(children, el);
};

export default RegisterPortal;
