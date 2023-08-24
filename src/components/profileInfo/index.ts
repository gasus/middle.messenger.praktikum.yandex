import { InputData } from '../../types/InputData';
import { customButton } from '../customButton/index';
import { profileAvatar } from '../profileAvatar/index';
import { profileForm } from '../profileForm/index';
import './style.less';

type Props = {
    isEdit?: boolean;
    isEditPassword?: boolean;
};

const mockUserData: InputData[] = [
    { label: 'Почта', name: 'email', type: 'text', value: 'mail@ya.com' },
    { label: 'Логин', name: 'login', type: 'text', value: 'ololosha' },
    { label: 'Имя', name: 'first_name', type: 'text', value: 'Имя' },
    { label: 'Фамилия', name: 'second_name', type: 'text', value: 'Фамилия' },
    { label: 'Имя в чате', name: 'chat_name', type: 'text', value: 'OLOLOSHA' },
    { label: 'Телефон', name: 'phone', type: 'text', value: '7777777777' },
];

const mockPasswordData: InputData[] = [
    { label: 'Старый пароль', name: 'password', type: 'password' },
    { label: 'Новый пароль', name: 'password', type: 'password' },
    { label: 'Повторите новый пароль', name: 'password', type: 'password' },
];

export const profileInfo = ({ isEdit, isEditPassword }: Props) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'profile-info-wrapper';

    const content = document.createElement('div');
    content.className = 'profile-info-content';

    const avatar = profileAvatar({ userName: 'Пользователь' });
    content.appendChild(avatar);

    const form = profileForm({ data: isEditPassword ? mockPasswordData : mockUserData, isEdit: isEdit });
    content.appendChild(form);

    const footer = document.createElement('div');
    const footerAdditionalClassname = isEdit ? 'profile-info-footer-center' : undefined;
    footer.className = `profile-info-footer ${footerAdditionalClassname}`;

    if (!isEdit) {
        const footerSeparatorOne = document.createElement('div');
        footerSeparatorOne.className = 'profile-info-footer-separator';
        const footerSeparatorTwo = document.createElement('div');
        footerSeparatorTwo.className = 'profile-info-footer-separator';

        customButton({ element: footer, label: 'Изменить данные', classType: 'white-blue', withoutMargin: true });
        footer.appendChild(footerSeparatorOne);
        customButton({ element: footer, label: 'Изменить пароль', classType: 'white-blue', withoutMargin: true });
        footer.appendChild(footerSeparatorTwo);
        customButton({ element: footer, label: 'Выйти', classType: 'white-red', withoutMargin: true, link: '/' });
    } else {
        customButton({ element: footer, label: 'Сохранить', classType: 'blue-white' });
    }

    content.appendChild(footer);

    wrapper.appendChild(content);

    return wrapper;
};