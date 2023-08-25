import './style.less';

type Props = {
    img?: string;
    userName: string;
};

export const profileAvatar = ({ img, userName }: Props) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'profile-avatar-wrapper';

    const avatar = document.createElement('div');
    avatar.className = 'profile-avatar-img';
    if (img) avatar.nodeValue = img; // TODO: Временная заглушка

    const name = document.createElement('div');
    name.className = 'profile-avatar-name';
    name.textContent = userName;

    wrapper.appendChild(avatar);
    wrapper.appendChild(name);

    return wrapper;
};
