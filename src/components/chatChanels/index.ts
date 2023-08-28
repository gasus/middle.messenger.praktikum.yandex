import { crtElement } from "utils/crtElement";
import { empty } from "components/empty";
import { chatChanelPreview } from "components/chatChanelPreview";
import { mockChanels } from "../../mocks/mockChanels";
import "./style.less";

type Props = {
  id?: string;
  searchValue?: string;
  onChangeChat: ({ id }: { id?: string }) => void;
};

export const chatChanels = ({ searchValue, onChangeChat, id }: Props) => {
  const wrapper = crtElement({ tag: "div", cls: "chat-chanels" });

  const filteredChanels = searchValue
    ? mockChanels?.filter((i) => {
        const chanelName = i.chanelName.trim().toLocaleLowerCase();
        const search = searchValue.trim().toLocaleLowerCase();
        return chanelName.includes(search);
      })
    : mockChanels;

  if (filteredChanels.length) {
    filteredChanels.forEach((i) => {
      chatChanelPreview({
        element: wrapper,
        ...i,
        onChangeChat,
        isSelected: i.id === id,
      });
    });
  } else {
    wrapper.appendChild(empty());
  }

  return wrapper;
};
