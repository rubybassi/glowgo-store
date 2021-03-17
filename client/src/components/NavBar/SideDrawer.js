import React from "react";
import { List, Divider, ListItem, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./styles";
import { useContext } from "react";
import SiteContext from "../../SiteContext";

const SideDrawer = ({ toggleDrawer }) => {
  const classes = useStyles();
  const {
    categories,
    brands,
    getCategoryById,
    getBrandById,
    getAllProducts,
  } = useContext(SiteContext);

  return (
    <div>
      <CloseIcon
        className={classes.icon}
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      />
      <List className={classes.listLink}>
        <Link to={"/product/all"}>
          <ListItem button button onClick={getAllProducts}>
            <ListItemText primary="All Products" className={classes.link} />
          </ListItem>
        </Link>

        <Divider />

        <ListItem button>
          <ListItemText primary="Categories" />
        </ListItem>
        {categories.map((category) => (
          <Link to={`/product/category/${category._id}`} key={category._id}>
            <ListItem button onClick={() => getCategoryById(category._id)}>
              <ListItemText primary={category.name} className={classes.link} />
            </ListItem>
          </Link>
        ))}
      </List>

      <Divider />

      <List className={classes.listLink}>
        <ListItem button>
          <ListItemText primary="Brands" />
        </ListItem>
        {brands.map((brand) => (
          <Link to={`/product/brand/${brand._id}`} key={brand._id}>
            <ListItem button onClick={() => getBrandById(brand._id)}>
              <ListItemText primary={brand.name} className={classes.link} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
};

export default SideDrawer;
