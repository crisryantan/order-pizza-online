export function formatPrice(price) {
  return price.toLocaleString('en-GB', {
    style: 'currency',
    currency: 'GBP',
  });
}
