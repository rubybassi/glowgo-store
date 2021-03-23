import { makeStyles, fade } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.50),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.50),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",

    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(2, 1, 2, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    backgroundColor: fade(theme.palette.common.white, 0.60),
    width: 100,
    [theme.breakpoints.up("md")]: {
     width: "500px",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  link: {
    textDecoration: "none",
    color: theme.palette.primary.contrastText,
  },
  list: {
    width: 250,
  },
  icon: {
    color: "#bdb2b6",
    alignItems:"flex-start"
  },
  listLink: {
    textDecoration: "none",
    color: theme.palette.primary.dark,
  },
  name: {
    fontFamily: 'Shadows Into Light',
    fontWeight: "100",
    fontStyle: 'italic',
    fontSize: '1.3rem',
    paddingTop: 10
  }
}));