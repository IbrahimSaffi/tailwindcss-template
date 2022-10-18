import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import {Routes,Route} from "react-router-dom"

function App() {
  return (  
    <div className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01'] js-focus-visible">
      <Routes>
        <Route path="/" element ={<HomePage/>} />
        <Route path="/login" element ={<LoginPage/>} />
        <Route path="/register" element ={<SignupPage/>} />
      </Routes>
    </div>
  );
}

export default App;
