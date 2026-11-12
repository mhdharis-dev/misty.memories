// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// src/App.jsx
import React15, { useState as useState9, useEffect } from "react";

// src/data/initialData.js
var INITIAL_PRODUCTS = [
  {
    id: "woody-rose",
    name: "Woody Rose",
    arabicName: "\u0648\u0648\u062F\u064A \u0631\u0648\u0632",
    concentration: "Eau De Parfum",
    size: "50 ML",
    sizesAvailable: ["50 ML", "100 ML"],
    originalPrice: 59,
    price: 39,
    currency: "AED",
    discount: "34% OFF",
    image: "/images/woody-rose.png",
    category: "Woody Florals",
    badge: "Signature Best Seller",
    isHero: true,
    rating: 4.9,
    reviewsCount: 184,
    stock: 28,
    isFeatured: true,
    tagline: "An intoxicating union of smoked Cambodian oud & royal Taif roses.",
    description: "Misty Memories Woody Rose is an artisanal Emirati creation that captures the romance of Arabian dusk. Rich notes of aged Cambodian agarwood intertwine with velvety Bulgarian roses, dusted with precious saffron and resting on a sultry cushion of Madagascar amber and warm cedarwood.",
    notes: {
      top: ["Calabrian Bergamot", "Pink Pepper Pods", "Wild Raspberry"],
      heart: ["Velvet Taif Rose", "Damask Rose Absolute", "Grasse Jasmine"],
      base: ["Cambodian Agarwood (Oud)", "Smoked Amber", "Atlas Cedar", "Bourbon Vanilla"]
    },
    accords: ["Royal Rose", "Smoky Agarwood", "Warm Amber", "Spicy Velvet", "French Cedar"],
    longevity: "16+ Hours",
    sillage: "Regal & Captivating"
  },
  {
    id: "royal-amber-oud",
    name: "Royal Amber Oud",
    arabicName: "\u0627\u0644\u0628\u062E\u0648\u0631 \u0648\u0627\u0644\u0639\u0646\u0628\u0631 \u0627\u0644\u0645\u0644\u0643\u064A",
    concentration: "Extrait De Parfum",
    size: "100 ML",
    sizesAvailable: ["50 ML", "100 ML"],
    originalPrice: 129,
    price: 89,
    currency: "AED",
    discount: "31% OFF",
    image: "/images/royal-amber-oud.jpg",
    category: "Oriental Oud",
    badge: "Emirati Masterpiece",
    isHero: false,
    rating: 5,
    reviewsCount: 112,
    stock: 19,
    isFeatured: true,
    tagline: "Aged Kalakassi oud soaked in molten golden amber resin.",
    description: "A tribute to centuries of Arabian high perfumery. Featuring pure 25-year-aged Kalakassi Dehn El Oud, warm tears of golden amber resin, Dhofari frankincense, and Kashmiri saffron threads.",
    notes: {
      top: ["Royal Saffron Threads", "Green Cardamom", "Sunlit Mandarin"],
      heart: ["Molten Amber Resin", "Frankincense Tears", "Gilded Rosewood"],
      base: ["Dehn El Oud Kalakassi", "Vintage Leather", "Smoked Honey", "Golden Musk"]
    },
    accords: ["Golden Amber", "Vintage Oud", "Incense Smoke", "Balsamic Sweetness", "Kashmiri Spice"],
    longevity: "20+ Hours",
    sillage: "Monumental"
  },
  {
    id: "noir-de-bakhoor",
    name: "Noir De Bakhoor",
    arabicName: "\u0639\u0628\u064A\u0631 \u0627\u0644\u0628\u062E\u0648\u0631 \u0627\u0644\u0623\u0633\u0648\u062F",
    concentration: "Parfum Priv\xE9",
    size: "75 ML",
    sizesAvailable: ["75 ML", "100 ML"],
    originalPrice: 79,
    price: 55,
    currency: "AED",
    discount: "30% OFF",
    image: "/images/noir-de-bakhoor.jpg",
    category: "Bakhoor & Incense",
    badge: "Trending in Dubai",
    isHero: false,
    rating: 4.8,
    reviewsCount: 76,
    stock: 34,
    isFeatured: true,
    tagline: "The smoky warmth of Dubai majlis evenings in an opulent flacon.",
    description: "Noir De Bakhoor conjures the comforting aroma of hand-carved agarwood burning slowly in a golden mabkhara, sweetened by dark plum and layered with velvety Indonesian patchouli and tonka bean.",
    notes: {
      top: ["Smoked Black Plum", "Cinnamon Bark", "Indonesian Nutmeg"],
      heart: ["Emirati Bakhoor Smoke", "Patchouli Heart", "Cistus Labdanum"],
      base: ["Dark Musk", "Roasted Vetiver", "Tonka Bean Infusion", "Precious Woods"]
    },
    accords: ["Bakhoor Smoke", "Gourmand Plum", "Dark Woody", "Warm Spicy", "Rich Resinous"],
    longevity: "14+ Hours",
    sillage: "Intense & Enveloping"
  },
  {
    id: "imperial-musk-blanc",
    name: "Imperial Musk Blanc",
    arabicName: "\u0627\u0644\u0645\u0633\u0643 \u0627\u0644\u0623\u0628\u064A\u0636 \u0627\u0644\u0625\u0645\u0628\u0631\u0627\u0637\u0648\u0631\u064A",
    concentration: "Extrait De Parfum",
    size: "100 ML",
    sizesAvailable: ["50 ML", "100 ML"],
    originalPrice: 69,
    price: 45,
    currency: "AED",
    discount: "35% OFF",
    image: "/images/imperial-musk-blanc.jpg",
    category: "Pure Musks",
    badge: "Clean Opulence",
    isHero: false,
    rating: 4.9,
    reviewsCount: 94,
    stock: 25,
    isFeatured: true,
    tagline: "Velvety white silk musk with crystalline iris and Mysore sandalwood.",
    description: "A luminous, whisper-soft cloud of pure Arabian white musk. Blended with powdery Tuscan iris, delicate cotton blossom, and creamy sandalwood from Mysore. Sublime, comforting, and irresistibly sensual.",
    notes: {
      top: ["Sparkling Aldehydes", "White Nectarine", "Morning Dew Lily"],
      heart: ["Florentine Iris", "Cotton Blossom", "Damascena Rosewater"],
      base: ["Imperial White Silk Musk", "Mysore Sandalwood", "Cashmeran", "White Cedar"]
    },
    accords: ["White Musk", "Powdery Iris", "Creamy Sandalwood", "Fresh Aldehydic", "Soft Floral"],
    longevity: "12+ Hours",
    sillage: "Alluring & Clean"
  }
];
var INITIAL_CATEGORIES = [
  "All Fragrances",
  "Woody Florals",
  "Oriental Oud",
  "Bakhoor & Incense",
  "Pure Musks",
  "Private Blends"
];
var UAE_EMIRATES = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ajman",
  "Ras Al Khaimah",
  "Fujairah",
  "Umm Al Quwain"
];
var INITIAL_ORDERS = [
  {
    id: "MM-UAE-9821",
    customerName: "Fatima Al Mansoori",
    customerEmail: "fatima.almansoori@gmail.com",
    customerPhone: "+971 50 482 9104",
    address: "Villa 14, Al Safa 2, Jumeirah",
    emirate: "Dubai",
    date: "2026-10-02",
    totalAED: 78,
    status: "Out for Delivery",
    items: [
      { id: "woody-rose", name: "Woody Rose", size: "50 ML", price: 39, quantity: 2, image: "/images/woody-rose.png" }
    ]
  },
  {
    id: "MM-UAE-9818",
    customerName: "Rashid Al Nuaimi",
    customerEmail: "rashid.nuaimi@outlook.com",
    customerPhone: "+971 55 719 3320",
    address: "Tower B, Apartment 2401, Al Reem Island",
    emirate: "Abu Dhabi",
    date: "2026-10-01",
    totalAED: 144,
    status: "Delivered",
    items: [
      { id: "royal-amber-oud", name: "Royal Amber Oud", size: "100 ML", price: 89, quantity: 1, image: "/images/royal-amber-oud.jpg" },
      { id: "noir-de-bakhoor", name: "Noir De Bakhoor", size: "75 ML", price: 55, quantity: 1, image: "/images/noir-de-bakhoor.jpg" }
    ]
  },
  {
    id: "MM-UAE-9815",
    customerName: "Saeed Al Qasimi",
    customerEmail: "saeed.qasimi@emirates.net.ae",
    customerPhone: "+971 52 901 8841",
    address: "Al Majaz Waterfront Residence 7",
    emirate: "Sharjah",
    date: "2026-09-30",
    totalAED: 39,
    status: "Delivered",
    items: [
      { id: "woody-rose", name: "Woody Rose", size: "50 ML", price: 39, quantity: 1, image: "/images/woody-rose.png" }
    ]
  }
];
var DEFAULT_ADMIN_CREDENTIALS = {
  email: "admin@mistymemories.ae",
  password: "admin"
};

// src/components/Navbar.jsx
import React3 from "react";

// src/components/Icons.jsx
import React2 from "react";
var IconLogo = ({ className = "w-8 h-8", size = 32 }) => /* @__PURE__ */ React2.createElement("svg", { width: size, height: size, viewBox: "0 0 100 100", fill: "none", xmlns: "http://www.w3.org/2000/svg", className }, /* @__PURE__ */ React2.createElement("circle", { cx: "50", cy: "50", r: "46", stroke: "url(#goldGrad)", strokeWidth: "2.5", strokeDasharray: "3 3" }), /* @__PURE__ */ React2.createElement("circle", { cx: "50", cy: "50", r: "41", stroke: "url(#goldGrad)", strokeWidth: "1" }), /* @__PURE__ */ React2.createElement("path", { d: "M26 68V34L40 54L50 40L60 54L74 34V68", stroke: "url(#goldGrad)", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React2.createElement("path", { d: "M26 34L50 64L74 34", stroke: "url(#goldGrad)", strokeWidth: "1.5", opacity: "0.6" }), /* @__PURE__ */ React2.createElement("circle", { cx: "50", cy: "22", r: "3", fill: "#D4AF37" }), /* @__PURE__ */ React2.createElement("defs", null, /* @__PURE__ */ React2.createElement("linearGradient", { id: "goldGrad", x1: "0", y1: "0", x2: "100", y2: "100", gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React2.createElement("stop", { stopColor: "#F9DF98" }), /* @__PURE__ */ React2.createElement("stop", { offset: "0.5", stopColor: "#D4AF37" }), /* @__PURE__ */ React2.createElement("stop", { offset: "1", stopColor: "#AA7A1E" }))));
var IconBag = ({ size = 20, className = "" }) => /* @__PURE__ */ React2.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React2.createElement("path", { d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" }), /* @__PURE__ */ React2.createElement("line", { x1: "3", y1: "6", x2: "21", y2: "6" }), /* @__PURE__ */ React2.createElement("path", { d: "M16 10a4 4 0 0 1-8 0" }));
var IconUser = ({ size = 20, className = "" }) => /* @__PURE__ */ React2.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React2.createElement("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }), /* @__PURE__ */ React2.createElement("circle", { cx: "12", cy: "7", r: "4" }));
var IconSearch = ({ size = 20, className = "" }) => /* @__PURE__ */ React2.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React2.createElement("circle", { cx: "11", cy: "11", r: "8" }), /* @__PURE__ */ React2.createElement("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }));
var IconHeart = ({ size = 20, fill = "none", className = "" }) => /* @__PURE__ */ React2.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill, stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React2.createElement("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }));
var IconStar = ({ size = 16, fill = "#D4AF37", className = "" }) => /* @__PURE__ */ React2.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill, stroke: "#D4AF37", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React2.createElement("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }));
var IconClose = ({ size = 20, className = "" }) => /* @__PURE__ */ React2.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React2.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), /* @__PURE__ */ React2.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }));
var IconCheck = ({ size = 18, className = "" }) => /* @__PURE__ */ React2.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React2.createElement("polyline", { points: "20 6 9 17 4 12" }));
var IconShield = ({ size = 20, className = "" }) => /* @__PURE__ */ React2.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React2.createElement("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }));
var IconTruck = ({ size = 20, className = "" }) => /* @__PURE__ */ React2.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React2.createElement("rect", { x: "1", y: "3", width: "15", height: "13" }), /* @__PURE__ */ React2.createElement("polygon", { points: "16 8 20 8 23 11 23 16 16 16 16 8" }), /* @__PURE__ */ React2.createElement("circle", { cx: "5.5", cy: "18.5", r: "2.5" }), /* @__PURE__ */ React2.createElement("circle", { cx: "18.5", cy: "18.5", r: "2.5" }));
var IconSparkles = ({ size = 18, className = "" }) => /* @__PURE__ */ React2.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React2.createElement("path", { d: "m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z" }));
var IconTrash = ({ size = 18, className = "" }) => /* @__PURE__ */ React2.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React2.createElement("polyline", { points: "3 6 5 6 21 6" }), /* @__PURE__ */ React2.createElement("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }));
var IconPlus = ({ size = 18, className = "" }) => /* @__PURE__ */ React2.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React2.createElement("line", { x1: "12", y1: "5", x2: "12", y2: "19" }), /* @__PURE__ */ React2.createElement("line", { x1: "5", y1: "12", x2: "19", y2: "12" }));
var IconDashboard = ({ size = 20, className = "" }) => /* @__PURE__ */ React2.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React2.createElement("rect", { x: "3", y: "3", width: "7", height: "9" }), /* @__PURE__ */ React2.createElement("rect", { x: "14", y: "3", width: "7", height: "5" }), /* @__PURE__ */ React2.createElement("rect", { x: "14", y: "12", width: "7", height: "9" }), /* @__PURE__ */ React2.createElement("rect", { x: "3", y: "16", width: "7", height: "5" }));
var IconBox = ({ size = 20, className = "" }) => /* @__PURE__ */ React2.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React2.createElement("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }), /* @__PURE__ */ React2.createElement("polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }), /* @__PURE__ */ React2.createElement("line", { x1: "12", y1: "22.08", x2: "12", y2: "12" }));
var IconLayers = ({ size = 20, className = "" }) => /* @__PURE__ */ React2.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React2.createElement("polygon", { points: "12 2 2 7 12 12 22 7 12 2" }), /* @__PURE__ */ React2.createElement("polyline", { points: "2 17 12 22 22 17" }), /* @__PURE__ */ React2.createElement("polyline", { points: "2 12 12 17 22 12" }));
var IconSettings = ({ size = 20, className = "" }) => /* @__PURE__ */ React2.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React2.createElement("circle", { cx: "12", cy: "12", r: "3" }), /* @__PURE__ */ React2.createElement("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" }));
var IconLogout = ({ size = 20, className = "" }) => /* @__PURE__ */ React2.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React2.createElement("path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }), /* @__PURE__ */ React2.createElement("polyline", { points: "16 17 21 12 16 7" }), /* @__PURE__ */ React2.createElement("line", { x1: "21", y1: "12", x2: "9", y2: "12" }));
var IconEye = ({ size = 18, className = "" }) => /* @__PURE__ */ React2.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React2.createElement("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }), /* @__PURE__ */ React2.createElement("circle", { cx: "12", cy: "12", r: "3" }));
var IconEdit = ({ size = 18, className = "" }) => /* @__PURE__ */ React2.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React2.createElement("path", { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }), /* @__PURE__ */ React2.createElement("path", { d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" }));

// src/components/Navbar.jsx
var Navbar = ({
  cartCount,
  wishlistCount,
  currentUser,
  onOpenCart,
  onOpenWishlist,
  onOpenAuth,
  onOpenProfile,
  onOpenAdmin,
  onLogout,
  currentView,
  onNavigateHome
}) => {
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement("div", { className: "announcement-bar" }, /* @__PURE__ */ React3.createElement("span", null, "\u{1F1E6}\u{1F1EA} ", /* @__PURE__ */ React3.createElement("strong", null, "Complimentary Luxury UAE Express Delivery"), " on all orders above 150 AED | Use code: ", /* @__PURE__ */ React3.createElement("strong", null, "MISTY10"))), /* @__PURE__ */ React3.createElement("header", { className: "navbar" }, /* @__PURE__ */ React3.createElement("div", { className: "container navbar-inner" }, /* @__PURE__ */ React3.createElement("div", { className: "brand-logo-wrap", onClick: onNavigateHome }, /* @__PURE__ */ React3.createElement(IconLogo, { size: 42 }), /* @__PURE__ */ React3.createElement("div", { className: "brand-text-block" }, /* @__PURE__ */ React3.createElement("span", { className: "brand-title" }, "Misty Memories"), /* @__PURE__ */ React3.createElement("span", { className: "brand-subtitle" }, "Parfumes & Blanches \u2022 Dubai"))), /* @__PURE__ */ React3.createElement("nav", null, /* @__PURE__ */ React3.createElement("ul", { className: "nav-links" }, /* @__PURE__ */ React3.createElement("li", null, /* @__PURE__ */ React3.createElement("a", { href: "#hero", className: "nav-link active", onClick: onNavigateHome }, "Collections")), /* @__PURE__ */ React3.createElement("li", null, /* @__PURE__ */ React3.createElement("a", { href: "#catalog", className: "nav-link" }, "Fragrances")), /* @__PURE__ */ React3.createElement("li", null, /* @__PURE__ */ React3.createElement("a", { href: "#pyramid", className: "nav-link" }, "Olfactory Notes")), /* @__PURE__ */ React3.createElement("li", null, /* @__PURE__ */ React3.createElement("a", { href: "#heritage", className: "nav-link" }, "Our Story")), /* @__PURE__ */ React3.createElement("li", null, /* @__PURE__ */ React3.createElement("a", { href: "#boutiques", className: "nav-link" }, "UAE Boutiques")))), /* @__PURE__ */ React3.createElement("div", { className: "nav-actions" }, currentUser && currentUser.role === "admin" && /* @__PURE__ */ React3.createElement(
    "button",
    {
      className: "admin-nav-pill",
      onClick: onOpenAdmin,
      title: "Enter Misty Memories Admin Management"
    },
    /* @__PURE__ */ React3.createElement(IconDashboard, { size: 16 }),
    /* @__PURE__ */ React3.createElement("span", null, "Admin Portal")
  ), /* @__PURE__ */ React3.createElement(
    "button",
    {
      className: "nav-icon-btn",
      onClick: onOpenWishlist,
      title: "My Fragrance Wishlist",
      "aria-label": "Wishlist"
    },
    /* @__PURE__ */ React3.createElement(IconHeart, { size: 20 }),
    wishlistCount > 0 && /* @__PURE__ */ React3.createElement("span", { className: "badge-count" }, wishlistCount)
  ), /* @__PURE__ */ React3.createElement(
    "button",
    {
      className: "nav-icon-btn",
      onClick: onOpenCart,
      title: "Shopping Cart (AED)",
      "aria-label": "Cart"
    },
    /* @__PURE__ */ React3.createElement(IconBag, { size: 20 }),
    cartCount > 0 && /* @__PURE__ */ React3.createElement("span", { className: "badge-count" }, cartCount)
  ), currentUser ? /* @__PURE__ */ React3.createElement("div", { style: { display: "flex", alignItems: "center", gap: "8px" } }, /* @__PURE__ */ React3.createElement(
    "button",
    {
      className: "btn-outline-gold",
      style: { padding: "8px 18px", fontSize: "0.78rem" },
      onClick: currentUser.role === "admin" ? onOpenAdmin : onOpenProfile,
      title: "My Account"
    },
    /* @__PURE__ */ React3.createElement(IconUser, { size: 15 }),
    /* @__PURE__ */ React3.createElement("span", null, currentUser.name ? currentUser.name.split(" ")[0] : "Account")
  ), /* @__PURE__ */ React3.createElement(
    "button",
    {
      className: "nav-icon-btn",
      onClick: onLogout,
      title: "Sign Out",
      "aria-label": "Sign out"
    },
    /* @__PURE__ */ React3.createElement(IconLogout, { size: 18 })
  )) : /* @__PURE__ */ React3.createElement(
    "button",
    {
      className: "btn-gold",
      style: { padding: "9px 20px", fontSize: "0.78rem" },
      onClick: () => onOpenAuth("login")
    },
    /* @__PURE__ */ React3.createElement(IconUser, { size: 15 }),
    /* @__PURE__ */ React3.createElement("span", null, "Sign In")
  )))));
};

// src/components/Hero.jsx
import React4, { useState } from "react";
var Hero = ({ heroProduct, onAddToCart, onQuickView }) => {
  const [selectedSize, setSelectedSize] = useState("50 ML");
  if (!heroProduct) return null;
  const currentPrice = selectedSize === "50 ML" ? heroProduct.price : Math.round(heroProduct.price * 1.7);
  const currentOriginalPrice = selectedSize === "50 ML" ? heroProduct.originalPrice : Math.round(heroProduct.originalPrice * 1.7);
  return /* @__PURE__ */ React4.createElement("section", { id: "hero", className: "hero-section" }, /* @__PURE__ */ React4.createElement("div", { className: "hero-bg-glow" }), /* @__PURE__ */ React4.createElement("div", { className: "container hero-grid" }, /* @__PURE__ */ React4.createElement("div", { className: "hero-content" }, /* @__PURE__ */ React4.createElement("div", { className: "hero-tag" }, /* @__PURE__ */ React4.createElement("span", { className: "badge-gold" }, /* @__PURE__ */ React4.createElement(IconSparkles, { size: 14 }), " Artisanal UAE Luxury Edition"), /* @__PURE__ */ React4.createElement("span", { className: "badge-sale" }, "Limited Ramadan Offer")), /* @__PURE__ */ React4.createElement("h1", { className: "hero-title" }, "Woody Rose ", /* @__PURE__ */ React4.createElement("span", { className: "gold-gradient-text" }, "Elixir")), /* @__PURE__ */ React4.createElement("div", { className: "hero-arabic-title" }, "\u0639\u0637\u0631 \u0648\u0648\u062F\u064A \u0631\u0648\u0632 \u2014 \u0645\u0633\u062A\u064A \u0645\u064A\u0645\u0648\u0631\u064A\u0632"), /* @__PURE__ */ React4.createElement("p", { className: "hero-description" }, heroProduct.description), /* @__PURE__ */ React4.createElement("div", { style: { marginBottom: "22px" } }, /* @__PURE__ */ React4.createElement("span", { style: { fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--gold-primary)", display: "block", marginBottom: "8px" } }, "Select Flacon Volume:"), /* @__PURE__ */ React4.createElement("div", { style: { display: "flex", gap: "10px" } }, heroProduct.sizesAvailable.map((size) => /* @__PURE__ */ React4.createElement(
    "button",
    {
      key: size,
      className: `size-pill ${selectedSize === size ? "active" : ""}`,
      onClick: () => setSelectedSize(size),
      style: { padding: "8px 18px", fontSize: "0.85rem" }
    },
    size,
    " Eau De Parfum"
  )))), /* @__PURE__ */ React4.createElement("div", { className: "hero-price-wrap" }, /* @__PURE__ */ React4.createElement("div", { style: { display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React4.createElement("span", { style: { fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)" } }, "Exclusive Launch Price"), /* @__PURE__ */ React4.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: "14px" } }, /* @__PURE__ */ React4.createElement("span", { className: "hero-original-price" }, "AED ", currentOriginalPrice), /* @__PURE__ */ React4.createElement("div", { className: "hero-sale-price" }, /* @__PURE__ */ React4.createElement("span", null, "AED"), " ", currentPrice))), /* @__PURE__ */ React4.createElement("div", { className: "badge-sale", style: { marginLeft: "12px" } }, "Save 34%")), /* @__PURE__ */ React4.createElement("div", { style: { display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" } }, /* @__PURE__ */ React4.createElement(
    "button",
    {
      className: "btn-gold",
      onClick: () => onAddToCart({ ...heroProduct, price: currentPrice, size: selectedSize })
    },
    /* @__PURE__ */ React4.createElement(IconBag, { size: 18 }),
    /* @__PURE__ */ React4.createElement("span", null, "Add To Cart \u2022 AED ", currentPrice)
  ), /* @__PURE__ */ React4.createElement(
    "button",
    {
      className: "btn-outline-gold",
      onClick: () => onQuickView(heroProduct)
    },
    /* @__PURE__ */ React4.createElement(IconEye, { size: 18 }),
    /* @__PURE__ */ React4.createElement("span", null, "Fragrance Details")
  )), /* @__PURE__ */ React4.createElement("div", { style: { display: "flex", gap: "24px", marginTop: "36px", borderTop: "1px solid rgba(212, 175, 55, 0.15)", paddingTop: "20px" } }, /* @__PURE__ */ React4.createElement("div", { style: { display: "flex", alignItems: "center", gap: "8px", fontSize: "0.82rem", color: "var(--text-secondary)" } }, /* @__PURE__ */ React4.createElement(IconTruck, { size: 18, className: "gold-gradient-text" }), /* @__PURE__ */ React4.createElement("span", null, "Same-Day Dubai & UAE Delivery")), /* @__PURE__ */ React4.createElement("div", { style: { display: "flex", alignItems: "center", gap: "8px", fontSize: "0.82rem", color: "var(--text-secondary)" } }, /* @__PURE__ */ React4.createElement(IconShield, { size: 18, className: "gold-gradient-text" }), /* @__PURE__ */ React4.createElement("span", null, "100% Authentic French & Oriental Oils")))), /* @__PURE__ */ React4.createElement("div", { className: "hero-bottle-stage" }, /* @__PURE__ */ React4.createElement("div", { className: "floating-scent-tag tag-top" }, /* @__PURE__ */ React4.createElement("span", { style: { color: "var(--gold-light)" } }, "\u{1F339} Velvet Taif Rose")), /* @__PURE__ */ React4.createElement("div", { className: "hero-bottle-card" }, /* @__PURE__ */ React4.createElement(
    "img",
    {
      src: heroProduct.image,
      alt: "Misty Memories Woody Rose 50ML Perfume",
      className: "hero-image"
    }
  )), /* @__PURE__ */ React4.createElement("div", { className: "floating-scent-tag tag-bottom" }, /* @__PURE__ */ React4.createElement("span", { style: { color: "var(--gold-light)" } }, "\u{1FAB5} Cambodian Agarwood (Oud)")))));
};

// src/components/NotesPyramid.jsx
import React5 from "react";
var NotesPyramid = () => {
  return /* @__PURE__ */ React5.createElement("section", { id: "pyramid", className: "pyramid-section" }, /* @__PURE__ */ React5.createElement("div", { className: "container" }, /* @__PURE__ */ React5.createElement("div", { className: "section-header" }, /* @__PURE__ */ React5.createElement("span", { className: "section-pretitle" }, "The Alchemy of Scent"), /* @__PURE__ */ React5.createElement("h2", { className: "section-title" }, "The Olfactory ", /* @__PURE__ */ React5.createElement("span", { className: "gold-gradient-text" }, "Pyramid")), /* @__PURE__ */ React5.createElement("p", { className: "section-subtitle" }, "Every Misty Memories flacon is orchestrated like a symphony. From the first radiant spritz to the lingering 18-hour dry-down on Emirati silk.")), /* @__PURE__ */ React5.createElement("div", { className: "pyramid-grid" }, /* @__PURE__ */ React5.createElement("div", { className: "pyramid-card" }, /* @__PURE__ */ React5.createElement("span", { className: "pyramid-tier-badge" }, "Tier I \u2022 0 - 30 Mins"), /* @__PURE__ */ React5.createElement("h3", null, "Top / Opening Notes"), /* @__PURE__ */ React5.createElement("p", { className: "pyramid-evaporation" }, "The luminous first impression that enchants the senses upon release."), /* @__PURE__ */ React5.createElement("div", { className: "notes-pill-list" }, /* @__PURE__ */ React5.createElement("span", { className: "note-pill" }, "\u2728 Calabrian Bergamot"), /* @__PURE__ */ React5.createElement("span", { className: "note-pill" }, "\u{1F336}\uFE0F Pink Pepper Pods"), /* @__PURE__ */ React5.createElement("span", { className: "note-pill" }, "\u{1F347} Wild Raspberry"), /* @__PURE__ */ React5.createElement("span", { className: "note-pill" }, "\u{1F33E} Saffron Threads"), /* @__PURE__ */ React5.createElement("span", { className: "note-pill" }, "\u{1F34A} Sunlit Mandarin"))), /* @__PURE__ */ React5.createElement("div", { className: "pyramid-card" }, /* @__PURE__ */ React5.createElement("span", { className: "pyramid-tier-badge" }, "Tier II \u2022 30 Mins - 4 Hours"), /* @__PURE__ */ React5.createElement("h3", null, "Heart / Middle Notes"), /* @__PURE__ */ React5.createElement("p", { className: "pyramid-evaporation" }, "The soulful signature core of the composition that defines its character."), /* @__PURE__ */ React5.createElement("div", { className: "notes-pill-list" }, /* @__PURE__ */ React5.createElement("span", { className: "note-pill" }, "\u{1F339} Velvet Taif Rose"), /* @__PURE__ */ React5.createElement("span", { className: "note-pill" }, "\u{1F33A} Damask Rose Absolute"), /* @__PURE__ */ React5.createElement("span", { className: "note-pill" }, "\u{1F56F}\uFE0F Frankincense Smoke"), /* @__PURE__ */ React5.createElement("span", { className: "note-pill" }, "\u{1FAB5} Bakhoor Mabkhara"), /* @__PURE__ */ React5.createElement("span", { className: "note-pill" }, "\u{1F338} Florentine Iris"))), /* @__PURE__ */ React5.createElement("div", { className: "pyramid-card" }, /* @__PURE__ */ React5.createElement("span", { className: "pyramid-tier-badge" }, "Tier III \u2022 4 - 24 Hours"), /* @__PURE__ */ React5.createElement("h3", null, "Base / Dry-Down Notes"), /* @__PURE__ */ React5.createElement("p", { className: "pyramid-evaporation" }, "The deep, opulent foundation that bonds intimately with your skin and fabrics."), /* @__PURE__ */ React5.createElement("div", { className: "notes-pill-list" }, /* @__PURE__ */ React5.createElement("span", { className: "note-pill" }, "\u{1FAB5} Cambodian Agarwood"), /* @__PURE__ */ React5.createElement("span", { className: "note-pill" }, "\u2728 Smoked Golden Amber"), /* @__PURE__ */ React5.createElement("span", { className: "note-pill" }, "\u{1F332} Atlas Mountain Cedar"), /* @__PURE__ */ React5.createElement("span", { className: "note-pill" }, "\u{1F366} Bourbon Vanilla"), /* @__PURE__ */ React5.createElement("span", { className: "note-pill" }, "\u{1F90D} Imperial White Musk"))))));
};

// src/components/ProductCatalog.jsx
import React7, { useState as useState3 } from "react";

// src/components/ProductCard.jsx
import React6, { useState as useState2 } from "react";
var ProductCard = ({
  product,
  onAddToCart,
  onQuickView,
  isWishlisted,
  onToggleWishlist
}) => {
  const [selectedSize, setSelectedSize] = useState2(product.size || "50 ML");
  const priceMultiplier = selectedSize.includes("100") ? 1.65 : 1;
  const currentPrice = Math.round(product.price * priceMultiplier);
  const currentOriginalPrice = Math.round(product.originalPrice * priceMultiplier);
  return /* @__PURE__ */ React6.createElement("div", { className: "product-card" }, /* @__PURE__ */ React6.createElement("div", { className: "product-image-container" }, /* @__PURE__ */ React6.createElement(
    "img",
    {
      src: product.image,
      alt: product.name,
      className: "product-img",
      loading: "lazy"
    }
  ), /* @__PURE__ */ React6.createElement("div", { className: "product-badges" }, product.discount && /* @__PURE__ */ React6.createElement("span", { className: "badge-sale" }, product.discount), product.badge && /* @__PURE__ */ React6.createElement("span", { className: "badge-gold", style: { fontSize: "0.68rem", padding: "3px 10px" } }, product.badge)), /* @__PURE__ */ React6.createElement("div", { className: "product-card-actions" }, /* @__PURE__ */ React6.createElement(
    "button",
    {
      className: `card-action-btn ${isWishlisted ? "active" : ""}`,
      onClick: () => onToggleWishlist(product),
      title: isWishlisted ? "Remove from Wishlist" : "Add to Wishlist",
      "aria-label": "Wishlist"
    },
    /* @__PURE__ */ React6.createElement(IconHeart, { size: 18, fill: isWishlisted ? "#c43254" : "none" })
  ), /* @__PURE__ */ React6.createElement(
    "button",
    {
      className: "card-action-btn",
      onClick: () => onQuickView(product),
      title: "Quick View Fragrance Details",
      "aria-label": "Quick View"
    },
    /* @__PURE__ */ React6.createElement(IconEye, { size: 18 })
  ))), /* @__PURE__ */ React6.createElement("div", { className: "product-info" }, /* @__PURE__ */ React6.createElement("div", { className: "product-category-sub" }, product.category), /* @__PURE__ */ React6.createElement("div", { className: "product-name-row" }, /* @__PURE__ */ React6.createElement("h3", { className: "product-title" }, product.name), /* @__PURE__ */ React6.createElement("span", { className: "product-arabic-title" }, product.arabicName)), /* @__PURE__ */ React6.createElement("div", { className: "product-rating-row" }, /* @__PURE__ */ React6.createElement("div", { className: "product-rating-stars" }, [...Array(5)].map((_, i) => /* @__PURE__ */ React6.createElement(
    IconStar,
    {
      key: i,
      size: 14,
      fill: i < Math.floor(product.rating) ? "#D4AF37" : "rgba(212,175,55,0.25)"
    }
  ))), /* @__PURE__ */ React6.createElement("span", null, product.rating, " (", product.reviewsCount, " UAE reviews)")), /* @__PURE__ */ React6.createElement("p", { className: "product-tagline" }, product.tagline || product.description.slice(0, 85) + "..."), product.sizesAvailable && product.sizesAvailable.length > 1 && /* @__PURE__ */ React6.createElement("div", { className: "size-selector" }, /* @__PURE__ */ React6.createElement("span", { style: { fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase" } }, "Size:"), product.sizesAvailable.map((size) => /* @__PURE__ */ React6.createElement(
    "button",
    {
      key: size,
      className: `size-pill ${selectedSize === size ? "active" : ""}`,
      onClick: () => setSelectedSize(size)
    },
    size
  ))), /* @__PURE__ */ React6.createElement("div", { className: "product-footer-row" }, /* @__PURE__ */ React6.createElement("div", { className: "price-box" }, currentOriginalPrice && /* @__PURE__ */ React6.createElement("span", { className: "price-original" }, "AED ", currentOriginalPrice), /* @__PURE__ */ React6.createElement("div", { className: "price-current" }, /* @__PURE__ */ React6.createElement("span", { className: "price-currency" }, "AED"), currentPrice)), /* @__PURE__ */ React6.createElement(
    "button",
    {
      className: "btn-card-cart",
      onClick: () => onAddToCart({ ...product, price: currentPrice, size: selectedSize }),
      title: "Add to Luxury Cart"
    },
    /* @__PURE__ */ React6.createElement(IconBag, { size: 15 }),
    /* @__PURE__ */ React6.createElement("span", null, "Add")
  ))));
};

// src/components/ProductCatalog.jsx
var ProductCatalog = ({
  products,
  categories,
  onAddToCart,
  onQuickView,
  wishlistIds,
  onToggleWishlist
}) => {
  const [activeCategory, setActiveCategory] = useState3("All Fragrances");
  const [searchQuery, setSearchQuery] = useState3("");
  const filteredProducts = products.filter((prod) => {
    const matchesCategory = activeCategory === "All Fragrances" || prod.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) || prod.arabicName && prod.arabicName.includes(searchQuery) || prod.description && prod.description.toLowerCase().includes(searchQuery.toLowerCase()) || prod.notes && (prod.notes.top.some((n) => n.toLowerCase().includes(searchQuery.toLowerCase())) || prod.notes.heart.some((n) => n.toLowerCase().includes(searchQuery.toLowerCase())) || prod.notes.base.some((n) => n.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });
  return /* @__PURE__ */ React7.createElement("section", { id: "catalog", className: "catalog-section" }, /* @__PURE__ */ React7.createElement("div", { className: "container" }, /* @__PURE__ */ React7.createElement("div", { className: "section-header" }, /* @__PURE__ */ React7.createElement("span", { className: "section-pretitle" }, "The Niche Collection"), /* @__PURE__ */ React7.createElement("h2", { className: "section-title" }, "Curated Artisanal ", /* @__PURE__ */ React7.createElement("span", { className: "gold-gradient-text" }, "Fragrances")), /* @__PURE__ */ React7.createElement("p", { className: "section-subtitle" }, "Formulated in the United Arab Emirates with pure extracts of aged agarwood, French rose de mai, and rare ambers.")), /* @__PURE__ */ React7.createElement("div", { style: { maxWidth: "440px", margin: "0 auto 32px", position: "relative" } }, /* @__PURE__ */ React7.createElement(
    "input",
    {
      type: "text",
      className: "form-input",
      placeholder: "Search by perfume name, note (Oud, Rose, Amber)...",
      value: searchQuery,
      onChange: (e) => setSearchQuery(e.target.value),
      style: { paddingLeft: "44px", borderRadius: "var(--radius-full)" }
    }
  ), /* @__PURE__ */ React7.createElement("div", { style: { position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", color: "var(--gold-primary)" } }, /* @__PURE__ */ React7.createElement(IconSearch, { size: 18 })), searchQuery && /* @__PURE__ */ React7.createElement(
    "button",
    {
      onClick: () => setSearchQuery(""),
      style: { position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", background: "transparent", border: "none", color: "var(--text-muted)", cursor: "pointer", fontSize: "0.85rem" }
    },
    "\u2715"
  )), /* @__PURE__ */ React7.createElement("div", { className: "category-filter-bar" }, categories.map((cat) => /* @__PURE__ */ React7.createElement(
    "button",
    {
      key: cat,
      className: `category-tab ${activeCategory === cat ? "active" : ""}`,
      onClick: () => setActiveCategory(cat)
    },
    cat
  ))), filteredProducts.length > 0 ? /* @__PURE__ */ React7.createElement("div", { className: "products-grid" }, filteredProducts.map((product) => /* @__PURE__ */ React7.createElement(
    ProductCard,
    {
      key: product.id,
      product,
      onAddToCart,
      onQuickView,
      isWishlisted: wishlistIds.includes(product.id),
      onToggleWishlist
    }
  ))) : /* @__PURE__ */ React7.createElement("div", { style: { textAlign: "center", padding: "60px 20px", background: "var(--bg-card)", borderRadius: "var(--radius-lg)", border: "1px solid var(--gold-border)" } }, /* @__PURE__ */ React7.createElement("p", { style: { fontSize: "1.2rem", color: "var(--gold-light)", fontFamily: "var(--font-serif)", marginBottom: "8px" } }, "No Fragrances Found"), /* @__PURE__ */ React7.createElement("p", { style: { color: "var(--text-muted)", fontSize: "0.9rem" } }, "Try adjusting your search query or choosing another category."))));
};

// src/components/QuickViewModal.jsx
import React8, { useState as useState4 } from "react";
var QuickViewModal = ({ product, isOpen, onClose, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState4(product?.size || "50 ML");
  const [quantity, setQuantity] = useState4(1);
  if (!isOpen || !product) return null;
  const priceMultiplier = selectedSize.includes("100") ? 1.65 : 1;
  const currentPrice = Math.round(product.price * priceMultiplier);
  const currentOriginalPrice = Math.round(product.originalPrice * priceMultiplier);
  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      size: selectedSize,
      price: currentPrice
    }, quantity);
    onClose();
  };
  return /* @__PURE__ */ React8.createElement("div", { className: "modal-overlay", onClick: onClose }, /* @__PURE__ */ React8.createElement("div", { className: "quick-view-content", onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React8.createElement("button", { className: "modal-close-btn", onClick: onClose, "aria-label": "Close modal" }, /* @__PURE__ */ React8.createElement(IconClose, { size: 18 })), /* @__PURE__ */ React8.createElement("div", { className: "quick-view-grid" }, /* @__PURE__ */ React8.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React8.createElement(
    "img",
    {
      src: product.image,
      alt: product.name,
      className: "quick-view-img"
    }
  ), product.discount && /* @__PURE__ */ React8.createElement("span", { className: "badge-sale", style: { position: "absolute", top: "16px", left: "16px" } }, product.discount)), /* @__PURE__ */ React8.createElement("div", null, /* @__PURE__ */ React8.createElement("div", { style: { fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold-primary)", fontFamily: "var(--font-serif)", marginBottom: "6px" } }, product.category, " \u2022 ", product.concentration), /* @__PURE__ */ React8.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" } }, /* @__PURE__ */ React8.createElement("h2", { style: { fontFamily: "var(--font-serif)", fontSize: "1.9rem", color: "#fff" } }, product.name), /* @__PURE__ */ React8.createElement("span", { style: { fontFamily: "var(--font-arabic)", fontSize: "1.6rem", color: "var(--gold-light)" } }, product.arabicName)), /* @__PURE__ */ React8.createElement("div", { style: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px", fontSize: "0.85rem", color: "var(--text-muted)" } }, /* @__PURE__ */ React8.createElement("div", { style: { display: "flex", gap: "2px", color: "var(--gold-primary)" } }, [...Array(5)].map((_, i) => /* @__PURE__ */ React8.createElement(IconStar, { key: i, size: 15, fill: i < Math.floor(product.rating) ? "#D4AF37" : "rgba(212,175,55,0.25)" }))), /* @__PURE__ */ React8.createElement("span", { style: { color: "var(--text-secondary)" } }, product.rating, " / 5.0"), /* @__PURE__ */ React8.createElement("span", null, "(", product.reviewsCount, " UAE Customer Reviews)")), /* @__PURE__ */ React8.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: "14px", marginBottom: "18px" } }, currentOriginalPrice && /* @__PURE__ */ React8.createElement("span", { style: { fontSize: "1.1rem", color: "#c43254", textDecoration: "line-through", fontFamily: "var(--font-serif)" } }, "AED ", currentOriginalPrice), /* @__PURE__ */ React8.createElement("div", { style: { fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 800, color: "var(--gold-light)" } }, /* @__PURE__ */ React8.createElement("span", { style: { fontSize: "1rem", color: "var(--gold-primary)", marginRight: "4px" } }, "AED"), currentPrice), /* @__PURE__ */ React8.createElement("span", { className: "badge-gold" }, "In Stock (", product.stock, " units)")), /* @__PURE__ */ React8.createElement("p", { style: { color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "22px" } }, product.description), product.sizesAvailable && /* @__PURE__ */ React8.createElement("div", { style: { marginBottom: "20px" } }, /* @__PURE__ */ React8.createElement("span", { style: { fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--gold-light)", display: "block", marginBottom: "8px", fontFamily: "var(--font-serif)" } }, "Flacon Size:"), /* @__PURE__ */ React8.createElement("div", { style: { display: "flex", gap: "10px" } }, product.sizesAvailable.map((s) => /* @__PURE__ */ React8.createElement(
    "button",
    {
      key: s,
      className: `size-pill ${selectedSize === s ? "active" : ""}`,
      onClick: () => setSelectedSize(s),
      style: { padding: "8px 18px" }
    },
    s
  )))), product.notes && /* @__PURE__ */ React8.createElement("div", { style: { background: "rgba(0, 0, 0, 0.3)", border: "1px solid rgba(212, 175, 55, 0.15)", borderRadius: "var(--radius-md)", padding: "14px", marginBottom: "24px" } }, /* @__PURE__ */ React8.createElement("div", { style: { fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--gold-primary)", fontFamily: "var(--font-serif)", marginBottom: "8px" } }, "Olfactory Pyramid"), /* @__PURE__ */ React8.createElement("div", { style: { fontSize: "0.84rem", color: "var(--text-secondary)", marginBottom: "4px" } }, /* @__PURE__ */ React8.createElement("strong", { style: { color: "#fff" } }, "Top:"), " ", product.notes.top.join(" \u2022 ")), /* @__PURE__ */ React8.createElement("div", { style: { fontSize: "0.84rem", color: "var(--text-secondary)", marginBottom: "4px" } }, /* @__PURE__ */ React8.createElement("strong", { style: { color: "#fff" } }, "Heart:"), " ", product.notes.heart.join(" \u2022 ")), /* @__PURE__ */ React8.createElement("div", { style: { fontSize: "0.84rem", color: "var(--text-secondary)" } }, /* @__PURE__ */ React8.createElement("strong", { style: { color: "#fff" } }, "Base:"), " ", product.notes.base.join(" \u2022 "))), /* @__PURE__ */ React8.createElement("div", { style: { display: "flex", alignItems: "center", gap: "16px" } }, /* @__PURE__ */ React8.createElement("div", { style: { display: "flex", alignItems: "center", gap: "10px", background: "rgba(0,0,0,0.5)", border: "1px solid rgba(212,175,55,0.3)", borderRadius: "var(--radius-full)", padding: "6px 14px" } }, /* @__PURE__ */ React8.createElement(
    "button",
    {
      onClick: () => setQuantity(Math.max(1, quantity - 1)),
      style: { background: "none", border: "none", color: "var(--text-secondary)", cursor: "pointer", fontSize: "1.1rem" }
    },
    "-"
  ), /* @__PURE__ */ React8.createElement("span", { style: { fontWeight: 700, minWidth: "20px", textAlign: "center" } }, quantity), /* @__PURE__ */ React8.createElement(
    "button",
    {
      onClick: () => setQuantity(quantity + 1),
      style: { background: "none", border: "none", color: "var(--text-secondary)", cursor: "pointer", fontSize: "1.1rem" }
    },
    "+"
  )), /* @__PURE__ */ React8.createElement(
    "button",
    {
      className: "btn-gold",
      style: { flexGrow: 1 },
      onClick: handleAddToCart
    },
    /* @__PURE__ */ React8.createElement(IconBag, { size: 18 }),
    /* @__PURE__ */ React8.createElement("span", null, "Add to Cart \u2022 AED ", currentPrice * quantity)
  ))))));
};

// src/components/BrandStory.jsx
import React9 from "react";
var BrandStory = () => {
  return /* @__PURE__ */ React9.createElement("section", { id: "heritage", className: "story-section" }, /* @__PURE__ */ React9.createElement("div", { className: "container story-grid" }, /* @__PURE__ */ React9.createElement("div", { className: "story-content" }, /* @__PURE__ */ React9.createElement("span", { className: "section-pretitle" }, "Bespoke Emirati Parfumerie"), /* @__PURE__ */ React9.createElement("h2", null, "Crafted In Dubai, ", /* @__PURE__ */ React9.createElement("br", null), /* @__PURE__ */ React9.createElement("span", { className: "gold-gradient-text" }, "Cherished Worldwide")), /* @__PURE__ */ React9.createElement("p", null, "Born under the golden sun of the United Arab Emirates, ", /* @__PURE__ */ React9.createElement("strong", null, "Misty Memories"), " represents the sublime alchemy of ancient Gulf fragrance traditions and contemporary French haute perfumery."), /* @__PURE__ */ React9.createElement("p", null, "We hand-select aged Cambodian agarwood, wild Damask roses from high mountain plateaus, and molten ambergris. Each batch rests in charred oak casks for seven moons, creating a deep, resonant sillage that honors Emirati hospitality and distinction."), /* @__PURE__ */ React9.createElement("div", { className: "heritage-features-list" }, /* @__PURE__ */ React9.createElement("div", { className: "heritage-feature-item" }, /* @__PURE__ */ React9.createElement("h4", null, "Pure Aged Dehn El Oud"), /* @__PURE__ */ React9.createElement("p", null, "Matured natural agarwood distilled with traditional artisanal copper alembics.")), /* @__PURE__ */ React9.createElement("div", { className: "heritage-feature-item" }, /* @__PURE__ */ React9.createElement("h4", null, "18+ Hour Sillage"), /* @__PURE__ */ React9.createElement("p", null, "Formulated at high Extrait concentration to thrive in the Gulf climate.")), /* @__PURE__ */ React9.createElement("div", { className: "heritage-feature-item" }, /* @__PURE__ */ React9.createElement("h4", null, "Cruelty-Free & Sustainable"), /* @__PURE__ */ React9.createElement("p", null, "Ethically harvested botanicals and sustainably sourced wild woods.")), /* @__PURE__ */ React9.createElement("div", { className: "heritage-feature-item" }, /* @__PURE__ */ React9.createElement("h4", null, "Bespoke Gold Packaging"), /* @__PURE__ */ React9.createElement("p", null, "Heavy custom flacons crowned with hand-finished fluted gold caps.")))), /* @__PURE__ */ React9.createElement("div", { className: "story-visual-wrap" }, /* @__PURE__ */ React9.createElement(
    "img",
    {
      src: "/images/royal-amber-oud.jpg",
      alt: "Misty Memories Royal Oud & Amber Heritage"
    }
  ), /* @__PURE__ */ React9.createElement("div", { style: { position: "absolute", bottom: "24px", left: "24px", right: "24px", background: "rgba(12, 6, 11, 0.85)", backdropFilter: "blur(12px)", border: "1px solid var(--gold-border)", borderRadius: "var(--radius-md)", padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" } }, /* @__PURE__ */ React9.createElement("div", null, /* @__PURE__ */ React9.createElement("span", { style: { fontSize: "0.74rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--gold-primary)", display: "block" } }, "Dubai Flagship Atelier"), /* @__PURE__ */ React9.createElement("span", { style: { fontFamily: "var(--font-serif)", fontSize: "1rem", color: "#fff", fontWeight: 600 } }, "Downtown Dubai \u2022 UAE")), /* @__PURE__ */ React9.createElement("span", { className: "badge-gold" }, /* @__PURE__ */ React9.createElement(IconSparkles, { size: 12 }), " Since 2018")))));
};

// src/components/CartDrawer.jsx
import React10, { useState as useState5 } from "react";
var CartDrawer = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  currentUser,
  onRequireAuth,
  onPlaceOrder
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState5(false);
  const [promoCode, setPromoCode] = useState5("");
  const [discountPercent, setDiscountPercent] = useState5(0);
  const [promoError, setPromoError] = useState5("");
  const [promoSuccess, setPromoSuccess] = useState5("");
  const [formData, setFormData] = useState5({
    fullName: currentUser?.name || "",
    phone: currentUser?.phone || "+971 ",
    emirate: currentUser?.emirate || "Dubai",
    address: currentUser?.address || "",
    paymentMethod: "Cash on Delivery (UAE)",
    deliveryNotes: ""
  });
  if (!isOpen) return null;
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = Math.round(subtotal * discountPercent / 100);
  const freeShippingThreshold = 150;
  const shippingFee = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 25;
  const total = subtotal - discountAmount + shippingFee;
  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === "MISTY10") {
      setDiscountPercent(10);
      setPromoSuccess("10% VIP Discount applied successfully!");
      setPromoError("");
    } else {
      setPromoError("Invalid promo code. Use code: MISTY10");
      setPromoSuccess("");
    }
  };
  const handleStartCheckout = () => {
    if (!currentUser) {
      onRequireAuth("Please sign in or create your account to place an order.");
      return;
    }
    setFormData((prev) => ({
      ...prev,
      fullName: prev.fullName || currentUser.name || "",
      phone: prev.phone.length > 5 ? prev.phone : currentUser.phone || "+971 50 ",
      emirate: prev.emirate || currentUser.emirate || "Dubai",
      address: prev.address || currentUser.address || ""
    }));
    setIsCheckingOut(true);
  };
  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.address) {
      alert("Please fill in all UAE delivery fields.");
      return;
    }
    const newOrder = {
      id: `MM-UAE-${Math.floor(1e3 + Math.random() * 9e3)}`,
      customerName: formData.fullName,
      customerEmail: currentUser.email,
      customerPhone: formData.phone,
      emirate: formData.emirate,
      address: formData.address,
      paymentMethod: formData.paymentMethod,
      date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      items: [...cartItems],
      subtotal,
      discount: discountAmount,
      shippingFee,
      totalAED: total,
      status: "Processing in Dubai Hub"
    };
    onPlaceOrder(newOrder);
    setIsCheckingOut(false);
  };
  return /* @__PURE__ */ React10.createElement("div", { className: "drawer-overlay", onClick: onClose }, /* @__PURE__ */ React10.createElement("div", { className: "cart-drawer-content", onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React10.createElement("div", { className: "drawer-header" }, /* @__PURE__ */ React10.createElement("div", { style: { display: "flex", alignItems: "center", gap: "10px" } }, /* @__PURE__ */ React10.createElement(IconBag, { size: 22, className: "gold-gradient-text" }), /* @__PURE__ */ React10.createElement("h3", { className: "drawer-title" }, isCheckingOut ? "UAE Express Checkout" : "Luxury Shopping Bag")), /* @__PURE__ */ React10.createElement("button", { className: "modal-close-btn", onClick: onClose, "aria-label": "Close cart" }, /* @__PURE__ */ React10.createElement(IconClose, { size: 18 }))), !isCheckingOut && /* @__PURE__ */ React10.createElement("div", { style: { padding: "12px 24px", background: "rgba(0,0,0,0.3)", borderBottom: "1px solid rgba(212,175,55,0.1)" } }, /* @__PURE__ */ React10.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontSize: "0.76rem", color: "var(--text-secondary)", marginBottom: "6px" } }, /* @__PURE__ */ React10.createElement("span", null, subtotal >= freeShippingThreshold ? "\u2728 You qualify for Complimentary UAE Delivery!" : `Add AED ${freeShippingThreshold - subtotal} more for Free UAE Delivery`), /* @__PURE__ */ React10.createElement("span", { style: { color: "var(--gold-light)", fontWeight: 600 } }, Math.min(100, Math.round(subtotal / freeShippingThreshold * 100)), "%")), /* @__PURE__ */ React10.createElement("div", { style: { width: "100%", height: "4px", background: "rgba(255,255,255,0.1)", borderRadius: "2px", overflow: "hidden" } }, /* @__PURE__ */ React10.createElement(
    "div",
    {
      style: {
        width: `${Math.min(100, subtotal / freeShippingThreshold * 100)}%`,
        height: "100%",
        background: "var(--gold-gradient)",
        transition: "width 0.4s ease"
      }
    }
  ))), /* @__PURE__ */ React10.createElement("div", { className: "drawer-body" }, cartItems.length === 0 ? /* @__PURE__ */ React10.createElement("div", { style: { textAlign: "center", padding: "60px 20px", margin: "auto" } }, /* @__PURE__ */ React10.createElement(IconBag, { size: 54, style: { color: "var(--gold-primary)", opacity: 0.4, marginBottom: "16px" } }), /* @__PURE__ */ React10.createElement("h4", { style: { fontFamily: "var(--font-serif)", color: "#fff", fontSize: "1.2rem", marginBottom: "8px" } }, "Your Bag is Empty"), /* @__PURE__ */ React10.createElement("p", { style: { color: "var(--text-muted)", fontSize: "0.88rem", marginBottom: "24px" } }, "Explore our signature Dubai fragrances and elevate your presence."), /* @__PURE__ */ React10.createElement("button", { className: "btn-outline-gold", onClick: onClose }, "Browse Collections")) : isCheckingOut ? (
    /* UAE Checkout Form */
    /* @__PURE__ */ React10.createElement("form", { id: "checkout-form", onSubmit: handleSubmitOrder }, /* @__PURE__ */ React10.createElement("div", { className: "auth-notice-box", style: { marginBottom: "16px" } }, /* @__PURE__ */ React10.createElement("span", null, "\u{1F4E6} Shipping exclusively to UAE Emirates with discreet luxury gift packaging.")), /* @__PURE__ */ React10.createElement("div", { className: "form-group" }, /* @__PURE__ */ React10.createElement("label", { className: "form-label" }, "Full Recipient Name *"), /* @__PURE__ */ React10.createElement(
      "input",
      {
        type: "text",
        required: true,
        className: "form-input",
        placeholder: "e.g. Fatima Al Mansoori",
        value: formData.fullName,
        onChange: (e) => setFormData({ ...formData, fullName: e.target.value })
      }
    )), /* @__PURE__ */ React10.createElement("div", { className: "form-group" }, /* @__PURE__ */ React10.createElement("label", { className: "form-label" }, "UAE Contact Number *"), /* @__PURE__ */ React10.createElement(
      "input",
      {
        type: "tel",
        required: true,
        className: "form-input",
        placeholder: "+971 50 123 4567",
        value: formData.phone,
        onChange: (e) => setFormData({ ...formData, phone: e.target.value })
      }
    )), /* @__PURE__ */ React10.createElement("div", { className: "form-group" }, /* @__PURE__ */ React10.createElement("label", { className: "form-label" }, "Emirate *"), /* @__PURE__ */ React10.createElement(
      "select",
      {
        className: "form-select",
        value: formData.emirate,
        onChange: (e) => setFormData({ ...formData, emirate: e.target.value })
      },
      UAE_EMIRATES.map((em) => /* @__PURE__ */ React10.createElement("option", { key: em, value: em, style: { background: "#110811", color: "#fff" } }, em))
    )), /* @__PURE__ */ React10.createElement("div", { className: "form-group" }, /* @__PURE__ */ React10.createElement("label", { className: "form-label" }, "Street / Villa / Apartment Details *"), /* @__PURE__ */ React10.createElement(
      "textarea",
      {
        required: true,
        rows: 2,
        className: "form-input",
        placeholder: "e.g. Villa 14, Al Safa 2, Jumeirah, Dubai",
        value: formData.address,
        onChange: (e) => setFormData({ ...formData, address: e.target.value })
      }
    )), /* @__PURE__ */ React10.createElement("div", { className: "form-group" }, /* @__PURE__ */ React10.createElement("label", { className: "form-label" }, "Payment Method"), /* @__PURE__ */ React10.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "8px" } }, ["Cash on Delivery (UAE)", "Credit / Debit Card (Visa/Mastercard)", "Apple Pay"].map((method) => /* @__PURE__ */ React10.createElement(
      "label",
      {
        key: method,
        style: {
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "10px 14px",
          background: formData.paymentMethod === method ? "rgba(212,175,55,0.15)" : "rgba(255,255,255,0.03)",
          border: `1px solid ${formData.paymentMethod === method ? "var(--gold-light)" : "rgba(212,175,55,0.15)"}`,
          borderRadius: "var(--radius-sm)",
          cursor: "pointer",
          fontSize: "0.85rem"
        }
      },
      /* @__PURE__ */ React10.createElement(
        "input",
        {
          type: "radio",
          name: "paymentMethod",
          checked: formData.paymentMethod === method,
          onChange: () => setFormData({ ...formData, paymentMethod: method })
        }
      ),
      /* @__PURE__ */ React10.createElement("span", null, method)
    )))))
  ) : (
    /* Cart Items List */
    /* @__PURE__ */ React10.createElement(React10.Fragment, null, cartItems.map((item) => /* @__PURE__ */ React10.createElement("div", { key: `${item.id}-${item.size}`, className: "cart-item" }, /* @__PURE__ */ React10.createElement("img", { src: item.image, alt: item.name, className: "cart-item-img" }), /* @__PURE__ */ React10.createElement("div", { className: "cart-item-info" }, /* @__PURE__ */ React10.createElement("h4", null, item.name), /* @__PURE__ */ React10.createElement("div", { className: "cart-item-size" }, item.size), /* @__PURE__ */ React10.createElement("div", { className: "cart-item-price" }, "AED ", item.price * item.quantity), /* @__PURE__ */ React10.createElement("div", { className: "cart-qty-ctrls", style: { marginTop: "8px" } }, /* @__PURE__ */ React10.createElement(
      "button",
      {
        className: "qty-btn",
        onClick: () => onUpdateQuantity(item.id, item.size, item.quantity - 1),
        "aria-label": "Decrease quantity"
      },
      "-"
    ), /* @__PURE__ */ React10.createElement("span", { className: "qty-number" }, item.quantity), /* @__PURE__ */ React10.createElement(
      "button",
      {
        className: "qty-btn",
        onClick: () => onUpdateQuantity(item.id, item.size, item.quantity + 1),
        "aria-label": "Increase quantity"
      },
      "+"
    ))), /* @__PURE__ */ React10.createElement(
      "button",
      {
        onClick: () => onRemoveItem(item.id, item.size),
        style: { background: "transparent", border: "none", color: "var(--text-muted)", cursor: "pointer", padding: "6px" },
        title: "Remove item"
      },
      /* @__PURE__ */ React10.createElement(IconTrash, { size: 16 })
    ))), /* @__PURE__ */ React10.createElement("div", { style: { background: "rgba(0,0,0,0.3)", padding: "14px", borderRadius: "var(--radius-md)", border: "1px solid rgba(212,175,55,0.15)", marginTop: "8px" } }, /* @__PURE__ */ React10.createElement("span", { style: { fontSize: "0.74rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--gold-primary)", display: "block", marginBottom: "6px" } }, "Have a VIP Promo Code?"), /* @__PURE__ */ React10.createElement("div", { style: { display: "flex", gap: "8px" } }, /* @__PURE__ */ React10.createElement(
      "input",
      {
        type: "text",
        className: "form-input",
        placeholder: "Enter MISTY10",
        value: promoCode,
        onChange: (e) => setPromoCode(e.target.value),
        style: { padding: "8px 12px", fontSize: "0.85rem" }
      }
    ), /* @__PURE__ */ React10.createElement(
      "button",
      {
        className: "btn-outline-gold",
        style: { padding: "8px 16px", fontSize: "0.76rem" },
        onClick: handleApplyPromo
      },
      "Apply"
    )), promoError && /* @__PURE__ */ React10.createElement("div", { style: { color: "#c43254", fontSize: "0.75rem", marginTop: "6px" } }, promoError), promoSuccess && /* @__PURE__ */ React10.createElement("div", { style: { color: "#4ade80", fontSize: "0.75rem", marginTop: "6px" } }, promoSuccess)))
  )), cartItems.length > 0 && /* @__PURE__ */ React10.createElement("div", { className: "drawer-footer" }, /* @__PURE__ */ React10.createElement("div", { className: "cart-summary-line" }, /* @__PURE__ */ React10.createElement("span", null, "Subtotal"), /* @__PURE__ */ React10.createElement("span", null, "AED ", subtotal)), discountAmount > 0 && /* @__PURE__ */ React10.createElement("div", { className: "cart-summary-line", style: { color: "#4ade80" } }, /* @__PURE__ */ React10.createElement("span", null, "VIP Promo Discount (", discountPercent, "%)"), /* @__PURE__ */ React10.createElement("span", null, "- AED ", discountAmount)), /* @__PURE__ */ React10.createElement("div", { className: "cart-summary-line" }, /* @__PURE__ */ React10.createElement("span", null, "UAE Delivery"), /* @__PURE__ */ React10.createElement("span", null, shippingFee === 0 ? "Complimentary" : `AED ${shippingFee}`)), /* @__PURE__ */ React10.createElement("div", { className: "cart-summary-line total" }, /* @__PURE__ */ React10.createElement("span", null, "Total Amount"), /* @__PURE__ */ React10.createElement("span", null, "AED ", total)), isCheckingOut ? /* @__PURE__ */ React10.createElement("div", { style: { display: "flex", gap: "10px" } }, /* @__PURE__ */ React10.createElement(
    "button",
    {
      type: "button",
      className: "btn-outline-gold",
      style: { flex: 1 },
      onClick: () => setIsCheckingOut(false)
    },
    "Back to Bag"
  ), /* @__PURE__ */ React10.createElement(
    "button",
    {
      type: "submit",
      form: "checkout-form",
      className: "btn-gold",
      style: { flex: 2 }
    },
    /* @__PURE__ */ React10.createElement(IconCheck, { size: 18 }),
    /* @__PURE__ */ React10.createElement("span", null, "Place Order \u2022 AED ", total)
  )) : /* @__PURE__ */ React10.createElement(
    "button",
    {
      className: "btn-gold",
      style: { width: "100%" },
      onClick: handleStartCheckout
    },
    /* @__PURE__ */ React10.createElement("span", null, "Proceed to Checkout")
  ))));
};

// src/components/AuthModal.jsx
import React11, { useState as useState6 } from "react";
var AuthModal = ({
  isOpen,
  onClose,
  initialMode = "login",
  customNotice = "",
  onLoginSuccess,
  onRegisterSuccess
}) => {
  const [mode, setMode] = useState6(initialMode);
  const [email, setEmail] = useState6("");
  const [password, setPassword] = useState6("");
  const [fullName, setFullName] = useState6("");
  const [phone, setPhone] = useState6("+971 ");
  const [emirate, setEmirate] = useState6("Dubai");
  const [address, setAddress] = useState6("");
  const [errorMsg, setErrorMsg] = useState6("");
  const [isSubmitting, setIsSubmitting] = useState6(false);
  if (!isOpen) return null;
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");
    setIsSubmitting(true);
    if (mode === "login") {
      const res = onLoginSuccess(email, password);
      if (!res.success) {
        setErrorMsg(res.message || "Invalid email or password.");
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
        onClose();
      }
    } else {
      if (!fullName.trim() || !email.trim() || !password.trim()) {
        setErrorMsg("Please complete all required fields.");
        setIsSubmitting(false);
        return;
      }
      const res = onRegisterSuccess({
        name: fullName,
        email,
        phone,
        emirate,
        address,
        password
      });
      if (!res.success) {
        setErrorMsg(res.message || "Could not create account.");
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
        onClose();
      }
    }
  };
  return /* @__PURE__ */ React11.createElement("div", { className: "modal-overlay", onClick: onClose }, /* @__PURE__ */ React11.createElement("div", { className: "auth-modal-content", onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React11.createElement("button", { className: "modal-close-btn", onClick: onClose, "aria-label": "Close modal" }, /* @__PURE__ */ React11.createElement(IconClose, { size: 18 })), /* @__PURE__ */ React11.createElement("div", { className: "auth-header" }, /* @__PURE__ */ React11.createElement(IconLogo, { size: 48 }), /* @__PURE__ */ React11.createElement("h3", { className: "auth-title" }, mode === "login" ? "Welcome to Misty Memories" : "Join Misty Memories"), /* @__PURE__ */ React11.createElement("p", { className: "auth-sub" }, mode === "login" ? "Sign in to access your luxury profile, orders & fragrances." : "Create your bespoke fragrance account for luxury UAE delivery.")), customNotice && /* @__PURE__ */ React11.createElement("div", { className: "auth-notice-box" }, /* @__PURE__ */ React11.createElement("span", null, "\u2728 ", customNotice)), /* @__PURE__ */ React11.createElement("div", { className: "auth-tabs" }, /* @__PURE__ */ React11.createElement(
    "button",
    {
      type: "button",
      className: `auth-tab-btn ${mode === "login" ? "active" : ""}`,
      onClick: () => {
        setMode("login");
        setErrorMsg("");
      }
    },
    "Sign In"
  ), /* @__PURE__ */ React11.createElement(
    "button",
    {
      type: "button",
      className: `auth-tab-btn ${mode === "register" ? "active" : ""}`,
      onClick: () => {
        setMode("register");
        setErrorMsg("");
      }
    },
    "Create Account"
  )), errorMsg && /* @__PURE__ */ React11.createElement("div", { style: { background: "rgba(196, 50, 84, 0.15)", border: "1px solid #c43254", color: "#ffb3c1", padding: "10px 14px", borderRadius: "var(--radius-md)", fontSize: "0.82rem", marginBottom: "16px", textAlign: "center" } }, errorMsg), /* @__PURE__ */ React11.createElement("form", { onSubmit: handleSubmit }, mode === "register" && /* @__PURE__ */ React11.createElement(React11.Fragment, null, /* @__PURE__ */ React11.createElement("div", { className: "form-group" }, /* @__PURE__ */ React11.createElement("label", { className: "form-label" }, "Full Name *"), /* @__PURE__ */ React11.createElement(
    "input",
    {
      type: "text",
      required: true,
      className: "form-input",
      placeholder: "e.g. Tariq Al Hashimi",
      value: fullName,
      onChange: (e) => setFullName(e.target.value)
    }
  )), /* @__PURE__ */ React11.createElement("div", { className: "form-group" }, /* @__PURE__ */ React11.createElement("label", { className: "form-label" }, "UAE Contact Number *"), /* @__PURE__ */ React11.createElement(
    "input",
    {
      type: "tel",
      required: true,
      className: "form-input",
      placeholder: "+971 50 000 0000",
      value: phone,
      onChange: (e) => setPhone(e.target.value)
    }
  )), /* @__PURE__ */ React11.createElement("div", { className: "form-group" }, /* @__PURE__ */ React11.createElement("label", { className: "form-label" }, "Default Emirate"), /* @__PURE__ */ React11.createElement(
    "select",
    {
      className: "form-select",
      value: emirate,
      onChange: (e) => setEmirate(e.target.value)
    },
    UAE_EMIRATES.map((em) => /* @__PURE__ */ React11.createElement("option", { key: em, value: em, style: { background: "#110811", color: "#fff" } }, em))
  )), /* @__PURE__ */ React11.createElement("div", { className: "form-group" }, /* @__PURE__ */ React11.createElement("label", { className: "form-label" }, "Delivery Address / Villa Details"), /* @__PURE__ */ React11.createElement(
    "input",
    {
      type: "text",
      className: "form-input",
      placeholder: "e.g. Villa 24, Street 10, Jumeirah",
      value: address,
      onChange: (e) => setAddress(e.target.value)
    }
  ))), /* @__PURE__ */ React11.createElement("div", { className: "form-group" }, /* @__PURE__ */ React11.createElement("label", { className: "form-label" }, "Email Address *"), /* @__PURE__ */ React11.createElement(
    "input",
    {
      type: "email",
      required: true,
      className: "form-input",
      placeholder: "name@domain.com",
      value: email,
      onChange: (e) => setEmail(e.target.value)
    }
  )), /* @__PURE__ */ React11.createElement("div", { className: "form-group" }, /* @__PURE__ */ React11.createElement("label", { className: "form-label" }, "Password *"), /* @__PURE__ */ React11.createElement(
    "input",
    {
      type: "password",
      required: true,
      className: "form-input",
      placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
      value: password,
      onChange: (e) => setPassword(e.target.value)
    }
  )), /* @__PURE__ */ React11.createElement(
    "button",
    {
      type: "submit",
      className: "btn-gold",
      style: { width: "100%", marginTop: "10px" },
      disabled: isSubmitting
    },
    /* @__PURE__ */ React11.createElement("span", null, mode === "login" ? "Sign In" : "Complete Registration")
  )), /* @__PURE__ */ React11.createElement("div", { style: { marginTop: "20px", textAlign: "center", fontSize: "0.8rem", color: "var(--text-muted)" } }, mode === "login" ? /* @__PURE__ */ React11.createElement("span", null, "Don't have an account yet?", " ", /* @__PURE__ */ React11.createElement(
    "button",
    {
      type: "button",
      onClick: () => {
        setMode("register");
        setErrorMsg("");
      },
      style: { background: "none", border: "none", color: "var(--gold-light)", textDecoration: "underline", cursor: "pointer", fontFamily: "inherit" }
    },
    "Create one now"
  )) : /* @__PURE__ */ React11.createElement("span", null, "Already registered?", " ", /* @__PURE__ */ React11.createElement(
    "button",
    {
      type: "button",
      onClick: () => {
        setMode("login");
        setErrorMsg("");
      },
      style: { background: "none", border: "none", color: "var(--gold-light)", textDecoration: "underline", cursor: "pointer", fontFamily: "inherit" }
    },
    "Sign in here"
  )))));
};

// src/components/UserProfileModal.jsx
import React12, { useState as useState7 } from "react";
var UserProfileModal = ({
  isOpen,
  onClose,
  currentUser,
  userOrders,
  onUpdateUser,
  onLogout
}) => {
  const [activeTab, setActiveTab] = useState7("profile");
  const [name, setName] = useState7(currentUser?.name || "");
  const [phone, setPhone] = useState7(currentUser?.phone || "+971 ");
  const [emirate, setEmirate] = useState7(currentUser?.emirate || "Dubai");
  const [address, setAddress] = useState7(currentUser?.address || "");
  const [saveSuccess, setSaveSuccess] = useState7(false);
  if (!isOpen || !currentUser) return null;
  const handleSaveProfile = (e) => {
    e.preventDefault();
    onUpdateUser({
      ...currentUser,
      name,
      phone,
      emirate,
      address
    });
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3e3);
  };
  return /* @__PURE__ */ React12.createElement("div", { className: "modal-overlay", onClick: onClose }, /* @__PURE__ */ React12.createElement("div", { className: "profile-modal-content", onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React12.createElement("button", { className: "modal-close-btn", onClick: onClose, "aria-label": "Close profile" }, /* @__PURE__ */ React12.createElement(IconClose, { size: 18 })), /* @__PURE__ */ React12.createElement("div", { style: { display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px", borderBottom: "1px solid rgba(212,175,55,0.2)", paddingBottom: "20px" } }, /* @__PURE__ */ React12.createElement("div", { style: { width: "56px", height: "56px", borderRadius: "50%", background: "var(--gold-gradient)", display: "flex", alignItems: "center", justifyContent: "center", color: "#0b060a", fontWeight: 800, fontSize: "1.4rem", fontFamily: "var(--font-serif)" } }, currentUser.name ? currentUser.name.charAt(0).toUpperCase() : "M"), /* @__PURE__ */ React12.createElement("div", null, /* @__PURE__ */ React12.createElement("h3", { style: { fontFamily: "var(--font-serif)", fontSize: "1.4rem", color: "#fff", marginBottom: "2px" } }, currentUser.name || "Valued Patron"), /* @__PURE__ */ React12.createElement("span", { style: { fontSize: "0.85rem", color: "var(--gold-light)" } }, currentUser.email, " \u2022 ", currentUser.role === "admin" ? "Atelier Director" : "VIP Member"))), /* @__PURE__ */ React12.createElement("div", { style: { display: "flex", gap: "12px", marginBottom: "24px" } }, /* @__PURE__ */ React12.createElement(
    "button",
    {
      className: `btn-outline-gold ${activeTab === "profile" ? "active" : ""}`,
      style: { padding: "8px 20px", fontSize: "0.8rem", background: activeTab === "profile" ? "var(--gold-gradient)" : "transparent", color: activeTab === "profile" ? "#0d070b" : "var(--gold-light)" },
      onClick: () => setActiveTab("profile")
    },
    /* @__PURE__ */ React12.createElement(IconUser, { size: 15 }),
    /* @__PURE__ */ React12.createElement("span", null, "Profile & Address")
  ), /* @__PURE__ */ React12.createElement(
    "button",
    {
      className: `btn-outline-gold ${activeTab === "orders" ? "active" : ""}`,
      style: { padding: "8px 20px", fontSize: "0.8rem", background: activeTab === "orders" ? "var(--gold-gradient)" : "transparent", color: activeTab === "orders" ? "#0d070b" : "var(--gold-light)" },
      onClick: () => setActiveTab("orders")
    },
    /* @__PURE__ */ React12.createElement(IconBag, { size: 15 }),
    /* @__PURE__ */ React12.createElement("span", null, "My Orders (", userOrders.length, ")")
  ), /* @__PURE__ */ React12.createElement(
    "button",
    {
      className: "btn-outline-gold",
      style: { marginLeft: "auto", padding: "8px 16px", borderColor: "rgba(196,50,84,0.4)", color: "#ffb3c1" },
      onClick: () => {
        onLogout();
        onClose();
      }
    },
    /* @__PURE__ */ React12.createElement(IconLogout, { size: 15 }),
    /* @__PURE__ */ React12.createElement("span", null, "Sign Out")
  )), activeTab === "profile" && /* @__PURE__ */ React12.createElement("form", { onSubmit: handleSaveProfile }, saveSuccess && /* @__PURE__ */ React12.createElement("div", { style: { background: "rgba(74, 222, 128, 0.15)", border: "1px solid #4ade80", color: "#86efac", padding: "10px 16px", borderRadius: "var(--radius-md)", fontSize: "0.85rem", marginBottom: "18px", display: "flex", alignItems: "center", gap: "8px" } }, /* @__PURE__ */ React12.createElement(IconCheck, { size: 16 }), /* @__PURE__ */ React12.createElement("span", null, "Profile and UAE delivery details updated successfully.")), /* @__PURE__ */ React12.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px" } }, /* @__PURE__ */ React12.createElement("div", { className: "form-group" }, /* @__PURE__ */ React12.createElement("label", { className: "form-label" }, "Full Name"), /* @__PURE__ */ React12.createElement(
    "input",
    {
      type: "text",
      required: true,
      className: "form-input",
      value: name,
      onChange: (e) => setName(e.target.value)
    }
  )), /* @__PURE__ */ React12.createElement("div", { className: "form-group" }, /* @__PURE__ */ React12.createElement("label", { className: "form-label" }, "UAE Contact Number"), /* @__PURE__ */ React12.createElement(
    "input",
    {
      type: "tel",
      required: true,
      className: "form-input",
      value: phone,
      onChange: (e) => setPhone(e.target.value)
    }
  ))), /* @__PURE__ */ React12.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "18px" } }, /* @__PURE__ */ React12.createElement("div", { className: "form-group" }, /* @__PURE__ */ React12.createElement("label", { className: "form-label" }, "Primary Emirate"), /* @__PURE__ */ React12.createElement(
    "select",
    {
      className: "form-select",
      value: emirate,
      onChange: (e) => setEmirate(e.target.value)
    },
    UAE_EMIRATES.map((em) => /* @__PURE__ */ React12.createElement("option", { key: em, value: em, style: { background: "#110811", color: "#fff" } }, em))
  )), /* @__PURE__ */ React12.createElement("div", { className: "form-group" }, /* @__PURE__ */ React12.createElement("label", { className: "form-label" }, "Delivery Address / Villa Details"), /* @__PURE__ */ React12.createElement(
    "input",
    {
      type: "text",
      required: true,
      className: "form-input",
      placeholder: "e.g. Villa 24, Street 10, Jumeirah, Dubai",
      value: address,
      onChange: (e) => setAddress(e.target.value)
    }
  ))), /* @__PURE__ */ React12.createElement("button", { type: "submit", className: "btn-gold", style: { marginTop: "10px" } }, /* @__PURE__ */ React12.createElement("span", null, "Save Changes"))), activeTab === "orders" && /* @__PURE__ */ React12.createElement("div", null, userOrders.length === 0 ? /* @__PURE__ */ React12.createElement("div", { style: { textAlign: "center", padding: "40px 20px", color: "var(--text-muted)" } }, /* @__PURE__ */ React12.createElement(IconTruck, { size: 42, style: { opacity: 0.3, marginBottom: "12px" } }), /* @__PURE__ */ React12.createElement("p", null, "You haven't placed any orders yet.")) : /* @__PURE__ */ React12.createElement("div", null, userOrders.map((order) => /* @__PURE__ */ React12.createElement("div", { key: order.id, className: "profile-order-card" }, /* @__PURE__ */ React12.createElement("div", { className: "order-header-row" }, /* @__PURE__ */ React12.createElement("div", null, /* @__PURE__ */ React12.createElement("span", { style: { fontFamily: "var(--font-serif)", fontWeight: 700, color: "var(--gold-light)", marginRight: "10px" } }, order.id), /* @__PURE__ */ React12.createElement("span", { style: { fontSize: "0.8rem", color: "var(--text-muted)" } }, "Placed on ", order.date)), /* @__PURE__ */ React12.createElement("span", { className: "badge-gold", style: { fontSize: "0.72rem" } }, order.status)), /* @__PURE__ */ React12.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "8px", marginBottom: "12px" } }, order.items.map((item, idx) => /* @__PURE__ */ React12.createElement("div", { key: idx, style: { display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.85rem" } }, /* @__PURE__ */ React12.createElement("div", { style: { display: "flex", alignItems: "center", gap: "8px" } }, /* @__PURE__ */ React12.createElement("img", { src: item.image, alt: item.name, style: { width: "32px", height: "32px", borderRadius: "4px", objectFit: "cover" } }), /* @__PURE__ */ React12.createElement("span", null, item.quantity, "x ", item.name, " (", item.size, ")")), /* @__PURE__ */ React12.createElement("span", { style: { color: "var(--gold-light)", fontWeight: 600 } }, "AED ", item.price * item.quantity)))), /* @__PURE__ */ React12.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "10px", borderTop: "1px solid rgba(255,255,255,0.06)", fontSize: "0.82rem" } }, /* @__PURE__ */ React12.createElement("span", { style: { color: "var(--text-muted)" } }, "Delivery to: ", order.emirate, " (", order.address, ")"), /* @__PURE__ */ React12.createElement("div", { style: { fontFamily: "var(--font-serif)", fontSize: "1rem", fontWeight: 700, color: "var(--gold-light)" } }, "Total: AED ", order.totalAED))))))));
};

// src/components/Footer.jsx
import React13 from "react";
var Footer = () => {
  return /* @__PURE__ */ React13.createElement("footer", { id: "boutiques", className: "site-footer" }, /* @__PURE__ */ React13.createElement("div", { className: "container" }, /* @__PURE__ */ React13.createElement("div", { className: "footer-grid" }, /* @__PURE__ */ React13.createElement("div", null, /* @__PURE__ */ React13.createElement("div", { style: { display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" } }, /* @__PURE__ */ React13.createElement(IconLogo, { size: 36 }), /* @__PURE__ */ React13.createElement("div", null, /* @__PURE__ */ React13.createElement("div", { style: { fontFamily: "var(--font-serif)", fontSize: "1.25rem", fontWeight: 700, color: "#fff" } }, "Misty Memories"), /* @__PURE__ */ React13.createElement("div", { style: { fontSize: "0.74rem", letterSpacing: "0.14em", color: "var(--gold-primary)", textTransform: "uppercase" } }, "Parfumes & Blanches \u2022 UAE"))), /* @__PURE__ */ React13.createElement("p", { style: { color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: "1.7", maxWidth: "340px", marginBottom: "20px" } }, "Handcrafted in the United Arab Emirates. Infusing ancient Emirati agarwood heritage with modern haute Parisian perfumery."), /* @__PURE__ */ React13.createElement("div", { style: { display: "flex", alignItems: "center", gap: "10px" } }, /* @__PURE__ */ React13.createElement(
    "a",
    {
      href: "https://instagram.com/mistymemoriesuae",
      target: "_blank",
      rel: "noreferrer",
      className: "badge-gold",
      style: { textDecoration: "none" }
    },
    /* @__PURE__ */ React13.createElement(IconSparkles, { size: 12 }),
    " @mistymemoriesuae"
  ))), /* @__PURE__ */ React13.createElement("div", { className: "footer-col" }, /* @__PURE__ */ React13.createElement("h4", null, "Fragrance Houses"), /* @__PURE__ */ React13.createElement("ul", null, /* @__PURE__ */ React13.createElement("li", null, /* @__PURE__ */ React13.createElement("a", { href: "#catalog" }, "Woody Florals")), /* @__PURE__ */ React13.createElement("li", null, /* @__PURE__ */ React13.createElement("a", { href: "#catalog" }, "Oriental Oud")), /* @__PURE__ */ React13.createElement("li", null, /* @__PURE__ */ React13.createElement("a", { href: "#catalog" }, "Bakhoor & Mabkhara")), /* @__PURE__ */ React13.createElement("li", null, /* @__PURE__ */ React13.createElement("a", { href: "#catalog" }, "Pure Imperial Musks")), /* @__PURE__ */ React13.createElement("li", null, /* @__PURE__ */ React13.createElement("a", { href: "#catalog" }, "Ramadan Special Editions")))), /* @__PURE__ */ React13.createElement("div", { className: "footer-col" }, /* @__PURE__ */ React13.createElement("h4", null, "Flagship Boutiques"), /* @__PURE__ */ React13.createElement("ul", null, /* @__PURE__ */ React13.createElement("li", null, /* @__PURE__ */ React13.createElement("span", { style: { color: "#fff", fontSize: "0.9rem" } }, "Dubai Mall"), " ", /* @__PURE__ */ React13.createElement("br", null), /* @__PURE__ */ React13.createElement("span", { style: { fontSize: "0.78rem", color: "var(--text-muted)" } }, "Fashion Avenue, Level 2")), /* @__PURE__ */ React13.createElement("li", { style: { marginTop: "8px" } }, /* @__PURE__ */ React13.createElement("span", { style: { color: "#fff", fontSize: "0.9rem" } }, "Mall of the Emirates"), " ", /* @__PURE__ */ React13.createElement("br", null), /* @__PURE__ */ React13.createElement("span", { style: { fontSize: "0.78rem", color: "var(--text-muted)" } }, "Luxury Wing, Dubai")), /* @__PURE__ */ React13.createElement("li", { style: { marginTop: "8px" } }, /* @__PURE__ */ React13.createElement("span", { style: { color: "#fff", fontSize: "0.9rem" } }, "The Galleria"), " ", /* @__PURE__ */ React13.createElement("br", null), /* @__PURE__ */ React13.createElement("span", { style: { fontSize: "0.78rem", color: "var(--text-muted)" } }, "Al Maryah Island, Abu Dhabi")))), /* @__PURE__ */ React13.createElement("div", { className: "footer-col" }, /* @__PURE__ */ React13.createElement("h4", null, "UAE Concierge"), /* @__PURE__ */ React13.createElement("p", { style: { fontSize: "0.86rem", color: "var(--text-secondary)", marginBottom: "14px", lineHeight: "1.6" } }, "Inquire regarding bespoke royal gifting or private masterclasses:"), /* @__PURE__ */ React13.createElement("div", { style: { color: "var(--gold-light)", fontSize: "0.9rem", marginBottom: "8px" } }, "\u{1F4DE} +971 4 800 MISTY (64789)"), /* @__PURE__ */ React13.createElement("div", { style: { color: "var(--text-secondary)", fontSize: "0.86rem", marginBottom: "18px" } }, "\u2709\uFE0F concierge@mistymemories.ae"), /* @__PURE__ */ React13.createElement("div", { style: { fontSize: "0.78rem", color: "var(--text-muted)" } }, "Complimentary next-day white-glove courier across all 7 Emirates."))), /* @__PURE__ */ React13.createElement("div", { className: "footer-bottom" }, /* @__PURE__ */ React13.createElement("div", null, "\xA9 ", (/* @__PURE__ */ new Date()).getFullYear(), " Misty Memories Parfumes & Blanches LLC. Dubai, UAE. All Rights Reserved."), /* @__PURE__ */ React13.createElement("div", { style: { display: "flex", gap: "20px" } }, /* @__PURE__ */ React13.createElement("span", null, "Apple Pay"), /* @__PURE__ */ React13.createElement("span", null, "Visa"), /* @__PURE__ */ React13.createElement("span", null, "Mastercard"), /* @__PURE__ */ React13.createElement("span", null, "Cash on Delivery")))));
};

// src/admin/AdminPortal.jsx
import React14, { useState as useState8 } from "react";
var AdminPortal = ({
  products,
  onUpdateProducts,
  categories,
  onUpdateCategories,
  orders,
  onUpdateOrders,
  onBackToStore,
  onLogout
}) => {
  const [activeTab, setActiveTab] = useState8("dashboard");
  const [isProductModalOpen, setIsProductModalOpen] = useState8(false);
  const [editingProduct, setEditingProduct] = useState8(null);
  const [productForm, setProductForm] = useState8({
    id: "",
    name: "",
    arabicName: "",
    category: "Woody Florals",
    price: 39,
    originalPrice: 59,
    currency: "AED",
    discount: "34% OFF",
    size: "50 ML",
    stock: 25,
    rating: 4.9,
    badge: "Signature Blend",
    image: "/images/woody-rose.png",
    description: "",
    topNotes: "",
    heartNotes: "",
    baseNotes: ""
  });
  const totalRevenue = orders.reduce((sum, ord) => sum + (ord.totalAED || 0), 0);
  const totalOrdersCount = orders.length;
  const pendingOrders = orders.filter((o) => o.status !== "Delivered").length;
  const totalStockCount = products.reduce((sum, p) => sum + (Number(p.stock) || 0), 0);
  const emirateOrdersMap = orders.reduce((acc, order) => {
    const em = order.emirate || "Dubai";
    acc[em] = (acc[em] || 0) + 1;
    return acc;
  }, {});
  const handleOpenAddProduct = () => {
    setEditingProduct(null);
    setProductForm({
      id: `perfume-${Date.now()}`,
      name: "",
      arabicName: "",
      category: categories[1] || "Woody Florals",
      price: 49,
      originalPrice: 79,
      currency: "AED",
      discount: "38% OFF",
      size: "50 ML",
      stock: 30,
      rating: 4.9,
      badge: "New Release",
      image: "/images/royal-amber-oud.jpg",
      description: "An exceptional artisanal Dubai creation featuring precious oriental and French notes.",
      topNotes: "Calabrian Bergamot, Cardamom",
      heartNotes: "Taif Rose, Jasmine",
      baseNotes: "Cambodian Oud, Amber"
    });
    setIsProductModalOpen(true);
  };
  const handleOpenEditProduct = (prod) => {
    setEditingProduct(prod);
    setProductForm({
      ...prod,
      topNotes: prod.notes?.top ? prod.notes.top.join(", ") : "",
      heartNotes: prod.notes?.heart ? prod.notes.heart.join(", ") : "",
      baseNotes: prod.notes?.base ? prod.notes.base.join(", ") : ""
    });
    setIsProductModalOpen(true);
  };
  const handleSaveProduct = (e) => {
    e.preventDefault();
    const formattedProduct = {
      ...productForm,
      price: Number(productForm.price),
      originalPrice: Number(productForm.originalPrice),
      stock: Number(productForm.stock),
      sizesAvailable: [productForm.size, "100 ML"],
      notes: {
        top: productForm.topNotes.split(",").map((s) => s.trim()).filter(Boolean),
        heart: productForm.heartNotes.split(",").map((s) => s.trim()).filter(Boolean),
        base: productForm.baseNotes.split(",").map((s) => s.trim()).filter(Boolean)
      }
    };
    if (editingProduct) {
      onUpdateProducts(products.map((p) => p.id === editingProduct.id ? formattedProduct : p));
    } else {
      onUpdateProducts([formattedProduct, ...products]);
    }
    setIsProductModalOpen(false);
  };
  const handleDeleteProduct = (id) => {
    if (confirm("Are you sure you want to remove this perfume from the catalog?")) {
      onUpdateProducts(products.filter((p) => p.id !== id));
    }
  };
  const handleUpdateOrderStatus = (orderId, newStatus) => {
    onUpdateOrders(orders.map((o) => o.id === orderId ? { ...o, status: newStatus } : o));
  };
  return /* @__PURE__ */ React14.createElement("div", { className: "admin-layout" }, /* @__PURE__ */ React14.createElement("aside", { className: "admin-sidebar" }, /* @__PURE__ */ React14.createElement("div", { className: "admin-sidebar-header" }, /* @__PURE__ */ React14.createElement(IconLogo, { size: 36 }), /* @__PURE__ */ React14.createElement("div", null, /* @__PURE__ */ React14.createElement("div", { style: { fontFamily: "var(--font-serif)", fontSize: "1.05rem", fontWeight: 800, color: "#fff" } }, "Misty Memories"), /* @__PURE__ */ React14.createElement("div", { style: { fontSize: "0.7rem", color: "var(--gold-primary)", letterSpacing: "0.12em", textTransform: "uppercase" } }, "Atelier Control Room"))), /* @__PURE__ */ React14.createElement("nav", { className: "admin-nav-menu" }, /* @__PURE__ */ React14.createElement(
    "button",
    {
      className: `admin-menu-item ${activeTab === "dashboard" ? "active" : ""}`,
      onClick: () => setActiveTab("dashboard")
    },
    /* @__PURE__ */ React14.createElement(IconDashboard, { size: 18 }),
    /* @__PURE__ */ React14.createElement("span", null, "Dashboard Overview")
  ), /* @__PURE__ */ React14.createElement(
    "button",
    {
      className: `admin-menu-item ${activeTab === "products" ? "active" : ""}`,
      onClick: () => setActiveTab("products")
    },
    /* @__PURE__ */ React14.createElement(IconBox, { size: 18 }),
    /* @__PURE__ */ React14.createElement("span", null, "Perfumes Inventory (", products.length, ")")
  ), /* @__PURE__ */ React14.createElement(
    "button",
    {
      className: `admin-menu-item ${activeTab === "orders" ? "active" : ""}`,
      onClick: () => setActiveTab("orders")
    },
    /* @__PURE__ */ React14.createElement(IconBag, { size: 18 }),
    /* @__PURE__ */ React14.createElement("span", null, "UAE Orders (", orders.length, ")")
  ), /* @__PURE__ */ React14.createElement(
    "button",
    {
      className: `admin-menu-item ${activeTab === "categories" ? "active" : ""}`,
      onClick: () => setActiveTab("categories")
    },
    /* @__PURE__ */ React14.createElement(IconLayers, { size: 18 }),
    /* @__PURE__ */ React14.createElement("span", null, "Fragrance Categories")
  ), /* @__PURE__ */ React14.createElement(
    "button",
    {
      className: `admin-menu-item ${activeTab === "settings" ? "active" : ""}`,
      onClick: () => setActiveTab("settings")
    },
    /* @__PURE__ */ React14.createElement(IconSettings, { size: 18 }),
    /* @__PURE__ */ React14.createElement("span", null, "Store Configuration")
  )), /* @__PURE__ */ React14.createElement("div", { className: "admin-sidebar-footer" }, /* @__PURE__ */ React14.createElement(
    "button",
    {
      className: "btn-gold",
      style: { width: "100%", padding: "10px", fontSize: "0.78rem" },
      onClick: onBackToStore
    },
    /* @__PURE__ */ React14.createElement(IconEye, { size: 16 }),
    /* @__PURE__ */ React14.createElement("span", null, "Switch to Store View")
  ), /* @__PURE__ */ React14.createElement(
    "button",
    {
      className: "btn-outline-gold",
      style: { width: "100%", padding: "9px", fontSize: "0.76rem", borderColor: "rgba(196,50,84,0.4)", color: "#ffb3c1" },
      onClick: onLogout
    },
    /* @__PURE__ */ React14.createElement(IconLogout, { size: 15 }),
    /* @__PURE__ */ React14.createElement("span", null, "Sign Out Admin")
  ))), /* @__PURE__ */ React14.createElement("main", { className: "admin-main-stage" }, /* @__PURE__ */ React14.createElement("header", { className: "admin-topbar" }, /* @__PURE__ */ React14.createElement("div", null, /* @__PURE__ */ React14.createElement("span", { style: { fontSize: "0.76rem", color: "var(--gold-primary)", textTransform: "uppercase", letterSpacing: "0.12em", fontFamily: "var(--font-serif)" } }, "Misty Memories Atelier Management"), /* @__PURE__ */ React14.createElement("h2", { style: { fontFamily: "var(--font-serif)", fontSize: "1.4rem", color: "#fff" } }, activeTab === "dashboard" && "Executive Commerce Analytics", activeTab === "products" && "Fragrance Inventory & Pricing", activeTab === "orders" && "Client Orders & UAE Fulfillment", activeTab === "categories" && "Olfactory Families & Lines", activeTab === "settings" && "UAE Logistics & Delivery Settings")), /* @__PURE__ */ React14.createElement("div", { style: { display: "flex", alignItems: "center", gap: "14px" } }, /* @__PURE__ */ React14.createElement(
    "button",
    {
      className: "btn-outline-gold",
      style: { padding: "8px 18px", fontSize: "0.78rem" },
      onClick: onBackToStore
    },
    /* @__PURE__ */ React14.createElement(IconEye, { size: 16 }),
    /* @__PURE__ */ React14.createElement("span", null, "Preview Storefront")
  ), /* @__PURE__ */ React14.createElement("div", { style: { display: "flex", alignItems: "center", gap: "8px", background: "rgba(212,175,55,0.1)", padding: "6px 14px", borderRadius: "var(--radius-full)", border: "1px solid var(--gold-border)" } }, /* @__PURE__ */ React14.createElement("div", { style: { width: "8px", height: "8px", borderRadius: "50%", background: "#4ade80" } }), /* @__PURE__ */ React14.createElement("span", { style: { fontSize: "0.78rem", color: "var(--gold-light)" } }, "Admin: Store Director")))), /* @__PURE__ */ React14.createElement("div", { className: "admin-content-area" }, activeTab === "dashboard" && /* @__PURE__ */ React14.createElement("div", null, /* @__PURE__ */ React14.createElement("div", { className: "admin-metrics-grid" }, /* @__PURE__ */ React14.createElement("div", { className: "metric-card" }, /* @__PURE__ */ React14.createElement("div", { className: "metric-label" }, "Total Revenue"), /* @__PURE__ */ React14.createElement("div", { className: "metric-val", style: { color: "var(--gold-light)" } }, "AED ", totalRevenue.toLocaleString()), /* @__PURE__ */ React14.createElement("div", { className: "metric-sub" }, "Across all UAE orders")), /* @__PURE__ */ React14.createElement("div", { className: "metric-card" }, /* @__PURE__ */ React14.createElement("div", { className: "metric-label" }, "Total Orders"), /* @__PURE__ */ React14.createElement("div", { className: "metric-val" }, totalOrdersCount), /* @__PURE__ */ React14.createElement("div", { className: "metric-sub" }, pendingOrders, " awaiting delivery")), /* @__PURE__ */ React14.createElement("div", { className: "metric-card" }, /* @__PURE__ */ React14.createElement("div", { className: "metric-label" }, "Active Perfume Flacons"), /* @__PURE__ */ React14.createElement("div", { className: "metric-val" }, products.length), /* @__PURE__ */ React14.createElement("div", { className: "metric-sub" }, totalStockCount, " bottles in stock")), /* @__PURE__ */ React14.createElement("div", { className: "metric-card" }, /* @__PURE__ */ React14.createElement("div", { className: "metric-label" }, "Featured Flacon"), /* @__PURE__ */ React14.createElement("div", { className: "metric-val", style: { fontSize: "1.4rem", color: "var(--gold-light)" } }, "Woody Rose"), /* @__PURE__ */ React14.createElement("div", { className: "metric-sub" }, "AED 39 (34% Launch Offer)"))), /* @__PURE__ */ React14.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 2fr", gap: "24px", marginBottom: "36px" } }, /* @__PURE__ */ React14.createElement("div", { className: "glass-panel", style: { padding: "24px" } }, /* @__PURE__ */ React14.createElement("h3", { style: { fontFamily: "var(--font-serif)", fontSize: "1.15rem", color: "#fff", marginBottom: "16px" } }, "Orders by UAE Emirate"), /* @__PURE__ */ React14.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "12px" } }, UAE_EMIRATES.map((em) => {
    const count = emirateOrdersMap[em] || 0;
    const percentage = totalOrdersCount > 0 ? Math.round(count / totalOrdersCount * 100) : 0;
    return /* @__PURE__ */ React14.createElement("div", { key: em }, /* @__PURE__ */ React14.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontSize: "0.85rem", marginBottom: "4px" } }, /* @__PURE__ */ React14.createElement("span", { style: { color: "#fff" } }, em), /* @__PURE__ */ React14.createElement("span", { style: { color: "var(--gold-light)", fontWeight: 600 } }, count, " orders (", percentage, "%)")), /* @__PURE__ */ React14.createElement("div", { style: { width: "100%", height: "6px", background: "rgba(255,255,255,0.06)", borderRadius: "3px", overflow: "hidden" } }, /* @__PURE__ */ React14.createElement("div", { style: { width: `${Math.max(percentage, count > 0 ? 15 : 0)}%`, height: "100%", background: "var(--gold-gradient)" } })));
  }))), /* @__PURE__ */ React14.createElement("div", { className: "admin-table-wrap" }, /* @__PURE__ */ React14.createElement("div", { style: { padding: "20px 24px", borderBottom: "1px solid var(--gold-border)", display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React14.createElement("h3", { style: { fontFamily: "var(--font-serif)", fontSize: "1.15rem", color: "#fff" } }, "Recent Luxury UAE Orders"), /* @__PURE__ */ React14.createElement(
    "button",
    {
      className: "btn-outline-gold",
      style: { padding: "6px 14px", fontSize: "0.74rem" },
      onClick: () => setActiveTab("orders")
    },
    "View All"
  )), /* @__PURE__ */ React14.createElement("table", { className: "admin-table" }, /* @__PURE__ */ React14.createElement("thead", null, /* @__PURE__ */ React14.createElement("tr", null, /* @__PURE__ */ React14.createElement("th", null, "Order ID"), /* @__PURE__ */ React14.createElement("th", null, "Client"), /* @__PURE__ */ React14.createElement("th", null, "Emirate"), /* @__PURE__ */ React14.createElement("th", null, "Total (AED)"), /* @__PURE__ */ React14.createElement("th", null, "Status"))), /* @__PURE__ */ React14.createElement("tbody", null, orders.slice(0, 5).map((o) => /* @__PURE__ */ React14.createElement("tr", { key: o.id }, /* @__PURE__ */ React14.createElement("td", { style: { fontFamily: "var(--font-serif)", fontWeight: 700, color: "var(--gold-light)" } }, o.id), /* @__PURE__ */ React14.createElement("td", null, o.customerName), /* @__PURE__ */ React14.createElement("td", null, o.emirate), /* @__PURE__ */ React14.createElement("td", { style: { fontWeight: 700, color: "#fff" } }, "AED ", o.totalAED), /* @__PURE__ */ React14.createElement("td", null, /* @__PURE__ */ React14.createElement("span", { className: "badge-gold", style: { fontSize: "0.7rem" } }, o.status))))))))), activeTab === "products" && /* @__PURE__ */ React14.createElement("div", null, /* @__PURE__ */ React14.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" } }, /* @__PURE__ */ React14.createElement("p", { style: { color: "var(--text-secondary)", fontSize: "0.9rem" } }, "Manage flacon listings, original vs discounted prices (e.g. AED 59 \u2192 AED 39), olfactory notes, and stock levels."), /* @__PURE__ */ React14.createElement("button", { className: "btn-gold", onClick: handleOpenAddProduct }, /* @__PURE__ */ React14.createElement(IconPlus, { size: 16 }), /* @__PURE__ */ React14.createElement("span", null, "Add New Perfume"))), /* @__PURE__ */ React14.createElement("div", { className: "admin-table-wrap" }, /* @__PURE__ */ React14.createElement("table", { className: "admin-table" }, /* @__PURE__ */ React14.createElement("thead", null, /* @__PURE__ */ React14.createElement("tr", null, /* @__PURE__ */ React14.createElement("th", null, "Flacon"), /* @__PURE__ */ React14.createElement("th", null, "Category"), /* @__PURE__ */ React14.createElement("th", null, "Regular Price"), /* @__PURE__ */ React14.createElement("th", null, "Sale Price"), /* @__PURE__ */ React14.createElement("th", null, "Stock"), /* @__PURE__ */ React14.createElement("th", null, "Badge"), /* @__PURE__ */ React14.createElement("th", null, "Actions"))), /* @__PURE__ */ React14.createElement("tbody", null, products.map((p) => /* @__PURE__ */ React14.createElement("tr", { key: p.id }, /* @__PURE__ */ React14.createElement("td", null, /* @__PURE__ */ React14.createElement("div", { style: { display: "flex", alignItems: "center", gap: "12px" } }, /* @__PURE__ */ React14.createElement("img", { src: p.image, alt: p.name, style: { width: "48px", height: "48px", borderRadius: "8px", objectFit: "cover", border: "1px solid var(--gold-border)" } }), /* @__PURE__ */ React14.createElement("div", null, /* @__PURE__ */ React14.createElement("div", { style: { fontWeight: 700, color: "#fff" } }, p.name), /* @__PURE__ */ React14.createElement("div", { style: { fontSize: "0.76rem", color: "var(--gold-primary)", fontFamily: "var(--font-arabic)" } }, p.arabicName)))), /* @__PURE__ */ React14.createElement("td", null, p.category), /* @__PURE__ */ React14.createElement("td", { style: { textDecoration: "line-through", color: "#c43254" } }, "AED ", p.originalPrice), /* @__PURE__ */ React14.createElement("td", { style: { fontWeight: 800, color: "var(--gold-light)" } }, "AED ", p.price), /* @__PURE__ */ React14.createElement("td", null, /* @__PURE__ */ React14.createElement("span", { style: { color: p.stock < 10 ? "#ef4444" : "#fff" } }, p.stock, " units")), /* @__PURE__ */ React14.createElement("td", null, /* @__PURE__ */ React14.createElement("span", { className: "badge-gold", style: { fontSize: "0.68rem" } }, p.badge || "Standard")), /* @__PURE__ */ React14.createElement("td", null, /* @__PURE__ */ React14.createElement("div", { style: { display: "flex", gap: "8px" } }, /* @__PURE__ */ React14.createElement(
    "button",
    {
      className: "card-action-btn",
      onClick: () => handleOpenEditProduct(p),
      title: "Edit perfume"
    },
    /* @__PURE__ */ React14.createElement(IconEdit, { size: 16 })
  ), /* @__PURE__ */ React14.createElement(
    "button",
    {
      className: "card-action-btn",
      onClick: () => handleDeleteProduct(p.id),
      title: "Delete perfume",
      style: { color: "#c43254" }
    },
    /* @__PURE__ */ React14.createElement(IconTrash, { size: 16 })
  ))))))))), activeTab === "orders" && /* @__PURE__ */ React14.createElement("div", null, /* @__PURE__ */ React14.createElement("div", { style: { marginBottom: "24px" } }, /* @__PURE__ */ React14.createElement("p", { style: { color: "var(--text-secondary)", fontSize: "0.9rem" } }, "Live UAE customer orders. Update shipping status from Processing to Out for Delivery across Dubai and Emirates.")), /* @__PURE__ */ React14.createElement("div", { className: "admin-table-wrap" }, /* @__PURE__ */ React14.createElement("table", { className: "admin-table" }, /* @__PURE__ */ React14.createElement("thead", null, /* @__PURE__ */ React14.createElement("tr", null, /* @__PURE__ */ React14.createElement("th", null, "Order ID & Date"), /* @__PURE__ */ React14.createElement("th", null, "Client Details"), /* @__PURE__ */ React14.createElement("th", null, "Delivery Address"), /* @__PURE__ */ React14.createElement("th", null, "Items Ordered"), /* @__PURE__ */ React14.createElement("th", null, "Total Amount"), /* @__PURE__ */ React14.createElement("th", null, "Fulfillment Status"))), /* @__PURE__ */ React14.createElement("tbody", null, orders.map((order) => /* @__PURE__ */ React14.createElement("tr", { key: order.id }, /* @__PURE__ */ React14.createElement("td", null, /* @__PURE__ */ React14.createElement("div", { style: { fontFamily: "var(--font-serif)", fontWeight: 700, color: "var(--gold-light)" } }, order.id), /* @__PURE__ */ React14.createElement("div", { style: { fontSize: "0.78rem", color: "var(--text-muted)" } }, order.date)), /* @__PURE__ */ React14.createElement("td", null, /* @__PURE__ */ React14.createElement("div", { style: { fontWeight: 600, color: "#fff" } }, order.customerName), /* @__PURE__ */ React14.createElement("div", { style: { fontSize: "0.78rem", color: "var(--text-secondary)" } }, order.customerPhone), /* @__PURE__ */ React14.createElement("div", { style: { fontSize: "0.75rem", color: "var(--text-muted)" } }, order.customerEmail)), /* @__PURE__ */ React14.createElement("td", null, /* @__PURE__ */ React14.createElement("div", { style: { color: "var(--gold-light)", fontWeight: 600, fontSize: "0.84rem" } }, order.emirate), /* @__PURE__ */ React14.createElement("div", { style: { fontSize: "0.8rem", color: "var(--text-secondary)", maxWidth: "220px" } }, order.address)), /* @__PURE__ */ React14.createElement("td", null, /* @__PURE__ */ React14.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "4px" } }, order.items.map((it, idx) => /* @__PURE__ */ React14.createElement("span", { key: idx, style: { fontSize: "0.82rem", color: "#fff" } }, it.quantity, "x ", it.name, " (", it.size, ")")))), /* @__PURE__ */ React14.createElement("td", { style: { fontFamily: "var(--font-serif)", fontSize: "1.05rem", fontWeight: 800, color: "var(--gold-light)" } }, "AED ", order.totalAED), /* @__PURE__ */ React14.createElement("td", null, /* @__PURE__ */ React14.createElement(
    "select",
    {
      className: "form-select",
      value: order.status,
      onChange: (e) => handleUpdateOrderStatus(order.id, e.target.value),
      style: { padding: "6px 12px", fontSize: "0.8rem", width: "auto" }
    },
    /* @__PURE__ */ React14.createElement("option", { value: "Processing in Dubai Hub" }, "Processing in Dubai Hub"),
    /* @__PURE__ */ React14.createElement("option", { value: "Out for Delivery" }, "Out for Delivery"),
    /* @__PURE__ */ React14.createElement("option", { value: "Delivered" }, "Delivered"),
    /* @__PURE__ */ React14.createElement("option", { value: "Cancelled" }, "Cancelled")
  )))))))), activeTab === "categories" && /* @__PURE__ */ React14.createElement("div", { style: { maxWidth: "640px" } }, /* @__PURE__ */ React14.createElement("div", { className: "glass-panel", style: { padding: "28px" } }, /* @__PURE__ */ React14.createElement("h3", { style: { fontFamily: "var(--font-serif)", fontSize: "1.25rem", color: "#fff", marginBottom: "16px" } }, "Olfactory Fragrance Lines"), /* @__PURE__ */ React14.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" } }, categories.map((cat, idx) => /* @__PURE__ */ React14.createElement("div", { key: idx, style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 18px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "var(--radius-md)" } }, /* @__PURE__ */ React14.createElement("span", { style: { fontFamily: "var(--font-serif)", color: "#fff", fontSize: "0.95rem" } }, cat), /* @__PURE__ */ React14.createElement("span", { className: "badge-gold", style: { fontSize: "0.7rem" } }, products.filter((p) => p.category === cat).length, " Flacons")))))), activeTab === "settings" && /* @__PURE__ */ React14.createElement("div", { style: { maxWidth: "720px" } }, /* @__PURE__ */ React14.createElement("div", { className: "glass-panel", style: { padding: "32px" } }, /* @__PURE__ */ React14.createElement("h3", { style: { fontFamily: "var(--font-serif)", fontSize: "1.3rem", color: "#fff", marginBottom: "20px" } }, "United Arab Emirates Logistics Configuration"), /* @__PURE__ */ React14.createElement("div", { className: "form-group" }, /* @__PURE__ */ React14.createElement("label", { className: "form-label" }, "Complimentary Delivery Threshold (AED)"), /* @__PURE__ */ React14.createElement("input", { type: "number", className: "form-input", defaultValue: 150 }), /* @__PURE__ */ React14.createElement("span", { style: { fontSize: "0.78rem", color: "var(--text-muted)" } }, "Orders above this threshold receive free white-glove courier across UAE.")), /* @__PURE__ */ React14.createElement("div", { className: "form-group" }, /* @__PURE__ */ React14.createElement("label", { className: "form-label" }, "Standard UAE Shipping Fee (AED)"), /* @__PURE__ */ React14.createElement("input", { type: "number", className: "form-input", defaultValue: 25 })), /* @__PURE__ */ React14.createElement("div", { className: "form-group" }, /* @__PURE__ */ React14.createElement("label", { className: "form-label" }, "Store Announcement Banner"), /* @__PURE__ */ React14.createElement("input", { type: "text", className: "form-input", defaultValue: "\u{1F1E6}\u{1F1EA} Complimentary Luxury UAE Express Delivery on all orders above 150 AED | Use code: MISTY10" })), /* @__PURE__ */ React14.createElement("button", { className: "btn-gold", onClick: () => alert("Settings saved successfully.") }, /* @__PURE__ */ React14.createElement("span", null, "Save Atelier Settings")))))), isProductModalOpen && /* @__PURE__ */ React14.createElement("div", { className: "modal-overlay", onClick: () => setIsProductModalOpen(false) }, /* @__PURE__ */ React14.createElement("div", { className: "auth-modal-content", style: { maxWidth: "640px" }, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React14.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" } }, /* @__PURE__ */ React14.createElement("h3", { style: { fontFamily: "var(--font-serif)", fontSize: "1.3rem", color: "#fff" } }, editingProduct ? "Edit Perfume Listing" : "Add New Luxury Flacon"), /* @__PURE__ */ React14.createElement("button", { className: "modal-close-btn", onClick: () => setIsProductModalOpen(false) }, "\u2715")), /* @__PURE__ */ React14.createElement("form", { onSubmit: handleSaveProduct }, /* @__PURE__ */ React14.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" } }, /* @__PURE__ */ React14.createElement("div", { className: "form-group" }, /* @__PURE__ */ React14.createElement("label", { className: "form-label" }, "Perfume Name (English) *"), /* @__PURE__ */ React14.createElement(
    "input",
    {
      type: "text",
      required: true,
      className: "form-input",
      value: productForm.name,
      onChange: (e) => setProductForm({ ...productForm, name: e.target.value })
    }
  )), /* @__PURE__ */ React14.createElement("div", { className: "form-group" }, /* @__PURE__ */ React14.createElement("label", { className: "form-label" }, "Arabic Name *"), /* @__PURE__ */ React14.createElement(
    "input",
    {
      type: "text",
      required: true,
      className: "form-input",
      value: productForm.arabicName,
      onChange: (e) => setProductForm({ ...productForm, arabicName: e.target.value })
    }
  ))), /* @__PURE__ */ React14.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "14px" } }, /* @__PURE__ */ React14.createElement("div", { className: "form-group" }, /* @__PURE__ */ React14.createElement("label", { className: "form-label" }, "Regular Price (AED) *"), /* @__PURE__ */ React14.createElement(
    "input",
    {
      type: "number",
      required: true,
      className: "form-input",
      value: productForm.originalPrice,
      onChange: (e) => setProductForm({ ...productForm, originalPrice: e.target.value })
    }
  )), /* @__PURE__ */ React14.createElement("div", { className: "form-group" }, /* @__PURE__ */ React14.createElement("label", { className: "form-label" }, "Offer / Sale Price (AED) *"), /* @__PURE__ */ React14.createElement(
    "input",
    {
      type: "number",
      required: true,
      className: "form-input",
      value: productForm.price,
      onChange: (e) => setProductForm({ ...productForm, price: e.target.value })
    }
  )), /* @__PURE__ */ React14.createElement("div", { className: "form-group" }, /* @__PURE__ */ React14.createElement("label", { className: "form-label" }, "Stock Units *"), /* @__PURE__ */ React14.createElement(
    "input",
    {
      type: "number",
      required: true,
      className: "form-input",
      value: productForm.stock,
      onChange: (e) => setProductForm({ ...productForm, stock: e.target.value })
    }
  ))), /* @__PURE__ */ React14.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" } }, /* @__PURE__ */ React14.createElement("div", { className: "form-group" }, /* @__PURE__ */ React14.createElement("label", { className: "form-label" }, "Category"), /* @__PURE__ */ React14.createElement(
    "select",
    {
      className: "form-select",
      value: productForm.category,
      onChange: (e) => setProductForm({ ...productForm, category: e.target.value })
    },
    categories.filter((c) => c !== "All Fragrances").map((c) => /* @__PURE__ */ React14.createElement("option", { key: c, value: c, style: { background: "#110811", color: "#fff" } }, c))
  )), /* @__PURE__ */ React14.createElement("div", { className: "form-group" }, /* @__PURE__ */ React14.createElement("label", { className: "form-label" }, "Flacon Image"), /* @__PURE__ */ React14.createElement(
    "select",
    {
      className: "form-select",
      value: productForm.image,
      onChange: (e) => setProductForm({ ...productForm, image: e.target.value })
    },
    /* @__PURE__ */ React14.createElement("option", { value: "/images/woody-rose.png" }, "Woody Rose (Official Image)"),
    /* @__PURE__ */ React14.createElement("option", { value: "/images/royal-amber-oud.jpg" }, "Royal Amber Oud"),
    /* @__PURE__ */ React14.createElement("option", { value: "/images/noir-de-bakhoor.jpg" }, "Noir De Bakhoor"),
    /* @__PURE__ */ React14.createElement("option", { value: "/images/imperial-musk-blanc.jpg" }, "Imperial Musk Blanc")
  ))), /* @__PURE__ */ React14.createElement("div", { className: "form-group" }, /* @__PURE__ */ React14.createElement("label", { className: "form-label" }, "Description"), /* @__PURE__ */ React14.createElement(
    "textarea",
    {
      rows: 2,
      className: "form-input",
      value: productForm.description,
      onChange: (e) => setProductForm({ ...productForm, description: e.target.value })
    }
  )), /* @__PURE__ */ React14.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" } }, /* @__PURE__ */ React14.createElement("div", { className: "form-group" }, /* @__PURE__ */ React14.createElement("label", { className: "form-label" }, "Top Notes (comma-separated)"), /* @__PURE__ */ React14.createElement(
    "input",
    {
      type: "text",
      className: "form-input",
      value: productForm.topNotes,
      onChange: (e) => setProductForm({ ...productForm, topNotes: e.target.value })
    }
  )), /* @__PURE__ */ React14.createElement("div", { className: "form-group" }, /* @__PURE__ */ React14.createElement("label", { className: "form-label" }, "Heart Notes"), /* @__PURE__ */ React14.createElement(
    "input",
    {
      type: "text",
      className: "form-input",
      value: productForm.heartNotes,
      onChange: (e) => setProductForm({ ...productForm, heartNotes: e.target.value })
    }
  )), /* @__PURE__ */ React14.createElement("div", { className: "form-group" }, /* @__PURE__ */ React14.createElement("label", { className: "form-label" }, "Base Notes"), /* @__PURE__ */ React14.createElement(
    "input",
    {
      type: "text",
      className: "form-input",
      value: productForm.baseNotes,
      onChange: (e) => setProductForm({ ...productForm, baseNotes: e.target.value })
    }
  ))), /* @__PURE__ */ React14.createElement("button", { type: "submit", className: "btn-gold", style: { width: "100%", marginTop: "10px" } }, /* @__PURE__ */ React14.createElement("span", null, editingProduct ? "Save Perfume Changes" : "Create Perfume Listing"))))));
};

// src/App.jsx
function App() {
  const [products, setProducts] = useState9(() => {
    const saved = localStorage.getItem("misty_products");
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });
  const [categories, setCategories] = useState9(() => {
    const saved = localStorage.getItem("misty_categories");
    return saved ? JSON.parse(saved) : INITIAL_CATEGORIES;
  });
  const [orders, setOrders] = useState9(() => {
    const saved = localStorage.getItem("misty_orders");
    return saved ? JSON.parse(saved) : INITIAL_ORDERS;
  });
  const [cart, setCart] = useState9(() => {
    const saved = localStorage.getItem("misty_cart");
    return saved ? JSON.parse(saved) : [];
  });
  const [wishlist, setWishlist] = useState9(() => {
    const saved = localStorage.getItem("misty_wishlist");
    return saved ? JSON.parse(saved) : ["woody-rose"];
  });
  const [currentUser, setCurrentUser] = useState9(() => {
    const saved = localStorage.getItem("misty_user");
    return saved ? JSON.parse(saved) : null;
  });
  const [registeredUsers, setRegisteredUsers] = useState9(() => {
    const saved = localStorage.getItem("misty_registered_users");
    return saved ? JSON.parse(saved) : [
      {
        email: DEFAULT_ADMIN_CREDENTIALS.email,
        password: DEFAULT_ADMIN_CREDENTIALS.password,
        name: "Store Director (UAE)",
        role: "admin",
        phone: "+971 4 800 6478",
        emirate: "Dubai",
        address: "Downtown Atelier, Dubai"
      },
      {
        email: "customer@gmail.com",
        password: "password123",
        name: "Hamdan Al Nuaimi",
        role: "customer",
        phone: "+971 50 892 4110",
        emirate: "Dubai",
        address: "Villa 42, Jumeirah 2, Dubai"
      }
    ];
  });
  const [currentView, setCurrentView] = useState9("store");
  const [isCartOpen, setIsCartOpen] = useState9(false);
  const [isAuthOpen, setIsAuthOpen] = useState9(false);
  const [authNotice, setAuthNotice] = useState9("");
  const [isProfileOpen, setIsProfileOpen] = useState9(false);
  const [quickViewProduct, setQuickViewProduct] = useState9(null);
  const [toastMessage, setToastMessage] = useState9(null);
  useEffect(() => {
    localStorage.setItem("misty_products", JSON.stringify(products));
  }, [products]);
  useEffect(() => {
    localStorage.setItem("misty_categories", JSON.stringify(categories));
  }, [categories]);
  useEffect(() => {
    localStorage.setItem("misty_orders", JSON.stringify(orders));
  }, [orders]);
  useEffect(() => {
    localStorage.setItem("misty_cart", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    localStorage.setItem("misty_wishlist", JSON.stringify(wishlist));
  }, [wishlist]);
  useEffect(() => {
    localStorage.setItem("misty_user", JSON.stringify(currentUser));
  }, [currentUser]);
  useEffect(() => {
    localStorage.setItem("misty_registered_users", JSON.stringify(registeredUsers));
  }, [registeredUsers]);
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };
  const handleAddToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.id === product.id && item.size === product.size
      );
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
    showToast(`Added ${product.name} (${product.size}) to your bag`);
    setIsCartOpen(true);
  };
  const handleUpdateCartQuantity = (id, size, quantity) => {
    if (quantity <= 0) {
      handleRemoveCartItem(id, size);
      return;
    }
    setCart((prev) => prev.map(
      (item) => item.id === id && item.size === size ? { ...item, quantity } : item
    ));
  };
  const handleRemoveCartItem = (id, size) => {
    setCart((prev) => prev.filter((item) => !(item.id === id && item.size === size)));
  };
  const handleClearCart = () => {
    setCart([]);
  };
  const handleToggleWishlist = (product) => {
    if (wishlist.includes(product.id)) {
      setWishlist(wishlist.filter((id) => id !== product.id));
      showToast(`Removed from Wishlist`);
    } else {
      setWishlist([...wishlist, product.id]);
      showToast(`Added ${product.name} to your Wishlist`);
    }
  };
  const handleLogin = (email, password) => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanPass = password.trim();
    if ((cleanEmail === DEFAULT_ADMIN_CREDENTIALS.email || cleanEmail === "admin@mistymemories.ae" || cleanEmail === "admin@misty.ae") && (cleanPass === DEFAULT_ADMIN_CREDENTIALS.password || cleanPass === "admin")) {
      const adminObj = {
        email: cleanEmail,
        name: "Store Director (UAE)",
        role: "admin",
        phone: "+971 4 800 6478",
        emirate: "Dubai"
      };
      setCurrentUser(adminObj);
      setCurrentView("admin");
      showToast("Welcome, Director. Admin portal loaded.");
      return { success: true };
    }
    const foundUser = registeredUsers.find(
      (u) => u.email.toLowerCase() === cleanEmail && u.password === cleanPass
    );
    if (foundUser) {
      setCurrentUser(foundUser);
      if (foundUser.role === "admin") {
        setCurrentView("admin");
      }
      showToast(`Welcome back, ${foundUser.name}!`);
      return { success: true };
    }
    return { success: false, message: "Invalid credentials. Please verify your email and password." };
  };
  const handleRegister = (newUserData) => {
    const cleanEmail = newUserData.email.trim().toLowerCase();
    const exists = registeredUsers.some((u) => u.email.toLowerCase() === cleanEmail);
    if (exists) {
      return { success: false, message: "An account with this email already exists." };
    }
    const newUser = {
      ...newUserData,
      role: "customer"
    };
    setRegisteredUsers([...registeredUsers, newUser]);
    setCurrentUser(newUser);
    showToast(`Account created! Welcome to Misty Memories, ${newUser.name}.`);
    return { success: true };
  };
  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentView("store");
    showToast("Signed out successfully.");
  };
  const handlePlaceOrder = (newOrder) => {
    setOrders([newOrder, ...orders]);
    setCart([]);
    setIsCartOpen(false);
    showToast(`Order ${newOrder.id} placed! Complimentary UAE delivery initiated.`);
    setIsProfileOpen(true);
  };
  const heroProduct = products.find((p) => p.id === "woody-rose") || products[0];
  const userOrders = currentUser ? orders.filter((o) => o.customerEmail?.toLowerCase() === currentUser.email?.toLowerCase()) : [];
  return /* @__PURE__ */ React15.createElement("div", { className: "misty-app" }, toastMessage && /* @__PURE__ */ React15.createElement(
    "div",
    {
      style: {
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999,
        background: "var(--bg-card)",
        backdropFilter: "blur(20px)",
        border: "1px solid var(--gold-primary)",
        color: "#fff",
        padding: "14px 22px",
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-lg), 0 0 25px rgba(212,175,55,0.3)",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        animation: "fadeIn 0.3s ease-out"
      }
    },
    /* @__PURE__ */ React15.createElement("div", { style: { color: "var(--gold-light)" } }, /* @__PURE__ */ React15.createElement(IconCheck, { size: 20 })),
    /* @__PURE__ */ React15.createElement("span", { style: { fontSize: "0.88rem", fontFamily: "var(--font-sans)", fontWeight: 500 } }, toastMessage)
  ), currentView === "admin" && currentUser && currentUser.role === "admin" ? /* @__PURE__ */ React15.createElement(
    AdminPortal,
    {
      products,
      onUpdateProducts: setProducts,
      categories,
      onUpdateCategories: setCategories,
      orders,
      onUpdateOrders: setOrders,
      onBackToStore: () => setCurrentView("store"),
      onLogout: handleLogout
    }
  ) : /* @__PURE__ */ React15.createElement(React15.Fragment, null, /* @__PURE__ */ React15.createElement(
    Navbar,
    {
      cartCount: cart.reduce((sum, item) => sum + item.quantity, 0),
      wishlistCount: wishlist.length,
      currentUser,
      onOpenCart: () => setIsCartOpen(true),
      onOpenWishlist: () => {
        showToast(`You have ${wishlist.length} perfumes in your wishlist.`);
        const catalogEl = document.getElementById("catalog");
        if (catalogEl) catalogEl.scrollIntoView({ behavior: "smooth" });
      },
      onOpenAuth: (mode = "login") => {
        setAuthNotice("");
        setIsAuthOpen(true);
      },
      onOpenProfile: () => setIsProfileOpen(true),
      onOpenAdmin: () => setCurrentView("admin"),
      onLogout: handleLogout,
      currentView,
      onNavigateHome: () => window.scrollTo({ top: 0, behavior: "smooth" })
    }
  ), /* @__PURE__ */ React15.createElement("main", null, /* @__PURE__ */ React15.createElement(
    Hero,
    {
      heroProduct,
      onAddToCart: handleAddToCart,
      onQuickView: (p) => setQuickViewProduct(p)
    }
  ), /* @__PURE__ */ React15.createElement(NotesPyramid, null), /* @__PURE__ */ React15.createElement(
    ProductCatalog,
    {
      products,
      categories,
      onAddToCart: handleAddToCart,
      onQuickView: (p) => setQuickViewProduct(p),
      wishlistIds: wishlist,
      onToggleWishlist: handleToggleWishlist
    }
  ), /* @__PURE__ */ React15.createElement(BrandStory, null)), /* @__PURE__ */ React15.createElement(Footer, null), /* @__PURE__ */ React15.createElement(
    QuickViewModal,
    {
      product: quickViewProduct,
      isOpen: !!quickViewProduct,
      onClose: () => setQuickViewProduct(null),
      onAddToCart: handleAddToCart
    }
  ), /* @__PURE__ */ React15.createElement(
    CartDrawer,
    {
      isOpen: isCartOpen,
      onClose: () => setIsCartOpen(false),
      cartItems: cart,
      onUpdateQuantity: handleUpdateCartQuantity,
      onRemoveItem: handleRemoveCartItem,
      onClearCart: handleClearCart,
      currentUser,
      onRequireAuth: (msg) => {
        setAuthNotice(msg);
        setIsCartOpen(false);
        setIsAuthOpen(true);
      },
      onPlaceOrder: handlePlaceOrder
    }
  ), /* @__PURE__ */ React15.createElement(
    AuthModal,
    {
      isOpen: isAuthOpen,
      onClose: () => setIsAuthOpen(false),
      customNotice: authNotice,
      onLoginSuccess: handleLogin,
      onRegisterSuccess: handleRegister
    }
  ), /* @__PURE__ */ React15.createElement(
    UserProfileModal,
    {
      isOpen: isProfileOpen,
      onClose: () => setIsProfileOpen(false),
      currentUser,
      userOrders,
      onUpdateUser: (updated) => {
        setCurrentUser(updated);
        setRegisteredUsers((prev) => prev.map((u) => u.email === updated.email ? updated : u));
        showToast("Profile information saved.");
      },
      onLogout: handleLogout
    }
  )));
}
var App_default = App;

// src/main.jsx
createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ React.createElement(StrictMode, null, /* @__PURE__ */ React.createElement(App_default, null))
);
