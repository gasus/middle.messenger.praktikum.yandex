import './style.less';

type Props = {
    element: HTMLElement;
    label: string;
    classType: 'blue' | 'white';
    link?: string;
};

const addButton = ({ element, label, classType, link }: Props) => {
    const button = document.createElement('button');
    button.textContent = label;
    button.className = `button button-${classType}`;

    link && button.addEventListener("click", () => {
        window.location.href = link;
    });


    element.appendChild(button);
};

export default addButton;