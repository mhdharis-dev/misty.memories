export const INITIAL_PRODUCTS = [
  {
    id: 'woody-rose',
    name: 'Woody Rose',
    arabicName: 'وودي روز',
    concentration: 'Eau De Parfum',
    size: '50 ML',
    sizesAvailable: ['50 ML', '100 ML'],
    originalPrice: 59,
    price: 39,
    currency: 'AED',
    discount: '34% OFF',
    image: '/images/woody-rose.png',
    category: 'Woody Florals',
    badge: 'Signature Best Seller',
    isHero: true,
    rating: 4.9,
    reviewsCount: 184,
    stock: 28,
    isFeatured: true,
    tagline: 'An intoxicating union of smoked Cambodian oud & royal Taif roses.',
    description: 'Misty Memories Woody Rose is an artisanal Emirati creation that captures the romance of Arabian dusk. Rich notes of aged Cambodian agarwood intertwine with velvety Bulgarian roses, dusted with precious saffron and resting on a sultry cushion of Madagascar amber and warm cedarwood.',
    notes: {
      top: ['Calabrian Bergamot', 'Pink Pepper Pods', 'Wild Raspberry'],
      heart: ['Velvet Taif Rose', 'Damask Rose Absolute', 'Grasse Jasmine'],
      base: ['Cambodian Agarwood (Oud)', 'Smoked Amber', 'Atlas Cedar', 'Bourbon Vanilla']
    },
    accords: ['Royal Rose', 'Smoky Agarwood', 'Warm Amber', 'Spicy Velvet', 'French Cedar'],
    longevity: '16+ Hours',
    sillage: 'Regal & Captivating'
  },
  {
    id: 'royal-amber-oud',
    name: 'Royal Amber Oud',
    arabicName: 'البخور والعنبر الملكي',
    concentration: 'Extrait De Parfum',
    size: '100 ML',
    sizesAvailable: ['50 ML', '100 ML'],
    originalPrice: 129,
    price: 89,
    currency: 'AED',
    discount: '31% OFF',
    image: '/images/royal-amber-oud.jpg',
    category: 'Oriental Oud',
    badge: 'Emirati Masterpiece',
    isHero: false,
    rating: 5.0,
    reviewsCount: 112,
    stock: 19,
    isFeatured: true,
    tagline: 'Aged Kalakassi oud soaked in molten golden amber resin.',
    description: 'A tribute to centuries of Arabian high perfumery. Featuring pure 25-year-aged Kalakassi Dehn El Oud, warm tears of golden amber resin, Dhofari frankincense, and Kashmiri saffron threads.',
    notes: {
      top: ['Royal Saffron Threads', 'Green Cardamom', 'Sunlit Mandarin'],
      heart: ['Molten Amber Resin', 'Frankincense Tears', 'Gilded Rosewood'],
      base: ['Dehn El Oud Kalakassi', 'Vintage Leather', 'Smoked Honey', 'Golden Musk']
    },
    accords: ['Golden Amber', 'Vintage Oud', 'Incense Smoke', 'Balsamic Sweetness', 'Kashmiri Spice'],
    longevity: '20+ Hours',
    sillage: 'Monumental'
  },
  {
    id: 'noir-de-bakhoor',
    name: 'Noir De Bakhoor',
    arabicName: 'عبير البخور الأسود',
    concentration: 'Parfum Privé',
    size: '75 ML',
    sizesAvailable: ['75 ML', '100 ML'],
    originalPrice: 79,
    price: 55,
    currency: 'AED',
    discount: '30% OFF',
    image: '/images/noir-de-bakhoor.jpg',
    category: 'Bakhoor & Incense',
    badge: 'Trending in Dubai',
    isHero: false,
    rating: 4.8,
    reviewsCount: 76,
    stock: 34,
    isFeatured: true,
    tagline: 'The smoky warmth of Dubai majlis evenings in an opulent flacon.',
    description: 'Noir De Bakhoor conjures the comforting aroma of hand-carved agarwood burning slowly in a golden mabkhara, sweetened by dark plum and layered with velvety Indonesian patchouli and tonka bean.',
    notes: {
      top: ['Smoked Black Plum', 'Cinnamon Bark', 'Indonesian Nutmeg'],
      heart: ['Emirati Bakhoor Smoke', 'Patchouli Heart', 'Cistus Labdanum'],
      base: ['Dark Musk', 'Roasted Vetiver', 'Tonka Bean Infusion', 'Precious Woods']
    },
    accords: ['Bakhoor Smoke', 'Gourmand Plum', 'Dark Woody', 'Warm Spicy', 'Rich Resinous'],
    longevity: '14+ Hours',
    sillage: 'Intense & Enveloping'
  },
  {
    id: 'imperial-musk-blanc',
    name: 'Imperial Musk Blanc',
    arabicName: 'المسك الأبيض الإمبراطوري',
    concentration: 'Extrait De Parfum',
    size: '100 ML',
    sizesAvailable: ['50 ML', '100 ML'],
    originalPrice: 69,
    price: 45,
    currency: 'AED',
    discount: '35% OFF',
    image: '/images/imperial-musk-blanc.jpg',
    category: 'Pure Musks',
    badge: 'Clean Opulence',
    isHero: false,
    rating: 4.9,
    reviewsCount: 94,
    stock: 25,
    isFeatured: true,
    tagline: 'Velvety white silk musk with crystalline iris and Mysore sandalwood.',
    description: 'A luminous, whisper-soft cloud of pure Arabian white musk. Blended with powdery Tuscan iris, delicate cotton blossom, and creamy sandalwood from Mysore. Sublime, comforting, and irresistibly sensual.',
    notes: {
      top: ['Sparkling Aldehydes', 'White Nectarine', 'Morning Dew Lily'],
      heart: ['Florentine Iris', 'Cotton Blossom', 'Damascena Rosewater'],
      base: ['Imperial White Silk Musk', 'Mysore Sandalwood', 'Cashmeran', 'White Cedar']
    },
    accords: ['White Musk', 'Powdery Iris', 'Creamy Sandalwood', 'Fresh Aldehydic', 'Soft Floral'],
    longevity: '12+ Hours',
    sillage: 'Alluring & Clean'
  }
];

export const INITIAL_CATEGORIES = [
  'All Fragrances',
  'Woody Florals',
  'Oriental Oud',
  'Bakhoor & Incense',
  'Pure Musks',
  'Private Blends'
];

export const UAE_EMIRATES = [
  'Dubai',
  'Abu Dhabi',
  'Sharjah',
  'Ajman',
  'Ras Al Khaimah',
  'Fujairah',
  'Umm Al Quwain'
];

export const INITIAL_ORDERS = [
  {
    id: 'MM-UAE-9821',
    customerName: 'Fatima Al Mansoori',
    customerEmail: 'fatima.almansoori@gmail.com',
    customerPhone: '+971 50 482 9104',
    address: 'Villa 14, Al Safa 2, Jumeirah',
    emirate: 'Dubai',
    date: '2026-10-02',
    totalAED: 78,
    status: 'Out for Delivery',
    items: [
      { id: 'woody-rose', name: 'Woody Rose', size: '50 ML', price: 39, quantity: 2, image: '/images/woody-rose.png' }
    ]
  },
  {
    id: 'MM-UAE-9818',
    customerName: 'Rashid Al Nuaimi',
    customerEmail: 'rashid.nuaimi@outlook.com',
    customerPhone: '+971 55 719 3320',
    address: 'Tower B, Apartment 2401, Al Reem Island',
    emirate: 'Abu Dhabi',
    date: '2026-10-01',
    totalAED: 144,
    status: 'Delivered',
    items: [
      { id: 'royal-amber-oud', name: 'Royal Amber Oud', size: '100 ML', price: 89, quantity: 1, image: '/images/royal-amber-oud.jpg' },
      { id: 'noir-de-bakhoor', name: 'Noir De Bakhoor', size: '75 ML', price: 55, quantity: 1, image: '/images/noir-de-bakhoor.jpg' }
    ]
  },
  {
    id: 'MM-UAE-9815',
    customerName: 'Saeed Al Qasimi',
    customerEmail: 'saeed.qasimi@emirates.net.ae',
    customerPhone: '+971 52 901 8841',
    address: 'Al Majaz Waterfront Residence 7',
    emirate: 'Sharjah',
    date: '2026-09-30',
    totalAED: 39,
    status: 'Delivered',
    items: [
      { id: 'woody-rose', name: 'Woody Rose', size: '50 ML', price: 39, quantity: 1, image: '/images/woody-rose.png' }
    ]
  }
];

export const DEFAULT_ADMIN_CREDENTIALS = {
  email: 'admin@mistymemories.ae',
  password: 'admin'
};
