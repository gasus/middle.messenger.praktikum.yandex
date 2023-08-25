import { ChanelPreview } from '../../types/ChanelPreview';
import './style.less';

type Props = ChanelPreview & {
    element: HTMLElement;
    isSelected: boolean;
    onChangeChat: ({ id }: { id?: string }) => void;
};

export const chatChanelPreview = ({ id, isSelected, element, chanelName, lastMessage, date, unreadCount, onChangeChat }: Props) => {
    const wrapper = document.createElement('div');
    wrapper.className = isSelected ? 'chanel-preview-wrapper chanel-preview-wrapper-selected' : 'chanel-preview-wrapper'; // TODO: Выбранный чат выделяется криво, надо доделать

    wrapper.addEventListener("click", () => {
        onChangeChat({ id });
    });

    const chanelImg = document.createElement('div');
    chanelImg.className = 'chanel-preview-img';

    const chanelMessageWrapper = document.createElement('div');
    chanelMessageWrapper.className = 'chanel-preview-message-wrapper';

    const chanelPreviewName = document.createElement('div');
    chanelPreviewName.className = 'chanel-preview-name';
    chanelPreviewName.textContent = chanelName;

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

    wrapper.appendChild(chanelImg);
    wrapper.appendChild(chanelMessageWrapper);
    wrapper.appendChild(chanelMessageInfoWrapper);

    element.appendChild(wrapper);
};