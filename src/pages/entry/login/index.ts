import { entryWrapper } from '../../../components/entryWrapper/index';
import { entryHeader } from '../../../components/entryHeader/index';
import { entryForm } from '../../../components/entryForm/index';
import { entryFooter } from '../../../components/entryFooter/index';
import { entryInput } from '../../../components/entryInput/index';
import { customButton } from '../../../components/customButton/index';
import { InputData } from '../../../types/InputData';
import { EntryPageProps } from '../../../types/EntryPageProps';
import { changeUrl } from '../../../utils/changeUrl/index';

type Props = {
    element: HTMLElement;
    changeTabHandler: (entryView: EntryPageProps) => void;
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
    customButton({ element: footer, label: 'Авторизоваться* (без логина и пароля)', classType: 'blue-white', onClick: () => changeUrl('chat') });
    customButton({ element: footer, label: 'Нет аккаунта?', classType: 'white-blue', onClick: () => changeTabHandler({ entryView: 'registration' }) });

    wrapper.appendChild(header);
    wrapper.appendChild(form);
    wrapper.appendChild(footer);

    element.appendChild(wrapper);
};