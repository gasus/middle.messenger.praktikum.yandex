import { entryWrapper } from '../../components/entryWrapper/index';
import { entryHeader } from '../../components/entryHeader/index';
import { entryForm } from '../../components/entryForm/index';
import { entryFooter } from '../../components/entryFooter/index';
import addButton from '../../components/button/index';
import addInput from '../../components/input/index';

const getLoginPage = (element: HTMLElement) => {
    const wrapper = entryWrapper();

    const header = entryHeader({ label: 'Вход' });

    const form = entryForm();
    addInput({ element: form, label: 'Логин', name: 'login', type: 'text' });
    addInput({ element: form, label: 'Пароль', name: 'password', type: 'password' });

    const footer = entryFooter();
    addButton({ element: footer, label: 'Авторизоваться', classType: 'blue' });
    addButton({ element: footer, label: 'Нет аккаунта?', classType: 'white', link: '/registration.html' });

    wrapper.appendChild(header);
    wrapper.appendChild(form);
    wrapper.appendChild(footer);

    element.appendChild(wrapper);
};

export default getLoginPage;