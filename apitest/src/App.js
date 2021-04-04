import './App.css';

import axios from 'axios';

import React, { useState } from 'react';

import PostCard from './components/PostCard';

function App() {
  const [posts, setPosts] = useState([]);
  // GET通信
  axios.get('http://utan.php.xdomain.jp/lovelivedatabase/api.php?groups=all')

  // thenで成功した場合の処理をかける
  .then(response => {
      // console.log('status:', response.status); // 200
      // console.log('body:', response.data);     // response body.

      setPosts(response.data);
  // catchでエラー時の挙動を定義する
  }).catch(err => {
      console.log('err:', err);
  });

  console.log(posts);

  return (
    <>
    {posts.map((post) => (
      <>
        <PostCard 
          name={post.name} 
          CV={post.CV}  
          grade={post.grade} 
          birthday={post.birthday}
          bloodType={post.bloodType}
          height={post.height}
          image={post.image}
          />
      </>
      ))}
    </>
  );
}

export default App;
