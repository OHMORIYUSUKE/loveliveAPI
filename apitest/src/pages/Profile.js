import axios from 'axios';

import React, { useState,useEffect } from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { useParams } from 'react-router-dom';

import ProfileCard from '../components/ProfileCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

import aqoursImage from '../images/unit_aqours.png'
import msImage from '../images/unit_ms.png'
import nijigasakiImage from '../images/unit_nijigasaki.png'

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
    <>
      <div style={{ position: 'absolute', top: 0, width: '100%' }}>
        <Header />
        <LinearProgress />
      </div>
    </>
    );
  }

  function setGroupImege(groupsName){
    if(groupsName === 'aqours'){
      const groupsImage = aqoursImage;
      return groupsImage;
    }else if(groupsName === 'nizi'){
      const groupsImage = nijigasakiImage;
      return groupsImage;
    }else if(groupsName === 'myu-z'){
      const groupsImage = msImage;
      return groupsImage;
    }
  }

  return (
    <>      
    <Header />
    <div style={{textAlign: 'center',marginTop: '20px'}}>
      <img src={setGroupImege(posts[0].groups)} alt='画像'/>
    </div>
      <Grid container alignItems="center" justify="center">
        {posts.map((post) => (
          <>      
            <Grid item md={3} style={{margin:'10px'}}>
              <ProfileCard
                name={post.name} 
                groups={post.groups}
                CV={post.CV}  
                grade={post.grade} 
                description={post.description}
                birthday={post.birthday}
                bloodType={post.bloodType}
                height={post.height}
                image={post.image}
                B={post.B}
                W={post.W}
                H={post.H}
              />
            </Grid>
          </>
        ))}
      </Grid>
      <div style={{textAlign: 'center',fontSize: 'large',margin: '10px'}}>
        <Button　href='/' size='large' color='primary'>戻る</Button>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
