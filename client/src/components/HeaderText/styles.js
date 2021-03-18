import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignContent: 'space-between',
    backgroundColor: theme.palette.primary.main,
    justify: "center",
    padding: 10,
    marginBottom: 40,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
}));