const brands = [
  {
    id: 1,
    name: 'Lindt & Sprungli',
  },
  {
    id: 2,
    name: 'Ferrero',
  },
  {
    id: 3,
    name: 'Ghirardelli',
  },
];

const chocolates = [
  {
    id: 1,
    name: 'Mint Intense',
    brandId: 1,
  },
  {
    id: 2,
    name: 'White Coconut',
    brandId: 1,
  },
  {
    id: 3,
    name: 'Mon Chéri',
    brandId: 2,
  },
  {
    id: 4,
    name: 'Mounds',
    brandId: 3,
  },
];

const all = {
  brands,
  chocolates,
};

module.exports = { all, chocolates, brands };
