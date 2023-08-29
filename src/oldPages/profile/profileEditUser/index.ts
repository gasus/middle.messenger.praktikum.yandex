import { goBackBlock } from "oldComponents/goBackBlock";
import { profileInfo } from "oldComponents/profileInfo";
import { profileWrapper } from "oldComponents/profileWrapper";
import { ProfileViewProps } from "types/ProfileViewProps";
import { changeUrl } from "utils/changeUrl";

type Props = {
  element: HTMLElement;
  changeTabHandler: (entryView: ProfileViewProps) => void;
};

export const getProfileEditUser = ({ element, changeTabHandler }: Props) => {
  const wrapper = profileWrapper();

  const leftBlock = goBackBlock({ onClick: () => changeUrl("?page=profile") });
  const rightBlock = profileInfo({
    isEdit: true,
    isEditPassword: false,
    changeTabHandler,
  });

  wrapper.appendChild(leftBlock);
  wrapper.appendChild(rightBlock);

  element.appendChild(wrapper);
};
