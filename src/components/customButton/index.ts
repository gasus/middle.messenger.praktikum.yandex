import './style.less';

type Props = {
    element: HTMLElement;
    label: string;
    classType: 'blue-white' | 'white-blue' | 'white-red' | 'white-gray';
    withoutMargin?: boolean;
    onClick?: () => void;
};

export const customButton = ({ element, label, classType, withoutMargin, onClick }: Props) => {
    const button = document.createElement('button');
    button.textContent = label;
    const withoutMarginClass = withoutMargin ? 'button-without-margin' : undefined;
    button.className = `button button-${classType} ${withoutMarginClass}`;

    button.addEventListener("click", () => {
        onClick?.();
    });

    element.appendChild(button);
};
