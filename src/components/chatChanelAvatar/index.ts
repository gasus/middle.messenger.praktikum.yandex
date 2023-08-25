import { ChanelPreview } from '../../types/ChanelPreview';
import './style.less';

type Props = Pick<ChanelPreview, 'img'>;

export const chatChanelAvatar = ({ img }: Props) => {
    const avatar = document.createElement('div');
    avatar.className = 'chat-chanel-avatar';
    avatar.style.backgroundColor = img;

    return avatar;
};
