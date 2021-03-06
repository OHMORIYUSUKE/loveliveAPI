import { AppBar,Toolbar } from '@material-ui/core';
import DescriptionWindow from './DescriptionWindow';

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
              <DescriptionWindow />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
