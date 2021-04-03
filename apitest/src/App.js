import './App.css';

import axios from 'axios';

import React, { useState } from 'react';

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
        <p>{post.name}</p>
        <p>CV:{post.CV}</p>
        <p>{post.grade}年生</p>
        <p>{post.birthday}生まれ</p>
        <p>{post.bloodType}型</p>
        <p>{post.height}cm</p>
        <img style={{width:'200px'}} src={post.image} alt='画像'/>
      </>
      ))}
    </>
  );
}

export default App;
