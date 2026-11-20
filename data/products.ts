export interface Product {
  id: string;
  title: string;
  category: 'Workspace' | 'Lighting' | 'Living' | 'Gadgets';
  tagline: string;
  description: string;
  price: number;
  compareAtPrice: number;
  rating: number;
  reviewsCount: number;
  imageUrl: string;
  amazonUrl: string;
  badge?: string;
  isBestSeller?: boolean;
  specs: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'anti-gravity-lamp',
    title: 'Anti-Gravity Levitating Water Drop Lamp',
    category: 'Lighting',
    tagline: 'Optical illusion lamp where water droplets appear to float upward.',
    description: 'An eye-catching centerpiece for bedrooms and workspaces. Combines synchronized LED stroboscopic lighting with an ultrasonic cool-mist humidifier to make rising water droplets appear frozen in mid-air.',
    price: 49.99,
    compareAtPrice: 79.99,
    rating: 4.8,
    reviewsCount: 1240,
    imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
    amazonUrl: 'https://www.amazon.com/s?k=anti+gravity+water+drop+lamp&tag=moderntrends-20',
    badge: 'Best Seller',
    isBestSeller: true,
    specs: ['Built-in Cool Mist Humidifier', 'Whisper-Quiet 25dB Operation', 'Touch Button Power & Nightlight Mode', 'Auto Waterless Shutoff']
  },
  {
    id: 'magsafe-charging-stand',
    title: '3-in-1 Aluminum Magnetic Charging Stand',
    category: 'Workspace',
    tagline: 'Powers iPhone, Apple Watch, and AirPods in one compact weighted dock.',
    description: 'Clean up desk clutter with solid aircraft-grade aluminum. Strong MagSafe-compatible magnets hold your iPhone in portrait or landscape StandBy mode while fast-charging all three devices simultaneously.',
    price: 39.95,
    compareAtPrice: 59.99,
    rating: 4.9,
    reviewsCount: 890,
    imageUrl: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80',
    amazonUrl: 'https://www.amazon.com/s?k=3+in+1+magsafe+charging+station&tag=moderntrends-20',
    badge: 'Staff Pick',
    isBestSeller: true,
    specs: ['Fast 15W Qi Magnetic Charging', 'Weighted Anti-Slip Base', 'Matte Space Gray Aluminum', 'Works with MagSafe Cases']
  },
  {
    id: 'flame-aroma-diffuser',
    title: 'Fireplace Flame Mist Aroma Diffuser',
    category: 'Living',
    tagline: 'Realistic flickering flame lighting effect with soothing essential oil mist.',
    description: 'Recreates the warmth of a miniature fireplace on your desk or bedside table. Smart LED lighting illuminates cold water vapor to create a mesmerizing flame simulation without any heat.',
    price: 32.50,
    compareAtPrice: 49.99,
    rating: 4.8,
    reviewsCount: 2150,
    imageUrl: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
    amazonUrl: 'https://www.amazon.com/s?k=flame+air+diffuser+humidifier&tag=moderntrends-20',
    badge: 'Trending',
    isBestSeller: true,
    specs: ['Two Flame Colors (Amber / Blue)', '8-Hour Runtime Tank', 'Essential Oil Aromatherapy Safe', 'Timer & Auto-Off Protection']
  },
  {
    id: 'hexagon-rgb-panels',
    title: 'Modular Touch & Music Sync Hexagon Wall Lights',
    category: 'Lighting',
    tagline: 'Snap-together magnetic wall light tiles that pulse to music rhythm.',
    description: 'Design your own custom wall patterns. These smart geometric panels snap together easily and react in real-time to gaming audio, background music, or touch with millions of vibrant color modes.',
    price: 54.00,
    compareAtPrice: 89.00,
    rating: 4.7,
    reviewsCount: 1640,
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    amazonUrl: 'https://www.amazon.com/s?k=modular+hexagon+lights&tag=moderntrends-20',
    badge: 'Popular',
    specs: ['Music Sync Rhythm Mode', '16 Million RGB Colors', 'Modular Expandable Panels', 'No-Drill Wall Mount Pads']
  },
  {
    id: 'screenbar-monitor-light',
    title: 'Curved ScreenBar Monitor Desk Light',
    category: 'Workspace',
    tagline: 'Clamps directly to your monitor for glare-free desk lighting.',
    description: 'Illuminates your workspace without reflecting off computer screens. Features stepless color temperature adjustment from warm to cool daylight, reducing eye strain during long working hours.',
    price: 42.00,
    compareAtPrice: 65.00,
    rating: 4.8,
    reviewsCount: 3020,
    imageUrl: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=800&q=80',
    amazonUrl: 'https://www.amazon.com/s?k=monitor+screenbar+light&tag=moderntrends-20',
    badge: 'Ergonomic',
    isBestSeller: true,
    specs: ['Asymmetric Optical Anti-Glare Beam', 'Touch-Controlled Brightness & Color Temp', 'USB Powered from PC or Monitor', 'Fits Curved & Flat Screens']
  },
  {
    id: 'pixel-art-display',
    title: 'Retro Smart Pixel Art Desktop Clock',
    category: 'Gadgets',
    tagline: 'Compact 16x16 LED display for animations, weather, and gaming art.',
    description: 'A charming retro desk companion with clicky mechanical keyboard buttons. Display custom 8-bit art, social notifications, time, weather forecasts, and productivity timers.',
    price: 64.99,
    compareAtPrice: 89.99,
    rating: 4.9,
    reviewsCount: 910,
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    amazonUrl: 'https://www.amazon.com/s?k=pixel+art+desk+clock&tag=moderntrends-20',
    badge: 'Unique Find',
    specs: ['10,000+ Free Online Pixel Art Gallery', 'Built-in Bluetooth Speaker', 'Mechanical Clicky Controls', 'Clock, Alarms & Planner']
  },
  {
    id: 'leather-felt-desk-mat',
    title: 'Dual-Sided Waterproof Leather Desk Pad (XXL)',
    category: 'Workspace',
    tagline: 'Smooth vegan leather front with soft non-slip felt backing.',
    description: 'Protects desks from scratches and spills while providing a buttery smooth tracking surface for optical mice and comfortable cushioning for typing.',
    price: 24.99,
    compareAtPrice: 39.99,
    rating: 4.9,
    reviewsCount: 1840,
    imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80',
    amazonUrl: 'https://www.amazon.com/s?k=leather+desk+mat+xxl&tag=moderntrends-20',
    specs: ['Extra Large 36 x 17 Inch Size', 'Waterproof & Easy to Clean', 'Smooth Mouse Gliding Surface', 'Double-Stitched Edge Durability']
  },
  {
    id: 'kinetic-motion-sculpture',
    title: 'Perpetual Orbit Kinetic Motion Desk Toy',
    category: 'Gadgets',
    tagline: 'Continuous magnetic kinetic movement for calm and focus.',
    description: 'A mesmerizing desktop art sculpture that swings in continuous celestial orbits powered by subtle battery-operated magnetic propulsion. A favorite conversation starter.',
    price: 26.50,
    compareAtPrice: 42.00,
    rating: 4.7,
    reviewsCount: 580,
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    amazonUrl: 'https://www.amazon.com/s?k=kinetic+desk+sculpture+motion&tag=moderntrends-20',
    specs: ['Low-Friction Precision Pivot Rings', 'Silent Electromagnetic Motion', 'Polished Chrome Finish', 'Battery Powered (No Cables)']
  },
  {
    id: 'smart-temperature-mug',
    title: 'Self-Warming Ceramic Coffee Mug with Charging Pad',
    category: 'Living',
    tagline: 'Keeps your coffee or tea at the ideal 135°F drinking temperature.',
    description: 'No more cold coffee at your desk. The smart warming coaster keeps your ceramic mug warm all morning and doubles as a standard 10W wireless charger for your phone.',
    price: 34.00,
    compareAtPrice: 55.00,
    rating: 4.8,
    reviewsCount: 1420,
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    amazonUrl: 'https://www.amazon.com/s?k=smart+mug+warmer+set&tag=moderntrends-20',
    badge: 'Customer Favorite',
    specs: ['Maintains 135°F (55°C) Consistently', 'High-Grade Food-Safe Ceramic Mug', 'Coaster Doubles as Phone Wireless Charger', 'Auto Shut-Off Safety Sensor']
  },
  {
    id: 'sunset-projection-lamp',
    title: 'Golden Hour 360° Sunset Atmosphere Projector',
    category: 'Lighting',
    tagline: 'Brings aesthetic sunset and twilight golden-hour tones into your room.',
    description: 'Equipped with a solid HD optical crystal lens that casts smooth, vibrant warm sunset gradients onto walls and ceilings. Great for aesthetic photos, videos, and relaxing room vibes.',
    price: 21.99,
    compareAtPrice: 34.99,
    rating: 4.8,
    reviewsCount: 3890,
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    amazonUrl: 'https://www.amazon.com/s?k=sunset+lamp+projector&tag=moderntrends-20',
    specs: ['360-Degree Swivel Flexible Head', 'High-Transmission Optical Glass Lens', 'Weighted Anti-Tip Metal Base', 'USB Powered with Inline Switch']
  },
  {
    id: 'retro-mechanical-calculator',
    title: 'Mechanical Switch Desktop Office Calculator',
    category: 'Workspace',
    tagline: 'Typewriter-style mechanical keys with loud, tactile clicky feedback.',
    description: 'Makes everyday calculations delightful. Features real mechanical keyboard switches with removable round typewriter keycaps and a large 15-degree tilted 12-digit LCD screen.',
    price: 24.99,
    compareAtPrice: 38.00,
    rating: 4.8,
    reviewsCount: 760,
    imageUrl: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=800&q=80',
    amazonUrl: 'https://www.amazon.com/s?k=mechanical+switch+calculator&tag=moderntrends-20',
    specs: ['Authentic Clicky Mechanical Blue Switches', '12-Digit Tilted High-Contrast Display', 'Removable Keycaps for Cleaning', 'Auto-Sleep Battery Conservation']
  },
  {
    id: 'underdesk-cable-spine',
    title: 'Articulated Magnetic Under-Desk Cable Organizer',
    category: 'Workspace',
    tagline: 'Flexible spine that keeps power and display cables neatly managed.',
    description: 'The clean solution for messy hanging wires. Routes multiple heavy power strips and monitor cords cleanly from floor to desk, flexing smoothly whenever standing desks adjust height.',
    price: 26.50,
    compareAtPrice: 42.00,
    rating: 4.9,
    reviewsCount: 680,
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    amazonUrl: 'https://www.amazon.com/s?k=under+desk+cable+spine+management&tag=moderntrends-20',
    specs: ['Heavy Magnetic Anchor Base', '30 Snap-Together Flexible Vertebrae', 'Four Individual Cable Isolation Channels', 'Fits Sit-Stand and Fixed Desks']
  }
];

export const CATEGORIES = [
  'All Products',
  'Workspace',
  'Lighting',
  'Living',
  'Gadgets',
] as const;
