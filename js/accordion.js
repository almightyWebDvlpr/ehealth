const misAccordion = [
  {
    header: "Адміністративний модуль надавача медичних послуг",
    content:
      "Модуль, що дозволяє укладати договори з НСЗУ та отримувати фінансування, реєструвати і управляти місцями надання послуг, реєструвати керівників закладів, співробітників та управляти їх ролями.",
  },
  {
    header: "Робоче місце лікаря первинної медичної допомоги",
    content:
      "Функціонал модулю дозволяє лікарям, які надають первинну медичну допомогу працювати з деклараціями, електронними медичними записами, діагностичними звітами, з записами про імунізацію.",
  },
  {
    header: "Робоче місце лікаря вторинної медичної допомоги",
    content:
      "Функціонал модулю дозволяє лікарям, які надають спеціалізовану медичну допомогу працювати з електронними медичними записами, діагностичними звітами, з записами про імунізацію, з електронними медичними записами та електронними направленнями неідентифікованих пацієнтів, з електронними медичними записами у стаціонарі.",
  },
  {
    header: "Доступ до даних",
    content:
      "Функціонал модулю дозволяє отримати доступ до даних, що містяться в центральній базі даних електронної системи охорони здоров’я.",
  },
  {
    header: "Модуль для роботи з записами про пацієнтів в системі",
    content:
      "Функціонал модулю дозволяє працювати з функціоналом по роботі з записами про ідентифікованих та неідентифікованих пацієнтів, приєднання записів неідентифікованого пацієнта до ідентифікованого та верифікації пацієнта.",
  },
  {
    header:
      "Медичні висновки (про народження та про тимчасову непрацездатність)",
    content:
      "Функціонал модулю дозволяє формувати висновки про народження та про тимчасову непрацездатність на основі медичних записів.",
  },
  {
    header: "Виписування електронного рецепту на лікарські засоби",
    content:
      "Функціонал модулю дозволяє формувати електронні рецепти на лікарські засоби.",
  },
  {
    header: "План лікування",
    content:
      "Функціонал модулю дозволяє лікарям робити необхідні лікарські призначення і спрощує контроль виконання цих призначень, зокрема дозволяє  створювати призначення, шукати та отримувати інформацію щодо плану лікування, реєструвати результати виконання призначень за планом лікування, перевіряти відсутності пов’язаних з призначенням нових заявок на електронний рецепт, непогашених електронних рецептів, активних електронних направлень.",
  },
  {
    header: "Робоче місце середнього медичного персоналу",
    content:
      "Функціонал модулю дозволяє користувачам середнього медичного персоналу (медичні брати, медичні сестри) реєструватися в ЕСОЗ та отримувати відповідні права доступу, здійснювати пошук електронних медичних записів, формувати пакети діагностичних звітів, фіксувати лікувальні процедури, перевіряти, обробляти та погашати е-направлення та ін.",
  },
  {
    header: "Робоче місце адміністратора медичних записів",
    content:
      "Функціонал модулю дозволяє користувачам з відповідними правами доступу шукати ідентифікованого та неідентифікованого пацієнта, шукати електронні медичні записи за пошуковими параметрами, отримувати детальну інформацію за електронними медичними записами, шукати пацієнта в системі, позначати медичний запис як помилково введений без отримання дозволу пацієнта та ін.",
  },
  {
    header: "Робоче місце лаборанта",
    content:
      "Функціонал модулю дозволяє співробітникам лабораторії працювати з електронними медичними записами та діагностичними звітами.",
  },
  {
    header: "Клінічна оцінка",
    content:
      "Функціонал модулю дозволяє вносити результати клінічної оцінки стану пацієнта.",
  },
  {
    header: "Робоче місце медичного координатора",
    content:
      "Функціонал модулю дозволяє відповідальним лікарям отримати та додати в систему інформацію, координувати надання послуг із трансплантації між відповідними органами, здійснювати посадові обов’язки трансплант-координатора згідно положення про врегулювання діяльності трансплант-координаторів.",
  },
  {
    header: "Електронні направлення",
    content:
      "Функціонал модулю дозволяє формувати, переглядати, перевіряти, використовувати та погашати електронні направлення.",
  },
  {
    header: "Процедури",
    content:
      "Функціонал модулю дозволяє створювати, переглядати та скасовувати процедури.",
  },
  {
    header: "Спостереження",
    content:
      "Функціонал модулю дозволяє створювати, переглядати та скасовувати спостереження.",
  },
  {
    header: "Виписування електронного рецепту на медичні вироби",
    content:
      "Функціонал модулю дозволяє формувати електронні рецепти на медичні вироби.",
  },
  {
    header: "Адміністративний модуль аптечного закладу",
    content:
      "Функціонал модулю дозволяє реєструвати аптеки, їх підрозділи та фармацевтів, заключення договори про реімбурсацію з НСЗУ, активувати та деактивувати зобов’язання за договорами аптечного закладу з НСЗУ, в т. ч. за програмами «Доступні ліки», «Інсулін», управляти ліцензіями аптечних закладів.",
  },
  {
    header: "Робоче місце фармацевта",
    content:
      "Функціонал модулю дозволяє погашати електронні рецепти на лікарські засоби та медичні вироби.",
  },
  // Add more objects as needed
];

const dashboardsAccordion = [
  {
    header: "Лікарі",
    content:
      "Для лікарів корисними можуть бути дашборди зі  статистикою поданих декларацій про вибір лікаря первинної медичної допомоги, даними про оплати від НСЗУ.",
  },
  {
    header: "Пацієнти",
    content:
      "Пацієнти за допомогою дашбордів НСЗУ можуть дізнатися, де можна укласти декларацію та з яким лікарем, які послуги за Програмою медичних гарантій надає будь-який заклад охорони здоров’я, що підписав договір з НСЗУ, а також розташування найближчої аптеки з «Доступними ліками».",
  },
  {
    header: "Керівники та власники закладів охорони здоров’я",
    content:
      "Для керівників та власників закладів охорони здоров’я в пригоді стануть дашборди “Звіт про доходи та витрати надавачів медичних послуг (окремі показники)”, “Показники досягнення універсального охоплення населення медичними послугами на рівні ПМД” та багато інших.",
  },
  // Add more objects as needed
];

const firstCare = [
  {
    header:
      "Адміністративний модуль надання медичних послуг первинної медичної допомоги та спеціалізованої медичної допомоги",
    content:
      "Mодуль, що дозволяє укладати договори з НСЗУ та отримувати фінансування. Цей модуль включає такі складові:",
    subcontent: [
      {
        text: "Реєстрація надавачів медичних послуг, підрозділів, користувачів",
        iconClass: "bx bx-wifi-0",
      },
      { text: "Капітаційні договори з НСЗУ", iconClass: "bx bx-wifi-0" },
      { text: "Перегляд декларацій", iconClass: "bx bx-wifi-0" },
    ],
  },
  {
    header: "Робоче місце лікаря первинної медичної допомоги",
    content:
      "Модуль для роботи лікарів, що надають первинну медичну допомогу: робота з деклараціями про вибір лікаря, що надає первинну медичну допомогу; електронні медичні записи; імунізація; електронні направлення, виписування електронних рецептів",
  },
];

const specialCare = [
  {
    header:
      "Адміністративний модуль надавача медичних послуг спеціалізованої медичної допомоги",
    content:
      "Для реєстрації закладу, що надає спеціалізовану медичну допомогу, реєстрації його підрозділів та користувачів.",
  },
  {
    header: "Робоче місце лікаря первинної медичної допомоги",
    content:
      "Для роботи лікарів, що надають спеціалізовану медичну допомогу. Цей модуль включає наступні складові: ",
    subcontent: [
      {
        text: "Електронні медичні записи спеціалізованої медичної допомоги",
        iconClass: "bx bx-wifi-0",
      },
      { text: "Імунізація", iconClass: "bx bx-wifi-0" },
      {
        text: "Діагностичні звіти (гіперпосилання на сторінку Діагностичні звіти в бібліотеці)",
        iconClass: "bx bx-wifi-0",
      },
      {
        text: "Електронні медичні записи та електронне направлення для неідентифікованих пацієнтів",
        iconClass: "bx bx-wifi-0",
      },
      {
        text: "Виписування е-направлення спеціалізованої медичної допомоги",
        iconClass: "bx bx-wifi-0",
      },
      {
        text: "Обробка та погашення е-направлення спеціалізованої медичної допомоги",
        iconClass: "bx bx-wifi-0",
      },
      {
        text: "Електронні медичні записи стаціонар: надходження",
        iconClass: "bx bx-wifi-0",
      },
      {
        text: "Електронні медичні записи стаціонар: виписка",
        iconClass: "bx bx-wifi-0",
      },
    ],
  },
  {
    header: "Робота з записами про пацієнтів",
    content:
      "Включає функціонал по роботі з записами ідентифікованих пацієнтів та неідентифікованих пацієнтів приєднання записів неідентифікованого пацієнта до ідентифікованого та статус верифікації пацієнта",
  },

  {
    header: "Медичні висновки",
    content:
      "Модуль для формування висновку про тимчасову непрацездатність на основі медичних записів.",
  },

  {
    header: "Виписування електронних рецептів",
    content: "",
  },
  {
    header: "План лікування",
    content:
      "Це модуль, що дає змогу лікарям зробити всі необхідні лікарські призначення і спрощує контроль виконання цих призначень, зокрема дозволяє: створення призначення в плані лікування; пошук та отримання інформації щодо плану лікування; реєстрацію результатів виконання призначень за планом лікування; перевірку відсутності пов’язаних з призначенням нових заявок на електронний рецепт, непогашених електронних рецептів; активних електронних направлень.",
  },
  {
    header: "Неонатальний скринінг для новонароджених",
    content:
      "Модуль, що дозволяє акушер-гінекологам, педіатрам, педіатрам-неонатологам вносити інформацію до медичних інформаційних систем про результати неонатального скринінгу – обстеження новонароджених дітей для виявлення ряду спадкових захворювань Він включає в себе можливість:",
    subcontent: [
      {
        text: "Створення електронного направлення",
        iconClass: "bx bx-wifi-0",
      },
      {
        text: "Обробки і погашення електронного направлення",
        iconClass: "bx bx-wifi-0",
      },
    ],
  },
  {
    header: "Робоче місце трансплант-координатора",
    content:
      "Модуль, у якому відповідальні лікарі можуть отримати та додати в систему відповідну інформацію, координувати надання послуг із трансплантації між відповідними органами, здійснювати посадові обов’язкіі трансплант-координатора, згідно Положення про врегулювання діяльності трансплант-координаторів.",
  },
];

const pharmacyAccordion = [
  {
    header: "Наявність адміністративного модулю",
    content:
      "Включає функціонал для реєстрації аптек, їх підрозділів та фармацевтів і подальшого заключення договорів про реімбурсацію з НСЗУ. Цей модуль включає такі складові:",
    subcontent: [
      {
        text: "Реєстрація аптеки, підрозділів, користувачів",
        iconClass: "bx bx-wifi-0",
      },
      {
        text: "Укладення договорів аптечних закладів з НСЗУ. Програма «Інсуліни»",
        iconClass: "bx bx-wifi-0",
      },
      {
        text: "Зобов'язання. Цей модуль дозволяє деактивувати / активувати зобов’язання за договорами аптечного закладу з НСЗУ, в т. ч. за програмами «Доступні ліки», «Інсулін»",
        iconClass: "bx bx-wifi-0",
      },
      {
        text: "Управління ліцензіями аптечних закладів",
        iconClass: "bx bx-wifi-0",
      },
    ],
  },
  {
    header: "Наявність модулю «Робоче місце фармацевта»",
    content:
      "Модуль для роботи лікарів, що надають первинну медичну допомогу: робота з деклараціями про вибір лікаря, що надає первинну медичну допомогу; електронні медичні записи; імунізація; електронні направлення, виписування електронних рецептів",
  },
  {
    header:
      "Послуги з підтримки та навчання функціональних можлиовстей програмного забезпечення",
    content:
      "Модуль для роботи лікарів, що надають первинну медичну допомогу: робота з деклараціями про вибір лікаря, що надає первинну медичну допомогу; електронні медичні записи; імунізація; електронні направлення, виписування електронних рецептів",
  },
];

const declarationAccordion = [
  {
    header: "Оберіть за вашими особистими критеріями заклад чи лікаря.",
    content:
      "Ви можете скористатися порадами знайомих, рекомендаціями в Інтернеті або відвідати найближчі заклади та дізнатися про лікарів.",
  },
  {
    header:
      "Перегляньте мапу та перевірте, чи вже можна подати декларацію у вибраному закладі.",
    content:
      "Також медичні заклади, підключені до системи можна розпізнати за наліпкою «Тут можна обрати свого лікаря» ",
  },
  {
    header:
      "Візьміть із собою паспорт, ідентифікаційний код і мобільний телефон.",
    content:
      "Якщо потрібно подати декларацію для дитини до 14 років — візьміть також свідоцтво про народження дитини ",
  },
  {
    header:
      "Зверніться у реєстратуру медзакладу та повідомте, що хочете подати декларацію",
    content: "",
  },
  {
    header:
      "Уповноважений працівник медзакладу (працівник реєстратури, медсестра або лікар) введе ваші дані в електронну систему охорони здоровʼя.",
    content:
      "На мобільний надійде СМС з кодом. Повідомте цей код працівнику закладу",
  },
  {
    header: "З електронної системи роздруковується декларація з вашими даними.",
    content:
      "Уважно перевірте, чи всі ваші дані коректні. Якщо потрібно — працівник закладу внесе зміни та роздрукує декларацію ще раз. Підпишіть два екземпляри роздрукованої декларації. Один ви забираєте з собою, інший лишається у закладі",
  },
  {
    header:
      "Працівник закладу підтверджує вашу декларацію електронним підписом і відправляє в електронну систему охорони здоровʼя.",
    content: "",
  },
];

const ePrescriptionInstruction = [
  {
    header:
      "Щоб отримати електронний рецепт на рецептурний препарат необхідно обовʼязково звернутися до лікаря на прийом.",
  },
  {
    header:
      "Під час огляду лікар за потреби зареєструє вас в електронній системі охорони здоровʼя (ЕСОЗ) та сформує е-рецепт, вказавши діючу речовину, дозування, тривалість курсу та інструкції з прийому ліків.",
  },
  {
    header:
      "Після цього ви отримаєте номер електронного рецепта та унікальний код його погашення в СМС-повідомленні.",
  },
  {
    header:
      "А для пацієнтів, які обрали метод автентифікації через документи, лікар має роздрукувати рецепт у вигляді інформаційної пам’ятки, що містить номер та код погашення рецепта.",
  },
  {
    header:
      "Ви можете придбати ліки за рецептом в аптеці протягом 30 чи 10 днів (для наркотичних/психотропних препаратів).",
  },
  {
    header:
      "Для того, щоб придбати ліки, достатньо повідомити фармацевту потрібні реквізити – номер рецепта та код погашення.",
  },
  {
    header:
      "Фармацевт запропонує вам наявні в аптеці лікарські засоби, які містять діючу речовину, що призначив вам лікар.",
  },
  {
    header:
      "Так ви зможете обрати ліки відповідно до вашого бюджету. Лікуйтеся свідомо та будьте здорові!",
  },
];

const babyServiceAccordion = [
  {
    header: "Перейти за посиланням: https://diia.gov.ua/services/yemalyatko",
    content: "",
  },
  {
    header: "Авторизуватися або зареєструватися на порталі Дія",
    content: "",
  },
  {
    header:
      "Заповнити заяву та вибрати додаткові послуги, які хочете замовити. Дані про заявника підтягуються автоматично, дані про іншого з батьків потрібно заповнити вручну",
    content: "",
  },
  {
    header:
      "Підписати заяву електронним підписом. Іншому з батьків потрібно підписати заяву своїм електронним підписом, якщо:",
    content: [
      {
        text: "батько та матір не одружені",
        iconClass: "bx bx-wifi-0",
      },
      {
        text: "батько та матір мають різні прізвища ",
        iconClass: "bx bx-wifi-0",
      },
      {
        text: "батько та матір зареєстровані за різними адресами (якщо замовляєте послугу з реєстрації місця проживання дитини).",
        iconClass: "bx bx-wifi-0",
      },
    ],
  },
  {
    header:
      "Посилання на заяву на порталі Дія надійде іншому з батьків на електронну пошту.",
    content: "",
  },
  {
    header:
      "Останній крок - отримати свідоцтво про народження наступного робочого дня.",
    content: "",
  },
];

const developersServiceAccordion = [
  {
    header:
      "Щоб почати розробку, заповніть <a class='in-text-link' href='https://ehealth.gov.ua/wp-content/uploads/2023/04/Zayava-na-otrymannya-dostupu-do-testovyh-seredovyshh.docx'>заявку</a> та надішліть запит за <a class='in-text-link' href='https://e-health-ua.atlassian.net/servicedesk/customer/portal/6'> посиланням</a>",
    content: "У відповідь ви отримаєте:",
    subcontent: [
      {
        text: "інформацію про наявні технічні специфікації, необхідні для розробки електронної медичної інформаційної системи (далі - МІС);",
        iconClass: "bx bx-wifi-0",
      },
      {
        text: "доступ до тестових середовищ з метою перевірки розробленого функціоналу на сумісність із центральною базою даних (далі - ЦБД).",
        iconClass: "bx bx-wifi-0",
      },
      {
        text: "доступ до служби підтримки eHealth та комунікаційних каналів.",
        iconClass: "bx bx-wifi-0",
      },
    ],
  },
  {
    header: "Ознайомтесь із документами",
    content: [
      {
        text: " <a class='in-text-link' href='https://ehealth.gov.ua/operatoram_mis/'>Вимогами</a>, яким мають відповідати МІС, підключені до ЦБД",
        iconClass: "bx bx-wifi-0",
      },
      {
        text: "<a class='in-text-link' href='https://ehealth.gov.ua/wp-content/uploads/2022/07/Testova-programa-v-redaktsii-nakazu-NSZU-314-vid-19.07.2022.pdf'>Тестовою програмою</a>, яка визначає механізм перевірки сумісності МІС із ЦБД з метою подальшого підключення МІС до ЦБД. ",
        iconClass: "bx bx-wifi-0",
      },
    ],
  },
  {
    header: "Подайте Адміністратору запит на проведення тестування",
    content: [
      {
        text: "Для цього:",
      },
      {
        text: "1. Заповніть <a class='in-text-link' href='https://e-health-ua.atlassian.net/servicedesk/customer/portal/6/group/35/create/107'>заявку</a>.",
      },
      {
        text: "2. Підготуйте документи у вигляді сканованих у PDF копій:",
      },
    ],
    subcontent: [
      {
        text: "інформацію про наявні технічні специфікації, необхідні для розробки електронної медичної інформаційної системи (далі - МІС);",
        iconClass: "bx bx-wifi-0",
      },
      {
        text: "доступ до тестових середовищ з метою перевірки розробленого функціоналу на сумісність із центральною базою даних (далі - ЦБД).",
        iconClass: "bx bx-wifi-0",
      },
      {
        text: "доступ до служби підтримки eHealth та комунікаційних каналів.",
        iconClass: "bx bx-wifi-0",
      },
    ],
    content2: [
      {
        text: "3. Подайте <a class='in-text-link' href='https://e-health-ua.atlassian.net/servicedesk/customer/portal/6'>запит</a> на отримання бажаних послуг та додайте зазначений набір файлів (копії документів та заявка з електронним підписом уповноваженої особи й печаткою (у разі її наявності):",
      },
    ],
    subcontent2: [
      {
        text: "<a class='in-text-link' href='https://e-health-ua.atlassian.net/servicedesk/customer/portal/6/group/35/create/138'>Запит</a> на тестування",
        iconClass: "bx bx-wifi-0",
      },
      {
        text: "<a class='in-text-link' href='https://e-health-ua.atlassian.net/servicedesk/customer/portal/6/group/35/create/162'>Запит</a> на доступ до тестових середовищ",
        iconClass: "bx bx-wifi-0",
      },
      {
        text: "Запит на отримання розширеного доступу до тестових середовищ.",
        iconClass: "bx bx-wifi-0",
      },
    ],
  },
  {
    header:"Проведення тестування Адміністратором ( до 30 календарних днів)",
    content:"Отримавши запит на проведення тестування, Адміністратор перевіряє надані оператором МІС документи. У разі відсутності зауважень до заяви та копій документів, Адміністратор здійснює тестування."
  },
  {
    header:"Отримайте висновок (3 робочі дні)",
    content:"За результатами розгляду надісланих матеріалів МІС отримує висновок. <br> <br> У разі встановлення невідповідностей, висновок буде містити опис таких невідповідностей та пропозиції щодо їх усунення. Оператор МІС має право повторно подати заявку Адміністратору після усунення невідповідностей."
  },
  {
    header:"Укладіть з Адміністратором договір про підключення МІС до ЦБД подавши заявку на приєднання, додатки та логотип МІС (180×100 піскелей, формат PNG).",
    content:[
      {
        text: "<a class='in-text-link' href='https://ehealth.gov.ua/wp-content/uploads/2022/09/Dogovir.pdf'>Договір</a>",
        iconClass: "bx bx-wifi-0",
      },
      {
        text: "<a class='in-text-link' href='https://ehealth.gov.ua/wp-content/uploads/2021/10/Zayavka-na-pryyednannya-do-dogovoru-1.pdf'>Шаблон заявки на приєднання</a>",
        iconClass: "bx bx-wifi-0",
      }
    ],
    subcontent: [
      {
        text: "Цей Договір є договором приєднання в контексті статті 634 Цивільного кодексу України та частини четвертої статті 179 Господарського кодексу України та укладається шляхом приєднання Оператора МІС до всіх його умов. У випадку незгоди зі змістом та формою Договору, чи окремих його положень, Оператор МІС вправі відмовитися від його укладення."
      },
      {
        text: "Протягом п’яти робочих днів з дати укладення договору Адміністратор оприлюднить на своєму веб-сайті  інформацію про підключення МІС до ЦБД та її функціональні можливості в електронній системі охорони здоров’я.",
      }
    ],
  },
  {
    header:"Отримайте від Адміністратора ключі доступу до продуктивного середовища (5 робочих днів)",
    content:""
  },
];

function createAccordion(header, content, subcontent, content2, subcontent2) {
  const accordionItem = document.createElement("div");
  accordionItem.className = "accordion-item";

  const accordionHeader = document.createElement("div");
  accordionHeader.className = "accordion-header";

  const headerText = document.createElement("h5");

  // Check if the header contains a link
  const linkRegex = /(https?:\/\/\S+)/;
  const linkMatch = header.match(linkRegex);
;
  const containsATags = /<a[^>]*>.*<\/a>/i.test(header);

  

  if (linkMatch) {
    const textBeforeLink = header.split(linkMatch[0])[0];
    const firstPart = document.createElement("span");
    firstPart.innerHTML = textBeforeLink;

    const secondPart = document.createElement("a");
    secondPart.href = linkMatch[0];
    secondPart.textContent = linkMatch[0];
    secondPart.className = "in-text-link";
    secondPart.style.pointerEvents = "all";

    // Add an event listener to the link to stop event propagation
    secondPart.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    headerText.appendChild(firstPart);
    headerText.appendChild(secondPart);
  }else {
    headerText.innerHTML = header;
  }


  if (containsATags) {
   // Create a regular expression to match <a> tags
  const regex = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1[^>]*?>(.*?)<\/a>/gi;

  const extractedText = header.replace(regex, function (match, quote, url, linkText) {
    const link = document.createElement("a");
    link.href = url;
    link.textContent = linkText;
    link.classList.add("in-text-link"); // Add the class here
    link.style.pointerEvents = "all";

    return link.outerHTML;
  });

  headerText.innerHTML = extractedText;
     }

  const icon = document.createElement("i");
  icon.className = "fa-sharp fa-solid fa-plus";

  accordionHeader.appendChild(headerText);

  // Append the icon only if there is content (string or array)
  if (
    (typeof content === "string" && content.trim() !== "") ||
    (Array.isArray(content) && content.length > 0)
  ) {
    accordionHeader.appendChild(icon);
  } else {
    // Disable the accordion (not clickable) when there's no content
    accordionHeader.style.pointerEvents = "none";
  }

  const accordionContent = document.createElement("div");
  accordionContent.className = "accordion-content";
  accordionContent.style.maxHeight = "0";

  const accordionContentInner = document.createElement("div");
  accordionContentInner.className = "accordion-content-inner";
  accordionContentInner.classList.add('flex-column', 'gap-16')
  // Replace words with links in content
  if (typeof content === "string" && content.trim() !== "") {
    const contentDiv = document.createElement("p");
    contentDiv.innerHTML = content;
    accordionContentInner.appendChild(contentDiv);
  } else if (Array.isArray(content) && content.length > 0) {
    const subcontentList = document.createElement("ul");
    subcontentList.classList.add('flex-column', 'gap-12')
    content.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<i class="${item.iconClass}"></i> <p> ${item.text}</p>`;
      subcontentList.appendChild(listItem);
    });
    accordionContentInner.appendChild(subcontentList);
  }

  // Replace words with links in subcontent
  if (subcontent && subcontent.length > 0) {
    const subcontentList = document.createElement("ul");
    subcontentList.classList.add('flex-column', 'gap-12')
    subcontent.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<i class="${item.iconClass}"></i> <p> ${item.text}</p>`;
      subcontentList.appendChild(listItem);
    });
    accordionContentInner.appendChild(subcontentList);
  }

  // Replace words with links in content2
  if (content2 && content2.length > 0) {
    const content2List = document.createElement("ul");
    content2List.classList.add('flex-column', 'gap-12')
    content2.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<i class="${item.iconClass}"></i> <p> ${item.text}</p>`;
      content2List.appendChild(listItem);
    });
    accordionContentInner.appendChild(content2List);
  }

  // Replace words with links in subcontent2
  if (subcontent2 && subcontent2.length > 0) {
    const subcontent2List = document.createElement("ul");
    subcontent2List.classList.add('flex-column', 'gap-12')
    subcontent2.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<i class="${item.iconClass}"></i> <p> ${item.text}</p>`;
      subcontent2List.appendChild(listItem);
    });
    accordionContentInner.appendChild(subcontent2List);
  }

  accordionContent.appendChild(accordionContentInner);
  accordionItem.appendChild(accordionHeader);
  accordionItem.appendChild(accordionContent);

  accordionHeader.addEventListener("click", function () {
    const isOpen = accordionContent.style.maxHeight !== "0px";
    closeAllAccordions();

    if (!isOpen) {
      accordionContent.style.maxHeight =
        accordionContentInner.scrollHeight + "px";
      icon.style.transform = "rotate(45deg)";
    } else {
      accordionContent.style.maxHeight = "0";
      icon.style.transform = "rotate(0deg)";
    }
  });

  return accordionItem;
}

function closeAllAccordions() {
  const allContents = document.querySelectorAll(".accordion-content");
  allContents.forEach((content) => {
    content.style.maxHeight = "0";
  });

  const allIcons = document.querySelectorAll(".accordion-header i");
  allIcons.forEach((icon) => {
    icon.style.transform = "rotate(0deg)";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll("[data-accordion-type]");

  containers.forEach((container) => {
    const accordionType = container.getAttribute("data-accordion-type");
    let accordion = null;

    switch (accordionType) {
      case "misAccordion":
        accordion = misAccordion;
        break;
      case "dashboardsAccordion":
        accordion = dashboardsAccordion;
        break;
      case "firstCareAccordion":
        accordion = firstCare;
        break;
      case "specialCareAccordion":
        accordion = specialCare;
        break;
      case "pharmacyAccordion":
        accordion = pharmacyAccordion;
        break;
      case "makeDeclarationAccordion":
        accordion = declarationAccordion;
        break;
      case "ePrescriptionInstruction":
        accordion = ePrescriptionInstruction;
        break;
      case "babyServiceAccordion":
        accordion = babyServiceAccordion;
        break;
      case "developersServiceAccordion":
        accordion = developersServiceAccordion;
        break;
      // Add more cases as needed

      default:
        // Handle the default case, if necessary
        break;
    }

    if (accordion) {
      createAccordionForContainer(container.id, accordion);
    }
  });
});

function createAccordionForContainer(containerId, dataArray) {
  const accordionContainer = document.getElementById(containerId);

  if (dataArray && dataArray.length > 0) {
    dataArray.forEach((item) => {
      const section = createAccordion(
        item.header,
        item.content,
        item.subcontent,
        item.content2,
        item.subcontent2
      );
      if (section) {
        accordionContainer.appendChild(section);
      }
    });
  }
}
