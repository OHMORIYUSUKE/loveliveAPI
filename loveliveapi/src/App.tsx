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
    [theme.breakpoints.down('sm')]: {
      minWidth: 100,
    },
  },
}));

function App() {
  const [posts, setPosts] = useState([]);

  const classes = useStyles();
  const [group, setGroup] = React.useState('');
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

  // ---
  const [grade, setGrade] = React.useState('');
  const [open2, setOpen2] = React.useState(false);

  const handleChange2 = (event:any) => {
    setGrade(event.target.value);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };

  // 選択メニュー2
  console.log(grade);

  // ---
  const [bloodType, setBloodType] = React.useState('');
  const [open3, setOpen3] = React.useState(false);

  const handleChange3 = (event:any) => {
    setBloodType(event.target.value);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const handleOpen3 = () => {
    setOpen3(true);
  };

  // 選択メニュー3
  console.log(bloodType);

  // 無限ループを回避する
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`http://utan.php.xdomain.jp/lovelivedatabase/api2.php?groups=${group}&grade=${grade}&bloodType=${bloodType}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [group,grade,bloodType]);
  
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

  if(posts[0]['message'] === 'noData'){
    return(
      <>
        <div style={{ position: 'absolute', top: 0, width: '100%' }}>
          <Header />
              <Grid container alignItems="center" justify="center" style={{marginBottom: '30px'}}>
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
                    <MenuItem value={''}>すべて</MenuItem>
                    <MenuItem value={'myu-z'}>μ’s</MenuItem>
                    <MenuItem value={'aqours'}>aqours</MenuItem>
                    <MenuItem value={'nizi'}>虹ヶ咲</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">学年</InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open2}
                    onClose={handleClose2}
                    onOpen={handleOpen2}
                    value={grade}
                    onChange={handleChange2}
                  >
                    <MenuItem value={''}>すべて</MenuItem>
                    <MenuItem value={'1'}>1年生</MenuItem>
                    <MenuItem value={'2'}>2年生</MenuItem>
                    <MenuItem value={'3'}>3年生</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">血液型</InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open3}
                    onClose={handleClose3}
                    onOpen={handleOpen3}
                    value={bloodType}
                    onChange={handleChange3}
                  >
                    <MenuItem value={''}>すべて</MenuItem>
                    <MenuItem value={'A'}>A</MenuItem>
                    <MenuItem value={'B'}>B</MenuItem>
                    <MenuItem value={'O'}>O</MenuItem>
                    <MenuItem value={'AB'}>AB</MenuItem>
                  </Select>
                </FormControl>
                <h3 style={{textAlign: 'center'}}>条件に一致するメンバーはいません。</h3>
              </Grid>
            </Grid>
        </div>
      </>
    );
  }

  return (
    <>      
      <Header />
        <Grid container alignItems="center" justify="center" style={{marginBottom: '30px'}}>
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
                  <MenuItem value={''}>すべて</MenuItem>
                  <MenuItem value={'myu-z'}>μ’s</MenuItem>
                  <MenuItem value={'aqours'}>aqours</MenuItem>
                  <MenuItem value={'nizi'}>虹ヶ咲</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">学年</InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open2}
                  onClose={handleClose2}
                  onOpen={handleOpen2}
                  value={grade}
                  onChange={handleChange2}
                >
                  <MenuItem value={''}>すべて</MenuItem>
                  <MenuItem value={'1'}>1年生</MenuItem>
                  <MenuItem value={'2'}>2年生</MenuItem>
                  <MenuItem value={'3'}>3年生</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">血液型</InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open3}
                  onClose={handleClose3}
                  onOpen={handleOpen3}
                  value={bloodType}
                  onChange={handleChange3}
                >
                  <MenuItem value={''}>すべて</MenuItem>
                  <MenuItem value={'A'}>A</MenuItem>
                  <MenuItem value={'B'}>B</MenuItem>
                  <MenuItem value={'O'}>O</MenuItem>
                  <MenuItem value={'AB'}>AB</MenuItem>
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
    </>
  );
}

export default App;
