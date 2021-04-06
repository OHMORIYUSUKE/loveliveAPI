import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 320,
  },
  pos: {
    marginBottom: 10,
  },
  underDescription:{
    marginTop: 10,
    marginRight: 15,
    display: 'inline-block',
  },
});

const PostCard =(props)=>{
  const classes = useStyles();
  return (
    <>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.image}
              title={props.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              {props.name}
              <Typography className={classes.pos} color="textSecondary">
                CV : {props.CV}
              </Typography>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.description}
              </Typography>
              <Typography variant="body2" className={classes.underDescription} component="p">
                {props.grade}年生
              </Typography>
              <Typography variant="body2" className={classes.underDescription} component="p">
                {props.birthday}生まれ
              </Typography>
              <Typography variant="body2" className={classes.underDescription} component="p">
                {props.bloodType}型
              </Typography>
              <Typography variant="body2" className={classes.underDescription} component="p">
                身長{props.height}cm
              </Typography>
              <Typography variant="body2" className={classes.underDescription} component="p">
                B:{props.B}cm
              </Typography>
              <Typography variant="body2" className={classes.underDescription} component="p">
                W:{props.W}cm
              </Typography>
              <Typography variant="body2" className={classes.underDescription} component="p">
                H:{props.H}cm
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
    </>
  );
}

export default PostCard;
