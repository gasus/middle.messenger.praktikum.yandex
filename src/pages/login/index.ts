import addButton from '../../components/button/index';
import addInput from '../../components/input/index';
import './style.less';

const getLoginPage = (element: HTMLButtonElement) => {
    const login = document.createElement('div');
    login.className = 'login';

    const loginHeader = document.createElement('div');
    loginHeader.className = 'login-header';
    loginHeader.textContent = 'Вход';

    const loginForm = document.createElement('form');
    loginForm.className = 'login-form';
    addInput({ element: loginForm, label: 'Логин', name: 'login', type: 'text' });
    addInput({ element: loginForm, label: 'Пароль', name: 'password', type: 'password' });

    const loginFooter = document.createElement('div');
    loginFooter.className = 'login-footer';
    addButton({ element: loginFooter, label: 'Авторизоваться', classType: 'blue' });
    addButton({ element: loginFooter, label: 'Нет аккаунта?', classType: 'white' });

    login.appendChild(loginHeader);
    login.appendChild(loginForm);
    login.appendChild(loginFooter);

    element.appendChild(login);
};

export default getLoginPage;