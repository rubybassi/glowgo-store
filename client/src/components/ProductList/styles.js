import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    maxWidth: '100%'
  },
  media: {
    height: 0,
    paddingTop: '90%', //decide on aspect ratio
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.dark,
  },
  description: {
    noWrap: true
  },
  btn: {
    paddingLeft: 0,
  },
  imgContainer: {
    overflow: "hidden",
    paddingBottom: 10,
  }
}));