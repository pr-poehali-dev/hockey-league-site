export interface TeamInfo {
  id: number;
  name: string;
  fullName: string;
  founded: number;
  headCoach: string;
  conference: 'Запад' | 'Восток';
  arena: string;
  history: string;
  colors: string[];
}

export const teamsInfo: TeamInfo[] = [
  {
    id: 1,
    name: 'СКА',
    fullName: 'ХК СКА',
    founded: 2010,
    headCoach: 'Иванов Александр',
    conference: 'Запад',
    arena: 'Ледовый дворец',
    history: 'Один из сильнейших клубов лиги, многократный чемпион. Команда известна своей атакующей игрой и мощным составом.',
    colors: ['#0066CC', '#FFFFFF']
  },
  {
    id: 2,
    name: 'ЦСКА',
    fullName: 'ХК ЦСКА',
    founded: 2008,
    headCoach: 'Петров Сергей',
    conference: 'Запад',
    arena: 'ЦСКА Арена',
    history: 'Легендарный клуб с богатой историей. Воспитал множество звезд мирового хоккея.',
    colors: ['#CC0000', '#0033AA']
  },
  {
    id: 3,
    name: 'Динамо Москва',
    fullName: 'ХК Динамо Москва',
    founded: 2009,
    headCoach: 'Смирнов Андрей',
    conference: 'Запад',
    arena: 'ВТБ Арена',
    history: 'Один из старейших клубов российского хоккея. Команда славится своей школой вратарей.',
    colors: ['#0088DD', '#FFFFFF']
  },
  {
    id: 4,
    name: 'Локомотив',
    fullName: 'ХК Локомотив',
    founded: 2011,
    headCoach: 'Козлов Дмитрий',
    conference: 'Запад',
    arena: 'Арена-2000',
    history: 'Команда из Ярославля, известная своим упорством и командным духом.',
    colors: ['#CC0000', '#000000']
  },
  {
    id: 5,
    name: 'Спартак',
    fullName: 'ХК Спартак',
    founded: 2012,
    headCoach: 'Морозов Павел',
    conference: 'Запад',
    arena: 'Спартак Арена',
    history: 'Молодой клуб, стремительно набирающий обороты. Делает ставку на воспитанников.',
    colors: ['#CC0000', '#FFFFFF']
  },
  {
    id: 6,
    name: 'Динамо-Минск',
    fullName: 'ХК Динамо-Минск',
    founded: 2010,
    headCoach: 'Федоров Николай',
    conference: 'Запад',
    arena: 'Минск-Арена',
    history: 'Представитель Беларуси в лиге. Команда известна своей дисциплинированной игрой.',
    colors: ['#0066CC', '#FFCC00']
  },
  {
    id: 7,
    name: 'Торпедо',
    fullName: 'ХК Торпедо',
    founded: 2009,
    headCoach: 'Соколов Максим',
    conference: 'Запад',
    arena: 'КРК Уралец',
    history: 'Команда из Нижнего Новгорода с богатыми традициями.',
    colors: ['#000000', '#00AAFF']
  },
  {
    id: 8,
    name: 'Северсталь',
    fullName: 'ХК Северсталь',
    founded: 2011,
    headCoach: 'Васильев Артем',
    conference: 'Запад',
    arena: 'Ледовый дворец',
    history: 'Клуб из Череповца, славится своей физической игрой и надежной обороной.',
    colors: ['#006633', '#FFCC00']
  },
  {
    id: 9,
    name: 'Сочи',
    fullName: 'ХК Сочи',
    founded: 2014,
    headCoach: 'Кузнецов Игорь',
    conference: 'Запад',
    arena: 'Большой ледовый дворец',
    history: 'Самый южный клуб лиги, создан после Олимпиады-2014.',
    colors: ['#FF6600', '#0066CC']
  },
  {
    id: 10,
    name: 'Драконы',
    fullName: 'ХК Драконы',
    founded: 2016,
    headCoach: 'Лебедев Роман',
    conference: 'Запад',
    arena: 'Драконс Арена',
    history: 'Новый клуб лиги, активно развивающийся и привлекающий молодых талантов.',
    colors: ['#CC0000', '#FFCC00']
  },
  {
    id: 11,
    name: 'Барыс',
    fullName: 'ХК Барыс',
    founded: 2008,
    headCoach: 'Новиков Евгений',
    conference: 'Запад',
    arena: 'Барыс Арена',
    history: 'Представитель Казахстана, команда с уникальным стилем игры.',
    colors: ['#0088DD', '#FFCC00']
  },
  {
    id: 12,
    name: 'Йокерит',
    fullName: 'ХК Йокерит',
    founded: 2014,
    headCoach: 'Григорьев Олег',
    conference: 'Запад',
    arena: 'Хартвалл Арена',
    history: 'Финский клуб с многолетней историей и преданными болельщиками.',
    colors: ['#FF6600', '#000000']
  },
  {
    id: 13,
    name: 'Трактор',
    fullName: 'ХК Трактор',
    founded: 2009,
    headCoach: 'Романов Владимир',
    conference: 'Восток',
    arena: 'Арена Трактор',
    history: 'Челябинский клуб с мощной поддержкой болельщиков и сильным составом.',
    colors: ['#CC0000', '#FFFFFF']
  },
  {
    id: 14,
    name: 'Салават Юлаев',
    fullName: 'ХК Салават Юлаев',
    founded: 2008,
    headCoach: 'Павлов Михаил',
    conference: 'Восток',
    arena: 'Уфа-Арена',
    history: 'Один из лидеров восточной конференции, многократный призер чемпионатов.',
    colors: ['#00AA44', '#FFFFFF']
  },
  {
    id: 15,
    name: 'Адмирал',
    fullName: 'ХК Адмирал',
    founded: 2013,
    headCoach: 'Белов Константин',
    conference: 'Восток',
    arena: 'Арена Фетисов',
    history: 'Дальневосточный клуб, представляющий Владивосток.',
    colors: ['#0066CC', '#FFFFFF']
  },
  {
    id: 16,
    name: 'Металлург',
    fullName: 'ХК Металлург',
    founded: 2007,
    headCoach: 'Орлов Станислав',
    conference: 'Восток',
    arena: 'Арена Металлург',
    history: 'Магнитогорский клуб с выдающейся историей и множеством титулов.',
    colors: ['#00AA44', '#000000']
  },
  {
    id: 17,
    name: 'Авангард',
    fullName: 'ХК Авангард',
    founded: 2010,
    headCoach: 'Жуков Геннадий',
    conference: 'Восток',
    arena: 'Арена Омск',
    history: 'Омский клуб, чемпион лиги, известный своей агрессивной игрой.',
    colors: ['#00AA44', '#CC0000']
  },
  {
    id: 18,
    name: 'Автомобилист',
    fullName: 'ХК Автомобилист',
    founded: 2009,
    headCoach: 'Егоров Валерий',
    conference: 'Восток',
    arena: 'КРК Уралец',
    history: 'Екатеринбургская команда, стремительно прогрессирующая в последние годы.',
    colors: ['#CC0000', '#FFFFFF']
  },
  {
    id: 19,
    name: 'Ак Барс',
    fullName: 'ХК Ак Барс',
    founded: 2008,
    headCoach: 'Зайцев Петр',
    conference: 'Восток',
    arena: 'Татнефть Арена',
    history: 'Казанский гранд, один из самых титулованных клубов российского хоккея.',
    colors: ['#0066CC', '#FFFFFF']
  },
  {
    id: 20,
    name: 'Сибирь',
    fullName: 'ХК Сибирь',
    founded: 2011,
    headCoach: 'Макаров Юрий',
    conference: 'Восток',
    arena: 'Арена Сибирь',
    history: 'Новосибирский клуб, представляющий всю Сибирь.',
    colors: ['#00AA44', '#FFCC00']
  },
  {
    id: 21,
    name: 'Амур',
    fullName: 'ХК Амур',
    founded: 2009,
    headCoach: 'Тимофеев Виктор',
    conference: 'Восток',
    arena: 'Платинум Арена',
    history: 'Хабаровская команда, самая восточная в лиге.',
    colors: ['#000000', '#FF6600']
  },
  {
    id: 22,
    name: 'Лада',
    fullName: 'ХК Лада',
    founded: 2012,
    headCoach: 'Борисов Антон',
    conference: 'Восток',
    arena: 'Лада Арена',
    history: 'Тольяттинский клуб с амбициозными планами на будущее.',
    colors: ['#0066CC', '#CC0000']
  },
  {
    id: 23,
    name: 'Нефтехимик',
    fullName: 'ХК Нефтехимик',
    founded: 2010,
    headCoach: 'Сидоров Иван',
    conference: 'Восток',
    arena: 'Нефтехим Арена',
    history: 'Команда из Нижнекамска, развивающая молодых игроков.',
    colors: ['#00AA44', '#000000']
  }
];
