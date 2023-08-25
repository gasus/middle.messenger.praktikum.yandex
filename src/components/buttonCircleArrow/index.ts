import './style.less';

type Props = {
    element: HTMLElement;
    destination: 'right' | 'left';
    onClick: () => void;
};

const addButtonCircleArrow = ({ element, destination, onClick }: Props) => {
    const button = document.createElement('button');
    button.textContent = '➔';
    button.className = `button-circle-arrow button-circle-arrow-${destination}`;

    button.addEventListener("click", () => {
        onClick();
    });


    element.appendChild(button);
};

export default addButtonCircleArrow;