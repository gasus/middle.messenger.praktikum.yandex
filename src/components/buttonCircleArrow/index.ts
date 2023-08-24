import './style.less';

type Props = {
    element: HTMLElement;
    destination: 'right' | 'left';
    link?: string;
};

const addButtonCircleArrow = ({ element, destination, link }: Props) => {
    const button = document.createElement('button');
    button.textContent = '➔';
    button.className = `button-circle-arrow button-circle-arrow-${destination}`;

    link && button.addEventListener("click", () => {
        window.location.href = link;
    });


    element.appendChild(button);
};

export default addButtonCircleArrow;