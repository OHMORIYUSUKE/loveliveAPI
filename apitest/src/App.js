import logo from './logo.svg';
import './App.css';

import axios from 'axios';

function App() {
  // GET通信
  axios.get('http://localhost/html/Blog/api2.php?grade=1')

  // thenで成功した場合の処理をかける
  .then(response => {
      console.log('status:', response.status); // 200
      console.log('body:', response.data);     // response body.

  // catchでエラー時の挙動を定義する
  }).catch(err => {
      console.log('err:', err);
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
