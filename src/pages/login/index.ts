import { entryWrapper } from '../../components/entryWrapper/index';
import { entryHeader } from '../../components/entryHeader/index';
import { entryForm } from '../../components/entryForm/index';
import { entryFooter } from '../../components/entryFooter/index';
import { entryInput } from '../../components/entryInput/index';
import { customButton } from '../../components/customButton/index';
import { InputData } from '../../types/InputData';

type Props = {
    element: HTMLElement;
    changeTabHandler: (isRegistration: { isRegistration?: boolean }) => void;
};

const formConfig: InputData[] = [
    { label: 'Логин', name: 'login', type: 'text' },
    { label: 'Пароль', name: 'password', type: 'password' },
];

export const getLoginPage = ({ element, changeTabHandler }: Props) => {
    const wrapper = entryWrapper();

    const header = entryHeader({ label: 'Вход' });

    const form = entryForm();
    formConfig.forEach((i) => {
        entryInput({ element: form, ...i });
    });

    const footer = entryFooter();
    customButton({ element: footer, label: 'Авторизоваться', classType: 'blue-white' });
    customButton({ element: footer, label: 'Нет аккаунта?', classType: 'white-blue', onClick: () => changeTabHandler({ isRegistration: true }) });

    wrapper.appendChild(header);
    wrapper.appendChild(form);
    wrapper.appendChild(footer);

    element.appendChild(wrapper);
};