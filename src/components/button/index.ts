import './style.less';

type Props = {
    element: HTMLElement;
    label: string;
    classType: 'blue' | 'white';
};

const addButton = ({ element, label, classType }: Props) => {
    const button = document.createElement('button');
    button.textContent = label;
    button.className = `button button-${classType}`;
    element.appendChild(button);
};

export default addButton;