import { errorInfo } from '../../components/errorInfo/index';
import '../../style.less'; // TODO: Стили из корня, вероятно не совсем верно

const getError500 = (element: HTMLElement) => {
    const error = errorInfo({ number: '500', description: 'Мы уже фиксим' });

    element.appendChild(error);
};

getError500(document.querySelector<HTMLElement>('#app')!);