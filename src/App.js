import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const game = ['', '', '', '', '', '', '', '', '']
  const [board, setboard] = useState(game);
  const [x, setx] = useState(false);
  const [o, seto] = useState('o');

  // function randomnumber()
  // {
  //  var a= Math.random(seto)
  // console.log(a)
  // }

  function clickevent(q) {


    var string = Array.from(board)
    if (string[q])
      return;
    string[q] = x ? '0' : 'x';
    setboard(string);
    setx(!x);

  }
  function reset() {
    window.location.reload()
  }
  function win() {
    if (board[1] == 'x' && board[2] == 'x' && board[3] == 'x') {
      alert('x is win')
    }
    else if (board[4] == 'x' && board[5] == 'x' && board[6] == 'x') {
      alert('x is win')
    }
    else if (board[7] == 'x' && board[8] == 'x' && board[9] == 'x') {
      alert('x is win')
    }
    else if (board[1] == 'x' && board[5] == 'x' && board[9] == 'x') {
      alert('x is win')
    }
    else if (board[1] == 'x' && board[4] == 'x' && board[7] == 'x') {
      alert('x is win')
    }
    else if (board[3] == 'x' && board[6] == 'x' && board[9] == 'x') {
      alert('x is win')
    }
    else if (board[2] == 'x' && board[5] == 'x' && board[8] == 'x') {
      alert('x is win')
    }
    else if (board[1] == 'x' && board[4] == 'x' && board[7] == 'x') {
      alert('x is win')
    }
    else if (board[1] == '0' && board[2] == '0' && board[3] == '0') {
      alert('0 is win')
    }
    else if (board[4] == '0' && board[5] == '0' && board[6] == '0') {
      alert('0 is win')
    }
    else if (board[7] == '0' && board[8] == '0' && board[9] == '0') {
      alert('0 is win')
    }
    else if (board[1] == '0' && board[5] == '0' && board[9] == '0') {
      alert('0 is win')
    }
    else if (board[1] == '0' && board[4] == '0' && board[7] == '0') {
      alert('0 is win')
    }
    else if (board[3] == '0' && board[6] == '0' && board[9] == '0') {
      alert('0 is win')
    }
    else if (board[2] == '0' && board[5] == '0' && board[8] == '0') {
      alert('0 is win')
    }
    else if (board[1] == '0' && board[4] == '0' && board[7] == '0') {
      alert('0 is win')
    }
    else if ((board[1] == 'x' || board[1] == 'o') && (board[2] == 'x' || board[2] == 'o') && (board[3] == 'x' || board[3] == 'o') && (board[4] == 'x' || board[4] == 'o') && (board[5] == 'x' || board[5] == 'o') && (board[6] == 'x' || board[6] == 'o') && (board[7] == 'x' || board[7] == 'o') && (board[8] == 'x' || board[8] == 'o') && (board[9] == 'x' || board[9] == 'o')) {
      alert('match is tie  resert your game')
    }

  }


  return (
    <div className="App">

      <table align='center'>
        <tr>
          <td><input type="button" value={board[1]} onClick={() => { clickevent(1); win(); }} readonly /></td>
          <td><input type="button" value={board[2]} onClick={() => { clickevent(2) ; win(); }} readonly /></td>
          <td><input type="button" value={board[3]} onClick={() => { clickevent(3) ; win(); }} readonly /></td>        </tr>        <tr>
          <td><input type="button" value={board[4]} onClick={() => { clickevent(4) ;win(); }} readonly /></td>
          <td><input type="button" value={board[5]} onClick={() => { clickevent(5) ; win(); }} readonly /></td>
          <td><input type="button" value={board[6]} onClick={() => { clickevent(6) ;win(); }} readonly /></td>        </tr>        <tr>
          <td><input type="button" value={board[7]} onClick={() => { clickevent(7) ; win(); }} readonly /></td>
          <td><input type="button" value={board[8]} onClick={() => { clickevent(8) ; win(); }} readonly /></td>
          <td><input type="button" value={board[9]} onClick={() => { clickevent(9) ; win(); }} readonly /></td>
        </tr>
        <tr>
          <td><button onClick={reset}>reset</button></td>
          {/* <td><button onClick={randomnumber}>random</button></td> */}

        </tr>
      </table>

    </div>
  );
}


export default App;
