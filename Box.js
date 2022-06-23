import React from 'react';

function Box(props){
  const clickMe = ()=>{
    alert("강의를 끝맞췄습니다!")
  
  }
  return(
        <div className='Box'>
      Box{props.num} 
      {props.name}
      <button onClick={clickMe}>수강하기</button>
      
    </div>
    )

    
  }
export default Box;