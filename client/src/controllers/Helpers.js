const Helpers = {
  GetTotalSum: (items) => {
    const sum = items?.reduce((amount, items) => items.price + amount, 0);
    const roundedSum = Math.round(sum * 100) / 100;
    return roundedSum.toFixed(2);
  },
};

export default Helpers;