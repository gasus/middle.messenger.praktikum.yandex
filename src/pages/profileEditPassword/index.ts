import { goBackBlock } from '../../components/goBackBlock/index';
import { profileInfo } from '../../components/profileInfo/index';
import './style.less';
import '../../style.less'; // TODO: Стили из корня, вероятно не совсем верно

const getProfileEditPassword = (element: HTMLElement) => {
    const leftBlock = goBackBlock({});
    const rightBlock = profileInfo({ isEdit: true, isEditPassword: true });

    element.appendChild(leftBlock);
    element.appendChild(rightBlock);
};

getProfileEditPassword(document.querySelector<HTMLElement>('#profile')!);