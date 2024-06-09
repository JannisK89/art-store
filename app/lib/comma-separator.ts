export const commaSeparator = (price: number): string =>
  price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
