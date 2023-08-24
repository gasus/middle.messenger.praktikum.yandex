import { customButton } from '../customButton/index';
import './style.less';

type Props = {
    number: string;
    description: string;
};

export const errorInfo = ({ number, description }: Props) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'error-info-wrapper';

    const errorNum = document.createElement('div');
    errorNum.className = 'error-info-number';
    errorNum.textContent = number;

    const errorDescription = document.createElement('div');
    errorDescription.className = 'error-info-description';
    errorDescription.textContent = description;


    wrapper.appendChild(errorNum);
    wrapper.appendChild(errorDescription);
    customButton({ element: wrapper, label: 'Назад к чатам', classType: 'white', link: '/' });

    return wrapper;
};