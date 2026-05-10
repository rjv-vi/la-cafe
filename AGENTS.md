# La Cafe website — заметки для агента

## Проект

Одностраничный лендинг для кофейни **La Cafe** (Бишкек). Стек: **Vite 5 + React 18 + Tailwind CSS 3**. SPA без бэкенда — статика, разворачивается на GitHub Pages через Actions.

- Live: https://rjv-vi.github.io/la-cafe/
- Repo: https://github.com/rjv-vi/la-cafe

Контент кафе в `скрины/`, дизайн-вдохновение в `примеры/` (целевой стиль — `photo_2026-05-11_03-38-54.jpg`, аналог Drinko). Папка `pictures for menu/` — куда складываются сгенерированные фото для меню; копируются в `public/images/menu/`.

## Команды

```bash
pnpm install
pnpm dev       # http://localhost:5173 (base = '/')
pnpm build     # сборка в dist/  (base = '/la-cafe/' для GitHub Pages)
pnpm preview
```

При проверке после правок: `pnpm build` должен пройти без ошибок и предупреждений. Пушить в `main` → автоматический деплой через `.github/workflows/deploy.yml`.

## Архитектура и стиль

Дизайн-направление — Drinko-like: минимализм, mobile-first, продукт в центре, без перегруза.

- **Палитра** (`tailwind.config.js`): `sand` (тёплый бежевый фон), `ink` (тёмно-коричневый текст), `coffee` (медно-карамельные пилюли/кнопки), `rose` (розовый акцент в Promo). НЕТ cream/brand/terracotta из старых итераций.
- **Шрифты** (`index.html`): **Bricolage Grotesque** (display, bold sans), **Inter** (body), **Caveat** (script-акценты). НЕ Playfair / Fraunces / Allura.
- **Базовые классы** (`src/index.css`, `@layer components`): `.container-x`, `.display`, `.pill`, `.tap`, плюс утилиты `.safe-bottom`.
- **Анимации**: только хук `useInView` (`src/lib/useInView.js`) + компонент `Reveal` (`src/components/Reveal.jsx`) — тихий fade-up на скролл, plus CSS hover. **Не использовать framer-motion** — намеренно убрали для облегчения бандла (54 KB gzip).

## Секции (всего 4 — больше не добавлять без явного запроса)

1. **Hero** (`Hero.jsx`) — `LA / ☕ / CAFE` через всю ширину, продукт прорывает строку.
2. **Menu** (`Menu.jsx`) — пилюли категорий + грид белых карточек 2/3/4 колонки. Данные в `src/data/menu.js`.
3. **Promo** (`Promo.jsx`) — розовый блок с акционным десертом, прямой аналог Drinko «New drink».
4. **Footer** (`Footer.jsx`) — компактный с адресом, телефоном, часами и встроенной картой OSM (id=`visit` для якоря).

Логотип (`Logo.jsx`) — кружок с янтарной обводкой и SVG кофейного зерна (без текста внутри, текст «La Cafe» рядом отдельно).

Картинки блюд (`DishImage.jsx`) пробуют загрузить `/images/menu/{slug}.jpg`; на `onError` показывают плейсхолдер с эмодзи. Пользователь дополняет фото постепенно.

## Контентные источники

- Адрес: Чыңгыз Айтматов 299/4, Бишкек
- Телефон: 0555 81 11 22
- Часы: пн–вс 08:00 – 02:00
- IG: `@lacafe_kg`, TikTok: `@lacafe_kg`
- Десерты от собственной кондитерской `@la_creme_kg` (Бегаим Аманкулова — основатель)

## Принципы при правках

- **Только русский** язык интерфейса.
- Цены в **сомах** (`«с»` после числа).
- **Не возвращать** удалённые секции (Marquee, Signature, Gallery, About-разворот, Visit-cinematic, MobileBar) без явного запроса — они были удалены сознательно как «перегруз».
- **Не возвращать** framer-motion и serif-шрифты Playfair/Fraunces — текущий дизайн осознанный.
- Никаких эмодзи в коде/комментариях (кроме данных меню — там они часть контента).
- Перед коммитом: `pnpm build` должен проходить.
- При смене названия репо — обновить `base` в `vite.config.js`.
