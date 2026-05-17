# Replace Entire app/page.tsx With This

```tsx
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

const pizzaRecipes: Record<string, string[]> = {
  Margherita: ['Tomato', 'Cheese', 'Oregano'],
  Pepperoni: ['Tomato', 'Cheese', 'Hot Salami'],
  Hawaiian: ['Tomato', 'Cheese', 'Ham', 'Pineapple'],
  Vegetarian: [
    'Tomato',
    'Cheese',
    'Mushroom',
    'Onion',
    'Capsicum',
    'Olives',
  ],
  'Meat Lover': [
    'Tomato',
    'Cheese',
    'Ham',
    'Hot Salami',
    'Bacon',
    'BBQ Sauce',
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
  'Chicken',
  'Salami',
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] =
    React.useState('Traditional Pizza');

  const [selectedPizza, setSelectedPizza] =
    React.useState<any>(null);

  const [showPopup, setShowPopup] =
    React.useState(false);

  const [removedIngredients, setRemovedIngredients] =
    React.useState<string[]>([]);

  const [extraToppings, setExtraToppings] =
    React.useState<string[]>([]);

  const [cartItems, setCartItems] =
    React.useState<any[]>([]);

  const categories = [
    'Traditional Pizza',
    'Gourmet Pizza',
    'Pasta',
  ];

  const openPizza = (
    title: string,
    size: string,
    price: string
  ) => {
    setSelectedPizza({
      title,
      size,
      price,
    });

    setRemovedIngredients([]);
    setExtraToppings([]);
    setShowPopup(true);
  };

  const toggleIngredient = (ingredient: string) => {
    setRemovedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((i) => i !== ingredient)
        : [...prev, ingredient]
    );
  };

  const toggleExtra = (ingredient: string) => {
    setExtraToppings((prev) =>
      prev.includes(ingredient)
        ? prev.filter((i) => i !== ingredient)
        : [...prev, ingredient]
    );
  };

  const addToCart = () => {
    if (!selectedPizza) return;

    setCartItems((prev) => [
      ...prev,
      {
        ...selectedPizza,
        removedIngredients,
        extraToppings,
      },
    ]);

    setShowPopup(false);
  };

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
            onSelect={openPizza}
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
            onSelect={openPizza}
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
        <h2 className="text-4xl font-bold mb-6">
          {selectedCategory}
        </h2>

        <div className="grid grid-cols-3 gap-5">
          {renderItems()}
        </div>
      </div>

      <div className="w-96 bg-black border-l border-neutral-800 p-5 overflow-y-auto">
        <h2 className="text-3xl font-bold mb-5">
          Current Order
        </h2>

        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-900 rounded-2xl p-4"
            >
              <div className="flex justify-between">
                <div>
                  <h3 className="font-bold text-lg">
                    {item.size} {item.title}
                  </h3>

                  {item.removedIngredients.length > 0 && (
                    <p className="text-red-400 text-sm mt-2">
                      NO: {item.removedIngredients.join(', ')}
                    </p>
                  )}

                  {item.extraToppings.length > 0 && (
                    <p className="text-green-400 text-sm mt-2">
                      EXTRA: {item.extraToppings.join(', ')}
                    </p>
                  )}
                </div>

                <span>{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showPopup && selectedPizza && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-5">
          <div className="bg-neutral-900 border border-neutral-700 rounded-3xl w-full max-w-4xl p-6 overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-3xl font-bold">
                  {selectedPizza.size} {selectedPizza.title}
                </h2>

                <p className="text-neutral-400 mt-2">
                  Customize Pizza
                </p>
              </div>

              <button
                onClick={() => setShowPopup(false)}
                className="bg-red-600 px-5 py-3 rounded-2xl"
              >
                Close
              </button>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">
                Remove Ingredients
              </h3>

              <div className="grid grid-cols-3 gap-3">
                {(pizzaRecipes[selectedPizza.title] || []).map(
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

            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">
                Extra Toppings
              </h3>

              <div className="grid grid-cols-3 gap-3">
                {toppings.map((ingredient) => (
                  <button
                    key={ingredient}
                    onClick={() => toggleExtra(ingredient)}
                    className={`rounded-2xl p-4 ${
                      extraToppings.includes(ingredient)
                        ? 'bg-green-600'
                        : 'bg-neutral-800'
                    }`}
                  >
                    {ingredient}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={addToCart}
              className="w-full bg-green-600 rounded-2xl py-5 text-xl font-bold mt-8"
            >
              Add To Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function MenuCard({
  title,
  sizes,
  onSelect,
}: {
  title: string;
  sizes: Record<string, string>;
  onSelect: (
    title: string,
    size: string,
    price: string
  ) => void;
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
            key={size}
            onClick={() =>
              onSelect(title, size, price)
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
        Pasta
      </div>

      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <div className="flex items-center justify-between mt-5">
        <span className="text-3xl font-bold">
          {price}
        </span>

        <button className="bg-red-600 px-5 py-3 rounded-2xl">
          Add
        </button>
      </div>
    </div>
  );
}
```

Then save and run:

```bash
git add .
git commit -m "Working popup system"
git push
```

Refresh your Vercel site after 1 minute.
