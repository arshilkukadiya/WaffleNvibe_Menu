import { MenuCategory } from '../types';

export const menuData: MenuCategory[] = [
  {
    id: 'new-arrival-mocktails',
    title: 'New Arrival Coffee Mocktails',
    items: [
      { id: 'lavender-esp', name: 'Lavender Esp. (Tonic/Ginger)', price: 220, description: 'A refreshing and aromatic coffee mocktail with a unique floral twist.', imageUrl: '../images/COFFEE MOCKTAILS/Lavender Espresso.png' },
      { id: 'bitter-lemon-tonic', name: 'Bitter Lemon tonic', price: 270, description: 'A zesty and invigorating mocktail with a pleasant bitterness.', imageUrl: '../images/COFFEE MOCKTAILS/Bitter Lemon Tonic.png' },
      { id: 'citrus-raspberry', name: 'Citrus Raspberry (zero sugar)', price: 290, description: 'A vibrant, sugar-free blend of citrus and sweet raspberry.', imageUrl: '../images/COFFEE MOCKTAILS/Citrus Raspberry.png' },
      { id: 'vanilla-coke-espresso', name: 'Vanilla Coke Espresso', price: 260, description: 'A nostalgic mix of classic coke, smooth vanilla, and a bold espresso shot.', imageUrl: '../images/COFFEE MOCKTAILS/Vanilla Coke Espresso.png' },
      { id: 'redbull-espresso', name: 'RedBull Espresso', price: 280, description: 'The ultimate energy boost, combining the kick of RedBull and espresso.', imageUrl: '../images/COFFEE MOCKTAILS/RedBull Espresso.png' },
      { id: 'monster-espresso', name: 'Monster Espresso', price: 260, description: 'An intense and powerful combination for when you need to be at your best.', imageUrl: '../images/COFFEE MOCKTAILS/Monster Espresso.png  ' },
    ],
    note: 'Extra Espresso Shot @ 40',
    image: '../images/coffemainnn.png'
  },
  {
    id: 'hot-milk-coffee',
    title: 'Hot Milk Coffee',
    items: [
      { id: 'cappuccino', name: 'Cappuccino', price: 180, description: 'A classic favorite with equal parts espresso, steamed milk, and foam.', imageUrl: '../images/HOT MILK COFFEE/Cappuccino.png' },
      { id: 'latte', name: 'Latte', price: 180, description: 'Smooth espresso with a generous amount of steamed milk and a light layer of foam.', imageUrl: '../images/HOT MILK COFFEE/Latte.png' },
      { id: 'mocha-coffee', name: 'Mocha coffee', price: 200, description: 'A rich blend of espresso, steamed milk, and chocolate.', imageUrl: '../images/HOT MILK COFFEE/Mocha coffee.png' },
      { id: 'cortado', name: 'Cortado', price: 180, description: 'A balanced drink with equal parts espresso and warm milk to reduce acidity.', imageUrl: '../images/HOT MILK COFFEE/Cortado.png' },
    ],
    note: 'Extra Espresso Shot @ 40',
    image: '../images/milkcoffee.png'
  },
  {
    id: 'black-coffee',
    title: 'Black Coffee',
    items: [
      { id: 'espresso single', name: 'Espresso Single Shot', price: 120  , description: 'A concentrated form of coffee, served as a single or double shot.', imageUrl: '../images/BLACK COFFEE/Espresso.png' },
      { id: 'espresso double', name: 'Espresso Double Shot', price: 160  , description: 'A concentrated form of coffee, served as a single or double shot.', imageUrl: '../images/BLACK COFFEE/Espresso.png' },
      { id: 'americano single', name: 'Americano Single Shot', price: 130  , description: 'A shot of espresso served with hot/cold water and ice.', imageUrl: '../images/BLACK COFFEE/Americano.png' },
      { id: 'americano double', name: 'Americano Double Shot', price: 170  , description: 'A shot of espresso served with hot/cold water and ice.', imageUrl: '../images/BLACK COFFEE/Americano.png' },
    ],
    note: 'Prices are for Single / Double shots.',
    image: '../images/blackcoffee.png'
  },
  {
    id: 'coffee-mocktails',
    title: 'Coffee Mocktails',
    items: [
      { id: 'espresso-tonic-ginger', name: 'Espresso Tonic/ Ginger', price: 190, imageUrl: '../images/COFFEE MOCKTAIL/Espresso.png' },
      { id: 'tropical-orange-esp', name: 'Tropical Orange Esp.', price: 220, imageUrl: '../images/COFFEE MOCKTAIL/Tropical Orange Esp..png' },
      { id: 'tropical-mix-fruit-esp', name: 'Tropical Mix Fruit Esp.', price: 220, imageUrl: '../images/COFFEE MOCKTAIL/Tropical Mix Fruit Esp..png' },
      { id: 'cranberry-esp', name: 'Cranberry Esp. (tonic/ginger)', price: 220, imageUrl: '../images/COFFEE MOCKTAIL/Cranberry Esp..png' },
      { id: 'granedine-esp', name: 'Granedine Esp. (tonic/ginger)', price: 220, imageUrl: '../images/COFFEE MOCKTAIL/Granedine Esp..png' },
      { id: 'spicy-purple-esp', name: 'Spicy Purple Esp. (tonic/ginger)', price: 220, imageUrl: '../images/COFFEE MOCKTAIL/Spicy Purple Esp..png' },
      { id: 'raspberry-esp', name: 'Raspberry Esp. (tonic/ginger)', price: 220, imageUrl: '../images/COFFEE MOCKTAIL/Raspberry Esp..png' },
    ],
    note: 'Extra Espresso Shot @ 40 / Take away charges @ 15',
    image: '../images/tonicespresso.png'
  },
  {
    id: 'iced-tea',
    title: 'Iced Tea',
    items: [
      { id: 'peach-iced-tea', name: 'Peach Iced Tea', price: 170, imageUrl: '../images/ICED TEA/Peach Iced Tea.png' },
      { id: 'lemon-iced-tea', name: 'Lemon Iced Tea', price: 170, imageUrl: '../images/ICED TEA/Lemon Iced Tea.png' },
      { id: 'raspberry-iced-tea', name: 'Rasberry Iced Tea', price: 180, imageUrl: '../images/ICED TEA/Raspberry Iced Tea.png' },
      { id: 'mix-berry-iced-tea', name: 'Mix Berry Iced Tea', price: 180, imageUrl: '../images/ICED TEA/Mix Berry Iced Tea.png' },
    ],
    image: '../images/icedtea.png'
  },
  {
    id: 'organic-tea',
    title: 'Organic Tea Antioxidant',
    items: [
      { id: 'blue-tea', name: 'Blue Tea', price: 100, description: 'Made w/ Butterfly Pea flowers, helps in anti-inflamation & digestion.', imageUrl: '../images/Organic Tea/blue.png' },
      { id: 'yellow-tea', name: 'Yellow Tea', price: 100, description: 'Made w/ Chamomile flowers, helps in reliving anxiety & improves heart health.', imageUrl: '../images/Organic Tea/yellow.png' },
      { id: 'red-tea', name: 'Red Tea', price: 100, description: 'Made w/ Hibiscus flowers, helps in lowering blood preasure & reduces cholesterol.', imageUrl: '../images/Organic Tea/red.png' },
    ],
    image: '../images/herbaltea.png'
  },
  {
    id: 'dessert-coffee',
    title: 'Dessert Coffee',
    items: [
      { id: 'affogato', name: 'Affogato', price: 160, description: 'A scoop of vanilla ice cream drowned in a shot of hot espresso.', imageUrl: '../images/DESSERT COFFEE/Affogato.png' },
      { id: 'vietnamese', name: 'Vietnamese', price: 180, description: 'Strong brewed coffee with sweetened condensed milk.', imageUrl: '../images/DESSERT COFFEE/vietnamis.png' },
      { id: 'coconut-vietnamese', name: 'Coconut Vietnamese', price: 200, description: 'A tropical twist on the classic Vietnamese coffee with coconut cream.', imageUrl: '../images/DESSERT COFFEE/Bom Bon (Café Bombón).png' },
      { id: 'bom-bon', name: 'Bom Bon', price: 180, description: 'Espresso with condensed milk, a sweet and creamy delight.', imageUrl: '../images/DESSERT COFFEE/Coconut Vietnamese.png' },
    ],
    note: 'Extra Espresso shot @40',
    image: '../images/dessertcoffee.png'
  },
  {
    id: 'iced-milk-coffee',
    title: 'Iced Milk Coffee',
    items: [
      { id: 'oreo-iced-coffee', name: 'Oreo Iced Coffee', price: 220, imageUrl: '../images/ICED MILK COFFEE/KitKat Iced Coffee.png' },
      { id: 'kitkat-iced-coffee', name: 'KitKat Iced Coffee', price: 220, imageUrl: '../images/ICED MILK COFFEE/Oreo Iced Coffee.png' },
      { id: 'biscoff-iced-coffee', name: 'Biscoff Iced Coffee', price: 220, imageUrl: '../images/ICED MILK COFFEE/Hazelnut Iced Coffee.png' },
      { id: 'hazelnut-iced-coffee', name: 'Hazelnut Iced Coffee', price: 240, imageUrl: '../images/ICED MILK COFFEE/Biscoff Iced Coffee.png' },
      { id: 'vanilla-iced-coffee', name: 'Vanilla Iced Coffee', price: 200, imageUrl: '../images/ICED MILK COFFEE/Vanilla Iced Coffee.png' },
      { id: 'mocha-iced-coffee', name: 'Mocha Iced Coffee', price: 220, imageUrl: '../images/ICED MILK COFFEE/Mocha Iced Coffee.png' },
    ],
    note: 'Take away charges @ 15',
    image: '../images/icedcoffee.png'
  },
  {
    id: 'mojitos',
    title: 'Mojitos',
    items: [
      { id: 'blueberry-mojito', name: 'Blueberry', price: 140, imageUrl: '../images/MOJITOS/Blueberry.png' },
      { id: 'peach-mojito', name: 'Peach', price: 140, imageUrl: '../images/MOJITOS/Peach.png' },
      { id: 'strawberry-mojito', name: 'Strawberry', price: 140, imageUrl: '../images/MOJITOS/Strawberry.png' },
      { id: 'raspberry-mojito', name: 'Raspberry', price: 140, imageUrl: '../images/MOJITOS/Raspberry.png' },
      { id: 'kiwi-mojito', name: 'Kiwi', price: 140, imageUrl: '../images/MOJITOS/Kiwi.png' },
      { id: 'mint-mojito', name: 'Mint', price: 140, imageUrl: '../images/MOJITOS/Mint.png' },
      { id: 'mix-berry-mojito', name: 'Mix Berry', price: 160, imageUrl: '../images/MOJITOS/Mix Berry.png' },
      { id: 'peach-berry-mojito', name: 'Peach Berry', price: 160, imageUrl: '../images/MOJITOS/Peach Berry.png' },
      { id: 'green-apple-mojito', name: 'Green Apple', price: 180, imageUrl: '../images/MOJITOS/Green Apple.png' },
      { id: 'lemonade', name: 'Lemonade', price: 220, imageUrl: '../images/MOJITOS/Lemonade.png' },
    ],
    note: 'Take away charges @ 15',
    image: '../images/mojitodrink.png'
  },
  {
    id: 'hot-brownie',
    title: 'Hot Brownie',
    items: [
      { id: 'classic-brownie', name: 'Classic Brownie', price: 110, description: '(100 gms)', imageUrl: '../images/HOT BROWNIE/classic.png' },
      { id: 'nutella-brownie', name: 'Nutella Brownie', price: 150, description: '(110 gms)', imageUrl: '../images/HOT BROWNIE/nutella.png' },
      { id: 'biscoff-brownie', name: 'Biscoff Brownie', price: 150, description: '(110 gms)', imageUrl: '../images/HOT BROWNIE/Biscoff Brownie.png' },
      { id: 'walnut-brownie', name: 'Walnut Brownie', price: 150, description: '(110 gms)', imageUrl: '../images/HOT BROWNIE/Walnut Brownie.png' },
      { id: 'hazelnut-brownie', name: 'Hazelnut Brownie', price: 150, description: '(110 gms)', imageUrl: '../images/HOT BROWNIE/Hazelnut Brownie.png' },
    ],
    image: '../images/brownies.png',
    gridCols: 1,
  },
  {
    id: 'korean-ramen',
    title: 'Korean Ramen',
    items: [
      { id: 'classic-ramen', name: 'Classic Ramen', price: 220, imageUrl: '../images/Ramen/Classic Ramen.png' },
      { id: 'kimchi-ramen', name: 'Kimchi', price: 220, imageUrl: '../images/Ramen/Kimchi Ramen.png' },
      { id: 'superspicy-ramen', name: 'SuperSpicy', price: 220, imageUrl: '../images/Ramen/SuperSpicy Ramen.png' },
    ],
    note: 'Extra cheese @30 / Take away charges @ 15',
    image: '../images/ramen.png',
    gridCols: 1,
  },
  {
    id: 'cheese-cake',
    title: 'Cheese Cake',
    items: [
      { id: 'new-york-cheesecake', name: 'New York', price: 200, description: 'A desert consisting thick, creamy cheese, drizzle with chocolate (dark/milk/white).', imageUrl: '../images/CHEESE CAKE/NY Biscoff.png' },
      { id: 'ny-biscoff-cheesecake', name: 'NY biscoff', price: 270, description: 'A desert consisting thick, creamy cheese, drizzle with biscoff spread with lotus biscuit crush on top of it.', imageUrl: '../images/CHEESE CAKE/New York.png' },
      { id: 'ny-blueberry-cheesecake', name: 'NY blueberry', price: 250, description: 'A desert consisting thick, creamy cheese, drizzle with blueberry syrup with dry blue berry and white chocolate drizzle on top of it.', imageUrl: '../images/CHEESE CAKE/NY Blueberry.png' },
      { id: 'ny-nutella-cheesecake', name: 'NY Nutella', price: 260, description: 'A desert consisting thick, creamy cheese, drizzle with nutella with dark choco chips and dark chocolate drizzle on top of it.', imageUrl: '../images/CHEESE CAKE/NY Nutella.png' },
      { id: 'ny-hazelnut-cheesecake', name: 'NY Hazelnut', price: 270, description: 'A desert consisting thick, creamy cheese, drizzle with hazelnut paste with hazelnuts and dark chocolate drizzle on top of it.', imageUrl: '../images/CHEESE CAKE/NY Hazelnut.png' },
    ],
    note: 'Take away charges @ 10',
    image: '../images/nycheese.png'
  },
  {
    id: 'mini-waffle-classic',
    title: 'Mini Waffle - Classic',
    items: [
      { id: 'white-choco-waffle', name: 'White Choco', price: 65, imageUrl: '../images/whitechoco.jpg' },
      { id: 'milk-choco-waffle', name: 'Milk Choco', price: 65, imageUrl: '../images/milkchoco.jpg' },
      { id: 'dark-choco-waffle', name: 'Dark Choco', price: 65, imageUrl: '../images/darkchoco.jpg' },
    ],
    gridCols: 1,
  },
  {
    id: 'mini-waffle-toppings',
    title: 'Mini Waffle - Classic 2.0 (Toppings)',
    items: [
      { id: 'cookie-cream-waffle', name: 'Cookie N\' Cream', price: 90, imageUrl: '../images/cookiecream.jpg' },
      { id: 'triple-choco-waffle', name: 'Triple Choco', price: 80, bestSeller: true, imageUrl: '../images/triplechocolate.jpg' },
      { id: 'red-velvet-waffle', name: 'Red Velvet', price: 90, imageUrl: '../images/redvelvet.jpg' },
      { id: 'kitkat-crush-waffle', name: 'Kitkat Crush', price: 100, bestSeller: true, imageUrl: '../images/kitkat.jpg' },
      { id: 'oreo-infinity-waffle', name: 'Oreo Infinity', price: 90, imageUrl: '../images/oreoinfinity.jpg' },
      { id: 'nutty-nutella-waffle', name: 'Nutty Nutella', price: 100, bestSeller: true, imageUrl: '../images/nutella.jpg' },
    ],
    gridCols: 1,
  },
  {
    id: 'mini-waffle-exotica',
    title: 'Mini Waffle - Exotica',
    items: [
      { id: 'lotus-biscoff-waffle', name: 'Lotus Biscoff', price: 120, bestSeller: true, imageUrl: '../images/biscoff.jpg' },
      { id: 'berry-blast-waffle', name: 'Berry Blast', price: 120, bestSeller: true, imageUrl: '../images/berryblast.jpg' },
      { id: 'nutella-almond-waffle', name: 'Nutella Almond', price: 120, imageUrl: '../images/nutellaalmond.jpg' },
      { id: 'hazelnut-waffle', name: 'Hazelnut', price: 120, bestSeller: true, imageUrl: '../images/hazelnut.jpg' },
      { id: 'dry-fruit-blast-waffle', name: 'Dry Fruit Blast', price: 110, imageUrl: '../images/dryfritblast.jpg' },
      { id: 'extra-toppings-waffle', name: 'Extra Toppings', price: 20,  },
    ],
    gridCols: 1,
  },
  {
    id: 'mini-waffle-custom',
    title: 'Mini Waffle - Customization',
    items: [
      { 
        id: 'custom-waffle',
        name: 'Custom Waffle', 
        price: 140, 
        description: 'Base: Vanilla/Chocolate/Red Velvet. Choco Layer: Dark/Milk/White. Toppings (Any 2): Oreo/Lotus Biscoff/Kitkat/Berries/Nutella/Caramel/Dry Fruits.',
        imageUrl: '../images/customization.png'
      },
    ],
    note: 'Extra Toppings @ ₹20 / Take away charges @ 10',
    image: '../images/customizationmain.png'
  },
];