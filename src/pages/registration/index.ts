import { entryWrapper } from '../../components/entryWrapper/index';
import { entryHeader } from '../../components/entryHeader/index';
import { entryForm } from '../../components/entryForm/index';
import { entryFooter } from '../../components/entryFooter/index';
import customButton from '../../components/customButton/index';
import entryInput from '../../components/entryInput/index';
import '../../style.less'; // TODO: Стили из корня, вероятно не совсем верно

const getRegistrationPage = (element: HTMLElement) => {
    const wrapper = entryWrapper();

    const header = entryHeader({ label: 'Регистрация' });

    const form = entryForm();
    entryInput({ element: form, label: 'Почта', name: 'email', type: 'text' });
    entryInput({ element: form, label: 'Логин', name: 'login', type: 'text' });
    entryInput({ element: form, label: 'Имя', name: 'first_name', type: 'text' });
    entryInput({ element: form, label: 'Фамилия', name: 'second_name', type: 'text' });
    entryInput({ element: form, label: 'Телефон', name: 'phone', type: 'text' });
    entryInput({ element: form, label: 'Пароль', name: 'password', type: 'password' });
    entryInput({ element: form, label: 'Пароль (еще раз)', name: 'password', type: 'password' });

    const footer = entryFooter();
    customButton({ element: footer, label: 'Зарегистрироваться', classType: 'blue' });
    customButton({ element: footer, label: 'Войти', classType: 'white', link: '/' });

    wrapper.appendChild(header);
    wrapper.appendChild(form);
    wrapper.appendChild(footer);

    element.appendChild(wrapper);
};

getRegistrationPage(document.querySelector<HTMLElement>('#app')!);