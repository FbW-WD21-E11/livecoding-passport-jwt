import axios from "axios";

export default function Register() {
  const handleFormSubmit = async (event) => {
    event.preventDefault(); // prevent the default browser behaviour

    const formData = new FormData(event.target);

    await axios.post("http://localhost:3001/api/users/create", {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      userName: formData.get("userName"),
      email: formData.get("email"),
      password: formData.get("password"),
    });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label>
          First Name
          <input type="text" name="firstName" />
        </label>
        <label>
          Last Name
          <input type="text" name="lastName" />
        </label>
        <label>
          Username
          <input type="text" name="userName" />
        </label>
        <label>
          E-mail
          <input type="email" name="email" />
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
