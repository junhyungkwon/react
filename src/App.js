import react, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  

let [개발진행상황, 개발변경상황] = useState(['개발자 블로그 개발','nav 구현', 'react 공부']);
let [좋아요, 좋아요증가] = useState(0);

 function 제목수정(){
  var newArray = [...개발진행상황]
  newArray[0] = 'ui구현'
  개발변경상황(newArray);

  
  
 }

  return (
    <div className="App">
      <div className = "black-nav">
        <div style = {{fontSize : '25px'}}>개발 Blog</div>

      </div>
    
      <button onClick={제목수정}>버튼</button>
     <div className='list'>
        <h3>{개발진행상황[0]} <span onClick={()=>{ 좋아요증가 ( 좋아요 + 1 )}}> 👍 </span>{좋아요}</h3>
        <p>7월 4일 개발</p>
        <hr/>
      </div>
      <div className='list'>
        <h3>{개발진행상황[1]}</h3>
        <p>7월 5일 개발</p>
        <hr/>
    </div>
    <div className='list'>
        <h3>{개발진행상황[2]}</h3>
        <p>7월 6일 개발</p>
        <hr/>
    </div>
    </div>
    
  );
}

export default App;
