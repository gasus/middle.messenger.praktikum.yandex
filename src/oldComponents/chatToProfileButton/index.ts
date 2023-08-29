import { crtElement } from "utils/crtElement";
import { changeUrl } from "utils/changeUrl";
import { customButton } from "oldComponents/customButton";
import "./style.less";

export const chatToProfileButton = () => {
  const wrapper = crtElement({
    tag: "div",
    cls: "chat-to-profile-button-wrapper",
  });

  customButton({
    element: wrapper,
    label: "Профиль >",
    classType: "white-gray",
    onClick: () => changeUrl("?page=profile"),
  });

  return wrapper;
};
