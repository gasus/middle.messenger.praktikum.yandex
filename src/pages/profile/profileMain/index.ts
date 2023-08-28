import { goBackBlock } from "components/goBackBlock";
import { profileInfo } from "components/profileInfo";
import { profileWrapper } from "components/profileWrapper";
import { ProfileViewProps } from "types/ProfileViewProps";
import { changeUrl } from "utils/changeUrl";

type Props = {
  element: HTMLElement;
  changeTabHandler: (entryView: ProfileViewProps) => void;
};

export const getProfileMain = ({ element, changeTabHandler }: Props) => {
  const wrapper = profileWrapper();

  const leftBlock = goBackBlock({ onClick: () => changeUrl("?page=chat") });
  const rightBlock = profileInfo({
    isEdit: false,
    isEditPassword: false,
    changeTabHandler,
  });

  wrapper.appendChild(leftBlock);
  wrapper.appendChild(rightBlock);

  element.appendChild(wrapper);
};
