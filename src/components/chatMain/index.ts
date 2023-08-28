import { chatMainHeader } from "components/chatMainHeader";
import { empty } from "components/empty";
import { crtElement } from "utils/crtElement";
import "./style.less";

export const chatMain = ({ chatId }: { chatId?: string }) => {
  if (chatId) {
    const wrapper = crtElement({ tag: "div", cls: "chat-main" });
    wrapper.appendChild(chatMainHeader({ id: chatId }));

    return wrapper;
  } else {
    return empty("Выберите чат чтобы отправить сообщение");
  }
};
