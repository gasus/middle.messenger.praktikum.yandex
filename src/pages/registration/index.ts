import { entryWrapper } from '../../components/entryWrapper/index';
import { entryHeader } from '../../components/entryHeader/index';
import { entryForm } from '../../components/entryForm/index';
import { entryFooter } from '../../components/entryFooter/index';
import addButton from '../../components/button/index';
import addInput from '../../components/input/index';
import '../../style.less'; // TODO: Стили из корня, вероятно не совсем верно

const getRegistrationPage = (element: HTMLElement) => {
    const wrapper = entryWrapper();

    const header = entryHeader({ label: 'Регистрация' });

    const form = entryForm();
    addInput({ element: form, label: 'Почта', name: 'email', type: 'text' });
    addInput({ element: form, label: 'Логин', name: 'login', type: 'text' });
    addInput({ element: form, label: 'Имя', name: 'firstName', type: 'text' });
    addInput({ element: form, label: 'Фамилия', name: 'secondName', type: 'text' });
    addInput({ element: form, label: 'Телефон', name: 'phone', type: 'text' });
    addInput({ element: form, label: 'Пароль', name: 'password', type: 'password' });
    addInput({ element: form, label: 'Пароль (еще раз)', name: 'aprovePassword', type: 'password' });

    const footer = entryFooter();
    addButton({ element: footer, label: 'Зарегистрироваться', classType: 'blue' });
    addButton({ element: footer, label: 'Войти', classType: 'white', link: '/' });

    wrapper.appendChild(header);
    wrapper.appendChild(form);
    wrapper.appendChild(footer);

    element.appendChild(wrapper);
};

getRegistrationPage(document.querySelector<HTMLElement>('#app')!);