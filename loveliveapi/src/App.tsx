import axios from 'axios';

import React, { useState,useEffect } from 'react';

import PostCard from './components/PostCard';

import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import Footer from './components/Footer';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
    marginBottom: 10,
    marginTop: 20,
  },
}));

function App() {
  const [posts, setPosts] = useState([]);

  const classes = useStyles();
  const [group, setGroup] = React.useState('all');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event:any) => {
    setGroup(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  // 選択メニュー
  console.log(group);

  // 無限ループを回避する
  useEffect(() => {
    (async () => {
      try {
        const groupFix = '?groups='+group;
        const res = await axios.get('http://utan.php.xdomain.jp/lovelivedatabase/api.php'+groupFix);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [group]);
  
  console.log(posts);

  if(posts.length === 0){
    return(
      <>
        <div style={{ position: 'absolute', top: 0, width: '100%' }}>
          <Header />
          <LinearProgress color='secondary' />
        </div>
      </>
    );
  }

  return (
    <>      
    <Header />
    <Grid container alignItems="center" justify="center">
      <Grid item md={9}>
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">グループ</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={group}
              onChange={handleChange}
            >
              <MenuItem value={'all'}>すべて</MenuItem>
              <MenuItem value={'myu-z'}>μ’s</MenuItem>
              <MenuItem value={'aqours'}>aqours</MenuItem>
              <MenuItem value={'nizi'}>虹ヶ咲</MenuItem>
            </Select>
        </FormControl>
        {/* <FormControl>はここに入れる。 */}
      </Grid>
    {posts.map((post,idx_i) => (
      <>
        <Grid item md={3} key={idx_i} style={{margin:'10px'}}>
        
          <PostCard 
            name={post['name']} 
            CV={post['CV']}
            image={post['image']}  
          />
          
        </Grid>
      </>
      ))}
      </Grid>
      <Footer/>
    </>
  );
}

export default App;
