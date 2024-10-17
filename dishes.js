


const dishes = [
    {
      keyword: "gaspacho",
      name: "Гаспачо",
      price: 195,
      category: "soup",
      count: "350 г",
      image: "images/gaspach.jpg",
      kind: 'meat'
    },

    {
      keyword: 'mushroom',
      name: 'Грибной суп-пюре',
      price: 185,
      category: 'soup',
      count: '330 г',
      image: 'images/mashroom.jpg',
      kind: 'veg'
    },

    {
      keyword: 'norway',
      name: 'Норвежский суп',
      price: 270,
      category: 'soup',
      count: '330 г',
      image: 'images/norway_soup.jpg',
      kind: 'veg'
    },

    {
      keyword: 'ramen',
      name: 'Рамен',
      price: 375,
      category: 'soup',
      count: '425 г',
      image: 'images/ramen.jpg',
      kind: 'fish'
    },

    {
      keyword: 'tomyum',
      name: 'Том ЯМ',
      price: 650,
      category: 'soup',
      count: '500 г',
      image: 'images/tom-yum.jpg',
      kind: 'fish'
    },

    {
      keyword: 'chiclen-soup',
      name: 'Куриный суп',
      price: 330,
      category: 'soup',
      count: '350 г',
      image: 'images/chicken-soup.jpg',
      kind: 'meat'
    },


      // салаты или стартеры
      
    {
      keyword: 'korean',
      name: 'Корейский салат с овощами и яйцом',
      price: 330,
      category: 'starter',
      count: '250 г',
      image: 'images/korean.jpg',
      kind: 'veg'
    },

    {
      keyword: 'ceazar',
      name: 'Салат цезарь',
      price: 370,
      category: 'starter',
      count: '220 г',
      image: 'images/ceazar.jpg',
      kind: 'meat'
    },

    {
      keyword: 'kapreze',
      name: 'Капрезе с моцареллой',
      price: 350,
      category: 'starter',
      count: '235 г',
      image: 'images/mozarella.jpg',
      kind: 'veg'
    },

    {
      keyword: 'tuna',
      name: 'Салат с тунцом',
      price: 480,
      category: 'starter',
      count: '250 г',
      image: 'images/tuna.jpg',
      kind: 'fish'
    },

    {
      keyword: 'fries',
      name: 'Картошка фри',
      price:280,
      category: 'starter',
      count: '235 г',
      image: 'images/fries.jpg',
      kind: 'veg'
    },

    {
      keyword: 'kfries',
      name: 'Картошка фри с кетчупом',
      price: 260,
      category: 'starter',
      count: '235 г',
      image: 'images/fries-with-ketchup.jpg',
      kind: 'veg'
    },
    
    // главные блюда

    {
      keyword: 'potato',
      name: 'Жаренная картошка с грибами',
      price: 150,
      category: 'main',
      count: '250 г',
      image: 'images/potato.jpg',
      kind: 'veg'
    },

    {
      keyword: 'lasagna',
      name: 'Лазанья',
      price: 385,
      category: 'main',
      count: '310 г',
      image: 'images/lasagna.jpg',
      kind: 'meat'
    },

    {
      keyword: 'chiken',
      name: 'Котлеты из курицы с картофельным пюре',
      price: 225,
      category: 'main',
      count: '280 г',
      image: 'images/pot_chiken.jpg',
      kind: 'meat'
    },

    {
      keyword: 'noodles',
      name: 'Лапша в соусе песто',
      price: 240,
      category: 'main',
      count: '280 г',
      image: 'images/nood.jpg',
      kind: 'veg'
    },

    {
      keyword: 'peppers',
      name: 'Фаршированные перцы',
      price: 355,
      category: 'main',
      count: '300 г',
      image: 'images/pepper.jpg',
      kind: 'meat'
    },

    {
      keyword: 'rice',
      name: 'Рис с нагетсами из лосося',
      price: 235,
      category: 'main',
      count: '220 г',
      image: 'images/rice.jpg',
      kind: 'fish'
    },


    //Десерты

    {
      keyword: 'donut',
      name: 'Пончик',
      price: 120,
      category: 'desert',
      count: '120 г',
      image: 'images/donut.jpg',
      kind: 'medium'
    },

    {
      keyword: 'cake',
      name: 'Торт ванильный',
      price: 850,
      category: 'desert',
      count: '1000 г',
      image: 'images/cake.jpg',
      kind: 'large'
    },

    {
      keyword: 'cakepops',
      name: 'Кейк-попс',
      price: 95,
      category: 'desert',
      count: '100 г',
      image: 'images/pops.jpg',
      kind: 'small'
    },

    {
      keyword: 'piece',
      name: 'Кусок торта',
      price: 225,
      category: 'desert',
      count: '200 г',
      image: 'images/piece.jpg',
      kind: 'large'
    },

    {
      keyword: 'cupcake',
      name: 'Капкейк',
      price: 150,
      category: 'desert',
      count: '150 г',
      image: 'images/cupcake.jpg',
      kind: 'medium'
    },

    {
      keyword: 'macaron',
      name: 'Торт ванильный',
      price: 80,
      category: 'desert',
      count: '80 г',
      image: 'images/macaron.jpg',
      kind: 'small'
    },


    // напитки

    {
      keyword: 'orange',
      name: 'Апельсиновый сок',
      price: 120,
      category: 'juice',
      count: '300 мл',
      image: 'images/orange.jpg',
      kind: 'cold'
    },
      
    {
      keyword: 'apple',
      name: 'Яблочный сок',
      price: 90,
      category: 'juice',
      count: '300 мл',
      image: 'images/apple.jpg',
      kind: 'cold'
    },

    {
      keyword: 'carrot',
      name: 'Морковный сок',
      price: 110,
      category: 'juice',
      count: '300 мл',
      image: 'images/carrot.jpg',
      kind: 'cold'
    },

    {
      keyword: 'cvas',
      name: 'Квас',
      price: 150,
      category: 'juice',
      count: '500 мл',
      image: 'images/kvas.jpg',
      kind: 'cold'
    },

    {
      keyword: 'cofe',
      name: 'Кофе',
      price: 150,
      category: 'juice',
      count: '300 мл',
      image: 'images/coffe.jpg',
      kind: 'hot'
    },

    {
      keyword: 'tea',
      name: 'Чай зелёный/чёрный/улун/каркаде',
      price: 150,
      category: 'juice',
      count: '300 мл',
      image: 'images/tea.jpg',
      kind: 'hot'
    },
];

