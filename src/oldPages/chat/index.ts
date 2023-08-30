import { chatListWrapper } from "oldComponents/chatListWrapper";
import { chatMain } from "oldComponents/chatMain";
// import { app } from "../../main";

export const renderChat = () => {
  const onChangeChat = ({ id }: { id?: string }) => {
    const app = document.createElement("div");
    // app.innerHTML = "";

    const leftBlock = chatListWrapper({ onChangeChat, id });
    const rightBlock = chatMain({ chatId: id });

    app.appendChild(leftBlock);
    app.appendChild(rightBlock);
  };

  onChangeChat({});
};
