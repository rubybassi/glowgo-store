import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { useContext } from "react";
import SiteContext from "../../SiteContext";

export default function AddressForm() {
  const { shipping, onShipping } = useContext(SiteContext);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstname"
            label="First name"
            fullWidth
            autoComplete="given-name"
            value={shipping.firstname || ""}
            onChange={onShipping}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="surname"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            value={shipping.surname || ""}
            onChange={onShipping}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            value={shipping.address1 || ""}
            onChange={onShipping}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            value={shipping.address2 || ""}
            onChange={onShipping}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            value={shipping.city || ""}
            onChange={onShipping}

          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="postcode"
            label="Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            value={shipping.postcode || ""}
            onChange={onShipping}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}