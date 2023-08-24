import { goBackBlock } from '../../components/goBackBlock/index';
import { profileInfo } from '../../components/profileInfo/index';
import './style.less';
import '../../style.less'; // TODO: Стили из корня, вероятно не совсем верно

const getProfile = (element: HTMLElement) => {
    const leftBlock = goBackBlock({});
    const rightBlock = profileInfo({});

    element.appendChild(leftBlock);
    element.appendChild(rightBlock);
};

getProfile(document.querySelector<HTMLElement>('#profile')!);