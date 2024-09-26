import { useState } from "react";

export default function Login() {
  const [input, setInput] = useState("");
  const [pass, setPass] = useState("");
  const [loggedIn, setLoggedIn] = useState(false); // Added state to track login status
  const [error, setError] = useState(false); // Added state to track login errors

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handlePass(event) {
    setPass(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (input === "user" && pass === "password") {
      setLoggedIn(true); // Mark as logged in if credentials are correct
      setError(false); // Clear any error message
    } else {
      setError(true); // Show error message if credentials are incorrect
    }
  }

  return (
    <>
      <h1>Login Page</h1>
      {error && <p>Invalid username or password</p>} {/* Error message */}
      {loggedIn ? (
        <p>Welcome, user!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Username: </label>
          <input
            type="text"
            placeholder="Enter Username"
            value={input}
            onChange={handleChange}
            required
          />
          <br/>
          <label>Password: </label>
          <input
            type="password"
            placeholder="Enter Password"
            value={pass}
            onChange={handlePass}
            required
          />
          <br/>
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
}
