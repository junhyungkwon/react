
import './App.css';

function App() {
  const name = "jun1";
  const naver = {
    name : "네이버",
    URL : "https://m.naver.com"
  };
  
  return (
    <div className=' App'>
      <h1
      style={{
        color: "#f0f",
        backgroundColor: "green",

      }}
      >
         hello, {name}, <p>{3+12}</p>
      </h1>
      <a href={naver.URL}>{naver.name}</a>
    </div>

  
  );
}

export default App;
