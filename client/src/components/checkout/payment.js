import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useContext } from "react";
import SiteContext from "../../SiteContext";

export default function PaymentForm() {
  const { payment, setPayment} = useContext(SiteContext);
  // const [payment, setPayment] = useState({
  //   number: "",
  //   name: "",
  //   expiry: "",
  //   cvv: "",
  // });

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            value={payment.name}
            onChange={(e) => setPayment({ ...payment, name: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            value={payment.number}
            onChange={(e) => setPayment({ ...payment, number: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            value={payment.expiry}
            onChange={(e) => setPayment({ ...payment, expiry: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            value={payment.cvv}
            onChange={(e) => setPayment({ ...payment, cvv: e.target.value })}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
