import axios from "axios";
import { Link } from "react-router-dom";

export default function PrivateNavigation({ setLoggedIn }) {
  const handleLogout = async () => {
    axios.get(`${process.env.REACT_APP_URL}/api/users/logout`);
    setLoggedIn(false);
  };

  return (
    <>
      <Link to="/orders">Orders</Link>
      <Link onClick={handleLogout} to="/login">
        Logout
      </Link>
    </>
  );
}
