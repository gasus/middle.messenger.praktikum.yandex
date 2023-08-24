import { chatListWrapper } from '../../components/chatListWrapper/index';
import './style.less';
import '../../style.less'; // TODO: Стили из корня, вероятно не совсем верно

const getChat = (element: HTMLElement) => {
    const leftBlock = chatListWrapper();

    element.appendChild(leftBlock);
};

getChat(document.querySelector<HTMLElement>('#chat')!);