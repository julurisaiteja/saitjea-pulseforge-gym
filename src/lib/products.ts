import type { Product } from "./types";
export type { Product } from "./types";
export const COUPON = "FORGE30";
export const COUPON_OFF = 30;
export const BRAND = "PulseForge Gym";
export function formatPrice(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);
}
export const products: Product[] = [
  {
    "id": "pf-1",
    "name": "Forge Day Pass",
    "price": 25,
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",
    "tag": "Pass",
    "category": "Access",
    "specs": [
      "Open floor",
      "Locker"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Guest add",
        "priceDelta": 15
      }
    ],
    "faq": [
      {
        "q": "Towel?",
        "a": "Rent or bring."
      }
    ],
    "rating": 4.8,
    "reviewCount": 1204
  },
  {
    "id": "pf-2",
    "name": "Iron Slab Membership",
    "price": 89,
    "image": "https://images.unsplash.com/photo-1571902940322-297a0d3aa9f3?w=800",
    "tag": "Monthly",
    "category": "Membership",
    "specs": [
      "Unlimited classes",
      "Sauna"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Annual",
        "priceDelta": -200
      }
    ],
    "faq": [
      {
        "q": "Freeze?",
        "a": "30-day freeze once/year."
      }
    ],
    "rating": 4.9,
    "reviewCount": 567
  },
  {
    "id": "pf-3",
    "name": "Pulse HIIT Block",
    "price": 45,
    "image": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800",
    "tag": "Class",
    "category": "Classes",
    "specs": [
      "10 sessions",
      "Heart zones"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "20 pack",
        "priceDelta": 35
      }
    ],
    "faq": [
      {
        "q": "Beginners?",
        "a": "Scaled options every class."
      }
    ],
    "rating": 4.7,
    "reviewCount": 342
  },
  {
    "id": "pf-4",
    "name": "Recovery Cold Sleeve",
    "price": 35,
    "image": "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800",
    "tag": "Recovery",
    "category": "Recovery",
    "specs": [
      "15 min plunge",
      "Contrast guide"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Monthly unlimited",
        "priceDelta": 65
      }
    ],
    "faq": [
      {
        "q": "Medical?",
        "a": "Consult physician if unsure."
      }
    ],
    "rating": 4.6,
    "reviewCount": 98
  },
  {
    "id": "pf-5",
    "name": "Lifting Chalk Brick",
    "price": 12,
    "image": "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800",
    "tag": "Gear",
    "category": "Gear",
    "specs": [
      "Low dust",
      "Grip boost"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "3-pack",
        "priceDelta": 8
      }
    ],
    "faq": [
      {
        "q": "Mess?",
        "a": "Brick format — minimal."
      }
    ],
    "rating": 4.9,
    "reviewCount": 876
  },
  {
    "id": "pf-6",
    "name": "Trainer Strike Pack",
    "price": 199,
    "image": "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800",
    "tag": "PT",
    "category": "Training",
    "specs": [
      "5 sessions",
      "Program PDF"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "10 sessions",
        "priceDelta": 150
      }
    ],
    "faq": [
      {
        "q": "Nutrition?",
        "a": "Macro template included."
      }
    ],
    "rating": 4.8,
    "reviewCount": 211
  },
  {
    "id": "pf-7",
    "name": "Battle Rope Session",
    "price": 30,
    "image": "https://images.unsplash.com/photo-1599058945522-28d584b0313a?w=800",
    "tag": "Rope",
    "category": "Classes",
    "specs": [
      "45 min",
      "Coach led"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Private",
        "priceDelta": 40
      }
    ],
    "faq": [
      {
        "q": "Shoulder issues?",
        "a": "Low-impact alt offered."
      }
    ],
    "rating": 4.7,
    "reviewCount": 156
  },
  {
    "id": "pf-8",
    "name": "Forge Protein Crate",
    "price": 55,
    "image": "https://images.unsplash.com/photo-1593095948071-474c5cc2989f?w=800",
    "tag": "Fuel",
    "category": "Fuel",
    "specs": [
      "20 servings",
      "Whey isolate"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Vegan swap",
        "priceDelta": 0
      }
    ],
    "faq": [
      {
        "q": "Allergens?",
        "a": "See label — demo product."
      }
    ],
    "rating": 4.5,
    "reviewCount": 433
  },
  {
    "id": "pf-9",
    "name": "Open Mat Yoga Block",
    "price": 38,
    "image": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
    "tag": "Yoga",
    "category": "Classes",
    "specs": [
      "8 classes",
      "Mat rental"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Unlimited month",
        "priceDelta": 42
      }
    ],
    "faq": [
      {
        "q": "Hot room?",
        "a": "Standard temp studio."
      }
    ],
    "rating": 4.8,
    "reviewCount": 189
  },
  {
    "id": "pf-10",
    "name": "Competition Prep Lab",
    "price": 249,
    "image": "https://images.unsplash.com/photo-1581009146145-b5ef050c1499?w=800",
    "tag": "Lab",
    "category": "Training",
    "specs": [
      "8-week macro",
      "Weigh-in support"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Coach duo",
        "priceDelta": 120
      }
    ],
    "faq": [
      {
        "q": "Drug tested?",
        "a": "Natural division focus."
      }
    ],
    "rating": 4.9,
    "reviewCount": 47
  }
];
export const categories = Array.from(new Set(products.map((p) => p.category)));
