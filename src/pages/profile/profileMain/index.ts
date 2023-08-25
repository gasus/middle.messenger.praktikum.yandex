import { goBackBlock } from '../../../components/goBackBlock/index';
import { profileInfo } from '../../../components/profileInfo/index';
import { profileWrapper } from '../../../components/profileWrapper/index';
import { ProfileViewProps } from '../../../types/ProfileViewProps';
import { changeUrl } from '../../../utils/changeUrl/index';

type Props = {
    element: HTMLElement;
    changeTabHandler: (entryView: ProfileViewProps) => void;
};

export const getProfileMain = ({ element, changeTabHandler }: Props) => {
    const wrapper = profileWrapper();

    const leftBlock = goBackBlock({ onClick: () => changeUrl('chat') });
    const rightBlock = profileInfo({ isEdit: false, isEditPassword: false, changeTabHandler });

    wrapper.appendChild(leftBlock);
    wrapper.appendChild(rightBlock);

    element.appendChild(wrapper);
};