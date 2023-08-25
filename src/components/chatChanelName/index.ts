import { ChanelPreview } from '../../types/ChanelPreview';
import './style.less';

type Props = Pick<ChanelPreview, 'chanelName'>;

export const chatChanelName = ({ chanelName }: Props) => {
    const chanelPreviewName = document.createElement('div');
    chanelPreviewName.className = 'chanel-name';
    chanelPreviewName.textContent = chanelName;

    return chanelPreviewName;
};
