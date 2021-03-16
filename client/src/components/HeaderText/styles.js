import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    maxWidth: '100%'
  },
  media: {
    height: 0,
    paddingTop: '90%', //decide on aspect ratio
  },
  grid: {
    alignContent: 'space-between',
    backgroundColor: "pink"
  },
  image: {
    width: '56.25%', //16.9 aspect ratio
  }
}));