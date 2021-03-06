import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import OrderItemName from "./OrderItemName";
import OrderItemPrice from "./OrderItemPrice";
import Moment from 'react-moment';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingBottom: 20,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
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
  summary: {
    backgroundColor: theme.palette.secondary.main,
  }
}));

const OrdersCard = ({ order }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Accordion >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1c-content"
            id="panel1c-header"
            className={classes.summary}
          >
            <div className={classes.column}>
              <Typography className={classes.heading}>
                <strong>Date</strong> <Moment format='Do MMMM YYYY h:mm a'>{order?.createdAt}</Moment>
              </Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.heading}>
              <strong>Order No.</strong> {order?._id}
              </Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.heading} >
              <strong>Order Total</strong>  £{order?.orderTotal.toFixed(2)}
              </Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails className={classes.details}>
            <Grid container>
              <Grid item sm={4}>
                <Typography>Shipping Address</Typography>
                <Typography>{order?.shipping?.address1}</Typography>
                <Typography>{order?.shipping?.address2}</Typography>
                <Typography>{order?.shipping?.city}</Typography>
                <Typography>{order?.shipping?.postcode}</Typography>
              </Grid>
              <Grid item sm={4}>
                <OrderItemName item={order} />
              </Grid>
              <Grid item sm={2}>
                <OrderItemPrice item={order} />
              </Grid>
              <Grid item sm={4}>
                <br />
                <Typography>Card Payment</Typography>
                <Typography>xxxx xxxx xxxx 2123</Typography>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default OrdersCard;
