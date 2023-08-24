import { entryWrapper } from '../../components/entryWrapper/index';
import { entryHeader } from '../../components/entryHeader/index';
import { entryForm } from '../../components/entryForm/index';
import { entryFooter } from '../../components/entryFooter/index';
import { entryInput } from '../../components/entryInput/index';
import { customButton } from '../../components/customButton/index';
import { InputData } from '../../types/InputData';

const formConfig: InputData[] = [
    { label: 'Логин', name: 'login', type: 'text' },
    { label: 'Пароль', name: 'password', type: 'password' },
];

const getLoginPage = (element: HTMLElement) => {
    const wrapper = entryWrapper();

    const header = entryHeader({ label: 'Вход' });

    const form = entryForm();
    formConfig.forEach((i) => {
        entryInput({ element: form, ...i });
    });

    const footer = entryFooter();
    customButton({ element: footer, label: 'Авторизоваться', classType: 'blue' });
    customButton({ element: footer, label: 'Нет аккаунта?', classType: 'white', link: '/registration.html' });

    wrapper.appendChild(header);
    wrapper.appendChild(form);
    wrapper.appendChild(footer);

    element.appendChild(wrapper);
};

export default getLoginPage;