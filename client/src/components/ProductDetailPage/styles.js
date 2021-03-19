import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
    marginBottom: 10,
  },
  media: {
    height: 500,
  },
  button: {
    width: '100%',
    padding: 10,
    marginTop: 20,
    marginBottom: 30,
    borderColor: theme.palette.primary.dark,
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.dark,
  },
  btn: {
    paddingLeft: 0,
  },
  description: {
    color: theme.palette.primary.contrastText,
    marginTop: 30,
  },
  divider: {
    color: theme.palette.primary.dark,
  }
}));