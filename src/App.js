import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import LogIn from "./pages/Login";
import { MENUS } from "./until/data";
import Header from "./components/Header";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function loginHandler(userName, password) {
    console.log("loginHandler is running");
    console.log("username: ", userName);
    console.log("password: ", password);
    if (userName === "yunchir" && password === "asd") {
      setIsLoggedIn(true);
    } else {
      console.error("Wrong passwoed or username");
    }
  }
  return (
    <div className="App">
      <Header />
      <div className="">
        {isLoggedIn ? (
          <Profile logout={setIsLoggedIn} />
        ) : (
          <MainPage setLogin={loginHandler} />
        )}
      </div>
      <Routes>
        <Route path={MENUS[0].url} element={<Home />} />
        <Route path={MENUS[1].url} element={<About />} />
        <Route path={MENUS[2].url} element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
