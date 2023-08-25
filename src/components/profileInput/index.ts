import { InputData } from '../../types/InputData';
import './style.less';

type Props = InputData & {
    element: HTMLElement;
    disabled?: boolean;
};

export const profileInput = ({ element, label, type, name, value, disabled }: Props) => {
    const inputWrapper = document.createElement('div');
    inputWrapper.className = `profile-input-wrapper`;

    const inputLabel = document.createElement('label');
    inputLabel.className = `profile-input-label`;
    inputLabel.setAttribute('for', name);
    inputLabel.textContent = label;

    const input = document.createElement('input');
    input.className = `profile-input`;
    input.name = name;
    input.type = type;
    if (value) input.value = value;
    if (disabled) input.disabled = true;

    inputWrapper.appendChild(inputLabel);
    inputWrapper.appendChild(input);

    element.appendChild(inputWrapper);
};
