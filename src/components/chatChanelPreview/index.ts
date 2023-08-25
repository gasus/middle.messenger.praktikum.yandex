import { ChanelPreview } from '../../types/ChanelPreview';
import { chatChanelAvatar } from '../chatChanelAvatar/index';
import { chatChanelName } from '../chatChanelName/index';
import './style.less';

type Props = ChanelPreview & {
    element: HTMLElement;
    isSelected: boolean;
    onChangeChat: ({ id }: { id?: string }) => void;
};

export const chatChanelPreview = ({ id, isSelected, element, img, chanelName, lastMessage, date, unreadCount, onChangeChat }: Props) => {
    const wrapper = document.createElement('div');
    wrapper.className = isSelected ? 'chanel-preview-wrapper chanel-preview-wrapper-selected' : 'chanel-preview-wrapper'; // TODO: Выбранный чат выделяется криво, надо

    wrapper.addEventListener("click", () => {
        onChangeChat({ id });
    });

    const chanelAvatar = chatChanelAvatar({ img });

    const chanelMessageWrapper = document.createElement('div');
    chanelMessageWrapper.className = 'chanel-preview-message-wrapper';

    const chanelPreviewName = chatChanelName({ chanelName });

    const chanelMessage = document.createElement('div');
    chanelMessage.className = 'chanel-preview-message';
    chanelMessage.textContent = lastMessage; // TODO: Добавить "Вы:" если пользователь является автором последнего сообщения, свойство lastMessageFromYou

    chanelMessageWrapper.appendChild(chanelPreviewName);
    chanelMessageWrapper.appendChild(chanelMessage);

    const chanelMessageInfoWrapper = document.createElement('div');
    chanelMessageInfoWrapper.className = 'chanel-preview-message-info-wrapper';

    const chanelMessageDate = document.createElement('div');
    chanelMessageDate.className = 'chanel-preview-message-date';
    chanelMessageDate.textContent = date; // TODO: Добавить изменения вида даты в зависимости от того сколько времени прошло с последнего сообщения, свойство daysFromLastMessage

    chanelMessageInfoWrapper.appendChild(chanelMessageDate);

    if (unreadCount) {
        const chanelUnreadCount = document.createElement('div');
        chanelUnreadCount.className = 'chanel-preview-unread-count';
        chanelUnreadCount.textContent = unreadCount.toString();

        chanelMessageInfoWrapper.appendChild(chanelUnreadCount);
    }

    wrapper.appendChild(chanelAvatar);
    wrapper.appendChild(chanelMessageWrapper);
    wrapper.appendChild(chanelMessageInfoWrapper);

    element.appendChild(wrapper);
};
