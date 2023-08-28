import { ChanelPreview } from "types/ChanelPreview";
import { crtElement } from "utils/crtElement";
import "./style.less";

type Props = Pick<ChanelPreview, "chanelName">;

export const chatChanelName = ({ chanelName }: Props) => {
  return crtElement({
    tag: "div",
    cls: "chanel-name",
    text: chanelName,
  });
};
