import { div } from "prelude-ls";
import React from "react";
import "./App.css"
import Auth from "./pages/Auth/Auth";
import Home from "./pages/home/Home"
import Profile from "./pages/Profile/Profile";
import {Routes ,Route,Navigate} from 'react-router-dom';
import { useSelector } from "react-redux";
import Chat from "./pages/Chat/Chat.jsx";
import Follower from "./pages/Follower/Follower";
import SafetyCentre from "./Components/SafetyCentre/SafetyCentre";
import Wellness from "./Components/Wellness/Wellness";
import AboutHealYou from "./Components/About/About";
import Need_Help from "./Components/Help/Help";


function App() {
  const user = useSelector((state)=> state.authReducer.authData);
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <Profile/> */}
      <Routes>
        <Route 
        path="/" 
        element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
        <Route 
        path="/home" 
        element={user ? <Home/>  : <Navigate to="../auth" />}
        />
        <Route
          path="/follower"
          element={user ? <Follower /> : <Navigate to="../" />}
        />
        <Route 
        path="/auth" 
        element={user ? <Navigate to="../home" /> : <Auth/>}
        />
        <Route 
        path="/profile/:id" 
        element={user ? <Profile/> : <Navigate to="../auth" />}
        />

        <Route 
        path="/chat" 
        element={user ? <Chat/> : <Navigate to="../auth" />}
        />
        <Route 
        path="/safety-centre" 
        element={user ? <SafetyCentre/> : <Navigate to="../auth" />}
        />
        <Route 
        path="/wellness-centre" 
        element={user ? <Wellness/> : <Navigate to="../auth" />}
        />
        <Route 
        path="/about-us" 
        element={user ? <AboutHealYou/> : <Navigate to="../auth" />}
        />
        <Route 
        path="/i-need-help" 
        element={user ? <Need_Help/> : <Navigate to="../auth" />}
        />
        <Route 
        path="/profile/safety-centre" 
        element={user ? <SafetyCentre/> : <Navigate to="../auth" />}
        />
        <Route 
        path="/profile/wellness-centre" 
        element={user ? <Wellness/> : <Navigate to="../auth" />}
        />
        <Route 
        path="/profile/about-us" 
        element={user ? <AboutHealYou/> : <Navigate to="../auth" />}
        />
        <Route 
        path="/profile/i-need-help" 
        element={user ? <Need_Help/> : <Navigate to="../auth" />}
        />
        <Route 
        path="/profile/healyou-blog" 
        element={
          <main style={{ padding: "1rem" }}>
            <p>You came to a wrong url path Warrior!!Go Back</p>
          </main>
        }
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>You came to a wrong url path Warrior!!Go Back</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
