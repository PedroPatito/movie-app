import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AuthContextProvider from "./context/AuthContext";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import LogIn from "./pages/LogIn";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
