import './style.less';

type Props = {
    element: HTMLElement;
    label: string;
    name: string;
    type: 'text' | 'password';
};

const addInput = ({ element, label, type, name }: Props) => {
    const inputWrapper = document.createElement('div');
    inputWrapper.className = `input-wrapper`;

    const inputLabel = document.createElement('label');
    inputLabel.className = `input-label`;
    inputLabel.setAttribute('for', name);
    inputLabel.textContent = label;
    inputLabel.style.visibility = 'hidden';

    const input = document.createElement('input');
    input.className = `input`;
    input.name = name;
    input.type = type;
    input.placeholder = label;

    const changeLabelVisibility = () => {
        if (input.value) {
            inputLabel.style.visibility = 'visible';
            inputLabel.style.opacity = '1';
        } else {
            inputLabel.style.visibility = 'hidden';
            inputLabel.style.opacity = '0';
        }
    };

    input.addEventListener('input', changeLabelVisibility);

    changeLabelVisibility();

    inputWrapper.appendChild(inputLabel);
    inputWrapper.appendChild(input);

    element.appendChild(inputWrapper);
};

export default addInput;