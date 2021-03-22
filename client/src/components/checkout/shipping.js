import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { useContext } from "react";
import SiteContext from "../../SiteContext";

export default function AddressForm() {
  const { shipping, setShipping } = useContext(SiteContext);

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
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            value={shipping.firstname}
            onChange={(e) => setShipping({...shipping, firstname: e.target.value})}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            value={shipping.surname}
            onChange={(e) => setShipping({...shipping, surname: e.target.value})}
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
            value={shipping.address1}
            onChange={(e) => setShipping({...shipping, address1: e.target.value})}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            value={shipping.address2}
            onChange={(e) => setShipping({...shipping, address2: e.target.value})}
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
            value={shipping.city}
            onChange={(e) => setShipping({...shipping, city: e.target.value})}

          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            value={shipping.postcode}
            onChange={(e) => setShipping({...shipping, postcode: e.target.value})}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}