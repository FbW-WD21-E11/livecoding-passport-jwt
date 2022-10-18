export default function Register() {
  return (
    <>
      <form>
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
      </form>
    </>
  );
}
