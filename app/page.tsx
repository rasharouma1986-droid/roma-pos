'use client';

import React from 'react';

const traditionalPizza = [
  'Margherita',
  'Garlic & Cheese',
  "Roma's Special",
  'Pepperoni',
  'Aussie',
  'Capricciosa',
  'Vegetarian',
  'Americana',
  'Meat Lover',
  'Mexicana',
  'Hawaiian',
  'Tropical',
  'Plain Jane',
  'BBQ Chicken',
  'Hot & Spicy',
  'Mushroom',
  'Marinara',
  'Napolitana',
];

const gourmetPizza = [
  'Cheese Lover',
  'The Lot',
  'Gourmet Veggie',
  'Macedonian',
  'Greek Lamb',
  'Peri Peri Chicken',
  'Pesto Chicken',
  'Satay Chicken',
  'Sweet Chilli Chicken',
  'Tandoori Chicken',
  'Prosciutto',
  'Virginia',
];

const pastaItems = [
  'Bolognese',
  'Carbonara',
  'Amatriciana',
  'Calabrese',
  'Marinara',
  'Napolitana',
  'Vegetarian',
  'Pollo e Funghi',
];

const chickenMeals = [
  'Chicken Schnitzel',
  'Chicken Parma',
  'Aussie Parma',
  'Hawaiian Parma',
  'American Parma',
  'Chicken Bolognese',
];

const deals = [
  {
    name: 'Deal 1',
    description:
      '1 Large Traditional Pizza + Garlic Bread + 1.25L Drink',
    price: '$24.90',
  },
  {
    name: 'Deal 2',
    description:
      '2 Large Traditional Pizzas + Garlic Bread + 1.25L Drink',
    price: '$46.90',
  },
  {
    name: 'Deal 3',
    description:
      '2 Family Traditional Pizzas + Garlic Bread + 1.25L Drink',
    price: '$48.90',
  },
  {
    name: 'Deal 4',
    description:
      '1 Large Traditional Pizza + 1 Pasta + Garlic Bread + 2 Soft Drinks',
    price: '$39.90',
  },
  {
    name: 'Deal 5',
    description:
      '2 Pastas + Garlic Bread + 1.25L Drink',
    price: '$38.90',
  },
  {
    name: 'Deal 6',
    description:
      '2 Chicken Parmas + Garlic Bread + 1.25L Drink',
    price: '$57.90',
  },
  {
    name: 'Deal 7',
    description:
      '3 Large Traditional Pizzas',
    price: '$46.90',
  },
  {
    name: 'Deal 8',
    description:
      '3 Family Traditional Pizzas',
    price: '$56.90',
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] =
    React.useState('Traditional Pizza');
const [selectedPizza, setSelectedPizza] =
  React.useState<any>(null);

const [showToppings, setShowToppings] =
  React.useState(false);

const [removedIngredients, setRemovedIngredients] =
  React.useState<string[]>([]);

const [extraToppings, setExtraToppings] =
  React.useState<string[]>([]);

const [cartItems, setCartItems] = React.useState<any[]>([]);

const pizzaRecipes: Record<string, string[]> = {
  Margherita: ['Tomato', 'Cheese', 'Oregano'],

  'Garlic & Cheese': [
    'Garlic',
    'Cheese',
    'Oregano',
  ],

  "Roma's Special": [
    'Tomato',
    'Cheese',
    'Roasted Capsicum',
    'Mushroom',
    'Artichoke',
    'Fresh Garlic',
  ],

  Pepperoni: [
    'Tomato',
    'Cheese',
    'Hot Salami',
  ],

  Aussie: [
    'Tomato',
    'Cheese',
    'Ham',
    'Bacon',
    'Egg',
  ],

  Capricciosa: [
    'Tomato',
    'Cheese',
    'Ham',
    'Mushroom',
    'Olives',
  ],

  Vegetarian: [
    'Tomato',
    'Cheese',
    'Mushroom',
    'Onion',
    'Capsicum',
    'Olives',
  ],

  Americana: [
    'Tomato',
    'Cheese',
    'Ham',
    'Hot Salami',
  ],

  'Meat Lover': [
    'Tomato',
    'Cheese',
    'Ham',
    'Hot Salami',
    'Bacon',
    'BBQ Sauce',
  ],

  Mexicana: [
    'Tomato',
    'Cheese',
    'Ham',
    'Hot Salami',
    'Capsicum',
    'Olives',
  ],

  Hawaiian: [
    'Tomato',
    'Cheese',
    'Ham',
    'Pineapple',
  ],

  Tropical: [
    'Tomato',
    'Cheese',
    'Ham',
    'Pineapple',
    'Prawns',
  ],

  'Plain Jane': [
    'Tomato',
    'Cheese',
    'Ham',
  ],

  'BBQ Chicken': [
    'Tomato',
    'Cheese',
    'Chicken',
    'Pineapple',
    'BBQ Sauce',
  ],

  'Hot & Spicy': [
    'Tomato',
    'Cheese',
    'Hot Salami',
    'Mushroom',
    'Capsicum',
    'Olives',
    'Jalapeno',
    'Chilli',
  ],

  Mushroom: [
    'Tomato',
    'Cheese',
    'Double Mushroom',
  ],

  Marinara: [
    'Tomato',
    'Mixed Seafood',
    'Fresh Garlic',
    'Oregano',
  ],

  Napolitana: [
    'Tomato',
    'Cheese',
    'Olives',
    'Anchovies',
    'Fresh Garlic',
    'Oregano',
  ],
};

const toppings = [
  'Extra Cheese',
  'Mushroom',
  'Onion',
  'Capsicum',
  'Olives',
  'Pineapple',
  'Ham',
  'Bacon',
  'Salami',
  'Chicken',
  'Anchovies',
  'Prawns',
];

const openPizzaEditor = (
  pizzaName: string,
  size: string,
  price: string
) => {
  setSelectedPizza({
    name: pizzaName,
    size,
    price,
  });

  setRemovedIngredients([]);
  setExtraToppings([]);
  setShowToppings(true);
};

const toggleIngredient = (ingredient: string) => {
  setRemovedIngredients((prev) =>
    prev.includes(ingredient)
      ? prev.filter((i) => i !== ingredient)
      : [...prev, ingredient]
  );
};

const toggleExtra = (topping: string) => {
  setExtraToppings((prev) =>
    prev.includes(topping)
      ? prev.filter((i) => i !== topping)
      : [...prev, topping]
  );
};

const addPizzaToCart = () => {
  if (!selectedPizza) return;

  setCartItems((prev) => [
    ...prev,
    {
      ...selectedPizza,
      removedIngredients,
      extraToppings,
    },
  ]);

  setShowToppings(false);
};

  const categories = [
    'Traditional Pizza',
    'Gourmet Pizza',
    'Pasta',
    'Chicken Meals',
    'Deals',
  ];

  const renderItems = () => {
    switch (selectedCategory) {
      case 'Traditional Pizza':
        return traditionalPizza.map((item) => (
          <MenuCard
            key={item}
            title={item}
            sizes={{
              S: '$11.90',
              M: '$14.90',
              L: '$17.90',
              F: '$20.90',
            }}
          />
        ));

      case 'Gourmet Pizza':
        return gourmetPizza.map((item) => (
          <MenuCard
            key={item}
            title={item}
            sizes={{
              S: '$14.90',
              M: '$17.90',
              L: '$20.90',
              GF: '$23.30',
            }}
          />
        ));

      case 'Pasta':
        return pastaItems.map((item) => (
          <SimpleCard
            key={item}
            title={item}
            price="$17.90"
          />
        ));

      case 'Chicken Meals':
        return chickenMeals.map((item) => (
          <SimpleCard
            key={item}
            title={item}
            price="$27.50"
          />
        ));

      case 'Deals':
        return deals.map((deal) => (
          <div
            key={deal.name}
            className="bg-neutral-800 rounded-3xl p-5 border border-neutral-700"
          >
            <h3 className="text-2xl font-bold text-red-500">
              {deal.name}
            </h3>

            <p className="text-neutral-300 mt-3">
              {deal.description}
            </p>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-3xl font-bold">
                {deal.price}
              </span>

              <button className="bg-red-600 hover:bg-red-500 px-5 py-3 rounded-2xl font-semibold">
                Add Deal
              </button>
            </div>
          </div>
        ));

      default:
        return null;
    }
  };

  return (
    <div className="h-screen bg-[#111111] text-white flex overflow-hidden">
      <div className="w-72 bg-black border-r border-neutral-800 p-5">
        <h1 className="text-3xl font-bold mb-8">
          Roma POS
        </h1>

        <div className="space-y-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setSelectedCategory(category)
              }
              className={`w-full rounded-2xl px-5 py-4 text-left text-lg transition ${
                selectedCategory === category
                  ? 'bg-red-600'
                  : 'bg-neutral-900 hover:bg-neutral-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 p-5 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-4xl font-bold">
            {selectedCategory}
          </h2>

          <input
            placeholder="Search..."
            className="bg-neutral-900 border border-neutral-700 rounded-2xl px-5 py-3 w-80"
          />
        </div>

        <div className="grid grid-cols-3 gap-5">
          {renderItems()}
        </div>
      </div>

      <div className="w-96 bg-black border-l border-neutral-800 p-5 flex flex-col">
        <h2 className="text-3xl font-bold mb-5">
          Current Order
        </h2>

<div className="flex-1 space-y-3 overflow-y-auto">
  {cartItems.map((item, index) => (
    <div
      key={index}
      className="bg-neutral-900 rounded-2xl p-4"
    >
      <div className="flex justify-between">
        <div>
          <h3 className="font-bold">
            {item.size} {item.name}
          </h3>

          {item.removedIngredients.length > 0 && (
            <p className="text-red-400 text-sm mt-2">
              NO:{' '}
              {item.removedIngredients.join(', ')}
            </p>
          )}

          {item.extraToppings.length > 0 && (
            <p className="text-green-400 text-sm mt-1">
              EXTRA:{' '}
              {item.extraToppings.join(', ')}
            </p>
          )}
        </div>

        <span>{item.price}</span>
      </div>
    </div>
  ))}
{showToppings && selectedPizza && (
  <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-5">
    <div className="bg-neutral-900 border border-neutral-700 rounded-3xl w-full max-w-4xl p-6 max-h-[90vh] overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold">
            {selectedPizza.size}{' '}
            {selectedPizza.name}
          </h2>

          <p className="text-neutral-400 mt-1">
            Customize Pizza
          </p>
        </div>

        <button
          onClick={() => setShowToppings(false)}
          className="bg-red-600 px-5 py-3 rounded-2xl"
        >
          Close
        </button>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">
          Remove Ingredients
        </h3>

        <div className="grid grid-cols-3 gap-3">
          {(pizzaRecipes[selectedPizza.name] || []).map(
            (ingredient) => (
              <button
                key={ingredient}
                onClick={() =>
                  toggleIngredient(ingredient)
                }
                className={`rounded-2xl p-4 ${
                  removedIngredients.includes(
                    ingredient
                  )
                    ? 'bg-red-600'
                    : 'bg-neutral-800'
                }`}
              >
                {ingredient}
              </button>
            )
          )}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4">
          Extra Toppings
        </h3>

        <div className="grid grid-cols-3 gap-3">
          {toppings.map((topping) => (
            <button
              key={topping}
              onClick={() =>
                toggleExtra(topping)
              }
              className={`rounded-2xl p-4 ${
                extraToppings.includes(topping)
                  ? 'bg-green-600'
                  : 'bg-neutral-800'
              }`}
            >
              {topping}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 bg-black/30 rounded-2xl p-5">
        <h3 className="text-2xl font-bold mb-3">
          Live Preview
        </h3>

        <p className="text-xl">
          {selectedPizza.size}{' '}
          {selectedPizza.name}
        </p>

        {removedIngredients.length > 0 && (
          <p className="text-red-400 mt-3">
            NO:{' '}
            {removedIngredients.join(', ')}
          </p>
        )}

        {extraToppings.length > 0 && (
          <p className="text-green-400 mt-2">
            EXTRA:{' '}
            {extraToppings.join(', ')}
          </p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 mt-8">
        <button
          onClick={() => setShowToppings(false)}
          className="bg-neutral-700 rounded-2xl py-4"
        >
          Cancel
        </button>

        <button
          onClick={addPizzaToCart}
          className="bg-green-600 rounded-2xl py-4 font-bold"
        >
          Add To Order
        </button>
      </div>
    </div>
  </div>
)}
</div>
function MenuCard({
  title,
  sizes,
}: {
  title: string;
  sizes: Record<string, string>;
}) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-5">
      <div className="h-36 rounded-2xl bg-neutral-800 mb-4 flex items-center justify-center text-neutral-500">
        Pizza Image
      </div>

      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <div className="grid grid-cols-2 gap-3 mt-5">
        {Object.entries(sizes).map(([size, price]) => (
          <button
         <button
  key={size}
  onClick={() =>
    openPizzaEditor(title, size, price)
  }
  className="bg-red-600 hover:bg-red-500 rounded-2xl py-4"
>
            <div className="font-bold text-lg">
              {size}
            </div>

            <div className="text-sm">
              {price}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function SimpleCard({
  title,
  price,
}: {
  title: string;
  price: string;
}) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-5">
      <div className="h-36 rounded-2xl bg-neutral-800 mb-4 flex items-center justify-center text-neutral-500">
        Menu Item
      </div>

      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <div className="flex items-center justify-between mt-5">
        <span className="text-3xl font-bold">
          {price}
        </span>

        <button className="bg-red-600 hover:bg-red-500 px-5 py-3 rounded-2xl">
          Add
        </button>
      </div>
    </div>
  );
}