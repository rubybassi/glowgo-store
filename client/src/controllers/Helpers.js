import { toast } from "react-toastify";

const Helpers = {
  GetTotalSum: (items) => {
    const sum = items?.reduce((amount, items) => items.price + amount, 0);
    const roundedSum = Math.round(sum * 100) / 100;
    return roundedSum.toFixed(2);
  },

  loginValidation: (shipping, payment) => {
    if (
      shipping.firstname === "" ||
      shipping.firstname === null ||
      shipping.firstname.length < 3
    ) {
      return false;
    }
    if (
      shipping.surname === "" ||
      shipping.surname === null ||
      shipping.surname.length < 3
    ) {
      return false;
    }
    if (shipping.address1 === "" || shipping.address1 === null) {
      return false;
    }
    if (shipping.city === "" || shipping.city === null) {
      return false;
    }
    if (shipping.postcode === "" || shipping.postcode === null) {
      return false;
    }
    if (payment.name === "" || payment.name === null) {
      return false;
    }
    if (payment.number.length < 16) {
      return false;
    }
    if (payment.expiry.length < 6) {
      return false;
    }
    if (payment.cvv.length < 3) {
      return false;
    }
    return true;
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
