import React from 'react';
import { makeStyles,createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

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
  underDescription:{
    marginTop: 10,
    marginRight: 15,
    display: 'inline-block',
    fontSize: '17px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px',
    },
  },
}));

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(0),
  },
}))(MuiDialogContent);

type Props = {
    name: string;
    CV: string;
    image: string;
    description: string;
    groups: string;
    grade: string;
    birthday: string;
    bloodType: string;
    height: string;
    B: string;
    W: string;
    H: string;
  };

  const PostCard: React.FC<Props> = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function setGroupName(groupsName:string){
    if(groupsName === 'aqours'){
      return 'Aqours';
    }else if(groupsName === 'nizi'){
      return '虹ヶ先学園スクールアイドル同好会';
    }else if(groupsName === 'myu-z'){
      return 'μ’s';
    }
  }

  return (
    <>
    <Link underline='none' onClick={handleClickOpen} style={{cursor: 'pointer'}}>
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
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          メンバー詳細
        </DialogTitle>
        <DialogContent dividers>   
        <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="480"
            image={props.image}
            title={props.name}
        /> 
        <div style={{margin: '20px'}}>
          <Typography component="h5" variant="h5">
              {props.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            CV:{props.CV}
          </Typography>
          <Typography gutterBottom className={classes.underDescription} component="p">
            {setGroupName(props.groups)}
          </Typography>
          <Typography gutterBottom style={{marginTop: '13px'}}>
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
        </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default PostCard;