import { toast } from "react-toastify";

const Helpers = {
  GetTotalSum: (items) => {
    const sum = items?.reduce((amount, items) => items.price + amount, 0);
    const roundedSum = Math.round(sum * 100) / 100;
    return roundedSum.toFixed(2);
  },
  notify: (message) =>
  toast.dark(`${message}`, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  }),
};

export default Helpers;