import { crtElement } from "utils/crtElement";
import { chatChanelAvatar } from "components/chatChanelAvatar";
import { chatChanelName } from "components/chatChanelName";
import { mockChanels } from "../../mocks/mockChanels";
import "./style.less";

type Props = {
  id: string;
};

export const chatMainHeader = ({ id }: Props) => {
  const wrapper = crtElement({ tag: "div", cls: "chat-main-header-wrapper" });

  const mockItem = mockChanels.find((i) => i.id === id);
  const img = mockItem?.img || "";
  const chanelName = mockItem?.chanelName || "";

  const avatar = chatChanelAvatar({ img });
  const name = chatChanelName({ chanelName });

  wrapper.appendChild(avatar);
  wrapper.appendChild(name);

  return wrapper;
};
