export const PLANS = [
  {
    title: "Free",
    price: 0,
    currency: "$",
    features: [
      "Full HD Resolution",
      "Watch only free content",
      "Some commercials",
    ],
    highlight: false,
  },
  {
    title: "Premium",
    price: 4.99,
    currency: "$",
    features: [
      "Full HD Resolution",
      "Watch entire catalog",
      "Recommendations",
      "Always Ad-free",
    ],
    highlight: true,
  },
];

export const PLANS_REV = [...PLANS.slice().reverse()];
