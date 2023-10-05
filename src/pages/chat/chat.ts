import Block from 'utils/Block'
import { changeUrl } from 'utils/changeUrl'

export class ChatPage extends Block {
  constructor() {
    const chanelsData = [
      {
        id: '1',
        chanelName: 'Иван Иванов',
        lastMessageDate: '22.08.2023',
        lastMessage:
          'Важно выбрать правильный баланс и распределение ресурсов между frontend и backend',
        unreadCount: 0,
        messages: [
          {
            message: 'Я считаю, что frontend важнее backend',
            time: '10:00',
            isUser: true
          },
          {
            message: 'Но без backend-а frontend не сможет функционировать',
            time: '10:01',
            isUser: false
          },
          {
            message: 'Да, но frontend отвечает за пользовательский опыт',
            time: '10:02',
            isUser: true
          },
          {
            message:
              'А backend обеспечивает работу приложения и обработку данных',
            time: '10:03',
            isUser: false
          },
          {
            message:
              'Но без качественного интерфейса пользователи не будут пользоваться приложением',
            time: '10:04',
            isUser: true
          },
          {
            message:
              'Истинное значение лежит в балансе между frontend и backend',
            time: '10:05',
            isUser: false
          },
          {
            message:
              'Может быть, но frontend создает первое впечатление о продукте',
            time: '10:06',
            isUser: true
          },
          {
            message:
              'Backend же отвечает за безопасность и стабильность работы системы',
            time: '10:07',
            isUser: false
          },
          {
            message:
              'Да, оба аспекта имеют свою важность и должны быть развиты на высоком уровне',
            time: '10:08',
            isUser: true
          },
          {
            message:
              'Согласен, их взаимодействие и сотрудничество являются ключевыми для успеха проекта',
            time: '10:09',
            isUser: false
          },
          {
            message: 'Frontend и backend - это две стороны одной медали',
            time: '10:10',
            isUser: true
          },
          {
            message:
              'Именно, они дополняют друг друга и обеспечивают полноценную работу приложения',
            time: '10:11',
            isUser: false
          },
          {
            message:
              'Каждый из них играет свою важную роль в разработке программного обеспечения',
            time: '10:12',
            isUser: true
          },
          {
            message:
              'И их совместная работа позволяет создавать качественные и функциональные продукты',
            time: '10:13',
            isUser: false
          },
          {
            message:
              'Таким образом, нельзя недооценивать важность ни frontend, ни backend',
            time: '10:14',
            isUser: true
          },
          {
            message:
              'Полностью согласен, только совместными усилиями можно достичь успеха',
            time: '10:15',
            isUser: false
          },
          {
            message: 'Именно, важно уважать и ценить работу обоих специалистов',
            time: '10:16',
            isUser: true
          },
          {
            message:
              'И сотрудничать для достижения общей цели - создания качественного продукта',
            time: '10:17',
            isUser: false
          },
          {
            message:
              'В итоге, frontend и backend равноценны и необходимы для успешной разработки',
            time: '10:18',
            isUser: true
          },
          {
            message:
              'Согласен, их взаимодействие и взаимопонимание - это ключевые факторы',
            time: '10:19',
            isUser: false
          },
          {
            message:
              'Важно выбрать правильный баланс и распределение ресурсов между frontend и backend',
            time: '10:20',
            isUser: true
          }
        ]
      },
      {
        id: '2',
        chanelName: 'Генадий Генадьев',
        lastMessageDate: '24.08.2023',
        lastMessage: 'Привет',
        unreadCount: 999,
        messages: [
          {
            message:
              'Я считаю, что стоит завязывать с разработкой и начинать выращивать подсолнухи',
            time: '10:00',
            isUser: true
          },
          {
            message:
              'Но разработка - это моя страсть, я хочу продолжать заниматься только ею',
            time: '10:01',
            isUser: false
          },
          {
            message: 'Подсолнухи принесут мне радость и удовлетворение',
            time: '10:02',
            isUser: true
          },
          {
            message:
              'Но разработка дает мне возможность творить и создавать новое',
            time: '10:03',
            isUser: false
          },
          {
            message: 'Я хочу наслаждаться природой и заботиться о растениях',
            time: '10:04',
            isUser: true
          },
          {
            message:
              'Разработка дает мне возможность реализовывать свои идеи и достигать успеха',
            time: '10:05',
            isUser: false
          },
          {
            message:
              'Подсолнухи помогут мне расслабиться и насладиться моментом',
            time: '10:06',
            isUser: true
          },
          {
            message:
              'Разработка требует от меня постоянного обучения и развития',
            time: '10:07',
            isUser: false
          },
          {
            message:
              'Я хочу научиться заботиться о растениях и узнать больше о природе',
            time: '10:08',
            isUser: true
          },
          {
            message:
              'Разработка дает мне возможность работать над интересными проектами и получать прибыль',
            time: '10:09',
            isUser: false
          },
          {
            message:
              'Я хочу наслаждаться красотой подсолнухов и радоваться их цветению',
            time: '10:10',
            isUser: true
          },
          {
            message:
              'Разработка дает мне возможность быть востребованным и прогрессировать в карьере',
            time: '10:11',
            isUser: false
          },
          {
            message: 'Подсолнухи принесут мне покой и гармонию',
            time: '10:12',
            isUser: true
          },
          {
            message:
              'Разработка дает мне возможность работать с новыми технологиями и быть в тренде',
            time: '10:13',
            isUser: false
          },
          {
            message:
              'Я хочу научиться выращивать подсолнухи и делиться ими с другими людьми',
            time: '10:14',
            isUser: true
          },
          {
            message:
              'Разработка дает мне возможность вносить вклад в развитие общества и улучшать жизнь людей',
            time: '10:15',
            isUser: false
          },
          {
            message: 'Подсолнухи принесут мне радость и умиротворение',
            time: '10:16',
            isUser: true
          },
          {
            message:
              'Разработка дает мне возможность быть творческим и самореализованным',
            time: '10:17',
            isUser: false
          },
          {
            message:
              'Я хочу наслаждаться процессом выращивания подсолнухов и видеть их красоту',
            time: '10:18',
            isUser: true
          },
          {
            message:
              'Разработка дает мне возможность работать с интересными людьми и обмениваться опытом',
            time: '10:19',
            isUser: false
          },
          {
            message:
              'Я хочу научиться выращивать подсолнухи и создавать красивые цветочные композиции',
            time: '10:20',
            isUser: true
          },
          {
            message:
              'Разработка дает мне возможность быть инновационным и влиять на будущее',
            time: '10:21',
            isUser: false
          },
          {
            message: 'Подсолнухи принесут мне радость и вдохновение',
            time: '10:22',
            isUser: true
          }
        ]
      }
    ]

    const chanelsDataWithClick = chanelsData.map((i) => {
      return {
        ...i,
        onClick: () => {
          this.setProps({
            ...this.props,
            id: i.id,
            chanelName: i.chanelName,
            messages: i.messages
          })
        }
      }
    })

    super({
      id: undefined,
      chanelName: undefined,
      messages: [],
      chanels: chanelsDataWithClick,
      buttons: [
        {
          label: 'Профиль >',
          customClass: 'white-gray',
          onClick: (event: MouseEvent) => {
            changeUrl({ event, path: 'profileView' })
          }
        }
      ]
    })
  }

  protected render(): string {
    return `
    <div class="chat">
    <div class="chat-list-wrapper">
      <div class="chat-to-profile-button-wrapper">
        {{#each buttons}}
          {{{ Button label=this.label customClass=this.customClass onClick=onClick }}}
        {{/each}}
      </div>
      {{{ Search }}}
      <div class="chat-chanels">
        {{#if chanels}}
          {{#each chanels}}
            {{{ ChanelPreview chanelName=this.chanelName lastMessage=this.lastMessage lastMessageDate=this.lastMessageDate unreadCount=this.unreadCount onClick=onClick }}}
          {{/each}}
        {{else}}
          {{{ Empty }}}
        {{/if}}
      </div>
    </div>
      {{#if id}}
        <div class="chat-main">
          <div class="chat-main-header-wrapper">
            {{{ Avatar userName=chanelName smallRightUsername='true' }}}
            {{{ ButtonThreedots }}}
          </div>
          <div class="chat-main-messages">
            {{#each messages}}
              {{{ Message message=this.message isUser=this.isUser time=this.time }}}
            {{/each}}
          </div>
          <div class="chat-main-footer">
            {{{ ChatFooter }}}
          </div>
        </div>
      {{else}}
        {{{ Empty text='Выберите чат чтобы отправить сообщение' }}}
      {{/if}}
      </div>
    `
  }
}
