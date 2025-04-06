export const pizzas = [
  {
    desc: "La pizza napolitana, de masa tierna y delgada pero bordes altos, es la versión propia de la cocina napolitana de la pizza redonda. El término pizza napoletana, por su importancia histórica o regional, se emplea en algunas zonas como sinónimo de pizza tonda.",
    id: "P001",
    img: "/img/pizza-napolitana.jpg",
    ingredients: ["Mozzarella", "Tomates", "Jamón", "Orégano"],
    name: "napolitana 🧀🌿",
    price: 5950,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P002",
    img: "/img/pizza-española.jpg",
    ingredients: ["Mozzarella", "Tomates", "Jamón", "Choricillo"],
    name: "española 🍖",
    price: 7250,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P003",
    img: "/img/salame-pizza.jpg",
    ingredients: ["Mozzarella", "Tomates", "Salame", "Orégano"],
    name: "salame 🍅🧀",
    price: 5990,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P004",
    img: "/img/pizza4estaciones.jpg",
    ingredients: ["Mozzarella", "Salame", "Aceitunas", "Champiñones"],
    name: "cuatro estaciones 🍄",
    price: 9590,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P005",
    img: "/img/bacon-pizza.jpg",
    ingredients: ["Mozzarella", "Tomates cherry", "Bacon", "Orégano"],
    name: "bacon 🥓",
    price: 6450,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P006",
    img: "/img/pizzapollo.jpg",
    ingredients: ["Mozzarella", "Pimientos", "Pollo grillé", "Orégano"],
    name: "pollo picante 🍗",
    price: 8500,
  },
];

// Simulación de un carrito de compras

export const pizzaCart = [
  {
    id: "P001",
    name: "Napolitana",
    price: 5950,
    count: 1,
    img: "/img/pizza-napolitana.jpg",
  },
  {
    id: "P002",
    name: "Española",
    price: 7250,
    count: 1,
    img: "/img/pizza-española.jpg",
  },
  {
    id: "P003",
    name: "Salame",
    price: 5990,
    count: 1,
    img: "/img/salame-pizza.jpg",
  },
];


export default pizzas;