export interface Product {
  id: string;
  title: string;
  category: 'Workspace' | 'Lighting' | 'Kinetic' | 'Living';
  tagline: string;
  editorialReview: string;
  price: number;
  compareAtPrice: number;
  rating: number;
  reviewsCount: number;
  viralScore: number;
  imageUrl: string;
  secondaryImageUrl?: string;
  amazonUrl: string;
  badge?: string;
  isSpotlight?: boolean;
  specs: string[];
  dimensions?: string;
  material?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'anti-gravity-lamp',
    title: 'Anti-Gravity Levitating Water Droplet Lamp',
    category: 'Lighting',
    tagline: 'Stroboscopic optical physics engineered to suspend and levitate water droplets upward in mid-air.',
    editorialReview: 'A masterclass in ambient optical illusion. Powered by dual-frequency stroboscopic LEDs paired with a precision ultrasonic cool-mist generator, it appears to physically reverse gravity while scenting and purifying room air.',
    price: 49.99,
    compareAtPrice: 89.00,
    rating: 4.9,
    reviewsCount: 1420,
    viralScore: 99,
    imageUrl: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=85',
    secondaryImageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=85',
    amazonUrl: 'https://www.amazon.com/s?k=anti+gravity+water+drop+lamp&tag=moderntrends-20',
    badge: 'Spotlight Drop #01',
    isSpotlight: true,
    specs: ['Sub-25dB Whisper Silent Ultrasound', 'Touch-Capacitive Solid Aluminum Base', 'Automatic Waterless Shutdown', '3000K Warm White LED Core'],
    dimensions: '190 x 190 x 280 mm',
    material: 'Anodized Aluminum & Optical Acrylic'
  },
  {
    id: 'magsafe-charging-stand',
    title: 'Minimalist 3-in-1 Floating Magnetic Station',
    category: 'Workspace',
    tagline: 'Single-billet CNC aluminum charging dock engineered to power iPhone, Apple Watch, and AirPods simultaneously.',
    editorialReview: 'Designed for desktop purists who refuse cable clutter. Engineered with heavy anti-tipping counterweights and 15W Qi2 certified fast-charging induction coils that hold iPhones in perfect landscape StandBy alignment.',
    price: 39.95,
    compareAtPrice: 68.00,
    rating: 4.9,
    reviewsCount: 890,
    viralScore: 98,
    imageUrl: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1200&q=85',
    amazonUrl: 'https://www.amazon.com/s?k=3+in+1+magsafe+charging+station&tag=moderntrends-20',
    badge: 'Studio Classic',
    specs: ['15W Qi2 High-Speed Inductive Coil', 'Solid CNC Space-Grade Billet Aluminum', 'Anti-Slip Weighted Silicone Base', 'Hidden Cable Pass-Through Channel'],
    dimensions: '140 x 95 x 160 mm',
    material: 'Sandblasted Space-Gray Aluminum'
  },
  {
    id: 'flame-aroma-diffuser',
    title: 'Ultrasonic Atmospheric Flame Mist Humidifier',
    category: 'Living',
    tagline: 'Transforms cold essential oil vapor into an ultra-realistic dancing fireplace flame simulation.',
    editorialReview: 'The quintessential nocturnal companion. Uses dual-spectrum 2200K amber micro-LEDs refracting through cold ultrasonic vapor to create the optical warmth of a fireplace without heat or hazard.',
    price: 32.50,
    compareAtPrice: 58.00,
    rating: 4.8,
    reviewsCount: 2310,
    viralScore: 97,
    imageUrl: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=85',
    amazonUrl: 'https://www.amazon.com/s?k=flame+air+diffuser+humidifier&tag=moderntrends-20',
    badge: 'Atmosphere Best-Seller',
    specs: ['Dual-Tone Amber & Electric Blue Flames', '180ml 8-Hour Continuous Capacity', 'Aromatherapy Essential Oil Safe', 'Intelligent Anti-Dry Auto Protection'],
    dimensions: '170 x 75 x 100 mm',
    material: 'Matte Polycarbonate & Frosted Lens'
  },
  {
    id: 'hexagon-rgb-panels',
    title: 'Modular Magnetic Rhythm Light Hexagons',
    category: 'Lighting',
    tagline: 'Customizable geometric acoustic wall sculpture with real-time sound reactivity.',
    editorialReview: 'Turn blank drywall into responsive architectural lighting. Modular interlocking magnetic tabs transmit both low-voltage DC power and dynamic signal across infinite custom configurations.',
    price: 54.00,
    compareAtPrice: 95.00,
    rating: 4.7,
    reviewsCount: 1780,
    viralScore: 96,
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85',
    amazonUrl: 'https://www.amazon.com/s?k=modular+hexagon+lights&tag=moderntrends-20',
    badge: 'Acoustic Visualizer',
    specs: ['16.8M TrueColor RGBIC Fluid Engine', 'Acoustic Sound Sensing Sensor', 'Magnetic Link Pin Array', 'Damage-Free 3M VHB Mount Kit'],
    dimensions: '110 x 110 x 18 mm per panel',
    material: 'Diffusion Matte Acrylic & White Base'
  },
  {
    id: 'pixel-art-display',
    title: 'Mechanical 16x16 Pixel Art Desk Visualizer',
    category: 'Kinetic',
    tagline: 'Retro cybernetic companion display featuring mechanical keys and live data synchronization.',
    editorialReview: 'Equal parts tactical productivity timer, stock/crypto ticker, and 8-bit retro gaming canvas. Crafted with clicky blue tactile switches and an authentic pixel array that evokes 1980s computer culture.',
    price: 64.99,
    compareAtPrice: 99.00,
    rating: 4.9,
    reviewsCount: 940,
    viralScore: 95,
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=85',
    amazonUrl: 'https://www.amazon.com/s?k=pixel+art+desk+clock&tag=moderntrends-20',
    badge: 'Design Award 2026',
    specs: ['256 RGB Indiv-Addressable LEDs', 'Tactile Clicky Mechanical Key Array', 'Custom Mobile Animation Editor', 'Bluetooth 5.2 Low Latency Audio'],
    dimensions: '114 x 114 x 121 mm',
    material: 'Piano-Gloss Chassis with Rubberized Keys'
  },
  {
    id: 'screenbar-monitor-light',
    title: 'Asymmetric Optical ScreenBar Monitor Luminaire',
    category: 'Workspace',
    tagline: 'Clamps to monitors to cast glare-free light exclusively over your work surface.',
    editorialReview: 'Engineered specifically to banish monitor screen glare and eye strain. An asymmetric optical prism focuses balanced illumination solely on desk documents, leaving screens crisp and contrast-rich.',
    price: 42.00,
    compareAtPrice: 75.00,
    rating: 4.8,
    reviewsCount: 3120,
    viralScore: 94,
    imageUrl: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=1200&q=85',
    amazonUrl: 'https://www.amazon.com/s?k=monitor+screenbar+light&tag=moderntrends-20',
    badge: 'Ergonomic Choice',
    specs: ['Zero Screen Reflection Asymmetric Reflector', 'Stepless 2700K - 6500K Touch Slider', 'Universal Clamp Fits Curved & Flat Glass', 'USB-C Direct Bus Power'],
    dimensions: '450 x 20 x 20 mm',
    material: 'Extruded Matte Black Aluminum'
  },
  {
    id: 'kinetic-motion-sculpture',
    title: 'Perpetual Celestial Kinetic Desk Sculpture',
    category: 'Kinetic',
    tagline: 'Hypnotic orbital balance propelled by silent electromagnetic pulses.',
    editorialReview: 'A kinetic meditation object for intense focus sessions. Multiple concentric rings rotate on micro-tolerance sapphire bearings, creating an ever-shifting gravitational choreography.',
    price: 27.50,
    compareAtPrice: 48.00,
    rating: 4.7,
    reviewsCount: 650,
    viralScore: 92,
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=85',
    amazonUrl: 'https://www.amazon.com/s?k=kinetic+desk+sculpture+motion&tag=moderntrends-20',
    badge: 'Minimalist Kinetic',
    specs: ['Sub-Micron Frictionless Bearings', 'Silent Electromagnetic Driver Base', 'Zero Wiring (Concealed Battery Compartment)', 'Hand-Polished Chrome Rings'],
    dimensions: '220 x 110 x 240 mm',
    material: 'Polished Stainless Steel & Weighted Base'
  },
  {
    id: 'leather-felt-desk-mat',
    title: 'Top-Grain Leather & Merino Felt Desk Pad (XXL)',
    category: 'Workspace',
    tagline: 'Supple waterproof Italian grain leather reverse-backed with natural cushioning felt.',
    editorialReview: 'Transforms desks into quiet, tactile sanctuaries. Protects wood surfaces from scratches, dampens acoustic keyboard reverberation, and provides effortless optical mouse glide.',
    price: 28.00,
    compareAtPrice: 49.00,
    rating: 4.9,
    reviewsCount: 1940,
    viralScore: 91,
    imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1200&q=85',
    amazonUrl: 'https://www.amazon.com/s?k=leather+desk+mat+xxl&tag=moderntrends-20',
    badge: 'Crafted Essential',
    specs: ['Generous 900 x 420 mm Work Surface', 'Hydrophobic Stain & Spill Barrier', 'Double-Stitched Structural Perimeter', 'Natural Wool Felt Underlayment'],
    dimensions: '900 x 420 x 3 mm',
    material: 'Eco-Tanned Grain Leather & Wool Blend'
  },
  {
    id: 'smart-temperature-mug',
    title: 'Self-Heating Ceramic Smart Mug & Qi Charger Coaster',
    category: 'Living',
    tagline: 'Maintains coffee and tea at an unvarying 135°F using magnetic induction.',
    editorialReview: 'Never rush through a pour-over again. The ceramic vessel houses an induction receiver plate that warms beverages continuously without exposed electronics or messy cords.',
    price: 34.00,
    compareAtPrice: 62.00,
    rating: 4.7,
    reviewsCount: 1540,
    viralScore: 90,
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85',
    amazonUrl: 'https://www.amazon.com/s?k=smart+mug+warmer+set&tag=moderntrends-20',
    badge: 'WFH Ritual',
    specs: ['Calibrated 135°F Heat Reservoir', 'Lead-Free Glazed Ceramic Body', 'Dual-Purpose 15W Qi Coaster', 'Intelligent Gravity Shutoff'],
    dimensions: '350ml Vessel Capacity',
    material: 'Fine Ceramic & Tempered Glass Pad'
  },
  {
    id: 'retro-mechanical-calculator',
    title: 'Tactile Clicky Switch Mechanical Calculator',
    category: 'Workspace',
    tagline: 'Typewriter keycaps mated to authentic mechanical switches for satisfying calculations.',
    editorialReview: 'Brings visceral tactile joy to balance sheets and budgets. Each numerical input produces the crisp acoustic feedback of a vintage cherry blue switch.',
    price: 24.99,
    compareAtPrice: 42.00,
    rating: 4.8,
    reviewsCount: 810,
    viralScore: 93,
    imageUrl: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=1200&q=85',
    amazonUrl: 'https://www.amazon.com/s?k=mechanical+switch+calculator&tag=moderntrends-20',
    badge: 'Tactile Joy',
    specs: ['Authentic Clicky Blue Mechanical Stems', '15-Degree Ergonomic Display Incline', 'Removable Spherical Keycaps', 'Solar & Battery Dual Hybrid Power'],
    dimensions: '148 x 92 x 35 mm',
    material: 'Matte ABS Polymer & Mechanical Switches'
  },
  {
    id: 'sunset-projection-lamp',
    title: 'Chromatic Golden-Hour Projection Atmosphere Lamp',
    category: 'Lighting',
    tagline: 'Optical crystal projector casting sunset hues and twilight gradients across any room.',
    editorialReview: 'The definitive luminaire for creative photo studios and bedroom mood-lighting. A precision plano-convex glass lens refracts high-CRI light into cinematic gradients.',
    price: 21.99,
    compareAtPrice: 38.00,
    rating: 4.8,
    reviewsCount: 4200,
    viralScore: 94,
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=85',
    amazonUrl: 'https://www.amazon.com/s?k=sunset+lamp+projector&tag=moderntrends-20',
    badge: 'Creator Staple',
    specs: ['360-Degree Fluid Swivel Head', 'Thickened High-Transmission Quartz Lens', 'Weighted Iron Vibration-Damped Base', 'Flicker-Free 5V USB Direct Drive'],
    dimensions: '100 x 100 x 270 mm',
    material: 'Cast Iron & Optical Quartz Crystal'
  },
  {
    id: 'underdesk-cable-spine',
    title: 'Articulated Magnetic Standing Desk Cable Spine',
    category: 'Workspace',
    tagline: 'Multi-vertebrae cable conduit that flexes smoothly during height adjustments.',
    editorialReview: 'The final barrier between an untamed wire bird-nest and showroom-grade cable discipline. Magnetic base clamps securely to steel legs while individual vertebrae route high-voltage and signal cables through separate isolated raceways.',
    price: 26.50,
    compareAtPrice: 45.00,
    rating: 4.9,
    reviewsCount: 720,
    viralScore: 89,
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85',
    amazonUrl: 'https://www.amazon.com/s?k=under+desk+cable+spine+management&tag=moderntrends-20',
    badge: 'Cable Purist',
    specs: ['Quad-Channel Signal Isolation Raceways', '30-Segment Articulated Snap Links', 'Weighted Magnetic Floor Anchor', 'Extends from 15cm to 135cm'],
    dimensions: 'Adjustable Height up to 1350 mm',
    material: 'Reinforced Polymer & Neodymium Magnets'
  }
];

export const CATEGORIES = [
  'All Objects',
  'Workspace',
  'Lighting',
  'Kinetic',
  'Living',
] as const;
