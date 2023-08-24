import './style.less';

type Props = {
    element: HTMLElement;
    label: string;
    classType: 'blue-white' | 'white-blue' | 'white-red';
    withoutMargin?: boolean;
    link?: string;
};

export const customButton = ({ element, label, classType, withoutMargin, link }: Props) => {
    const button = document.createElement('button');
    button.textContent = label;
    const withoutMarginClass = withoutMargin ? 'button-without-margin' : undefined;
    button.className = `button button-${classType} ${withoutMarginClass}`;

    link && button.addEventListener("click", () => {
        window.location.href = link;
    });


    element.appendChild(button);
};