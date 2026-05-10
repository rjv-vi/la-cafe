# La Cafe — сайт

Одностраничный сайт-визитка для кофейни **La Cafe** (Бишкек, Чыңгыз Айтматов 299/4).

Стек: **Vite + React 18 + Tailwind CSS**. Без бэкенда — статический сайт, разворачивается на любом хостинге (Vercel / Netlify / Cloudflare Pages / просто `dist/` на nginx).

## Запуск

```bash
pnpm install      # один раз, поставит зависимости
pnpm dev          # http://localhost:5173 — режим разработки
pnpm build        # продакшен-сборка в dist/
pnpm preview      # предпросмотр продакшен-сборки
```

(Можно использовать `npm` или `yarn` — сработает аналогично.)

## Структура

```
src/
  App.jsx                 — корневой компонент, собирает все секции
  main.jsx                — точка входа React
  index.css               — Tailwind + базовые стили / утилиты (.btn-primary, .container-x, …)
  data/
    menu.js               — категории и позиции меню (правьте здесь)
  components/
    Header.jsx            — навигация и моб. меню
    Hero.jsx              — первый экран
    About.jsx             — про кафе и фичи
    Menu.jsx              — меню с табами
    Gallery.jsx           — атмосфера / интерьер
    Visit.jsx             — адрес, часы, карта
    Footer.jsx            — футер
    Logo.jsx              — кружок с надписью «La Cafe»
    DishImage.jsx         — картинка блюда с плейсхолдером

public/
  favicon.svg
  images/
    hero.jpg              — БОЛЬШОЕ фото для hero (опционально)
    menu/                 — фото блюд: <imgKey>.jpg
    gallery/              — фото интерьера: <slug>.jpg
```

## Как добавить свои фотографии

Все картинки опциональны: пока файла нет — показывается стилизованный плейсхолдер с эмодзи и названием. Стоит положить нужный файл в правильное место — он заменит плейсхолдер автоматически. Перезагружать кэш не нужно — Vite подхватит сам.

### 1. Hero (первый экран)

Положите файл `public/images/hero.jpg` (рекомендуем 1200×1500 px, формат JPG/WebP).

### 2. Блюда меню

В `src/data/menu.js` у каждого блюда есть поле `imgKey`. Файл должен лежать как `public/images/menu/<imgKey>.jpg`.

Полный список ключей:

**Завтраки**: `shakshuka`, `syrniki`, `avocado-toast`, `benedict`, `granola`, `oatmeal`
**Кофе**: `espresso`, `americano`, `cappuccino`, `latte`, `flat-white`, `raf-vanilla`, `raf-lavender`
**Чай и лимонады**: `tea-pot`, `sea-buckthorn-tea`, `mint-lemonade`, `berry-lemonade`, `hot-chocolate`
**Салаты**: `caprese-burrata`, `caesar-chicken`, `caesar-shrimp`, `quinoa-bowl`
**Супы**: `cheese-ramen`, `tom-yam`, `chicken-soup`, `pumpkin-soup`
**Сэндвичи и брускетты**: `bruschetta-eel`, `bruschetta-salmon`, `bruschetta-tomato`, `club-sandwich`, `chicken-sandwich`
**Бургеры**: `burger-classic`, `burger-pepper`, `burger-bbq`, `burger-kfc`
**Десерты**: `tiramisu`, `cheesecake`, `honeycake`, `pavlova`, `fondant`, `macaron`

Размер карточек — соотношение **4:3**, рекомендуем не меньше **800×600 px**, JPG/WebP.

### 3. Галерея интерьера

Файлы лежат в `public/images/gallery/`:

- `gallery-interior.jpg` — большой кадр зала (вертикальный, 4:5)
- `gallery-coffee.jpg`, `gallery-flowers.jpg`, `gallery-soup.jpg`, `gallery-dessert.jpg` — квадратные
- `gallery-bar.jpg` — широкий кадр стойки бариста (2:1)

### Если генерируете через GPT Image 2

Можно сложить всё в папку `pictures for menu/` (она уже есть в репо), а потом скопировать одной командой:

```bash
# из папки проекта
cp "pictures for menu/"*.jpg public/images/menu/
```

Главное — называть файлы ровно так, как `imgKey` в `src/data/menu.js`.

## Как править контент

- **Меню (блюда, цены, описания, теги «новинка/хит»)** — `src/data/menu.js`
- **Тексты hero и блоки про кафе** — `src/components/Hero.jsx`, `src/components/About.jsx`
- **Часы работы / телефон / адрес** — `src/components/Visit.jsx` и `src/components/Footer.jsx`
- **Цвета бренда / шрифты** — `tailwind.config.js` (раздел `theme.extend.colors`)

## Деплой

Готовая сборка лежит в `dist/`. Просто залейте на любой статик-хостинг.

- **Vercel / Netlify / Cloudflare Pages**: подключаете репо, билд-команда `pnpm build`, output — `dist`.
- **nginx**: скопируйте содержимое `dist/` в корень сайта и настройте fallback на `index.html`.
