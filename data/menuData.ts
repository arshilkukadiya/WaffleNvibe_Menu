import { MenuCategory } from '../types';

export const menuData: MenuCategory[] = [
  {
    id: 'new-arrival-mocktails',
    title: 'New Arrival Coffee Mocktails',
    items: [
      { id: 'lavender-esp', name: 'Lavender Esp. (Tonic/Ginger)', price: 220, description: 'A refreshing and aromatic coffee mocktail with a unique floral twist.', imageUrl: 'https://images.unsplash.com/photo-1618053219013-79752570fee7?q=80&w=1887&auto=format&fit=crop' },
      { id: 'bitter-lemon-tonic', name: 'Bitter Lemon tonic', price: 270, description: 'A zesty and invigorating mocktail with a pleasant bitterness.', imageUrl: 'https://images.unsplash.com/photo-1600378127888-912c748c9a44?q=80&w=1887&auto=format&fit=crop' },
      { id: 'citrus-raspberry', name: 'Citrus Raspberry (zero sugar)', price: 290, description: 'A vibrant, sugar-free blend of citrus and sweet raspberry.', imageUrl: 'https://images.unsplash.com/photo-1595981266689-10654b423c52?q=80&w=1887&auto=format&fit=crop' },
      { id: 'vanilla-coke-espresso', name: 'Vanilla Coke Espresso', price: 260, description: 'A nostalgic mix of classic coke, smooth vanilla, and a bold espresso shot.', imageUrl: 'https://images.unsplash.com/photo-1627464393488-524b1a643442?q=80&w=1887&auto=format&fit=crop' },
      { id: 'redbull-espresso', name: 'RedBull Espresso', price: 280, description: 'The ultimate energy boost, combining the kick of RedBull and espresso.', imageUrl: 'https://images.unsplash.com/photo-1611157953335-a7c823799d69?q=80&w=1887&auto=format&fit=crop' },
      { id: 'monster-espresso', name: 'Monster Espresso', price: 260, description: 'An intense and powerful combination for when you need to be at your best.', imageUrl: 'https://images.unsplash.com/photo-1622223490938-6b84ac4392b4?q=80&w=1964&auto=format&fit=crop' },
    ],
    note: 'Extra Espresso Shot @ 40',
    image: '../images/coffemainnn.png'
  },
  {
    id: 'hot-milk-coffee',
    title: 'Hot Milk Coffee',
    items: [
      { id: 'cappuccino', name: 'Cappuccino', price: 180, description: 'A classic favorite with equal parts espresso, steamed milk, and foam.', imageUrl: 'https://images.unsplash.com/photo-1557006029-765c5d38b67c?q=80&w=1887&auto=format&fit=crop' },
      { id: 'latte', name: 'Latte', price: 180, description: 'Smooth espresso with a generous amount of steamed milk and a light layer of foam.', imageUrl: 'https://images.unsplash.com/photo-1572442388855-4273a7f096da?q=80&w=1887&auto=format&fit=crop' },
      { id: 'mocha-coffee', name: 'Mocha coffee', price: 200, description: 'A rich blend of espresso, steamed milk, and chocolate.', imageUrl: 'https://images.unsplash.com/photo-1542312579-43a948512e5a?q=80&w=1887&auto=format&fit=crop' },
      { id: 'cortado', name: 'Cortado', price: 180, description: 'A balanced drink with equal parts espresso and warm milk to reduce acidity.', imageUrl: 'https://images.unsplash.com/photo-1579591469602-5151528c3869?q=80&w=1887&auto=format&fit=crop' },
    ],
    note: 'Extra Espresso Shot @ 40',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'black-coffee',
    title: 'Black Coffee',
    items: [
      { id: 'espresso', name: 'Espresso', price: '120 / 160', description: 'A concentrated form of coffee, served as a single or double shot.', imageUrl: 'https://images.unsplash.com/photo-1593616298536-a8a2a43ae93b?q=80&w=1887&auto=format&fit=crop' },
      { id: 'americano', name: 'Americano', price: '130 / 170', description: 'A shot of espresso served with hot/cold water and ice.', imageUrl: 'https://images.unsplash.com/photo-1545668578-f75239a08462?q=80&w=1887&auto=format&fit=crop' },
    ],
    note: 'Prices are for Single / Double shots.',
    image: 'https://images.unsplash.com/photo-1621877239063-34cc508518b5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'coffee-mocktails',
    title: 'Coffee Mocktails',
    items: [
      { id: 'espresso-tonic-ginger', name: 'Espresso Tonic/ Ginger', price: 190, imageUrl: 'https://images.unsplash.com/photo-1572499643486-5f320188523c?q=80&w=1887&auto=format&fit=crop' },
      { id: 'tropical-orange-esp', name: 'Tropical Orange Esp.', price: 220, imageUrl: 'https://images.unsplash.com/photo-1617966943564-65b45a4b1b51?q=80&w=1887&auto=format&fit=crop' },
      { id: 'tropical-mix-fruit-esp', name: 'Tropical Mix Fruit Esp.', price: 220, imageUrl: 'https://images.unsplash.com/photo-1502680390469-be75c884623a?q=80&w=1887&auto=format&fit=crop' },
      { id: 'cranberry-esp', name: 'Cranberry Esp. (tonic/ginger)', price: 220, imageUrl: 'https://images.unsplash.com/photo-1618218104847-84f938a79b20?q=80&w=1887&auto=format&fit=crop' },
      { id: 'granedine-esp', name: 'Granedine Esp. (tonic/ginger)', price: 220, imageUrl: 'https://images.unsplash.com/photo-1551024709-8f237c2045b5?q=80&w=1887&auto=format&fit=crop' },
      { id: 'spicy-purple-esp', name: 'Spicy Purple Esp. (tonic/ginger)', price: 220, imageUrl: 'https://images.unsplash.com/photo-1599022534572-43e5a5ea1766?q=80&w=1887&auto=format&fit=crop' },
      { id: 'raspberry-esp', name: 'Raspberry Esp. (tonic/ginger)', price: 220, imageUrl: 'https://images.unsplash.com/photo-1622223490938-6b84ac4392b4?q=80&w=1964&auto=format&fit=crop' },
    ],
    note: 'Extra Espresso Shot @ 40 / Take away charges @ 15',
    image: 'https://images.unsplash.com/photo-1551030173-1a29524491b8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'iced-tea',
    title: 'Iced Tea',
    items: [
      { id: 'peach-iced-tea', name: 'Peach Iced Tea', price: 170, imageUrl: 'https://images.unsplash.com/photo-1627041113673-5a0242204434?q=80&w=1887&auto=format&fit=crop' },
      { id: 'lemon-iced-tea', name: 'Lemon Iced Tea', price: 170, imageUrl: 'https://images.unsplash.com/photo-1542649310-388b4481ac3a?q=80&w=1887&auto=format&fit=crop' },
      { id: 'raspberry-iced-tea', name: 'Rasberry Iced Tea', price: 180, imageUrl: 'https://images.unsplash.com/photo-1598980959081-344449835777?q=80&w=1887&auto=format&fit=crop' },
      { id: 'mix-berry-iced-tea', name: 'Mix Berry Iced Tea', price: 180, imageUrl: 'https://images.unsplash.com/photo-1506464525992-5a2121db597a?q=80&w=1887&auto=format&fit=crop' },
    ],
    image: 'https://images.unsplash.com/photo-1556679343-c7306c19761a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'organic-tea',
    title: 'Organic Tea Antioxidant',
    items: [
      { id: 'blue-tea', name: 'Blue Tea', price: 100, description: 'Made w/ Butterfly Pea flowers, helps in anti-inflamation & digestion.', imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f628ab2b31?q=80&w=1974&auto=format&fit=crop' },
      { id: 'yellow-tea', name: 'Yellow Tea', price: 100, description: 'Made w/ Chamomile flowers, helps in reliving anxiety & improves heart health.', imageUrl: 'https://images.unsplash.com/photo-1594212699896-56d02d02c813?q=80&w=1974&auto=format&fit=crop' },
      { id: 'red-tea', name: 'Red Tea', price: 100, description: 'Made w/ Hibiscus flowers, helps in lowering blood preasure & reduces cholesterol.', imageUrl: 'https://images.unsplash.com/photo-1627435601361-ec25f2479c34?q=80&w=1964&auto=format&fit=crop' },
    ],
    image: 'https://images.unsplash.com/photo-1597318181409-cf7252f8fb20?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'dessert-coffee',
    title: 'Dessert Coffee',
    items: [
      { id: 'affogato', name: 'Affogato', price: 160, description: 'A scoop of vanilla ice cream drowned in a shot of hot espresso.', imageUrl: 'https://images.unsplash.com/photo-1579953835261-a472a39288e3?q=80&w=1887&auto=format&fit=crop' },
      { id: 'vietnamese', name: 'Vietnamese', price: 180, description: 'Strong brewed coffee with sweetened condensed milk.', imageUrl: 'https://images.unsplash.com/photo-1600869277254-4f489b4f738c?q=80&w=1887&auto=format&fit=crop' },
      { id: 'coconut-vietnamese', name: 'Coconut Vietnamese', price: 200, description: 'A tropical twist on the classic Vietnamese coffee with coconut cream.', imageUrl: 'https://images.unsplash.com/photo-1610954203223-162c64883318?q=80&w=1887&auto=format&fit=crop' },
      { id: 'bom-bon', name: 'Bom Bon', price: 180, description: 'Espresso with condensed milk, a sweet and creamy delight.', imageUrl: 'https://images.unsplash.com/photo-1627464393488-524b1a643442?q=80&w=1887&auto=format&fit=crop' },
    ],
    note: 'Extra Espresso shot @40',
    image: 'https://images.unsplash.com/photo-1484981138539-c1044ea1525a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'iced-milk-coffee',
    title: 'Iced Milk Coffee',
    items: [
      { id: 'oreo-iced-coffee', name: 'Oreo Iced Coffee', price: 220, imageUrl: 'https://images.unsplash.com/photo-1624823398932-353d2f254b9a?q=80&w=1887&auto=format&fit=crop' },
      { id: 'kitkat-iced-coffee', name: 'KitKat Iced Coffee', price: 220, imageUrl: 'https://images.unsplash.com/photo-1627218524317-2706c9540b64?q=80&w=1887&auto=format&fit=crop' },
      { id: 'biscoff-iced-coffee', name: 'Biscoff Iced Coffee', price: 220, imageUrl: 'https://images.unsplash.com/photo-1634564283995-a82f3c3a41e9?q=80&w=1887&auto=format&fit=crop' },
      { id: 'hazelnut-iced-coffee', name: 'Hazelnut Iced Coffee', price: 240, imageUrl: 'https://images.unsplash.com/photo-1610471931375-d41ab3631024?q=80&w=1887&auto=format&fit=crop' },
      { id: 'vanilla-iced-coffee', name: 'Vanilla Iced Coffee', price: 200, imageUrl: 'https://images.unsplash.com/photo-1598679263158-b68461dbbe28?q=80&w=1887&auto=format&fit=crop' },
      { id: 'mocha-iced-coffee', name: 'Mocha Iced Coffee', price: 220, imageUrl: 'https://images.unsplash.com/photo-1557354635-a83a35c59f0f?q=80&w=1887&auto=format&fit=crop' },
    ],
    note: 'Take away charges @ 15',
    image: 'https://images.unsplash.com/photo-1621213626246-276fadb9a3f2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'mojitos',
    title: 'Mojitos',
    items: [
      { id: 'blueberry-mojito', name: 'Blueberry', price: 140, imageUrl: 'https://images.unsplash.com/photo-1621262799351-3df26002013d?q=80&w=1887&auto=format&fit=crop' },
      { id: 'peach-mojito', name: 'Peach', price: 140, imageUrl: 'https://images.unsplash.com/photo-1615887082697-a7a022b7c02b?q=80&w=1887&auto=format&fit=crop' },
      { id: 'strawberry-mojito', name: 'Strawberry', price: 140, imageUrl: 'https://images.unsplash.com/photo-1524824267900-2fa9cbf7a5e6?q=80&w=1887&auto=format&fit=crop' },
      { id: 'raspberry-mojito', name: 'Raspberry', price: 140, imageUrl: 'https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?q=80&w=1887&auto=format&fit=crop' },
      { id: 'kiwi-mojito', name: 'Kiwi', price: 140, imageUrl: 'https://images.unsplash.com/photo-1626202157120-2a8187834571?q=80&w=1887&auto=format&fit=crop' },
      { id: 'mint-mojito', name: 'Mint', price: 140, imageUrl: 'https://images.unsplash.com/photo-1622955182813-059928374d75?q=80&w=1887&auto=format&fit=crop' },
      { id: 'mix-berry-mojito', name: 'Mix Berry', price: 160, imageUrl: 'https://images.unsplash.com/photo-1622142273643-bd9b78e4a905?q=80&w=1887&auto=format&fit=crop' },
      { id: 'peach-berry-mojito', name: 'Peach Berry', price: 160, imageUrl: 'https://images.unsplash.com/photo-1609951651817-0139b4b025b9?q=80&w=1887&auto=format&fit=crop' },
      { id: 'green-apple-mojito', name: 'Green Apple', price: 180, imageUrl: 'https://images.unsplash.com/photo-1619158401349-3e0f9c2f626b?q=80&w=1887&auto=format&fit=crop' },
      { id: 'lemonade', name: 'Lemonade', price: 220, imageUrl: 'https://images.unsplash.com/photo-1596591603933-a3d1d5c225b1?q=80&w=1887&auto=format&fit=crop' },
    ],
    note: 'Take away charges @ 15',
    image: 'https://images.unsplash.com/photo-1605275486054-8a68832c3e15?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'hot-brownie',
    title: 'Hot Brownie',
    items: [
      { id: 'classic-brownie', name: 'Classic Brownie', price: 110, description: '(100 gms)', imageUrl: 'https://images.unsplash.com/photo-1606890373429-33a82151034f?q=80&w=1887&auto=format&fit=crop' },
      { id: 'nutella-brownie', name: 'Nutella Brownie', price: 150, description: '(110 gms)', imageUrl: 'https://images.unsplash.com/photo-1571166318855-a026e4ab910d?q=80&w=1887&auto=format&fit=crop' },
      { id: 'biscoff-brownie', name: 'Biscoff Brownie', price: 150, description: '(110 gms)', imageUrl: 'https://images.unsplash.com/photo-1621210137452-94b1a80e1f7a?q=80&w=1887&auto=format&fit=crop' },
      { id: 'walnut-brownie', name: 'Walnut Brownie', price: 150, description: '(110 gms)', imageUrl: 'https://images.unsplash.com/photo-1582287845348-154a4a159d3e?q=80&w=1887&auto=format&fit=crop' },
      { id: 'hazelnut-brownie', name: 'Hazelnut Brownie', price: 150, description: '(110 gms)', imageUrl: 'https://images.unsplash.com/photo-1505394139885-3b1b228f413d?q=80&w=1887&auto=format&fit=crop' },
    ],
    image: 'https://images.unsplash.com/photo-1563805448356-d66833b37b6a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gridCols: 1,
  },
  {
    id: 'korean-ramen',
    title: 'Korean Ramen',
    items: [
      { id: 'classic-ramen', name: 'Classic Ramen', price: 220, imageUrl: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?q=80&w=1887&auto=format&fit=crop' },
      { id: 'kimchi-ramen', name: 'Kimchi', price: 220, imageUrl: 'https://images.unsplash.com/photo-1585233152145-be37b02c78a0?q=80&w=1887&auto=format&fit=crop' },
      { id: 'superspicy-ramen', name: 'SuperSpicy', price: 220, imageUrl: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?q=80&w=1887&auto=format&fit=crop' },
    ],
    note: 'Extra cheese @30 / Take away charges @ 15',
    image: 'https://images.unsplash.com/photo-1612927601601-6638424737ce?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gridCols: 1,
  },
  {
    id: 'cheese-cake',
    title: 'Cheese Cake',
    items: [
      { id: 'new-york-cheesecake', name: 'New York', price: 200, description: 'A desert consisting thick, creamy cheese, drizzle with chocolate (dark/milk/white).', imageUrl: 'https://images.unsplash.com/photo-1565565522774-32a225a07c2a?q=80&w=1887&auto=format&fit=crop' },
      { id: 'ny-biscoff-cheesecake', name: 'NY biscoff', price: 270, description: 'A desert consisting thick, creamy cheese, drizzle with biscoff spread with lotus biscuit crush on top of it.', imageUrl: 'https://images.unsplash.com/photo-1632203173516-2d11634b3f88?q=80&w=1887&auto=format&fit=crop' },
      { id: 'ny-blueberry-cheesecake', name: 'NY blueberry', price: 250, description: 'A desert consisting thick, creamy cheese, drizzle with blueberry syrup with dry blue berry and white chocolate drizzle on top of it.', imageUrl: 'https://images.unsplash.com/photo-1604400579198-581335b1b453?q=80&w=1887&auto=format&fit=crop' },
      { id: 'ny-nutella-cheesecake', name: 'NY Nutella', price: 260, description: 'A desert consisting thick, creamy cheese, drizzle with nutella with dark choco chips and dark chocolate drizzle on top of it.', imageUrl: 'https://images.unsplash.com/photo-1610348704085-0581691a6296?q=80&w=1887&auto=format&fit=crop' },
      { id: 'ny-hazelnut-cheesecake', name: 'NY Hazelnut', price: 270, description: 'A desert consisting thick, creamy cheese, drizzle with hazelnut paste with hazelnuts and dark chocolate drizzle on top of it.', imageUrl: 'https://images.unsplash.com/photo-1618306917614-72c6732958f7?q=80&w=1887&auto=format&fit=crop' },
    ],
    note: 'Take away charges @ 10',
    image: 'https://images.unsplash.com/photo-1542826438-c32144d12a32?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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