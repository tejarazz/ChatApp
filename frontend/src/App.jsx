import Login from "./Pages/Login page/Login";
import Signup from "./Pages/Signup page/Signup";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home page/Home";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext.jsx";

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={"login"} />}
        ></Route>
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        ></Route>
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        ></Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
