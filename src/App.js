import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Verify from "./pages/Verify";
import Profile from "./pages/Profile";
import { useSelector } from 'react-redux'


function App() {
  const userEmail = useSelector(state => state.user.email);
  console.log(userEmail)
  return (
    <BrowserRouter>
      <Routes>
        {userEmail && <>
        <Route path="/" element={<Home/>}/>
        <Route path="/verify" element={<Verify/>}/>
        <Route path="/profile" element={<Profile/>}/>
        </>}
        
        <Route path='/login' element={<Login/>}/>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
