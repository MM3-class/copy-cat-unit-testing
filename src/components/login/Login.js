import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    console.log(JSON.stringify({ email: email, password: password }, "", 2));
  };
  const handleReset = () => {
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <h1>Login</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          margin: "auto",
        }}
        onSubmit={handleSubmit}
      >
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="btn">
          <button
            data-testid="submit"
            disabled={!email || !password}
            onClick={() => {
              navigate("/copyCatContainer");
            }}
          >
            Submit
          </button>
          <button
            data-testid="reset"
            onClick={handleReset}
            disabled={!email || !password}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
