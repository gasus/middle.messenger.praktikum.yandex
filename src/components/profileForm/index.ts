import { UserData } from '../../types/UserData';
import { profileInput } from '../profileInput/index';
import './style.less';

type Props = {
    data: UserData[];
    isEdit?: boolean;
};

export const profileForm = ({ data, isEdit }: Props) => {
    const form = document.createElement('form');
    form.className = `profile-form`;

    data.forEach((i) => {
        const { label, name, type, value } = i;
        profileInput({ element: form, label: label, name: name, type: type, value: value, disabled: !isEdit });
    });

    return form;
};