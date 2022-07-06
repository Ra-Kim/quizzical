import React from "react";
import Landing from "./pages/Landing";
import Quiz from "./pages/Quiz";

function App() {
  const [rendered, setrendered] = React.useState(false)
  

  function handleClick(){
    setrendered(!rendered)
  }

  return (
    <>
    {!rendered && <Landing displayQuiz = {handleClick}/>}
    {rendered && <Quiz displayQuiz = {handleClick} />}
    </>
  )
}

export default App;
