export interface Product {
  id: string;
  title: string;
  category: 'Workspace Essentials' | 'Ambient Lighting' | 'Kinetic & Desk Toys' | 'Smart Living' | 'Everyday Audio';
  tagline: string;
  editorialReview: string;
  price: number;
  compareAtPrice: number;
  rating: number;
  reviewsCount: number;
  viralScore: number;
  imageUrl: string;
  amazonUrl: string;
  badge?: string;
  featured?: boolean;
  specs: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'anti-gravity-lamp',
    title: 'Anti-Gravity Optical Levitating Water Lamp',
    category: 'Ambient Lighting',
    tagline: 'Defies gravity using stroboscopic light to float water droplets upward in real-time.',
    editorialReview: 'Our flagship studio recommendation. Beyond its hypnotic upward-floating water effect, it doubles as an ultra-silent cool-mist humidifier and ambient 3000K bedside luminaire.',
    price: 49.99,
    compareAtPrice: 89.00,
    rating: 4.9,
    reviewsCount: 1420,
    viralScore: 99,
    imageUrl: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/s?k=anti+gravity+water+drop+lamp&tag=moderntrends-20',
    badge: 'TikTok Viral #1',
    featured: true,
    specs: ['Sub-30dB Quiet Ultrasonic Mist', 'Touch-Capacitive Base', 'Automatic Water-Out Shutoff', 'Anodized Polymer Body']
  },
  {
    id: 'magsafe-charging-stand',
    title: 'Minimalist 3-in-1 Floating MagSafe Dock',
    category: 'Workspace Essentials',
    tagline: 'High-speed magnetic charging station engineered from space-grade sandblasted aluminum.',
    editorialReview: 'Eliminates desktop cable chaos entirely. Holds your iPhone in landscape StandBy mode at an ergonomic 45-degree angle while simultaneously powering AirPods and Apple Watch.',
    price: 39.95,
    compareAtPrice: 65.00,
    rating: 4.9,
    reviewsCount: 890,
    viralScore: 98,
    imageUrl: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/s?k=3+in+1+magsafe+charging+station&tag=moderntrends-20',
    badge: "Editor's Choice",
    featured: true,
    specs: ['15W Qi2 Certified Fast Charging', 'CNC Billet Aluminum Alloy', 'Weighted Anti-Slip Silicone Footing', 'Integrated Cable Channel']
  },
  {
    id: 'flame-aroma-diffuser',
    title: 'Desktop Ultrasonic Flame Mist Diffuser',
    category: 'Smart Living',
    tagline: 'Realistic flickering fireplace flame effect combined with therapeutic aromatics.',
    editorialReview: 'Combines micro-fine cold vapor with warm amber LEDs to replicate a dancing miniature hearth. Perfect for nightstands, creative studios, and late-night coding sessions.',
    price: 32.50,
    compareAtPrice: 58.00,
    rating: 4.8,
    reviewsCount: 2310,
    viralScore: 97,
    imageUrl: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/s?k=flame+air+diffuser+humidifier&tag=moderntrends-20',
    badge: 'Best Cozy Vibe',
    featured: true,
    specs: ['Dual Flame Color Modes (Amber / Cyan)', 'Waterless Auto-Off Protection', 'Compatible with Essential Oils', '200ml High-Capacity Tank']
  },
  {
    id: 'hexagon-rgb-panels',
    title: 'Modular Touch-Sync Hexagon Light Panels',
    category: 'Ambient Lighting',
    tagline: 'Geometrically configurable wall art with real-time acoustic sound and music reactivity.',
    editorialReview: 'Transform blank walls into living canvases. Interlocking magnetic connectors allow unlimited custom layouts, seamlessly managed via touch, smartphone, or voice assistants.',
    price: 54.00,
    compareAtPrice: 95.00,
    rating: 4.7,
    reviewsCount: 1780,
    viralScore: 96,
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/s?k=modular+hexagon+lights&tag=moderntrends-20',
    badge: 'Gaming Setup Essential',
    featured: true,
    specs: ['16 Million Colors RGBIC Flow', 'Acoustic Rhythm Microphone', 'Modular Snap-Together Magnetic Pins', 'Zero-Damage Adhesive Mounting']
  },
  {
    id: 'pixel-art-display',
    title: 'Retro 16x16 Smart Pixel Art Clock & Visualizer',
    category: 'Kinetic & Desk Toys',
    tagline: 'Nostalgic 8-bit companion display showing live weather, animations, and desktop timers.',
    editorialReview: 'The quintessential indie desk toy. Run community-designed 8-bit game animations, pomodoro productivity sprints, or custom crypto/subscriber trackers on a tactile matte retro screen.',
    price: 64.99,
    compareAtPrice: 99.00,
    rating: 4.9,
    reviewsCount: 940,
    viralScore: 95,
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/s?k=pixel+art+desk+clock&tag=moderntrends-20',
    badge: 'Design Award 2026',
    featured: true,
    specs: ['Cloud Pixel Art Gallery with 10k+ Presets', 'Mechanical Clicky Top Keypads', 'Integrated High-Gain Bluetooth Speaker', 'Customizable Pixel Clock & Alarms']
  },
  {
    id: 'screenbar-monitor-light',
    title: 'Touch-Sensor Curved ScreenBar Monitor Lamp',
    category: 'Workspace Essentials',
    tagline: 'Zero-glare asymmetrical optical lighting engineered to eliminate eye fatigue.',
    editorialReview: 'Clamps directly onto flat or curved monitors without taking up a millimeter of desk real estate. Calibrated 2700K to 6500K color temperatures protect circadian focus during late work hours.',
    price: 42.00,
    compareAtPrice: 75.00,
    rating: 4.8,
    reviewsCount: 3120,
    viralScore: 94,
    imageUrl: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/s?k=monitor+screenbar+light&tag=moderntrends-20',
    badge: 'Ergonomic Choice',
    specs: ['Patented Asymmetrical Optical Pathway', 'Stepless Touch Dimming Wheel', 'USB-C Powered from Monitor Bus', 'Zero Screen Reflection']
  },
  {
    id: 'kinetic-motion-sculpture',
    title: 'Kinetic Celestial Motion Perpetual Desk Sculpture',
    category: 'Kinetic & Desk Toys',
    tagline: 'Hypnotic magnetic orbital balance designed for effortless executive relaxation.',
    editorialReview: 'A mesmerizing desk centerpiece that moves continuously through subtle magnetic propulsion. Crafted from hand-polished chrome and weighted matte black composite.',
    price: 27.50,
    compareAtPrice: 48.00,
    rating: 4.7,
    reviewsCount: 650,
    viralScore: 92,
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/s?k=kinetic+desk+sculpture+motion&tag=moderntrends-20',
    badge: 'Minimalist Art',
    specs: ['Precision Low-Friction Pivot Bearings', 'Silent Electromagnetic Pulse Drive', 'Matte Architectural Base', 'Zero Wiring Required (AA Cell)']
  },
  {
    id: 'leather-felt-desk-mat',
    title: 'Dual-Sided Italian Leather & Merino Felt Desk Pad',
    category: 'Workspace Essentials',
    tagline: 'Waterproof vegetable-tanned grain leather reverse-backed with natural felt.',
    editorialReview: 'Provides an expansive, tactile foundation for keyboards, optical mice, and notebooks. Naturally spill-resistant, easy to clean, and provides thermal warmth against cold desks.',
    price: 28.00,
    compareAtPrice: 49.00,
    rating: 4.9,
    reviewsCount: 1940,
    viralScore: 91,
    imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/s?k=leather+desk+mat+xxl&tag=moderntrends-20',
    badge: 'Daily Essential',
    specs: ['Extra Large 900x400mm Surface', 'Hydrophobic Splash-Resistant Coating', 'Smooth Optical Mouse Tracking', 'Reinforced Bound Edges']
  },
  {
    id: 'retro-mechanical-calculator',
    title: 'Clicky Mechanical Switch Desktop Calculator',
    category: 'Workspace Essentials',
    tagline: 'Satisfying mechanical keyboard switches paired with a clean tilted LCD screen.',
    editorialReview: 'Why should typing feel good while calculating feels mushy? Featuring genuine blue clicky mechanical switches with removable round typewriter keycaps for maximum tactile joy.',
    price: 24.99,
    compareAtPrice: 42.00,
    rating: 4.8,
    reviewsCount: 810,
    viralScore: 93,
    imageUrl: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/s?k=mechanical+switch+calculator&tag=moderntrends-20',
    badge: 'Tactile Delight',
    specs: ['Authentic Clicky Mechanical Switches', 'Ergonomic 15-Degree Tilted Display', 'Removable Keycaps for Cleaning', 'Auto-Sleep Energy Saver']
  },
  {
    id: 'smart-temperature-mug',
    title: 'Self-Heating Ceramic Smart Coffee Mug Set',
    category: 'Smart Living',
    tagline: 'Maintains your brew at an exact 135°F temperature from first sip to last drop.',
    editorialReview: 'Never drink lukewarm coffee again. The gravity-sensing charging coaster keeps liquids at optimal drinking temperature all day, and doubles as a 15W Qi phone charger.',
    price: 34.00,
    compareAtPrice: 62.00,
    rating: 4.7,
    reviewsCount: 1540,
    viralScore: 90,
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/s?k=smart+mug+warmer+set&tag=moderntrends-20',
    badge: 'WFH Must-Have',
    specs: ['Precise 135°F Heat Retention', 'Waterproof Food-Grade Ceramic Mug', 'Dual-Purpose Qi Phone Charger Coaster', 'Auto-Shutoff Safety Induction']
  },
  {
    id: 'sunset-projection-lamp',
    title: 'Golden Hour 360° Sunset Projection Atmosphere Lamp',
    category: 'Ambient Lighting',
    tagline: 'Brings romantic California golden hour and cinematic twilight indoors 24/7.',
    editorialReview: 'The viral background light behind a million aesthetic Instagram and TikTok reels. Built with an optical crystal lens that produces warm, flawless chromatic gradients across any wall.',
    price: 21.99,
    compareAtPrice: 38.00,
    rating: 4.8,
    reviewsCount: 4200,
    viralScore: 94,
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/s?k=sunset+lamp+projector&tag=moderntrends-20',
    badge: 'Creator Favorite',
    specs: ['360-Degree Swivel Magnetic Head', 'Thickened HD Crystal Glass Lens', 'Solid Iron Weighted Base Plate', 'Standard USB-A Powered']
  },
  {
    id: 'underdesk-cable-spine',
    title: 'Articulated Magnetic Under-Desk Cable Spine',
    category: 'Workspace Essentials',
    tagline: 'Flexible multi-vertebrae cable conduit for standing desks and clean workstation aesthetics.',
    editorialReview: 'Hides and routes up to 15 power, HDMI, and monitor cables cleanly from floor to standing desk. Articulated vertebrae flex automatically when adjusting standing desk heights.',
    price: 26.50,
    compareAtPrice: 45.00,
    rating: 4.9,
    reviewsCount: 720,
    viralScore: 89,
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/s?k=under+desk+cable+spine+management&tag=moderntrends-20',
    badge: 'Pro Setup',
    specs: ['Adjustable Modular Snap Vertebrae', 'Heavy Iron Magnetic Base Plate', 'Fits Both Sitting & Standing Desks', 'Four Separate Internal Cable Channels']
  }
];

export const CATEGORIES = [
  'All Curations',
  'Workspace Essentials',
  'Ambient Lighting',
  'Kinetic & Desk Toys',
  'Smart Living',
] as const;
