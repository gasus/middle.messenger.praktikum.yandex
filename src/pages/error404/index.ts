import { errorInfo } from '../../components/errorInfo/index';
import '../../style.less'; // TODO: Стили из корня, вероятно не совсем верно

const getError404 = (element: HTMLElement) => {
    const error = errorInfo({ number: '404', description: 'Не туда попали' });

    element.appendChild(error);
};

getError404(document.querySelector<HTMLElement>('#app')!);