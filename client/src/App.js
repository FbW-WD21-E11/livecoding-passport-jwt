import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import PrivateNavigation from "./components/PrivateNavigation/PrivateNavigation";
import PublicNavigation from "./components/PublicNavigation/PublicNavigation";

function App() {
  // it would be better to store this state in to localStorage
  const [login, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          {login ? (
            <PrivateNavigation setLoggedIn={setLoggedIn} />
          ) : (
            <PublicNavigation />
          )}
        </header>
      </div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
