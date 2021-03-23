import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/glowgo.png";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Badge,
  MenuItem,
  Menu,
  Drawer,
  Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
import SideDrawer from "./SideDrawer";
import { useContext } from "react";
import SiteContext from "../../SiteContext";

export default function NavBar() {
  const {
    userSearch,
    handleUserSearchInput,
    cartItems,
    userPayload,
  } = useContext(SiteContext);

  // @material ui styling props and functions
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  // user dropdown function - desktop
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link to={"/register"} className={classes.link}>
          <p>Register</p>
        </Link>
      </MenuItem>

      <MenuItem onClick={handleMenuClose}>
        <Link to={"/login"} className={classes.link}>
          <p>Login</p>
        </Link>
      </MenuItem>
    </Menu>
  );

  // user dropdown function - mobile
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link to={"/cart"} className={classes.link}>
          <IconButton aria-label="show cart items" color="inherit">
            <Badge badgeContent={cartItems?.length} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Link>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="user info"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  // drawer feature
  const [drawerOpened, setDrawerOpened] = useState(false);

  const toggleDrawer = (open) => (event) => {
    console.log("icon clicked");
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpened(open);
  };

  // main component
  return (
    <div className={classes.grow}>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <div></div>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={drawerOpened}
            onClose={toggleDrawer(false)}
          >
            <SideDrawer toggleDrawer={toggleDrawer} />
          </Drawer>
          <Link to={"/"} className={classes.link}>
            <img
              src={logo}
              alt="glowgo"
              height="100px"
              className={classes.image}
            />
          </Link>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              value={userSearch}
              onChange={handleUserSearchInput}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            
            {userPayload && (<Typography variant="h6" className={classes.name}>Hello {userPayload.user?.firstname}</Typography>)}

            <Link to={"/cart"} className={classes.link}>
              <IconButton aria-label="cart items" color="inherit">
                <Badge badgeContent={cartItems?.length} color="error">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </Link>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
