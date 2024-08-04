import React,{useState} from 'react'
import Header from "../src/components/Header.js"
import Body from "../src/components/Mainbody.js"
const App = () => {
  const [score,setScore]=useState(0)
  return (
    <>
      <Header score={score}/>
      <Body setScore={setScore}/>
    </>
  )
}

export default App