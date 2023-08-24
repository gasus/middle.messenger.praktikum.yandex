import './style.less';

type Props = {
    element: HTMLElement;
    label: string;
    classType: 'blue-white' | 'white-blue' | 'white-red';
    withoutMargin?: boolean;
    link?: string;
    onClick?: () => void;
};

export const customButton = ({ element, label, classType, withoutMargin, link, onClick }: Props) => {
    const button = document.createElement('button');
    button.textContent = label;
    const withoutMarginClass = withoutMargin ? 'button-without-margin' : undefined;
    button.className = `button button-${classType} ${withoutMarginClass}`;

    // TODO: Сомнительный момент что навешивается сразу 2 eventListener
    onClick && button.addEventListener("click", () => {
        onClick?.();
    });

    link && button.addEventListener("click", () => {
        window.location.href = link;
    });

    element.appendChild(button);
};