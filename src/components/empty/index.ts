import './style.less';

export const empty = (text?: string) => {
    const empty = document.createElement('div');
    empty.className = 'empty-block';
    empty.textContent = text || 'Пусто';

    return empty;
};
