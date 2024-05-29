import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Error from "./components/error/Error"
import Plan from "./pages/Plan"
import Ons from "./pages/Ons"
import "../src/font/icon/style.css"
import Summary from "./pages/Summary"
import Finish from "./pages/Finish"
import { useState } from "react"

function App() {
  const [enabled, setEnabled] = useState(false);
  const [userInfo,setUserInfo]=useState({
    header: "",
    price: "",
    ons: []
  })

  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/select-plan" element={<Plan enabled={enabled} setEnabled={setEnabled} userInfo={userInfo} setUserInfo={setUserInfo}/>}/>
        <Route path="/add-ons" element={<Ons enabled={enabled} setEnabled={setEnabled} userInfo={userInfo} setUserInfo={setUserInfo}/>}/>
        <Route path="/summary" element={<Summary enabled={enabled} userInfo={userInfo}/>}/>
        <Route path="/finish" element={<Finish />}/>
        
        <Route path="*" element={<Error />}/>
      </Routes>
    </>
  )
}

export default App
