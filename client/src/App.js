import Home from './screens/Home'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/LoginPage/Login";
import SignUp from "./components/RegisterPage/Register";
import UserDetails from "./components/userDetails";
import Test from "./components/Campaign/Card"
import Testing from "./screens/Campaign"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Campaign from './screens/Campaign';

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route
            exact
            path="/home"
            element={isLoggedIn == "true" ? <UserDetails /> : <Login />}
          />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/userDetails" element={<UserDetails />} />
          <Route path="/campaign" element={<Campaign/>}/>
          <Route path="/test" element={<Test />} />
          <Route path="/testing" element={<Testing />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
