import { chatChanelPreview } from '../chatChanelPreview/index';
import { empty } from '../empty/index';
import './style.less';

const mockChanels = [
    {
        id: '1',
        img: '',
        chanelName: 'Иван Иванов',
        date: '23.08.2023',
        daysFromLastMessage: 2,
        lastMessage: 'Привет, как дела?',
        lastMessageFromYou: false,
        unreadCount: 0,
    },
    {
        id: '2',
        img: '',
        chanelName: 'Генадий Генадьев',
        date: '24.08.2023',
        daysFromLastMessage: 1,
        lastMessage: 'Спустя 2 месяца произошло то, чего "совсем никто не ожидал". Будущее туманно и непонятно, что же делать и как дальше жить?',
        lastMessageFromYou: false,
        unreadCount: 999,
    },
    {
        id: '3',
        img: '',
        chanelName: 'Иван Иванов',
        date: '23.08.2023',
        daysFromLastMessage: 2,
        lastMessage: 'Привет, как дела?',
        lastMessageFromYou: false,
        unreadCount: 0,
    },
    {
        id: '4',
        img: '',
        chanelName: 'Генадий Генадьев',
        date: '24.08.2023',
        daysFromLastMessage: 1,
        lastMessage: 'Спустя 2 месяца произошло то, чего "совсем никто не ожидал". Будущее туманно и непонятно, что же делать и как дальше жить?',
        lastMessageFromYou: false,
        unreadCount: 1,
    },
    {
        id: '5',
        img: '',
        chanelName: 'Иван Иванов',
        date: '23.08.2023',
        daysFromLastMessage: 2,
        lastMessage: 'Привет, как дела?',
        lastMessageFromYou: false,
        unreadCount: 0,
    },
    {
        id: '6',
        img: '',
        chanelName: 'Генадий Генадьев',
        date: '24.08.2023',
        daysFromLastMessage: 1,
        lastMessage: 'Спустя 2 месяца произошло то, чего "совсем никто не ожидал". Будущее туманно и непонятно, что же делать и как дальше жить?',
        lastMessageFromYou: false,
        unreadCount: 1,
    },
    {
        id: '7',
        img: '',
        chanelName: 'Иван Иванов',
        date: '23.08.2023',
        daysFromLastMessage: 2,
        lastMessage: 'Привет, как дела?',
        lastMessageFromYou: false,
        unreadCount: 0,
    },
    {
        id: '8',
        img: '',
        chanelName: 'Генадий Генадьев',
        date: '24.08.2023',
        daysFromLastMessage: 1,
        lastMessage: 'Спустя 2 месяца произошло то, чего "совсем никто не ожидал". Будущее туманно и непонятно, что же делать и как дальше жить?',
        lastMessageFromYou: false,
        unreadCount: 1,
    },
    {
        id: '9',
        img: '',
        chanelName: 'Иван Иванов',
        date: '23.08.2023',
        daysFromLastMessage: 2,
        lastMessage: 'Привет, как дела?',
        lastMessageFromYou: false,
        unreadCount: 0,
    },
    {
        id: '10',
        img: '',
        chanelName: 'Генадий Генадьев',
        date: '24.08.2023',
        daysFromLastMessage: 1,
        lastMessage: 'Спустя 2 месяца произошло то, чего "совсем никто не ожидал". Будущее туманно и непонятно, что же делать и как дальше жить?',
        lastMessageFromYou: false,
        unreadCount: 1,
    },
    {
        id: '11',
        img: '',
        chanelName: 'Иван Иванов',
        date: '23.08.2023',
        daysFromLastMessage: 2,
        lastMessage: 'Привет, как дела?',
        lastMessageFromYou: false,
        unreadCount: 0,
    },
    {
        id: '12',
        img: '',
        chanelName: 'Генадий Генадьев',
        date: '24.08.2023',
        daysFromLastMessage: 1,
        lastMessage: 'Спустя 2 месяца произошло то, чего "совсем никто не ожидал". Будущее туманно и непонятно, что же делать и как дальше жить?',
        lastMessageFromYou: false,
        unreadCount: 1,
    },
];

type Props = {
    id?: string;
    searchValue?: string;
    onChangeChat: ({ id }: { id?: string }) => void;
};

export const chatChanels = ({ searchValue, onChangeChat, id }: Props) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'chat-chanels';

    const filteredChanels = searchValue ? mockChanels?.filter((i) => {
        const chanelName = i.chanelName.trim().toLocaleLowerCase();
        const search = searchValue.trim().toLocaleLowerCase();
        return chanelName.includes(search)
    }) : mockChanels;

    if (filteredChanels.length) {
        filteredChanels.forEach((i) => {
            chatChanelPreview({ element: wrapper, ...i, onChangeChat, isSelected: i.id === id });
        });
    } else {
        wrapper.appendChild(empty());
    }

    return wrapper;
};