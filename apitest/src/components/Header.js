import React from 'react';

import { AppBar,Toolbar,Typography,Link } from '@material-ui/core';

function Header() {
  const style = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    color: 'white',
    height: 57,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  };
  return (
    <>      
      <AppBar position="static" elevation={0} style={style}>
        <Toolbar>
            <Link underline='none' href="/">
              <Typography
                variant="h5"
                style={{ color: '#ffffff', fontWeight: 'bold' }}>
                ラブライブライブラリ
              </Typography>
            </Link>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
