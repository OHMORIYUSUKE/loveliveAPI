import './App.css';

import axios from 'axios';

import React, { useState,useEffect } from 'react';

import PostCard from './components/PostCard';

import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

function App() {
  const [posts, setPosts] = useState([]);

  // 無限ループを回避する
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('http://utan.php.xdomain.jp/lovelivedatabase/api.php?groups=all');
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  
  console.log(posts);

  if(posts.length === 0){
    return(
    <div style={{ position: 'absolute', top: 0, width: '100%' }}>
      <LinearProgress />
    </div>
    );
  }

  return (
    <>
    <Grid container alignItems="center" justify="center">
    {posts.map((post) => (
      <>
        <Grid item md={3} style={{margin:'10px'}}>
          <PostCard 
            name={post.name} 
            CV={post.CV}  
            grade={post.grade} 
            description={post.description}
            birthday={post.birthday}
            bloodType={post.bloodType}
            height={post.height}
            image={post.image}
          />
        </Grid>
      </>
      ))}
      </Grid>
    </>
  );
}

export default App;
