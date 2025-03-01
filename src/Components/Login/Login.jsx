import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Input, Button, Text, Heading } from "@chakra-ui/react";
import "./login.css"; // Import the external CSS file

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Store login status in localStorage
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);

    navigate("/home");
  };

  return (
    <div className="login-container">
      <Box className="login-box">
        <Heading as="h2" className="login-title">User Login</Heading>
        <form onSubmit={handleLogin}>
          <Input
            className="login-input"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" className="login-button">Login</Button>
        </form>
        <Text className="login-footer">Welcome Back!</Text>
      </Box>
    </div>
  );
};

export default Login;
