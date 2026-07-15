const translations = {
  en: {
    eyebrow: "TONIGHT, REWRITTEN", introTitle: "Good evenings don’t plan themselves.",
    bubbleOne: "Okay, let’s come up with something for tonight — just not the usual.", start: "Let’s start",
    microcopy: "We’ll turn your mood, budget and people into one ready-to-go plan.", stepOne: "STEP 1 OF 2",
    builderTitle: "What kind of night are we making?", people: "How many people?", budget: "Budget per person",
    free: "Free", duration: "Time available", mood: "Your mood", cozy: "Cozy", curious: "Curious", wild: "Wild", active: "Active",
    where: "Where?", mixed: "Surprise me", inside: "Inside", outside: "Outside", activities: "Things you’re up for",
    food: "Food", film: "Film", games: "Games", walk: "Walk", culture: "Culture", music: "Music", challenge: "Challenge", makePlan: "Make our night",
    yourNight: "YOUR RANDOM NIGHT", resultTitle: "Tonight has a plot now.", roulette: "Roulette", vote: "Vote", share: "Share the plan",
    remix: "Remix this night", preferences: "PREFERENCES", settings: "Settings", sound: "Celebration sound", currency: "Currency",
    install: "Install on iPhone", privacy: "No account. No tracking. Your choices stay on this device.", chanceMode: "CHANCE MODE",
    rouletteTitle: "Let fate pick one.", spin: "Spin again", groupDecision: "GROUP DECISION", voteTitle: "Pass the phone. Cast a vote.",
    voteHint: "Tap one option per person. Results update instantly.", resetVotes: "Reset votes", hours: "hours", peopleShort: "people",
    selected: "Fate says: go with", copied: "Plan copied — send it to the group!", installHelp: "On iPhone: tap Share, then Add to Home Screen.",
    voteRecorded: "Vote counted!", ready: "Your night is ready.", noActivities: "Pick at least one activity.", votes: "votes", voteFor: "Vote for", minutes: "MIN",
    planIntro: "Random Night plan", total: "est. per person", budgetUsed: "of budget", tierFree: "Zero-spend adventure", tierLow: "Pocket-friendly night", tierMid: "Comfortable night", tierHigh: "Big night out", tierPremium: "All-out occasion", fallbackTitle: "One excellent detour",
    fallbackDescription: "Take a different route and let each person choose one stop without explaining why."
  },
  ru: {
    eyebrow: "ВЕЧЕР, НО ПО-НОВОМУ", introTitle: "Хорошие вечера сами себя не планируют.",
    bubbleOne: "Давай придумаем что-нибудь на сегодня — только не как обычно.", start: "Начать",
    microcopy: "Превратим ваше настроение, бюджет и компанию в готовый план.", stepOne: "ШАГ 1 ИЗ 2",
    builderTitle: "Какой вечер мы сегодня создаём?", people: "Сколько вас?", budget: "Бюджет на человека",
    free: "Бесплатно", duration: "Сколько есть времени", mood: "Настроение", cozy: "Уютно", curious: "Любопытно", wild: "Безумно", active: "Активно",
    where: "Где?", mixed: "Удивите меня", inside: "В помещении", outside: "На улице", activities: "Чего хочется",
    food: "Еда", film: "Кино", games: "Игры", walk: "Прогулка", culture: "Культура", music: "Музыка", challenge: "Челлендж", makePlan: "Собрать наш вечер",
    yourNight: "ВАШ СЛУЧАЙНЫЙ ВЕЧЕР", resultTitle: "Теперь у вечера есть сюжет.", roulette: "Рулетка", vote: "Голосование", share: "Поделиться",
    remix: "Перемешать вечер", preferences: "ПАРАМЕТРЫ", settings: "Настройки", sound: "Звук праздника", currency: "Валюта",
    install: "Установить на iPhone", privacy: "Без аккаунта и слежки. Выбор остаётся на устройстве.", chanceMode: "РЕЖИМ СЛУЧАЯ",
    rouletteTitle: "Пусть решает судьба.", spin: "Крутить ещё", groupDecision: "РЕШАЕМ ВМЕСТЕ", voteTitle: "Передайте телефон. Голосуйте.",
    voteHint: "По одному выбору на человека. Результат обновляется сразу.", resetVotes: "Сбросить голоса", hours: "ч", peopleShort: "чел.",
    selected: "Судьба выбрала", copied: "План скопирован — отправьте его друзьям!", installHelp: "На iPhone: нажмите «Поделиться», затем «На экран Домой».",
    voteRecorded: "Голос учтён!", ready: "Ваш вечер готов.", noActivities: "Выберите хотя бы одно занятие.", votes: "голосов", voteFor: "Голос за", minutes: "МИН",
    planIntro: "План Random Night", total: "примерно с человека", budgetUsed: "из бюджета", tierFree: "Приключение без трат", tierLow: "Бюджетный вечер", tierMid: "Комфортный вечер", tierHigh: "Большой выход", tierPremium: "Особенный вечер", fallbackTitle: "Один отличный крюк",
    fallbackDescription: "Идите непривычным маршрутом, и пусть каждый выберет одну остановку, не объясняя почему."
  }
};

const eventLibrary = [
  { id: "market", type: "food", place: "outside", moods: ["curious", "active", "wild"], cost: 14, minutes: 55, icon: "◒", en: ["Blind-pick street food", "At the first lively food spot, each person chooses a bite for someone else. No repeats."], ru: ["Стритфуд вслепую", "В первом оживлённом месте каждый выбирает закуску не себе. Повторы запрещены."] },
  { id: "picnic", type: "food", place: "outside", moods: ["cozy", "curious"], cost: 10, minutes: 60, icon: "✿", en: ["Pocket picnic", "Build a tiny picnic from three things: something local, something purple and something new."], ru: ["Карманный пикник", "Соберите мини-пикник из трёх вещей: местной, фиолетовой и совершенно новой."] },
  { id: "taste", type: "food", place: "inside", moods: ["cozy", "curious"], cost: 18, minutes: 65, icon: "◇", en: ["Three-stop tasting", "Split one signature item at three nearby places. Rate each with a made-up award."], ru: ["Дегустация в трёх точках", "Разделите одно фирменное блюдо в трёх местах и придумайте каждому смешную награду."] },
  { id: "pantry", type: "food", place: "inside", moods: ["cozy", "curious", "wild"], cost: 0, minutes: 45, icon: "⌂", en: ["Pantry tapas lab", "Make three tiny plates only from what is already in the kitchen. Give each one a restaurant name."], ru: ["Тапас из запасов", "Сделайте три мини-блюда только из того, что уже есть дома, и дайте каждому ресторанное название."] },
  { id: "bakery", type: "food", place: "outside", moods: ["cozy", "curious"], cost: 8, minutes: 45, icon: "☾", en: ["After-dark bakery pick", "Find a bakery still glowing. Choose the thing none of you would normally order and split it."], ru: ["Ночная вылазка в пекарню", "Найдите ещё открытую пекарню и разделите то, что обычно никто из вас не заказал бы."] },
  { id: "cookoff", type: "food", place: "inside", moods: ["wild", "curious", "active"], cost: 12, minutes: 80, minPeople: 2, icon: "⌁", en: ["Mystery-bag cook-off", "Buy five surprise ingredients, split into teams and invent dinner. One ingredient must stay secret."], ru: ["Битва загадочных продуктов", "Купите пять случайных ингредиентов, разделитесь на команды и придумайте ужин. Один продукт держите в секрете."] },
  { id: "dessert", type: "food", place: "mixed", moods: ["cozy", "curious", "wild"], cost: 24, minutes: 70, icon: "♡", en: ["Dessert crawl", "Visit two dessert spots and order one signature plate at each. Crown the winner with a dramatic speech."], ru: ["Десертный маршрут", "Зайдите в две десертные и возьмите по фирменному блюду. Победителя объявите торжественной речью."] },
  { id: "nightmarket", type: "food", place: "outside", moods: ["wild", "active", "curious"], cost: 32, minutes: 90, icon: "✣", en: ["Night-market passport", "Collect one salty, one sweet and one unfamiliar taste. Each stop earns a stamp in your notes."], ru: ["Паспорт ночного маркета", "Найдите солёный, сладкий и незнакомый вкус. Каждую остановку отмечайте штампом в заметках."] },
  { id: "chef-counter", type: "food", place: "inside", moods: ["cozy", "curious"], cost: 58, minutes: 105, maxPeople: 4, icon: "◈", en: ["Chef-counter surprise", "Book the counter and let the kitchen choose the courses. Everyone names the most unexpected detail."], ru: ["Сюрприз за стойкой шефа", "Сядьте у открытой кухни и доверьте выбор блюд шефу. Каждый отмечает самую неожиданную деталь."] },
  { id: "supper-club", type: "food", place: "inside", moods: ["cozy", "curious", "wild"], cost: 92, minutes: 150, minPeople: 2, maxPeople: 8, icon: "♢", en: ["Secret supper club", "Choose a one-night menu in an unusual venue. Dress for a theme that only your group knows."], ru: ["Секретный ужин", "Выберите разовое меню в необычном месте и оденьтесь по теме, которую знает только ваша компания."] },
  { id: "tasting-room", type: "food", place: "inside", moods: ["cozy", "curious"], cost: 138, minutes: 150, maxPeople: 6, icon: "✧", en: ["Private tasting room", "Turn dinner into a guided tasting with paired courses and a final blind flavor challenge."], ru: ["Приватная дегустация", "Превратите ужин в дегустацию с сопровождением блюд и финальным слепым испытанием вкуса."] },
  { id: "film", type: "film", place: "inside", moods: ["cozy", "curious"], cost: 8, minutes: 95, icon: "▶", en: ["Mystery short-film club", "Pick a short film by poster only. Afterward, pitch its wildly incorrect sequel in one minute."], ru: ["Клуб короткого метра", "Выберите короткометражку только по постеру, а после за минуту придумайте ей безумный сиквел."] },
  { id: "scene", type: "film", place: "outside", moods: ["curious", "wild"], cost: 0, minutes: 45, icon: "▣", en: ["Recreate a movie still", "Find a cinematic street corner and stage one dramatic still. The stranger the genre, the better."], ru: ["Повторите кадр из кино", "Найдите кинематографичный угол и поставьте драматичный кадр. Чем страннее жанр, тем лучше."] },
  { id: "dub", type: "film", place: "inside", moods: ["cozy", "wild", "curious"], cost: 0, minutes: 55, minPeople: 2, icon: "◐", en: ["Mute-film dubbing", "Play a familiar scene without sound and perform every voice live. Commit fully to the wrong genre."], ru: ["Живой дубляж", "Включите знакомую сцену без звука и озвучьте всех героев. Смело меняйте жанр на противоположный."] },
  { id: "projector", type: "film", place: "outside", moods: ["cozy", "curious"], cost: 9, minutes: 120, icon: "□", en: ["Blanket-screen cinema", "Take a projector or laptop outside, bring warm drinks and let the youngest person choose the film."], ru: ["Кинотеатр на пледе", "Вынесите проектор или ноутбук на улицу, возьмите тёплые напитки, а фильм выбирает самый младший."] },
  { id: "cinema-roulette", type: "film", place: "inside", moods: ["curious", "wild"], cost: 19, minutes: 130, icon: "↻", en: ["Cinema schedule roulette", "Go to the nearest cinema and watch the next film starting, without checking its trailer or rating."], ru: ["Рулетка киносеансов", "Идите в ближайший кинотеатр и смотрите следующий сеанс, не проверяя трейлер и рейтинг."] },
  { id: "microcinema", type: "film", place: "inside", moods: ["cozy", "curious"], cost: 30, minutes: 130, icon: "▤", en: ["Microcinema double bill", "Pair a local or experimental film with a classic. Trade one observation before the credits end."], ru: ["Двойной сеанс в микрокинотеатре", "Соедините локальный или экспериментальный фильм с классикой и обменяйтесь одной мыслью до конца титров."] },
  { id: "dinner-screening", type: "film", place: "inside", moods: ["cozy", "curious"], cost: 55, minutes: 150, icon: "◩", en: ["Dinner-and-film pairing", "Match a meal to the setting of a favorite film, then screen it with one themed intermission."], ru: ["Ужин в стиле фильма", "Подберите еду к месту действия любимого фильма и устройте тематический антракт."] },
  { id: "private-screening", type: "film", place: "inside", moods: ["cozy", "wild"], cost: 115, minutes: 150, minPeople: 3, maxPeople: 10, icon: "★", en: ["Private cinema takeover", "Rent a small screen, choose a cult favorite and hand out playful awards after the credits."], ru: ["Свой кинозал", "Арендуйте небольшой зал, выберите культовый фильм и после титров вручите шуточные награды."] },
  { id: "trivia", type: "games", place: "inside", moods: ["curious", "cozy"], cost: 5, minutes: 65, icon: "?", en: ["Homemade trivia duel", "Everyone writes three questions about their current obsession. Most surprising answer wins."], ru: ["Домашняя викторина", "Каждый пишет три вопроса о своём нынешнем увлечении. Побеждает самый неожиданный ответ."] },
  { id: "arcade", type: "games", place: "inside", moods: ["active", "wild", "curious"], cost: 12, minutes: 70, icon: "✚", en: ["Low-stakes game tournament", "Choose three fast games. The loser invents the winner’s ceremonial title."], ru: ["Турнир без серьёзных ставок", "Выберите три быстрые игры. Проигравший придумывает победителю торжественный титул."] },
  { id: "puzzle-hunt", type: "games", place: "outside", moods: ["curious", "active", "wild"], cost: 0, minutes: 70, minPeople: 2, icon: "⌘", en: ["Neighborhood puzzle hunt", "One person hides five clues around familiar blocks. The rest solve them against a timer."], ru: ["Квест по району", "Один прячет пять подсказок на знакомых улицах, остальные разгадывают их на время."] },
  { id: "boardgame-cafe", type: "games", place: "inside", moods: ["cozy", "curious", "wild"], cost: 14, minutes: 100, minPeople: 2, icon: "◆", en: ["Board-game café draft", "Each person nominates one game. Draw the final choice blindly and invent a house rule."], ru: ["Драфт настольных игр", "Каждый предлагает игру, финальный вариант тяните вслепую и добавьте одно домашнее правило."] },
  { id: "bowling", type: "games", place: "inside", moods: ["active", "wild"], cost: 28, minutes: 90, minPeople: 2, icon: "●", en: ["Reverse-score bowling", "Play three frames normally, then award bonus points for style, commentary and impossible poses."], ru: ["Боулинг с обратным счётом", "Три фрейма играйте обычно, а потом давайте бонусы за стиль, комментарии и невозможные позы."] },
  { id: "escape-room", type: "games", place: "inside", moods: ["curious", "wild", "active"], cost: 44, minutes: 90, minPeople: 2, maxPeople: 8, icon: "⌖", en: ["Escape-room role swap", "Choose roles before entering: detective, skeptic, archivist and chaos agent. Stay in character."], ru: ["Квест со сменой ролей", "До входа выберите роли: детектив, скептик, архивариус и агент хаоса. Не выходите из образа."] },
  { id: "vr-arena", type: "games", place: "inside", moods: ["active", "wild", "curious"], cost: 60, minutes: 90, minPeople: 2, icon: "∞", en: ["VR team campaign", "Choose a cooperative world, assign one leader per round and switch strategy after every defeat."], ru: ["Командная VR-кампания", "Выберите кооперативный мир, меняйте лидера каждый раунд и стратегию после каждого поражения."] },
  { id: "game-master", type: "games", place: "inside", moods: ["curious", "wild", "cozy"], cost: 96, minutes: 150, minPeople: 4, maxPeople: 12, icon: "♜", en: ["Hosted mystery night", "Bring in a game master for a custom mystery with secret roles, clues and a cinematic finale."], ru: ["Детектив с ведущим", "Пригласите ведущего для персональной тайны с секретными ролями, уликами и кинематографичным финалом."] },
  { id: "walk", type: "walk", place: "outside", moods: ["cozy", "curious", "active"], cost: 0, minutes: 60, icon: "↗", en: ["The left-right walk", "At every second corner, flip a coin for the next direction. Stop when you find a view worth keeping."], ru: ["Прогулка «лево-право»", "На каждом втором перекрёстке бросайте монетку. Остановитесь, когда найдёте вид, который хочется запомнить."] },
  { id: "photo", type: "walk", place: "outside", moods: ["curious", "wild"], cost: 0, minutes: 55, icon: "◎", en: ["One-color photo hunt", "Pick one color and collect seven photos of it in the wild. No two objects can match."], ru: ["Фотоохота на один цвет", "Выберите цвет и найдите семь его проявлений вокруг. Одинаковые предметы не считаются."] },
  { id: "architecture", type: "walk", place: "outside", moods: ["curious", "cozy", "active"], cost: 0, minutes: 65, icon: "⌂", en: ["Architecture bingo", "Hunt for a spiral, an animal, a secret date, a tiny door and the boldest balcony."], ru: ["Архитектурное бинго", "Найдите спираль, животное, секретную дату, крошечную дверь и самый смелый балкон."] },
  { id: "skywatch", type: "walk", place: "outside", moods: ["cozy", "curious"], cost: 0, minutes: 50, icon: "✦", en: ["Pocket skywatch", "Find the darkest nearby spot, put phones away and invent names for three stars or cloud shapes."], ru: ["Карманное наблюдение за небом", "Найдите самое тёмное место поблизости, уберите телефоны и придумайте названия трём звёздам или облакам."] },
  { id: "night-tram", type: "walk", place: "outside", moods: ["curious", "wild", "cozy"], cost: 5, minutes: 75, icon: "→", en: ["Last-stop tram ride", "Board a route you rarely use, ride eight stops and explore the first interesting street you see."], ru: ["Трамвай до неизвестной остановки", "Сядьте на незнакомый маршрут, проедьте восемь остановок и исследуйте первую интересную улицу."] },
  { id: "ghost-walk", type: "walk", place: "outside", moods: ["curious", "wild"], cost: 26, minutes: 90, minPeople: 2, icon: "☽", en: ["Local legends walk", "Follow a night tour or research three strange local stories and narrate them at their locations."], ru: ["Прогулка по городским легендам", "Присоединитесь к ночной экскурсии или найдите три странные местные истории и расскажите их на месте событий."] },
  { id: "view-deck", type: "walk", place: "outside", moods: ["cozy", "curious"], cost: 35, minutes: 70, icon: "△", en: ["City-lights lookout", "Climb to a viewing deck near blue hour. Each person points out one place tied to a memory."], ru: ["Город с высоты", "Поднимитесь на смотровую площадку в синий час. Каждый показывает место, связанное с воспоминанием."] },
  { id: "night-boat", type: "walk", place: "outside", moods: ["cozy", "curious", "wild"], cost: 62, minutes: 110, minPeople: 2, icon: "≈", en: ["Night-water route", "Take an evening boat ride, choose the open deck and make a three-photo story without selfies."], ru: ["Ночной маршрут по воде", "Отправьтесь на вечернюю прогулку по воде и соберите историю из трёх фотографий без селфи."] },
  { id: "stargazing-guide", type: "walk", place: "outside", moods: ["cozy", "curious"], cost: 108, minutes: 150, minPeople: 2, maxPeople: 8, icon: "✺", en: ["Guided stargazing escape", "Leave the city with a guide and telescope, then end with a warm midnight picnic."], ru: ["Выезд к звёздам с гидом", "Уезжайте за город с гидом и телескопом, а завершите ночь тёплым полуночным пикником."] },
  { id: "mission", type: "challenge", place: "mixed", moods: ["wild", "active", "curious"], cost: 3, minutes: 45, icon: "⚑", en: ["Secret mission swap", "Write playful missions for each other. Reveal them only after everyone has completed theirs."], ru: ["Обмен секретными миссиями", "Напишите друг другу игровые задания. Раскройте их только после того, как все справятся."] },
  { id: "dance", type: "challenge", place: "mixed", moods: ["wild", "active"], cost: 0, minutes: 35, icon: "♪", en: ["Three-song dance break", "Each person adds one unexpected track. Phones down until the final note."], ru: ["Танцы на три песни", "Каждый ставит по одному неожиданному треку. Телефоны — в сторону до последней ноты."] },
  { id: "story", type: "games", place: "outside", moods: ["cozy", "curious"], cost: 0, minutes: 40, icon: "✎", en: ["Pass-the-story bench", "Find a bench. Build one story together, adding exactly two sentences at a time."], ru: ["История на скамейке", "Найдите скамейку и сочиняйте одну историю, добавляя ровно по два предложения."] },
  { id: "kindness", type: "challenge", place: "mixed", moods: ["cozy", "curious", "active"], cost: 0, minutes: 45, icon: "+", en: ["Tiny kindness relay", "Complete three anonymous good deeds in one hour. No photos and no revealing who did what."], ru: ["Эстафета добрых дел", "Сделайте три анонимных добрых дела за час. Без фотографий и признаний, кто что сделал."] },
  { id: "scavenger", type: "challenge", place: "outside", moods: ["wild", "active", "curious"], cost: 0, minutes: 60, minPeople: 2, icon: "⌕", en: ["No-phone scavenger sprint", "Memorize a list of seven odd finds, lock the phones and return with proof before the timer ends."], ru: ["Поиск без телефонов", "Запомните семь странных находок, заблокируйте телефоны и вернитесь с доказательствами до конца таймера."] },
  { id: "midnight-sport", type: "challenge", place: "outside", moods: ["active", "wild"], cost: 8, minutes: 70, minPeople: 2, icon: "↯", en: ["Glow-stick sports", "Turn a court or park into a night arena with glowing markers and one ridiculous bonus rule."], ru: ["Ночной спорт со светящимися метками", "Превратите площадку в ночную арену и добавьте одно нелепое бонусное правило."] },
  { id: "karaoke", type: "challenge", place: "inside", moods: ["wild", "active"], cost: 20, minutes: 90, minPeople: 2, icon: "♫", en: ["Karaoke alter egos", "Invent stage names, pick songs for each other and finish with a group anthem nobody rehearsed."], ru: ["Караоке-альтер эго", "Придумайте сценические имена, выбирайте песни друг другу и завершите общим гимном без репетиции."] },
  { id: "thrift", type: "challenge", place: "inside", moods: ["wild", "curious"], cost: 25, minutes: 85, minPeople: 2, icon: "♧", en: ["Thrift-store costume swap", "Set a tiny limit and style one another for an imaginary premiere. Wear the result to the next stop."], ru: ["Образы из секонд-хенда", "Задайте небольшой лимит и соберите друг другу наряды для вымышленной премьеры. В них идите дальше."] },
  { id: "dance-class", type: "challenge", place: "inside", moods: ["active", "wild", "curious"], cost: 34, minutes: 75, minPeople: 2, icon: "↝", en: ["One-night dance class", "Try a style nobody knows. Your only goal is to learn one eight-count well enough to film once."], ru: ["Танцевальный урок на один вечер", "Попробуйте незнакомый стиль и выучите одну восьмёрку достаточно хорошо, чтобы снять её одним дублем."] },
  { id: "improv", type: "challenge", place: "inside", moods: ["wild", "curious"], cost: 38, minutes: 100, icon: "!", en: ["Improv-show dare", "See an improv show, then draw three prompts afterward and perform a private five-minute encore."], ru: ["Импровизационный вызов", "Посмотрите импров-шоу, затем вытяните три темы и сыграйте свой пятиминутный бис."] },
  { id: "climbing", type: "challenge", place: "inside", moods: ["active", "wild"], cost: 46, minutes: 110, minPeople: 2, icon: "▲", en: ["Climbing route pact", "Choose one route for each person, cheer every attempt and celebrate effort rather than height."], ru: ["Скалодромный договор", "Выберите маршрут каждому, поддерживайте каждую попытку и празднуйте усилие, а не высоту."] },
  { id: "pottery", type: "challenge", place: "inside", moods: ["cozy", "curious"], cost: 52, minutes: 120, icon: "◡", en: ["Make-the-worst-mug workshop", "Take a pottery or painting class with one rule: usefulness matters less than a great backstory."], ru: ["Мастерская худшей кружки", "Идите на керамику или рисование с одним правилом: история предмета важнее его пользы."] },
  { id: "gallery-game", type: "culture", place: "inside", moods: ["curious", "cozy", "wild"], cost: 0, minutes: 55, icon: "▱", en: ["Gallery caption heist", "Visit a free gallery, hide the captions and invent titles before revealing the artist’s version."], ru: ["Кража музейных подписей", "В бесплатной галерее не читайте подписи и придумайте свои названия до того, как узнаете авторские."] },
  { id: "public-art", type: "culture", place: "outside", moods: ["curious", "active", "cozy"], cost: 0, minutes: 70, icon: "◫", en: ["Public-art detective", "Find three works outdoors and connect them into one imaginary conspiracy with evidence."], ru: ["Детектив по уличному искусству", "Найдите три работы под открытым небом и свяжите их в один вымышленный заговор с доказательствами."] },
  { id: "library", type: "culture", place: "inside", moods: ["cozy", "curious"], cost: 0, minutes: 45, icon: "≡", en: ["Library shelf roulette", "Choose a random shelf number, open three books and build tonight’s fortune from one line in each."], ru: ["Библиотечная рулетка", "Выберите случайный номер полки, откройте три книги и соберите предсказание вечера из трёх строк."] },
  { id: "museum-late", type: "culture", place: "inside", moods: ["curious", "cozy"], cost: 24, minutes: 100, icon: "▥", en: ["Museum after hours", "Pick one room each and give the others a two-minute tour built around a single question."], ru: ["Музей после закрытия", "Каждый выбирает зал и проводит двухминутную экскурсию вокруг одного вопроса."] },
  { id: "maker-workshop", type: "culture", place: "inside", moods: ["curious", "active", "cozy"], cost: 45, minutes: 120, icon: "✂", en: ["One-night maker workshop", "Learn printmaking, glass, collage or another unfamiliar craft and exchange the finished pieces."], ru: ["Вечерняя мастерская", "Попробуйте печать, стекло, коллаж или другое новое ремесло и обменяйтесь готовыми работами."] },
  { id: "theatre-rush", type: "culture", place: "inside", moods: ["curious", "wild", "cozy"], cost: 58, minutes: 150, icon: "◭", en: ["Theatre rush-ticket gamble", "Buy same-day seats for a show none of you researched. Predict the ending at intermission."], ru: ["Театральная рулетка", "Возьмите билеты день в день на незнакомый спектакль и в антракт предскажите финал."] },
  { id: "private-art", type: "culture", place: "inside", moods: ["curious", "cozy"], cost: 112, minutes: 130, maxPeople: 8, icon: "✥", en: ["Private art walk", "Book a guide around one surprising theme and end by choosing the work each person would live with."], ru: ["Приватный арт-маршрут", "Закажите экскурсию на неожиданную тему и в конце выберите работу, с которой каждый хотел бы жить."] },
  { id: "playlist-walk", type: "music", place: "outside", moods: ["cozy", "curious", "active"], cost: 0, minutes: 50, icon: "♫", en: ["Shared-headphone soundtrack", "Build a five-song route together. Each track gets one street and no explanations until the end."], ru: ["Прогулка с общим саундтреком", "Соберите маршрут из пяти песен: каждой — своя улица, объяснения только в финале."] },
  { id: "living-room-concert", type: "music", place: "inside", moods: ["cozy", "wild"], cost: 0, minutes: 55, minPeople: 2, icon: "♪", en: ["Living-room tiny desk", "Each person performs or lip-syncs one song using the room as a stage and household objects as props."], ru: ["Домашний мини-концерт", "Каждый исполняет или изображает одну песню, превращая комнату в сцену, а вещи — в реквизит."] },
  { id: "open-mic", type: "music", place: "inside", moods: ["wild", "curious"], cost: 8, minutes: 90, icon: "♬", en: ["Open-mic wildcard", "Find an open mic and assign playful awards to every act. Bonus: volunteer for one minute onstage."], ru: ["Сюрприз на открытом микрофоне", "Найдите открытый микрофон и придумайте награду каждому выступлению. Бонус — выйти на сцену на минуту."] },
  { id: "vinyl", type: "music", place: "inside", moods: ["cozy", "curious"], cost: 16, minutes: 70, icon: "◉", en: ["Vinyl side-A ritual", "Choose an album by cover art, listen to one full side and sketch the imaginary film it scores."], ru: ["Ритуал стороны А", "Выберите пластинку по обложке, послушайте одну сторону целиком и набросайте фильм, которому она стала бы саундтреком."] },
  { id: "local-gig", type: "music", place: "inside", moods: ["wild", "active", "curious"], cost: 28, minutes: 130, icon: "♩", en: ["Unknown-band gig", "Pick the smallest live show nearby by genre alone. Learn one song title before leaving."], ru: ["Концерт незнакомой группы", "Выберите самый маленький концерт поблизости только по жанру и запомните название одной песни."] },
  { id: "jazz-table", type: "music", place: "inside", moods: ["cozy", "curious"], cost: 48, minutes: 120, icon: "♭", en: ["Late jazz table", "Find a small live set, order one thing slowly and each choose the moment the room changed."], ru: ["Поздний джазовый столик", "Найдите камерный живой сет, никуда не спешите и отметьте момент, когда атмосфера в зале изменилась."] },
  { id: "concert", type: "music", place: "inside", moods: ["wild", "active", "cozy"], cost: 95, minutes: 170, minPeople: 2, icon: "✶", en: ["Headliner night", "Choose the best available seats, arrive for the support act and make one song the group’s new anthem."], ru: ["Вечер большого концерта", "Возьмите лучшие доступные места, придите к разогреву и выберите песню, которая станет гимном компании."] },
  { id: "private-chef", type: "food", place: "inside", moods: ["cozy", "curious", "wild"], cost: 180, minutes: 180, minPeople: 2, maxPeople: 6, icon: "♨", en: ["Private-chef plot twist", "Give a chef three favorite memories and let them turn those clues into a one-night menu at home."], ru: ["Сюжет от личного шефа", "Расскажите шефу о трёх любимых воспоминаниях и позвольте превратить их в уникальное домашнее меню."] },
  { id: "rooftop-cinema", type: "film", place: "outside", moods: ["cozy", "wild"], cost: 150, minutes: 180, minPeople: 4, maxPeople: 12, icon: "◒", en: ["Rooftop cinema buyout", "Take over a small rooftop screen, choose the film and create custom tickets and an intermission menu."], ru: ["Свой кинотеатр на крыше", "Арендуйте небольшую площадку, выберите фильм и придумайте свои билеты и меню для антракта."] },
  { id: "city-game", type: "games", place: "mixed", moods: ["curious", "active", "wild"], cost: 165, minutes: 180, minPeople: 4, maxPeople: 12, icon: "♞", en: ["Bespoke city game", "Let a game master turn your neighborhood into a live mystery with actors, messages and a final reveal."], ru: ["Персональная городская игра", "Пусть ведущий превратит район в живую тайну с актёрами, сообщениями и финальным раскрытием."] },
  { id: "photo-guide", type: "walk", place: "outside", moods: ["cozy", "curious", "active"], cost: 145, minutes: 150, minPeople: 2, maxPeople: 6, icon: "◉", en: ["Night photography expedition", "Explore after-dark locations with a photographer and leave with a small edited story of the group."], ru: ["Ночная фотоэкспедиция", "Исследуйте ночные локации с фотографом и получите небольшую отредактированную историю вашей компании."] },
  { id: "museum-private", type: "culture", place: "inside", moods: ["cozy", "curious"], cost: 160, minutes: 150, minPeople: 4, maxPeople: 10, icon: "♙", en: ["After-hours curator tour", "Enter after closing for a curator-led route built around your group’s interests and questions."], ru: ["Музей после закрытия с куратором", "Пройдите по музею после закрытия по маршруту, собранному вокруг интересов и вопросов вашей компании."] },
  { id: "backstage-session", type: "music", place: "inside", moods: ["wild", "curious", "cozy"], cost: 175, minutes: 180, minPeople: 2, maxPeople: 8, icon: "♯", en: ["Backstage listening session", "Pair premium seats with a studio or backstage visit and end by recording a tiny group sound souvenir."], ru: ["Музыкальный вечер за кулисами", "Соедините лучшие места с визитом в студию или за сцену и запишите маленький звуковой сувенир."] }
];

const state = {
  language: localStorage.getItem("rn-language") || "en",
  people: Number(localStorage.getItem("rn-people")) || 2,
  budget: Number(localStorage.getItem("rn-budget")) || 35,
  duration: Number(localStorage.getItem("rn-duration")) || 4,
  mood: localStorage.getItem("rn-mood") || "curious",
  location: localStorage.getItem("rn-location") || "mixed",
  activities: JSON.parse(localStorage.getItem("rn-activities") || '["food","film","games","walk","culture","music"]'),
  currency: localStorage.getItem("rn-currency") || "USD",
  plan: [], votes: {}, deferredInstall: null
};

const screens = ["introScreen", "builderScreen", "resultScreen"];
const symbols = { USD: "$", EUR: "€", RUB: "₽" };
const rates = { USD: 1, EUR: 0.92, RUB: 88 };
const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
const t = (key) => translations[state.language][key] || key;

function showScreen(id) {
  screens.forEach((screenId) => { const el = document.getElementById(screenId); el.hidden = screenId !== id; });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function applyLanguage() {
  document.documentElement.lang = state.language;
  $$('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  $("#languageLabel").textContent = state.language === "en" ? "RU" : "EN";
  $("#languageButton").setAttribute("aria-pressed", String(state.language === "ru"));
  localStorage.setItem("rn-language", state.language);
  updateOutputs();
  if (state.plan.length) renderPlan();
}

function formatMoney(usd) {
  const amount = Math.round(usd * rates[state.currency]);
  return state.currency === "RUB" ? `${amount} ${symbols[state.currency]}` : `${symbols[state.currency]}${amount}`;
}

function updateOutputs() {
  $("#peopleValue").textContent = state.people;
  $("#budgetValue").textContent = formatMoney(state.budget);
  $("#durationValue").textContent = `${state.duration}${state.language === "ru" ? " ч" : "h"}`;
  $("#budgetMax").textContent = `${formatMoney(200)}+`;
  $("#budgetTierLabel").textContent = t(budgetTierKey());
  $("#durationMin").textContent = state.language === "ru" ? "2 ч" : "2h";
  $("#durationMax").textContent = state.language === "ru" ? "8 ч" : "8h";
  $("#budgetRange").value = state.budget;
  $("#durationRange").value = state.duration;
}

function syncChoices() {
  $$("#moodChoices button").forEach((button) => toggleSelected(button, button.dataset.value === state.mood));
  $$("#locationChoices button").forEach((button) => toggleSelected(button, button.dataset.value === state.location));
  $$("#activityChoices button").forEach((button) => toggleSelected(button, state.activities.includes(button.dataset.value)));
}

function toggleSelected(button, selected) {
  button.classList.toggle("is-selected", selected);
  button.setAttribute("aria-pressed", String(selected));
}

function savePreferences() {
  ["people", "budget", "duration", "mood", "location", "currency"].forEach((key) => localStorage.setItem(`rn-${key}`, state[key]));
  localStorage.setItem("rn-activities", JSON.stringify(state.activities));
}

function shuffled(items) { return [...items].sort(() => Math.random() - 0.5); }

function budgetTierKey() {
  if (state.budget === 0) return "tierFree";
  if (state.budget <= 25) return "tierLow";
  if (state.budget <= 60) return "tierMid";
  if (state.budget <= 120) return "tierHigh";
  return "tierPremium";
}

function fitsGroup(item) {
  return state.people >= (item.minPeople || 1) && state.people <= (item.maxPeople || 12);
}

function matchesPlace(item) {
  return state.location === "mixed" || item.place === state.location || item.place === "mixed";
}

function generatePlan() {
  if (!state.activities.length) { showToast(t("noActivities")); return; }
  const maxItems = state.duration <= 2 ? 2 : state.duration <= 4 ? 3 : state.duration <= 6 ? 4 : 5;
  const candidates = eventLibrary.filter((item) => state.activities.includes(item.type) && fitsGroup(item) && item.cost <= state.budget);
  const picked = [];
  let spent = 0;
  let usedMinutes = 0;

  while (picked.length < maxItems) {
    const slotsLeft = maxItems - picked.length;
    const remainingBudget = state.budget - spent;
    const remainingMinutes = state.duration * 60 - usedMinutes;
    let eligible = candidates.filter((item) => !picked.includes(item) && item.cost <= remainingBudget && item.minutes + (picked.length ? 15 : 0) <= remainingMinutes);
    if (!eligible.length) break;
    const unusedTypes = eligible.filter((item) => !picked.some((chosen) => chosen.type === item.type));
    if (unusedTypes.length) eligible = unusedTypes;
    const idealCost = picked.length === 0 && state.budget > 120 ? state.budget * 0.68 : slotsLeft ? remainingBudget / slotsLeft : remainingBudget;
    const idealMinutes = slotsLeft ? Math.max(35, (remainingMinutes - Math.max(0, slotsLeft - 1) * 15) / slotsLeft) : remainingMinutes;
    const ranked = shuffled(eligible).sort((a, b) => {
      const score = (item) => (item.moods.includes(state.mood) ? 18 : 0) + (matchesPlace(item) ? 12 : 0) - Math.abs(item.cost - idealCost) / Math.max(2, idealCost / 12) - Math.abs(item.minutes - idealMinutes) / 12;
      return score(b) - score(a);
    });
    const choice = ranked[0];
    picked.push(choice);
    spent += choice.cost;
    usedMinutes += choice.minutes + (picked.length > 1 ? 15 : 0);
  }

  if (!picked.length) {
    const fallback = eventLibrary.find((item) => state.activities.includes(item.type) && fitsGroup(item) && item.cost === 0) || eventLibrary.find((item) => item.cost === 0);
    if (fallback) picked.push(fallback);
  }

  state.plan = picked;
  state.votes = Object.fromEntries(state.plan.map((item) => [item.id, 0]));
  savePreferences();
  renderPlan();
  showScreen("resultScreen");
  celebrate();
  showToast(t("ready"));
}

function renderPlan() {
  const total = state.plan.reduce((sum, item) => sum + item.cost, 0);
  $("#planMeta").innerHTML = `<span class="meta-tag">${state.people} ${t("peopleShort")}</span><span class="meta-tag">${state.duration} ${t("hours")}</span><span class="meta-tag">${t(budgetTierKey())}</span><span class="meta-tag">${formatMoney(total)} ${t("budgetUsed")} ${formatMoney(state.budget)}</span>`;
  let minutesFromStart = 19 * 60;
  $("#timeline").innerHTML = state.plan.map((item, index) => {
    const copy = item[state.language];
    const start = `${String(Math.floor(minutesFromStart / 60)).padStart(2, "0")}:${String(minutesFromStart % 60).padStart(2, "0")}`;
    minutesFromStart += item.minutes + 15;
    return `<li class="timeline-item"><span class="timeline-number">${index + 1}</span><span class="timeline-time">${start} · ${item.minutes} ${t("minutes")} · ${formatMoney(item.cost)}</span><h3>${item.icon} ${copy[0]}</h3><p>${copy[1]}</p></li>`;
  }).join("");
  renderRoulette();
  renderVotes();
}

function renderRoulette(activeId = "") {
  $("#rouletteList").innerHTML = state.plan.map((item) => `<div class="roulette-option ${item.id === activeId ? "is-active" : ""}" data-id="${item.id}"><span aria-hidden="true">${item.icon}</span><strong>${item[state.language][0]}</strong><small>${formatMoney(item.cost)}</small></div>`).join("");
}

function renderVotes() {
  $("#voteList").innerHTML = state.plan.map((item) => {
    const count = state.votes[item.id] || 0;
    return `<div class="vote-option"><span><strong>${item[state.language][0]}</strong><br><small>${count} ${voteWord(count)}</small></span><button type="button" data-vote-id="${item.id}" aria-label="${t("voteFor")} ${item[state.language][0]}">+1</button></div>`;
  }).join("");
}

function voteWord(count) {
  if (state.language === "en") return count === 1 ? "vote" : "votes";
  const lastTwo = count % 100;
  const last = count % 10;
  if (lastTwo >= 11 && lastTwo <= 14) return "голосов";
  if (last === 1) return "голос";
  if (last >= 2 && last <= 4) return "голоса";
  return "голосов";
}

function spinRoulette() {
  if (!state.plan.length) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const rounds = reduced ? 1 : 12;
  let step = 0;
  $("#spinButton").disabled = true;
  const timer = setInterval(() => {
    const item = state.plan[step % state.plan.length];
    renderRoulette(item.id);
    step += 1;
    if (step >= rounds) {
      clearInterval(timer);
      const winner = state.plan[Math.floor(Math.random() * state.plan.length)];
      renderRoulette(winner.id);
      $("#spinButton").disabled = false;
      showToast(`${t("selected")}: ${winner[state.language][0]}`);
      celebrate();
    }
  }, reduced ? 20 : 90 + step * 3);
}

function planText() {
  const lines = state.plan.map((item, i) => `${i + 1}. ${item[state.language][0]} — ${item[state.language][1]}`);
  return `${t("planIntro")}\n\n${lines.join("\n\n")}\n\nrandom night v1.1`;
}

async function sharePlan() {
  const text = planText();
  if (navigator.share) {
    try { await navigator.share({ title: "Random Night", text }); return; } catch (error) { if (error.name === "AbortError") return; }
  }
  try { await navigator.clipboard.writeText(text); showToast(t("copied")); }
  catch { window.prompt("Copy your Random Night plan:", text); }
}

function celebrate() {
  if ($("#soundToggle").checked) playChime();
  const wrap = $("#confetti");
  wrap.innerHTML = Array.from({ length: 18 }, (_, i) => `<i class="confetti-piece" style="left:${(i * 37) % 100}%;animation-delay:${(i % 5) * 70}ms;${i % 3 === 0 ? "background:#151219" : i % 3 === 1 ? "background:#7856d9" : "background:#fff9ec"}"></i>`).join("");
  window.setTimeout(() => { wrap.innerHTML = ""; }, 1600);
}

function playChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const context = new AudioContext();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(520, context.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(780, context.currentTime + 0.12);
    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.09, context.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.22);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.23);
    oscillator.addEventListener("ended", () => context.close());
  } catch { /* Sound is optional; the visual celebration still works. */ }
}

let toastTimer;
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2700);
}

function openDialog(id) {
  const dialog = document.getElementById(id);
  if (dialog && !dialog.open) dialog.showModal();
}

$("#startButton").addEventListener("click", () => showScreen("builderScreen"));
$("#homeButton").addEventListener("click", () => showScreen("introScreen"));
$("#settingsButton").addEventListener("click", () => openDialog("settingsDialog"));
$("#languageButton").addEventListener("click", () => { state.language = state.language === "en" ? "ru" : "en"; applyLanguage(); });
$$('[data-back]').forEach((button) => button.addEventListener("click", () => showScreen(button.dataset.back === "intro" ? "introScreen" : "builderScreen")));
$$('[data-close-dialog]').forEach((button) => button.addEventListener("click", () => document.getElementById(button.dataset.closeDialog).close()));
$$('dialog').forEach((dialog) => dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); }));

$("#peopleMinus").addEventListener("click", () => { state.people = Math.max(1, state.people - 1); updateOutputs(); });
$("#peoplePlus").addEventListener("click", () => { state.people = Math.min(12, state.people + 1); updateOutputs(); });
$("#budgetRange").addEventListener("input", (event) => { state.budget = Number(event.target.value); updateOutputs(); });
$("#durationRange").addEventListener("input", (event) => { state.duration = Number(event.target.value); updateOutputs(); });

$("#moodChoices").addEventListener("click", (event) => { const button = event.target.closest("button"); if (!button) return; state.mood = button.dataset.value; syncChoices(); });
$("#locationChoices").addEventListener("click", (event) => { const button = event.target.closest("button"); if (!button) return; state.location = button.dataset.value; syncChoices(); });
$("#activityChoices").addEventListener("click", (event) => { const button = event.target.closest("button"); if (!button) return; const value = button.dataset.value; state.activities = state.activities.includes(value) ? state.activities.filter((item) => item !== value) : [...state.activities, value]; syncChoices(); });
$("#preferencesForm").addEventListener("submit", (event) => { event.preventDefault(); generatePlan(); });

$("#rouletteButton").addEventListener("click", () => { renderRoulette(); openDialog("rouletteDialog"); });
$("#voteButton").addEventListener("click", () => { renderVotes(); openDialog("voteDialog"); });
$("#spinButton").addEventListener("click", spinRoulette);
$("#remixButton").addEventListener("click", generatePlan);
$("#shareButton").addEventListener("click", sharePlan);
$("#voteList").addEventListener("click", (event) => { const button = event.target.closest("button[data-vote-id]"); if (!button) return; state.votes[button.dataset.voteId] = (state.votes[button.dataset.voteId] || 0) + 1; renderVotes(); showToast(t("voteRecorded")); });
$("#resetVotesButton").addEventListener("click", () => { state.votes = Object.fromEntries(state.plan.map((item) => [item.id, 0])); renderVotes(); });

$("#currencySelect").value = state.currency;
$("#currencySelect").addEventListener("change", (event) => { state.currency = event.target.value; savePreferences(); updateOutputs(); if (state.plan.length) renderPlan(); });
window.addEventListener("beforeinstallprompt", (event) => { event.preventDefault(); state.deferredInstall = event; });
$("#installButton").addEventListener("click", async () => {
  if (state.deferredInstall) { state.deferredInstall.prompt(); await state.deferredInstall.userChoice; state.deferredInstall = null; }
  else showToast(t("installHelp"));
});

applyLanguage();
syncChoices();
if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js"));
