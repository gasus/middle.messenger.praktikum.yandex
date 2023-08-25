import { mockChanels } from '../../mocks/mockChanels';
import { chatChanelPreview } from '../chatChanelPreview/index';
import { empty } from '../empty/index';
import './style.less';

type Props = {
    id?: string;
    searchValue?: string;
    onChangeChat: ({ id }: { id?: string }) => void;
};

export const chatChanels = ({ searchValue, onChangeChat, id }: Props) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'chat-chanels';

    const filteredChanels = searchValue ? mockChanels?.filter((i) => {
        const chanelName = i.chanelName.trim().toLocaleLowerCase();
        const search = searchValue.trim().toLocaleLowerCase();
        return chanelName.includes(search)
    }) : mockChanels;

    if (filteredChanels.length) {
        filteredChanels.forEach((i) => {
            chatChanelPreview({ element: wrapper, ...i, onChangeChat, isSelected: i.id === id });
        });
    } else {
        wrapper.appendChild(empty());
    }

    return wrapper;
};