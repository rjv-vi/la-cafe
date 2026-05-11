// Меню La Cafe. Цены в кыргызских сомах (с).
// Поле imgKey соответствует имени файла в /public/images/menu/{imgKey}.png
// Если файла нет — будет показан стилизованный плейсхолдер.

export const categories = [
  { id: 'breakfast', label: 'Завтраки', emoji: '🍳' },
  { id: 'coffee', label: 'Кофе', emoji: '☕' },
  { id: 'drinks', label: 'Чай и лимонады', emoji: '🍵' },
  { id: 'salads', label: 'Салаты', emoji: '🥗' },
  { id: 'soups', label: 'Супы', emoji: '🍜' },
  { id: 'sandwiches', label: 'Сэндвичи и брускетты', emoji: '🥪' },
  { id: 'burgers', label: 'Бургеры', emoji: '🍔' },
  { id: 'desserts', label: 'Десерты от La Crème', emoji: '🍰' },
]

export const dishes = {
  breakfast: [
    {
      name: 'Шакшука',
      description: 'Яйца, томлёные в густом соусе из помидоров, перца и копчёной паприки. С хрустящим хлебом.',
      price: 380,
      imgKey: 'shakshuka',
      emoji: '🍳',
      tag: 'хит',
    },
    {
      name: 'Авокадо-тост',
      description: 'Тост из ремесленного хлеба, мятый авокадо, яйцо-пашот, кунжут, цедра лимона.',
      price: 360,
      imgKey: 'avocado-toast',
      emoji: '🥑',
    },
  ],

  coffee: [
    {
      name: 'Капучино',
      description: 'Эспрессо, бархатное молоко и шапка плотной пены. Классика La Cafe.',
      price: 150,
      imgKey: 'cappuccino',
      emoji: '☕',
      tag: 'классика',
    },
    {
      name: 'Лавандовый раф',
      description: 'Авторский раф с лавандой и нотами мёда. Подаём в винтажной чашке.',
      price: 220,
      imgKey: 'raf-lavender',
      emoji: '💜',
      tag: 'signature',
    },
  ],

  drinks: [
    {
      name: 'Облепиховый чай',
      description: 'Согревающий чай со свежей облепихой, имбирём, мёдом и апельсином.',
      price: 220,
      imgKey: 'sea-buckthorn-tea',
      emoji: '🧡',
      tag: 'зимний хит',
    },
    {
      name: 'Мятный лимонад',
      description: 'Свежая мята, лайм и сироп мяты с тоником. Подаётся со льдом.',
      price: 220,
      imgKey: 'mint-lemonade',
      emoji: '🌿',
    },
  ],

  salads: [
    {
      name: 'Капрезе с буррата',
      description: 'Нежные томаты черри, сливочный сыр буратта на подушке из рукколы, оливковое масло и соус «Песто».',
      price: 520,
      imgKey: 'caprese-burrata',
      emoji: '🥗',
      tag: 'signature',
    },
    {
      name: 'Цезарь с курицей',
      description: 'Романо, сочное филе, пармезан, чесночные крутоны и фирменный соус.',
      price: 380,
      imgKey: 'caesar-chicken',
      emoji: '🥗',
    },
  ],

  soups: [
    {
      name: 'Сырный рамен',
      description: 'Азиатская классика с сырным акцентом: насыщенный бульон со сливочно-сырной ноткой, пшеничная лапша, куриная грудка и яйцо.',
      price: 420,
      imgKey: 'cheese-ramen',
      emoji: '🍜',
      tag: 'хит',
    },
    {
      name: 'Том ям с креветками',
      description: 'Острый кисло-сладкий бульон, кокосовое молоко, креветки, грибы шиитаке.',
      price: 450,
      imgKey: 'tom-yam',
      emoji: '🌶️',
    },
  ],

  sandwiches: [
    {
      name: 'Брускетта с угрём и унаги',
      description: 'Хрустящий хлеб, копчёный угорь, авокадо, соус унаги, кунжут и зелёный лук.',
      price: 480,
      imgKey: 'bruschetta-eel',
      emoji: '🥢',
      tag: 'новинка',
    },
    {
      name: 'Клаб-сэндвич',
      description: 'Курица, бекон, томат, салат, яйцо и фирменный соус. Подаём с картофелем фри.',
      price: 420,
      imgKey: 'club-sandwich',
      emoji: '🥪',
    },
  ],

  burgers: [
    {
      name: 'Классический бургер',
      description: 'Сочная говяжья котлета, чеддер, томат, маринованный огурец, фирменный соус.',
      price: 380,
      imgKey: 'burger-classic',
      emoji: '🍔',
    },
    {
      name: 'BBQ-бургер',
      description: 'Двойная котлета, копчёный бекон, чеддер, луковые кольца, соус BBQ.',
      price: 440,
      imgKey: 'burger-bbq',
      emoji: '🔥',
      tag: 'для голодных',
    },
  ],

  desserts: [
    {
      name: 'Тирамису',
      description: 'Классический тирамису от @la_creme_kg на сливочном маскарпоне с кофе и какао.',
      price: 280,
      imgKey: 'tiramisu',
      emoji: '🍰',
      tag: 'la crème',
    },
    {
      name: 'Шоколадный фондан',
      description: 'Тёплый шоколадный кекс с жидким центром и шариком ванильного мороженого.',
      price: 320,
      imgKey: 'fondant',
      emoji: '🍫',
      tag: 'тёплый',
    },
  ],
}
