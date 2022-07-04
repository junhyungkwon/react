import react, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  let posts = "블로그 글";

let [개발진행상황, 개발변경상황] = useState('개발자 블로그 개발');
let [다음개발진행, 오류해결] = useState('nav 구현');
let [진행상황, 피드백] = useState('react 공부');
  return (
    <div className="App">
      <div className = "black-nav">
        <div style = {{fontSize : '25px'}}>개발 Blog</div>

      </div>
    
     
      <div className='list'>
        <h4>{개발진행상황}</h4>
        <p>7월 4일 개발</p>
        <hr/>
      </div>
      <div className='list'>
        <h4>{다음개발진행}</h4>
        <p>7월 5일 개발</p>
        <hr/>
    </div>
    <div className='list'>
        <h4>{진행상황}</h4>
        <p>7월 6일 개발</p>
        <hr/>
    </div>
    </div>
    
  );
}

export default App;
