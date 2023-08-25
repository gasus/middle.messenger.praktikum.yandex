import { changeUrl } from '../../utils/changeUrl/index';
import { customButton } from '../customButton/index';
import './style.less';

export const chatToProfileButton = () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'chat-to-profile-button-wrapper';

    customButton({ element: wrapper, label: 'Профиль >', classType: 'white-gray', onClick: () => changeUrl('?page=profile') });

    return wrapper;
};
