import styledCustum from "styled-components";
import { useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context/authContext";
import { styled } from "@mui/material/styles";
import {
  Link,
  Typography,
  Divider,
  Stack,
  Button,
} from "@mui/material";

const Wrapper = styledCustum.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .register-form {
      max-width: 50rem;
      margin: auto;

      .register-inputs {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;
          width: 100%;
          margin-top: 0rem;
          max-width: 50rem;
          padding: 12px;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

const RegisterPage = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(process.env.API_URL + "register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();
      console.log(response);
      if (response.ok) {
        dispatch({
          type: "LOGIN",
          payload: { token: data.data.token, username: data.data.name },
        });
        navigate("/");
      } else {
        toast.error(data.message);
        setError(data.message);
      }
    } catch (error) {
      toast.error(error);
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <ToastContainer />
      <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
        Create an Account
      </Typography>

      <h2 className="common-heading">Register</h2>
      <div className="container">
        <div className="register-form">
          <form onSubmit={handleSubmit} className="register-inputs">
            <input
              name="name"
              placeholder="Name"
              required
              value={name}
              type="text"
              onChange={handleNameChange}
            />
            <input
              name="email"
              placeholder="Email"
              required
              value={email}
              type="email"
              onChange={handleEmailChange}
            />
            <input
              name="password"
              placeholder="Password"
              required
              value={password}
              type="password"
              onChange={handlePasswordChange}
            />
            <input type="submit" value="Register" disabled={loading} />

            {error && (
              <Typography sx={{ color: "red", mt: 2 }}>{error}</Typography>
            )}
          </form>
          <Divider sx={{ my: 3 }}>OR</Divider>
          <Stack direction="row" justifyContent="center" spacing={2}>
            <Link href="/login" underline="none">
              <Button variant="outlined" size="large" sx={{ width: "10rem" }}>
                Login
              </Button>
            </Link>
          </Stack>
        </div>
      </div>
    </Wrapper>
  );
};

export default RegisterPage;
