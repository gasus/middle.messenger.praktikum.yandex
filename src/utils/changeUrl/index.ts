type Path = '/' | 'profile' | 'chat';

export const changeUrl = (path: Path) => {
    window.location.href = path;
};