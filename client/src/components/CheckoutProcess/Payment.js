import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import SiteContext from "../../SiteContext";

export default function PaymentForm() {
  const { payment, onPayment, errorMessage } = useContext(SiteContext);

  return (
    <React.Fragment>
      {errorMessage !== "" && <Typography component="h6" className={classes.error}>{errorMessage} </Typography>}
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            name="name"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            value={payment.name || ""}
            onChange={onPayment}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            name="number"
            label="Card number (16 digits)"
            fullWidth
            autoComplete="cc-number"
            value={payment.number || ""}
            onChange={onPayment}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            name="expiry"
            label="Expiry date (250221)"
            fullWidth
            autoComplete="cc-exp"
            value={payment.expiry || ""}
            onChange={onPayment}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            name="cvv"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            value={payment.cvv || ""}
            onChange={onPayment}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
