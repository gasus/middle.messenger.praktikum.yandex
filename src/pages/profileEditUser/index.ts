import { goBackBlock } from '../../components/goBackBlock/index';
import { profileInfo } from '../../components/profileInfo/index';
import './style.less';
import '../../style.less'; // TODO: Стили из корня, вероятно не совсем верно

const getProfileEditUser = (element: HTMLElement) => {
    const leftBlock = goBackBlock({});
    const rightBlock = profileInfo({ isEdit: true });

    element.appendChild(leftBlock);
    element.appendChild(rightBlock);
};

getProfileEditUser(document.querySelector<HTMLElement>('#profile')!);