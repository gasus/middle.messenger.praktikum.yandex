type Path = '?page=login' | '?page=chat' | '?page=profile';

export const changeUrl = (path: Path) => {
    window.location.search = path;
};