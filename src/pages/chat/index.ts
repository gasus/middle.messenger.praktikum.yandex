import { chatListWrapper } from '../../components/chatListWrapper/index';
import { app } from '../../main';
import './style.less';

export const renderChat = () => {
    const leftBlock = chatListWrapper();

    app.appendChild(leftBlock);
};