const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const map1 = prices.map((originalNumber) => ({
  price: originalNumber,
  salePrice: originalNumber / 2,
}));
console.log(map1);

const map2 = prices.map((originalNumber) => {
  const formattedPrice = originalNumber.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return { formattedPrice };
});

console.log(map2);
