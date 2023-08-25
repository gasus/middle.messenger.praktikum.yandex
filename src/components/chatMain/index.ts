import { empty } from '../empty/index';
import './style.less';

export const chatMain = ({ chatId }: { chatId?: string }) => {
    if (chatId) {
        const wrapper = document.createElement('div');
        wrapper.className = 'chat-main';
        wrapper.textContent = chatId;

        return wrapper;
    } else {
        return empty('Выберите чат чтобы отправить сообщение');
    };
};