import { chatListWrapper } from '../../components/chatListWrapper/index';
import { chatMain } from '../../components/chatMain/index';
import { app } from '../../main';

export const renderChat = () => {
    const onChangeChat = ({ id }: { id?: string }) => {
        app.innerHTML = '';

        const leftBlock = chatListWrapper({ onChangeChat, id });
        const rightBlock = chatMain({ chatId: id });

        app.appendChild(leftBlock);
        app.appendChild(rightBlock);
    };

    onChangeChat({});
};
