import { mockChanels } from '../../mocks/mockChanels';
import { chatChanelAvatar } from '../chatChanelAvatar/index';
import { chatChanelName } from '../chatChanelName/index';
import './style.less';

type Props = {
    id: string;
};

export const chatMainHeader = ({ id }: Props) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'chat-main-header-wrapper';

    console.log(mockChanels);

    const mockItem = mockChanels.find((i) => i.id === id);
    const img = mockItem?.img || '';
    const chanelName = mockItem?.chanelName || '';

    const avatar = chatChanelAvatar({ img });
    const name = chatChanelName({ chanelName });

    wrapper.appendChild(avatar);
    wrapper.appendChild(name);

    return wrapper;
};