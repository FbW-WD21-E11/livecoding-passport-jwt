import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setLoggedIn }) {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      await axios.post(
        `${process.env.REACT_APP_URL}/api/users/login/`,
        {
          email: formData.get("email"),
          password: formData.get("password"),
        },
        {
          withCredentials: true, // tells frontend to expect a http-only cookie
        }
      );
      setError("");
      setLoggedIn(true);
      navigate("/orders");
    } catch (error) {
      setError(error.response.data.message);
      setLoggedIn(false);
    }
  };

  return (
    <>
      <h2>Login</h2>
      {error ? <p>{error}</p> : null}
      <form onSubmit={handleFormSubmit}>
        <label>
          Email
          <input type="text" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
