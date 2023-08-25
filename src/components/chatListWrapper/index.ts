import { chatChanels } from '../chatChanels/index';
import { chatSearch } from '../chatSearch/index';
import { chatToProfileButton } from '../chatToProfileButton/index';
import './style.less';

type Props = {
    id?: string;
    onChangeChat: ({ id }: { id?: string }) => void;
};

export const chatListWrapper = ({ onChangeChat, id }: Props) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'chat-list-wrapper';

    const getChatChanels = ({ isFirstRender, value }: { isFirstRender?: boolean; value?: string }) => {
        if (!isFirstRender) wrapper.lastChild?.remove();
        const chanels = chatChanels({ searchValue: value, onChangeChat, id });
        wrapper.appendChild(chanels);
    };

    const link = chatToProfileButton();
    const search = chatSearch({ searchChats: (value) => getChatChanels({ value }) });

    wrapper.appendChild(link);
    wrapper.appendChild(search);
    getChatChanels({ isFirstRender: true });

    return wrapper;
};
