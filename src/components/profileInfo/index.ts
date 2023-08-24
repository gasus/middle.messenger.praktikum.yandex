import { InputData } from '../../types/InputData';
import { profileAvatar } from '../profileAvatar/index';
import { profileForm } from '../profileForm/index';
import './style.less';

type Props = {
    isEdit?: boolean;
};

const mockData: InputData[] = [
    { label: 'Почта', name: 'email', type: 'text', value: 'mail@ya.com' },
    { label: 'Логин', name: 'login', type: 'text', value: 'ololosha' },
    { label: 'Имя', name: 'first_name', type: 'text', value: 'Имя' },
    { label: 'Фамилия', name: 'second_name', type: 'text', value: 'Фамилия' },
    { label: 'Имя в чате', name: 'chat_name', type: 'text', value: 'OLOLOSHA' },
    { label: 'Телефон', name: 'phone', type: 'text', value: '7777777777' },
];

export const profileInfo = ({ isEdit }: Props) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'profile-info-wrapper';

    const content = document.createElement('div');
    content.className = 'profile-info-content';

    const avatar = profileAvatar({ userName: 'Пользователь' });
    content.appendChild(avatar);

    const form = profileForm({ data: mockData, isEdit: isEdit });
    content.appendChild(form);


    // // TODO: Временное подключение для отладки стилей
    // profileInput({ element: content, label: 'Почта', name: 'email', type: 'text', value: 'mail@ya.com', disabled: true });
    // profileInput({ element: content, label: 'Логин', name: 'login', type: 'text', value: 'ololosha', disabled: true });
    // profileInput({ element: content, label: 'Имя', name: 'first_name', type: 'text', value: 'Имя' });
    // profileInput({ element: content, label: 'Фамилия', name: 'second_name', type: 'text', value: 'Фамилия' });
    // profileInput({ element: content, label: 'Имя в чате', name: 'chat_name', type: 'text', value: 'OLOLOSHA' });
    // profileInput({ element: content, label: 'Телефон', name: 'phone', type: 'text', value: '7777777777' });

    wrapper.appendChild(content);

    return wrapper;
};