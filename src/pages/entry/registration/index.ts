import { entryWrapper } from '../../../components/entryWrapper/index';
import { entryHeader } from '../../../components/entryHeader/index';
import { entryForm } from '../../../components/entryForm/index';
import { entryFooter } from '../../../components/entryFooter/index';
import { customButton } from '../../../components/customButton/index';
import { entryInput } from '../../../components/entryInput/index';
import { InputData } from '../../../types/InputData';
import { EntryPageProps } from '../../../types/EntryPageProps';

type Props = {
    element: HTMLElement;
    changeTabHandler: (entryView: EntryPageProps) => void;
};

const formConfig: InputData[] = [
    { label: 'Почта', name: 'email', type: 'text' },
    { label: 'Логин', name: 'login', type: 'text' },
    { label: 'Имя', name: 'first_name', type: 'text' },
    { label: 'Фамилия', name: 'second_name', type: 'text' },
    { label: 'Телефон', name: 'phone', type: 'text' },
    { label: 'Пароль', name: 'password', type: 'password' },
    { label: 'Пароль (еще раз)', name: 'password', type: 'password' },
];

export const getRegistrationPage = ({ element, changeTabHandler }: Props) => {
    const wrapper = entryWrapper();

    const header = entryHeader({ label: 'Регистрация' });

    const form = entryForm();
    formConfig.forEach((i) => {
        entryInput({ element: form, ...i });
    });

    const footer = entryFooter();
    customButton({ element: footer, label: 'Зарегистрироваться', classType: 'blue-white' });
    customButton({ element: footer, label: 'Войти', classType: 'white-blue', onClick: () => changeTabHandler({ entryView: 'login' }) });

    wrapper.appendChild(header);
    wrapper.appendChild(form);
    wrapper.appendChild(footer);

    element.appendChild(wrapper);
};