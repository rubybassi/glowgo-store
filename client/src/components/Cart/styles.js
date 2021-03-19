import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  image: {
    width: '50%',
  },
  cartSummary: {
    backgroundColor: theme.palette.secondary.main,
    padding: 20,
  },
  typography: {
    textAlign: 'right',
  },
  divider: {
    marginBottom: 20,
  },
  button: {
    width: '100%',
    padding: 10,
    marginTop: 20,
    marginBottom: 30,
    borderColor: theme.palette.primary.dark,
  },
  checkoutButton: {
    width: '100%',
    padding: 10,
    marginTop: 20,
    marginBottom: 30,
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.light,
  },
}));