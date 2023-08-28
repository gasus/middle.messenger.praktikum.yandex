import { ChanelPreview } from "types/ChanelPreview";
import { chatChanelAvatar } from "components/chatChanelAvatar";
import { chatChanelName } from "components/chatChanelName";
import { crtElement } from "utils/crtElement";
import "./style.less";

type Props = ChanelPreview & {
  element: HTMLElement;
  isSelected: boolean;
  onChangeChat: ({ id }: { id?: string }) => void;
};

export const chatChanelPreview = ({
  id,
  isSelected,
  element,
  img,
  chanelName,
  lastMessage,
  date,
  unreadCount,
  onChangeChat,
}: Props) => {
  // TODO: Выбранный чат выделяется криво, надо доработать
  const wrapper = crtElement({
    tag: "div",
    cls: isSelected
      ? "chanel-preview-wrapper chanel-preview-wrapper-selected"
      : "chanel-preview-wrapper",
  });

  wrapper.addEventListener("click", () => {
    onChangeChat({ id });
  });

  const chanelAvatar = chatChanelAvatar({ img });

  const chanelMessageWrapper = crtElement({
    tag: "div",
    cls: "chanel-preview-message-wrapper",
  });

  const chanelPreviewName = chatChanelName({ chanelName });

  // TODO: Добавить "Вы:" если пользователь является автором последнего сообщения, свойство lastMessageFromYou
  const chanelMessage = crtElement({
    tag: "div",
    cls: "chanel-preview-message",
    text: lastMessage,
  });

  chanelMessageWrapper.appendChild(chanelPreviewName);
  chanelMessageWrapper.appendChild(chanelMessage);

  const chanelMessageInfoWrapper = crtElement({
    tag: "div",
    cls: "chanel-preview-message-info-wrapper",
  });

  // TODO: Добавить изменения вида даты в зависимости от того сколько времени прошло с последнего сообщения, свойство daysFromLastMessage
  const chanelMessageDate = crtElement({
    tag: "div",
    cls: "chanel-preview-message-date",
    text: date,
  });

  chanelMessageInfoWrapper.appendChild(chanelMessageDate);

  if (unreadCount) {
    const chanelUnreadCount = crtElement({
      tag: "div",
      cls: "chanel-preview-unread-count",
      text: unreadCount?.toString(),
    });

    chanelMessageInfoWrapper.appendChild(chanelUnreadCount);
  }

  wrapper.appendChild(chanelAvatar);
  wrapper.appendChild(chanelMessageWrapper);
  wrapper.appendChild(chanelMessageInfoWrapper);

  element.appendChild(wrapper);
};
