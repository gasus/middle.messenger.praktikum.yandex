import './style.less';

type Props = {
    searchChats: (value?: string) => void;
};

export const chatSearch = ({ searchChats }: Props) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'chat-search-wrapper';

    const search = document.createElement('input');
    search.className = 'chat-search';
    search.placeholder = 'Поиск';

    search.addEventListener('input', () => {
        searchChats(search.value);
    });

    wrapper.appendChild(search);

    return wrapper;
};