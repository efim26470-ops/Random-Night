const translations = {
  en: {
    eyebrow: "TONIGHT, REWRITTEN", introTitle: "Good evenings don’t plan themselves.",
    bubbleOne: "Okay, let’s come up with something for tonight — just not the usual.", start: "Let’s start",
    microcopy: "We’ll turn your mood, budget and people into one ready-to-go plan.", stepOne: "STEP 1 OF 2",
    builderTitle: "What kind of night are we making?", people: "How many people?", budget: "Budget per person",
    free: "Free", duration: "Time available", mood: "Your mood", cozy: "Cozy", curious: "Curious", wild: "Wild", active: "Active",
    where: "Where?", mixed: "Surprise me", inside: "Inside", outside: "Outside", activities: "Things you’re up for",
    food: "Food", film: "Film", games: "Games", walk: "Walk", challenge: "Challenge", makePlan: "Make our night",
    yourNight: "YOUR RANDOM NIGHT", resultTitle: "Tonight has a plot now.", roulette: "Roulette", vote: "Vote", share: "Share the plan",
    remix: "Remix this night", preferences: "PREFERENCES", settings: "Settings", sound: "Celebration sound", currency: "Currency",
    install: "Install on iPhone", privacy: "No account. No tracking. Your choices stay on this device.", chanceMode: "CHANCE MODE",
    rouletteTitle: "Let fate pick one.", spin: "Spin again", groupDecision: "GROUP DECISION", voteTitle: "Pass the phone. Cast a vote.",
    voteHint: "Tap one option per person. Results update instantly.", resetVotes: "Reset votes", hours: "hours", peopleShort: "people",
    selected: "Fate says: go with", copied: "Plan copied — send it to the group!", installHelp: "On iPhone: tap Share, then Add to Home Screen.",
    voteRecorded: "Vote counted!", ready: "Your night is ready.", noActivities: "Pick at least one activity.", votes: "votes", voteFor: "Vote for", minutes: "MIN",
    planIntro: "Random Night plan", total: "est. per person", fallbackTitle: "One excellent detour",
    fallbackDescription: "Take a different route and let each person choose one stop without explaining why."
  },
  ru: {
    eyebrow: "ВЕЧЕР, НО ПО-НОВОМУ", introTitle: "Хорошие вечера сами себя не планируют.",
    bubbleOne: "Давай придумаем что-нибудь на сегодня — только не как обычно.", start: "Начать",
    microcopy: "Превратим ваше настроение, бюджет и компанию в готовый план.", stepOne: "ШАГ 1 ИЗ 2",
    builderTitle: "Какой вечер мы сегодня создаём?", people: "Сколько вас?", budget: "Бюджет на человека",
    free: "Бесплатно", duration: "Сколько есть времени", mood: "Настроение", cozy: "Уютно", curious: "Любопытно", wild: "Безумно", active: "Активно",
    where: "Где?", mixed: "Удивите меня", inside: "В помещении", outside: "На улице", activities: "Чего хочется",
    food: "Еда", film: "Кино", games: "Игры", walk: "Прогулка", challenge: "Челлендж", makePlan: "Собрать наш вечер",
    yourNight: "ВАШ СЛУЧАЙНЫЙ ВЕЧЕР", resultTitle: "Теперь у вечера есть сюжет.", roulette: "Рулетка", vote: "Голосование", share: "Поделиться",
    remix: "Перемешать вечер", preferences: "ПАРАМЕТРЫ", settings: "Настройки", sound: "Звук праздника", currency: "Валюта",
    install: "Установить на iPhone", privacy: "Без аккаунта и слежки. Выбор остаётся на устройстве.", chanceMode: "РЕЖИМ СЛУЧАЯ",
    rouletteTitle: "Пусть решает судьба.", spin: "Крутить ещё", groupDecision: "РЕШАЕМ ВМЕСТЕ", voteTitle: "Передайте телефон. Голосуйте.",
    voteHint: "По одному выбору на человека. Результат обновляется сразу.", resetVotes: "Сбросить голоса", hours: "ч", peopleShort: "чел.",
    selected: "Судьба выбрала", copied: "План скопирован — отправьте его друзьям!", installHelp: "На iPhone: нажмите «Поделиться», затем «На экран Домой».",
    voteRecorded: "Голос учтён!", ready: "Ваш вечер готов.", noActivities: "Выберите хотя бы одно занятие.", votes: "голосов", voteFor: "Голос за", minutes: "МИН",
    planIntro: "План Random Night", total: "примерно с человека", fallbackTitle: "Один отличный крюк",
    fallbackDescription: "Идите непривычным маршрутом, и пусть каждый выберет одну остановку, не объясняя почему."
  }
};

const eventLibrary = [
  { id: "market", type: "food", place: "outside", moods: ["curious", "active", "wild"], cost: 14, minutes: 55, icon: "◒", en: ["Blind-pick street food", "At the first lively food spot, each person chooses a bite for someone else. No repeats."], ru: ["Стритфуд вслепую", "В первом оживлённом месте каждый выбирает закуску не себе. Повторы запрещены."] },
  { id: "picnic", type: "food", place: "outside", moods: ["cozy", "curious"], cost: 10, minutes: 60, icon: "✿", en: ["Pocket picnic", "Build a tiny picnic from three things: something local, something purple and something new."], ru: ["Карманный пикник", "Соберите мини-пикник из трёх вещей: местной, фиолетовой и совершенно новой."] },
  { id: "taste", type: "food", place: "inside", moods: ["cozy", "curious"], cost: 18, minutes: 65, icon: "◇", en: ["Three-stop tasting", "Split one signature item at three nearby places. Rate each with a made-up award."], ru: ["Дегустация в трёх точках", "Разделите одно фирменное блюдо в трёх местах и придумайте каждому смешную награду."] },
  { id: "film", type: "film", place: "inside", moods: ["cozy", "curious"], cost: 8, minutes: 95, icon: "▶", en: ["Mystery short-film club", "Pick a short film by poster only. Afterward, pitch its wildly incorrect sequel in one minute."], ru: ["Клуб короткого метра", "Выберите короткометражку только по постеру, а после за минуту придумайте ей безумный сиквел."] },
  { id: "scene", type: "film", place: "outside", moods: ["curious", "wild"], cost: 0, minutes: 45, icon: "▣", en: ["Recreate a movie still", "Find a cinematic street corner and stage one dramatic still. The stranger the genre, the better."], ru: ["Повторите кадр из кино", "Найдите кинематографичный угол и поставьте драматичный кадр. Чем страннее жанр, тем лучше."] },
  { id: "trivia", type: "games", place: "inside", moods: ["curious", "cozy"], cost: 5, minutes: 65, icon: "?", en: ["Homemade trivia duel", "Everyone writes three questions about their current obsession. Most surprising answer wins."], ru: ["Домашняя викторина", "Каждый пишет три вопроса о своём нынешнем увлечении. Побеждает самый неожиданный ответ."] },
  { id: "arcade", type: "games", place: "inside", moods: ["active", "wild", "curious"], cost: 12, minutes: 70, icon: "✚", en: ["Low-stakes game tournament", "Choose three fast games. The loser invents the winner’s ceremonial title."], ru: ["Турнир без серьёзных ставок", "Выберите три быстрые игры. Проигравший придумывает победителю торжественный титул."] },
  { id: "walk", type: "walk", place: "outside", moods: ["cozy", "curious", "active"], cost: 0, minutes: 60, icon: "↗", en: ["The left-right walk", "At every second corner, flip a coin for the next direction. Stop when you find a view worth keeping."], ru: ["Прогулка «лево-право»", "На каждом втором перекрёстке бросайте монетку. Остановитесь, когда найдёте вид, который хочется запомнить."] },
  { id: "photo", type: "walk", place: "outside", moods: ["curious", "wild"], cost: 0, minutes: 55, icon: "◎", en: ["One-color photo hunt", "Pick one color and collect seven photos of it in the wild. No two objects can match."], ru: ["Фотоохота на один цвет", "Выберите цвет и найдите семь его проявлений вокруг. Одинаковые предметы не считаются."] },
  { id: "mission", type: "challenge", place: "mixed", moods: ["wild", "active", "curious"], cost: 3, minutes: 45, icon: "⚑", en: ["Secret mission swap", "Write playful missions for each other. Reveal them only after everyone has completed theirs."], ru: ["Обмен секретными миссиями", "Напишите друг другу игровые задания. Раскройте их только после того, как все справятся."] },
  { id: "dance", type: "challenge", place: "mixed", moods: ["wild", "active"], cost: 0, minutes: 35, icon: "♪", en: ["Three-song dance break", "Each person adds one unexpected track. Phones down until the final note."], ru: ["Танцы на три песни", "Каждый ставит по одному неожиданному треку. Телефоны — в сторону до последней ноты."] },
  { id: "story", type: "games", place: "outside", moods: ["cozy", "curious"], cost: 0, minutes: 40, icon: "✎", en: ["Pass-the-story bench", "Find a bench. Build one story together, adding exactly two sentences at a time."], ru: ["История на скамейке", "Найдите скамейку и сочиняйте одну историю, добавляя ровно по два предложения."] }
];

const state = {
  language: localStorage.getItem("rn-language") || "en",
  people: Number(localStorage.getItem("rn-people")) || 2,
  budget: Number(localStorage.getItem("rn-budget")) || 35,
  duration: Number(localStorage.getItem("rn-duration")) || 4,
  mood: localStorage.getItem("rn-mood") || "curious",
  location: localStorage.getItem("rn-location") || "mixed",
  activities: JSON.parse(localStorage.getItem("rn-activities") || '["food","film","games","walk"]'),
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
  $("#budgetMax").textContent = `${formatMoney(120)}+`;
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

function generatePlan() {
  if (!state.activities.length) { showToast(t("noActivities")); return; }
  const maxItems = state.duration <= 3 ? 2 : state.duration >= 7 ? 4 : 3;
  let candidates = eventLibrary.filter((item) => {
    const activityMatch = state.activities.includes(item.type);
    const placeMatch = state.location === "mixed" || item.place === state.location || item.place === "mixed";
    const moodMatch = item.moods.includes(state.mood);
    return activityMatch && placeMatch && moodMatch && item.cost <= Math.max(state.budget, 5);
  });
  if (candidates.length < maxItems) candidates = eventLibrary.filter((item) => state.activities.includes(item.type) && item.cost <= Math.max(state.budget, 5));
  if (candidates.length < maxItems) candidates = eventLibrary.filter((item) => state.activities.includes(item.type));

  const picked = [];
  shuffled(candidates).forEach((item) => {
    if (picked.length >= maxItems) return;
    if (!picked.some((chosen) => chosen.type === item.type) || candidates.length < maxItems + 2) picked.push(item);
  });
  shuffled(candidates).forEach((item) => { if (picked.length < maxItems && !picked.includes(item)) picked.push(item); });

  state.plan = picked.slice(0, maxItems);
  state.votes = Object.fromEntries(state.plan.map((item) => [item.id, 0]));
  savePreferences();
  renderPlan();
  showScreen("resultScreen");
  celebrate();
  showToast(t("ready"));
}

function renderPlan() {
  const total = state.plan.reduce((sum, item) => sum + item.cost, 0);
  $("#planMeta").innerHTML = `<span class="meta-tag">${state.people} ${t("peopleShort")}</span><span class="meta-tag">${state.duration} ${t("hours")}</span><span class="meta-tag">${formatMoney(total)} ${t("total")}</span>`;
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
  return `${t("planIntro")}\n\n${lines.join("\n\n")}\n\nrandom night v1.0`;
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
