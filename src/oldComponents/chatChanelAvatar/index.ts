import { crtElement } from "utils/crtElement";
import { ChanelPreview } from "types/ChanelPreview";
import "./style.less";

type Props = Pick<ChanelPreview, "img">;

export const chatChanelAvatar = ({ img }: Props) => {
  const avatar = crtElement({ tag: "div", cls: "chat-chanel-avatar" });
  avatar.style.backgroundColor = img;

  return avatar;
};
