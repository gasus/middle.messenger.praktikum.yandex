import { chatChanels } from '../chatChanels/index';
import './style.less';

export const chatListWrapper = () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'chat-list-wrapper';

    const chanels = chatChanels();

    wrapper.appendChild(chanels);

    return wrapper;
};