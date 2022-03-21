import Navbar from "./components/Navbar";
import QuizScreen from "./components/QuizScreen";
import JoinScreen from "./components/JoinScreen";


// import logo from './logo.svg';
// import './App.css';

const { useState } = require("react");


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

function App(){
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  return (
    <>
         <Navbar/> 
        <div className="quiz-container">
              {
                isQuizStarted ? (
                  <QuizScreen retry={()=>setIsQuizStarted(false)} />
                ) : (
                  <JoinScreen start={()=>setIsQuizStarted(true)} />
                )
              }
        </div>
    </>
  );
}

export default App;