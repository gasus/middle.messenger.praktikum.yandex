import { InputData } from '../../types/InputData';
import { profileInput } from '../profileInput/index';
import './style.less';

type Props = {
    data: InputData[];
    isEdit?: boolean;
};

export const profileForm = ({ data, isEdit }: Props) => {
    const form = document.createElement('form');
    form.className = `profile-form`;

    data.forEach((i) => {
        profileInput({ element: form, disabled: !isEdit, ...i });
    });

    return form;
};