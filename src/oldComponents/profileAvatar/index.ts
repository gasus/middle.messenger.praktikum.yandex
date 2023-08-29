import { crtElement } from "utils/crtElement";
import "./style.less";

type Props = {
  img?: string;
  userName: string;
};

export const profileAvatar = ({ img, userName }: Props) => {
  const wrapper = crtElement({ tag: "div", cls: "profile-avatar-wrapper" });

  const avatar = crtElement({ tag: "div", cls: "profile-avatar-img" });
  if (img) avatar.nodeValue = img; // TODO: Временная заглушка

  const name = crtElement({
    tag: "div",
    cls: "profile-avatar-name",
    text: userName,
  });

  wrapper.appendChild(avatar);
  wrapper.appendChild(name);

  return wrapper;
};
