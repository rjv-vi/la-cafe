# 16 тестовых иллюстраций для меню La Cafe

Стиль по референсу `примеры/photo_2026-05-11_03-39-01.jpg`: тёплая digital illustration, уютное cafe menu art, бежево-коричневая палитра, мягкие тени, без фотореализма.

## Общий промпт

```text
Warm cozy digital illustration of [DISH], flat cafe menu art style, soft shadows, warm beige and brown color palette, no outline, top-down 3/4 angle, single food item centered, clean composition, light beige background (#F8F2E6), square 512x512.
```

## Файлы для `public/images/menu/`

| Категория | Файл | Что генерировать |
|---|---|---|
| Завтраки | `shakshuka.png` | shakshuka — eggs poached in tomato sauce with peppers, served with crusty bread |
| Завтраки | `avocado-toast.png` | avocado toast with poached egg, sesame seeds, on artisan bread |
| Кофе | `cappuccino.png` | cappuccino with latte art in ceramic cup |
| Кофе | `raf-lavender.png` | lavender raf coffee, light purple creamy drink in a vintage cup |
| Чай и лимонады | `sea-buckthorn-tea.png` | sea buckthorn tea in glass cup, bright orange with berries, honey and orange slice |
| Чай и лимонады | `mint-lemonade.png` | fresh mint lemonade in tall glass with ice, lime and mint leaves |
| Салаты | `caprese-burrata.png` | caprese salad with burrata cheese, cherry tomatoes, basil and pesto |
| Салаты | `caesar-chicken.png` | caesar salad with grilled chicken, croutons and parmesan |
| Супы | `cheese-ramen.png` | cheesy ramen noodle soup in large bowl with egg, chicken and green onions |
| Супы | `tom-yam.png` | Thai tom yam soup with shrimp, mushrooms, lime and chili |
| Сэндвичи и брускетты | `bruschetta-eel.png` | bruschetta with smoked eel, avocado, cream cheese and unagi sauce on toasted bread |
| Сэндвичи и брускетты | `club-sandwich.png` | classic club sandwich with chicken, bacon, lettuce, tomato and fries |
| Бургеры | `burger-classic.png` | classic beef burger with lettuce, tomato, cheese and sesame bun |
| Бургеры | `burger-bbq.png` | BBQ burger with double beef patty, bacon, cheddar, onion rings and BBQ sauce |
| Десерты от La Crème | `tiramisu.png` | tiramisu dessert, layered mascarpone cream, cocoa powder and coffee notes |
| Десерты от La Crème | `fondant.png` | chocolate fondant lava cake with molten center and vanilla ice cream |

## Дополнительно

- Hero: `public/images/hero.png` — warm illustrated cup of coffee, large central cafe hero image.
- Promo: `public/images/promo.png` — warm illustrated tiramisu dessert.

После добавления файлов:

```bash
pnpm build
git add public/images/menu public/images/hero.png public/images/promo.png
git commit -m "add test menu illustrations"
git push
```
