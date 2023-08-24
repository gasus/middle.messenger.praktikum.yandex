import { chatChanelPreview } from '../chatChanelPreview/index';
import './style.less';

const mockChanels = [
    {
        img: '',
        chanelName: 'Иван Иванов',
        date: '23.08.2023',
        daysFromLastMessage: 2,
        lastMessage: 'Привет, как дела?',
        lastMessageFromYou: false,
        unreadCount: 0,
    },
    {
        img: '',
        chanelName: 'Генадий Генадьев',
        date: '24.08.2023',
        daysFromLastMessage: 1,
        lastMessage: 'Спустя 2 месяца произошло то, чего "совсем никто не ожидал". Будущее туманно и непонятно, что же делать и как дальше жить?',
        lastMessageFromYou: false,
        unreadCount: 999,
    },
    {
        img: '',
        chanelName: 'Иван Иванов',
        date: '23.08.2023',
        daysFromLastMessage: 2,
        lastMessage: 'Привет, как дела?',
        lastMessageFromYou: false,
        unreadCount: 0,
    },
    {
        img: '',
        chanelName: 'Генадий Генадьев',
        date: '24.08.2023',
        daysFromLastMessage: 1,
        lastMessage: 'Спустя 2 месяца произошло то, чего "совсем никто не ожидал". Будущее туманно и непонятно, что же делать и как дальше жить?',
        lastMessageFromYou: false,
        unreadCount: 1,
    },
    {
        img: '',
        chanelName: 'Иван Иванов',
        date: '23.08.2023',
        daysFromLastMessage: 2,
        lastMessage: 'Привет, как дела?',
        lastMessageFromYou: false,
        unreadCount: 0,
    },
    {
        img: '',
        chanelName: 'Генадий Генадьев',
        date: '24.08.2023',
        daysFromLastMessage: 1,
        lastMessage: 'Спустя 2 месяца произошло то, чего "совсем никто не ожидал". Будущее туманно и непонятно, что же делать и как дальше жить?',
        lastMessageFromYou: false,
        unreadCount: 1,
    },
    {
        img: '',
        chanelName: 'Иван Иванов',
        date: '23.08.2023',
        daysFromLastMessage: 2,
        lastMessage: 'Привет, как дела?',
        lastMessageFromYou: false,
        unreadCount: 0,
    },
    {
        img: '',
        chanelName: 'Генадий Генадьев',
        date: '24.08.2023',
        daysFromLastMessage: 1,
        lastMessage: 'Спустя 2 месяца произошло то, чего "совсем никто не ожидал". Будущее туманно и непонятно, что же делать и как дальше жить?',
        lastMessageFromYou: false,
        unreadCount: 1,
    },
    {
        img: '',
        chanelName: 'Иван Иванов',
        date: '23.08.2023',
        daysFromLastMessage: 2,
        lastMessage: 'Привет, как дела?',
        lastMessageFromYou: false,
        unreadCount: 0,
    },
    {
        img: '',
        chanelName: 'Генадий Генадьев',
        date: '24.08.2023',
        daysFromLastMessage: 1,
        lastMessage: 'Спустя 2 месяца произошло то, чего "совсем никто не ожидал". Будущее туманно и непонятно, что же делать и как дальше жить?',
        lastMessageFromYou: false,
        unreadCount: 1,
    },
    {
        img: '',
        chanelName: 'Иван Иванов',
        date: '23.08.2023',
        daysFromLastMessage: 2,
        lastMessage: 'Привет, как дела?',
        lastMessageFromYou: false,
        unreadCount: 0,
    },
    {
        img: '',
        chanelName: 'Генадий Генадьев',
        date: '24.08.2023',
        daysFromLastMessage: 1,
        lastMessage: 'Спустя 2 месяца произошло то, чего "совсем никто не ожидал". Будущее туманно и непонятно, что же делать и как дальше жить?',
        lastMessageFromYou: false,
        unreadCount: 1,
    },
    {
        img: '',
        chanelName: 'Иван Иванов',
        date: '23.08.2023',
        daysFromLastMessage: 2,
        lastMessage: 'Привет, как дела?',
        lastMessageFromYou: false,
        unreadCount: 0,
    },
    {
        img: '',
        chanelName: 'Генадий Генадьев',
        date: '24.08.2023',
        daysFromLastMessage: 1,
        lastMessage: 'Спустя 2 месяца произошло то, чего "совсем никто не ожидал". Будущее туманно и непонятно, что же делать и как дальше жить?',
        lastMessageFromYou: false,
        unreadCount: 1,
    },
    {
        img: '',
        chanelName: 'Иван Иванов',
        date: '23.08.2023',
        daysFromLastMessage: 2,
        lastMessage: 'Привет, как дела?',
        lastMessageFromYou: false,
        unreadCount: 0,
    },
    {
        img: '',
        chanelName: 'Генадий Генадьев',
        date: '24.08.2023',
        daysFromLastMessage: 1,
        lastMessage: 'Спустя 2 месяца произошло то, чего "совсем никто не ожидал". Будущее туманно и непонятно, что же делать и как дальше жить?',
        lastMessageFromYou: false,
        unreadCount: 1,
    },
    {
        img: '',
        chanelName: 'Иван Иванов',
        date: '23.08.2023',
        daysFromLastMessage: 2,
        lastMessage: 'Привет, как дела?',
        lastMessageFromYou: false,
        unreadCount: 0,
    },
    {
        img: '',
        chanelName: 'Генадий Генадьев',
        date: '24.08.2023',
        daysFromLastMessage: 1,
        lastMessage: 'Спустя 2 месяца произошло то, чего "совсем никто не ожидал". Будущее туманно и непонятно, что же делать и как дальше жить?',
        lastMessageFromYou: false,
        unreadCount: 1,
    },
];

export const chatChanels = () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'chat-chanels';

    const onClick = () => {
        console.log('onClick');
    };

    mockChanels.forEach((i) => {
        chatChanelPreview({ element: wrapper, ...i, onClick: onClick });
    });

    return wrapper;
};