import axios from 'axios';

import React, { useState,useEffect } from 'react';


import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

import { useParams } from 'react-router-dom';


function Profile() {
  const params = useParams();

  const id = params['id'];

  console.log(id);

  const [posts, setPosts] = useState([]);
  
  // 無限ループを回避する
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('http://utan.php.xdomain.jp/lovelivedatabase/api.php?id='+id);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [id]);
  
  console.log(posts);

  if(posts.length === 0){
    return(
    <div style={{ position: 'absolute', top: 0, width: '100%' }}>
      <LinearProgress />
    </div>
    );
  }

  const style = {
    display:"flex",/* flexbox */
    justifyContent:"center", /* 水平方向 */
    alignItems: "center", /* 垂直方向 */
  }
  const image ={
    width: '600px',
  }
  const description ={
    width: '300px',
  }
//const style ={}
//const image ={}
  return (
    <>      
    <h1 style={{textAlign:'center'}}>メンバー詳細</h1>
        {posts.map((post) => (
        <>      
            <div style={style}>
                <div>
                    <h2>{post.name}</h2>
                    <p>CV:{post.CV}</p>
                    <p>{post.grade}年生</p>
                    <p>{post.birthday}生まれ</p>
                    <p>{post.bloodType}型</p>
                    <p>{post.height}cm</p>
                    <p>B:{post.B} W:{post.W} H:{post.H}</p>
                </div>
                <img style={image} src={post.image} alt='画像'/>
                <p style={description}>{post.description}</p>
            </div>
            <div style={{textAlign: 'center',fontSize: 'large'}}>
            <a href='/'>戻る</a>
            </div>
        </>
        ))}
    </>
  );
}

export default Profile;
