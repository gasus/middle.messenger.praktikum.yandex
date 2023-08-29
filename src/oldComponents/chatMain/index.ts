import { chatMainHeader } from "oldComponents/chatMainHeader";
import { empty } from "oldComponents/empty";
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
