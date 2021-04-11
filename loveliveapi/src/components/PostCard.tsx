import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

type Props = {
    name: string;
    CV: string;
    image: string;
  };

  const PostCard: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <Link underline='none' style={{cursor: 'pointer'}}>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {props.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              CV:{props.CV}
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image={props.image}
          title={props.name}
        />
      </Card>
    </Link>
  );
}

export default PostCard;