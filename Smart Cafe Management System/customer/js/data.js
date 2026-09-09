/* Shared frontend data model for the SmartCafe prototype. */
window.SmartCafeData = {
  categories: ['All', 'Coffee', 'Tea', 'Snacks', 'Meals', 'Desserts'],
  menu: [
    {
      id: 'coffee-01', name: 'Cappuccino', category: 'Coffee', price: 140,
      description: 'Espresso with steamed milk and a soft foam finish.',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80', available: true,
      sizes: [['Small', 0], ['Medium', 20], ['Large', 40]],
      extras: [['Extra Shot', 40], ['Whipped Cream', 30], ['Caramel Syrup', 25]]
    },
    {
      id: 'coffee-02', name: 'Cafe Latte', category: 'Coffee', price: 150,
      description: 'Smooth espresso balanced with steamed milk.',
      image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&w=900&q=80', available: true,
      sizes: [['Small', 0], ['Medium', 20], ['Large', 40]],
      extras: [['Extra Shot', 40], ['Vanilla Syrup', 25], ['Caramel Syrup', 25]]
    },
    {
      id: 'coffee-03', name: 'Cold Coffee', category: 'Coffee', price: 160,
      description: 'Chilled blended coffee with a creamy finish.',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80', available: true,
      sizes: [['Small', 0], ['Medium', 20], ['Large', 40]],
      extras: [['Whipped Cream', 30], ['Chocolate Sauce', 25], ['Caramel Syrup', 25]]
    },
    {
      id: 'tea-01', name: 'Masala Chai', category: 'Tea', price: 80,
      description: 'Classic Indian tea brewed with aromatic spices.',
      image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=900&q=80', available: true,
      sizes: [['Small', 0], ['Large', 20]],
      extras: [['Extra Ginger', 10], ['Honey', 20], ['Extra Milk', 10]]
    },
    {
      id: 'tea-02', name: 'Green Tea', category: 'Tea', price: 90,
      description: 'Light and refreshing green tea with a clean finish.',
      image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=900&q=80', available: true,
      sizes: [['Small', 0], ['Large', 20]],
      extras: [['Lemon', 10], ['Honey', 20], ['Mint', 10]]
    },
    {
      id: 'snack-01', name: 'French Fries', category: 'Snacks', price: 120,
      description: 'Crisp golden fries with a light seasoning.',
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80', available: true,
      sizes: [['Regular', 0], ['Large', 40]],
      extras: [['Cheese Dip', 30], ['Peri Peri Seasoning', 15], ['Extra Cheese', 30]]
    },
    {
      id: 'snack-02', name: 'Veg Sandwich', category: 'Snacks', price: 150,
      description: 'Toasted sandwich filled with fresh vegetables.',
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80', available: true,
      sizes: [['Regular', 0], ['Large', 40]],
      extras: [['Extra Cheese', 30], ['Extra Vegetables', 20], ['Grilled', 20]]
    },
    {
      id: 'meal-01', name: 'Veg Pizza', category: 'Meals', price: 220,
      description: 'Loaded vegetable pizza with melted cheese.',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80', available: true,
      sizes: [['Regular', 0], ['Medium', 50], ['Large', 100]],
      extras: [['Extra Cheese', 40], ['Jalapenos', 20], ['Olives', 20]]
    },
    {
      id: 'meal-02', name: 'Veg Burger', category: 'Meals', price: 180,
      description: 'Crispy vegetable patty with fresh toppings.',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80', available: true,
      sizes: [['Regular', 0], ['Large', 40]],
      extras: [['Extra Cheese', 30], ['Extra Patty', 60], ['Extra Sauce', 15]]
    },
    {
      id: 'meal-03', name: 'Pasta', category: 'Meals', price: 190,
      description: 'Creamy pasta prepared with fresh ingredients.',
      image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80', available: true,
      sizes: [['Regular', 0], ['Large', 40]],
      extras: [['Extra Cheese', 30], ['Mushrooms', 30], ['Garlic Bread', 60]]
    },
    {
      id: 'dessert-01', name: 'Chocolate Brownie', category: 'Desserts', price: 130,
      description: 'Rich and fudgy chocolate brownie served warm.',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80', available: true,
      sizes: [['Regular', 0]],
      extras: [['Vanilla Ice Cream', 50], ['Chocolate Sauce', 20], ['Walnuts', 30]]
    },
    {
      id: 'dessert-02', name: 'Cheesecake', category: 'Desserts', price: 160,
      description: 'Creamy cheesecake with a delicious biscuit base.',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80', available: true,
      sizes: [['Regular', 0]],
      extras: [['Berry Sauce', 30], ['Chocolate Sauce', 20], ['Extra Biscuit Crumb', 20]]
    }
  ]
};
