import { crtElement } from "utils/crtElement";
import { chatChanels } from "oldComponents/chatChanels";
import { chatSearch } from "oldComponents/chatSearch";
import { chatToProfileButton } from "oldComponents/chatToProfileButton";
import "./style.less";

type Props = {
  id?: string;
  onChangeChat: ({ id }: { id?: string }) => void;
};

export const chatListWrapper = ({ onChangeChat, id }: Props) => {
  const wrapper = crtElement({ tag: "div", cls: "chat-list-wrapper" });

  const getChatChanels = ({
    isFirstRender,
    value,
  }: {
    isFirstRender?: boolean;
    value?: string;
  }) => {
    if (!isFirstRender) wrapper.lastChild?.remove();
    const chanels = chatChanels({ searchValue: value, onChangeChat, id });
    wrapper.appendChild(chanels);
  };

  const link = chatToProfileButton();
  const search = chatSearch({
    searchChats: (value) => getChatChanels({ value }),
  });

  wrapper.appendChild(link);
  wrapper.appendChild(search);
  getChatChanels({ isFirstRender: true });

  return wrapper;
};
