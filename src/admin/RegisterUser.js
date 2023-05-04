import styledCustum from "styled-components";
import { useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, NavLink } from "react-router-dom";
// import { AuthContext } from "../context/authContext";
import { styled } from "@mui/material/styles";
import { Link, Typography, Stack } from "@mui/material";
const API_URL = "http://localhost:5000/api";

const Wrapper = styledCustum.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .name-inputs {
    display: flex;
    justify-content: space-between;
  
    input {
      width: calc(50% - 0.5rem); /* calculate the width of each input */
    }
  }

  .container {
    margin-top: 6rem;

    .login-form {
      max-width: 50rem;
      margin: auto;

      .login-inputs {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

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

export default function RegisterUser() {
  // const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formadata = new FormData(e.currentTarget);
    const setData = {
      name: formadata.get("firstName") + " " + formadata.get("lastName"),
      email: formadata.get("email"),
      password: formadata.get("password"),
      mobile: formadata.get("mobile"),
    };
    // console.log(setData);return false;

    setLoading(true); // set loading to true when the form is submitted
    try {
      const response = await fetch(API_URL + "/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(setData),
      });

      const data = await response.json();
      // console.log(data);
      if (response.ok) {
        toast.success(
          "Thank you for registering! We have sent a confirmation email to your inbox."
        );
      } else {
        // login failed, display error message
        toast.error(data.message);
        setError(data.message);
      }
    } catch (error) {
      // console.log(error);
      toast.error(error);
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false); // set loading back to false when the API response is received
    }
  };

  return (
    <Wrapper>
      <ToastContainer />
      <Typography variant="h3" sx={{ px: 5, mt: 3, mb: 3 }}>
        Hi, Welcome
      </Typography>

      <h2 className="common-heading">Register Now</h2>
      <div className="container">
        <div className="login-form">
          <form onSubmit={handleSubmit} className="login-inputs">
            <div className="name-inputs">
              <input
                name="firstName"
                placeholder="First Name"
                required
                type="text"
              />
              <input
                name="lastName"
                placeholder="Last Name"
                required
                type="text"
              />
            </div>
            <input name="mobile" placeholder="Mobile" required type="number" />

            <input name="email" placeholder="Email" required type="email" />

            <input
              type="password"
              placeholder="Password"
              name="password"
              required
            />

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ mt: 1 }}>
              <NavLink
                to="/register"
                className="navbar-link"
                sx={{ fontSize: "1.2rem" }}>
                Forgot password?
              </NavLink>
            </Stack>

            <input type="submit" value="Register" disabled={loading} />

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{ mt: 1 }}>
              <NavLink
                to="/login"
                className="navbar-link"
                sx={{ fontSize: "1.2rem" }}>
                Don’t have an account? Get started
              </NavLink>
            </Stack>

            {error && (
              <div style={{ textAlign: "center" }}>
                <p>{error}</p>
              </div>
            )}
          </form>
          {loading && <p>Loading...</p>}{" "}
          {/* display a loader if loading is true */}
        </div>
      </div>
    </Wrapper>
  );
}
