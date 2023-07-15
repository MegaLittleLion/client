import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./pages/main";
import Detail from "./pages/detail";
import Signup from "./pages/signup";
import Login from "./pages/login";
function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path={`/`} element={<Main />}></Route>
        <Route path={`/detail/:movieId`} element={<Detail />}></Route>
        <Route path={`/signup`} element={<Signup />}></Route>
        <Route path={`/login`} element={<Login />}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;