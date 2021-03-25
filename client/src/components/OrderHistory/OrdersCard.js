import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionActions from "@material-ui/core/AccordionActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20,
  },
  details: {
    alignItems: "center",
  },
  column: {
    flexBasis: "33.33%",
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const OrdersCard = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1c-content"
            id="panel1c-header"
          >
            <div className={classes.column}>
              <Typography className={classes.heading}>
                Date 23/06/2021
              </Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>
                Order Number 1223ddq122334
              </Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>
                Order Total £129.99
              </Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails className={classes.details}>
            <Grid container>
              <Grid item sm={4}>
                <Typography>Shipping Address</Typography>
                <Typography>Address1</Typography>
                <Typography>Address2</Typography>
                <Typography>City</Typography>
                <Typography>Postcode</Typography>
              </Grid>
              <Grid item sm={4}>
                <Typography>Item name</Typography>
                <Typography>Item name</Typography>
              </Grid>
              <Grid item sm={2}>
                <Typography align="right">price</Typography>
                <Typography align="right">price</Typography>
              </Grid>
              <Grid item sm={4}>
                <Typography>Card Payment</Typography>
                <Typography>xxxx xxxx xxxx 2123</Typography>
              </Grid>
            </Grid>
          </AccordionDetails>
          <Divider />
          <AccordionActions>
            <Button size="small">Re-order</Button>
          </AccordionActions>
        </Accordion>
      </div>
    </>
  );
};

export default OrdersCard;
