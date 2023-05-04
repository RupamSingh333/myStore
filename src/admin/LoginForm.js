import styled from "styled-components";
import { useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .login-form {
      max-width: 50rem;
      margin: auto;

      .login-inputs {
        display: flex;
        flex-direction: column;
        gap: 2rem;

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

const LoginPage = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePasswordChange = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // set loading to true when the form is submitted
    try {
      const response = await fetch(process.env.API_URL+'login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        // toast.success(data.message);
        // Dispatch the LOGIN action with the response data
        dispatch({
          type: "LOGIN",
          payload: { token: data.data.token, username: data.data.name },
        });
        navigate("/");
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
  
  // check if the browser is offline and show an error message if it is
  // if (!navigator.onLine) {
  //   return <div>Internet connection not available</div>;
  // }

  return (
    <Wrapper>
      <ToastContainer />
      <h2 className="common-heading">Login</h2>
      <div className="container">
        <div className="login-form">
          <form onSubmit={handleSubmit} className="login-inputs">
            <input
              name="email"
              placeholder="Email"
              // autoComplete="off"
              required
              value={email}
              type="email"
              onChange={handleEmailChange}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <input type="submit" value="Login" disabled={loading} />
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
};

export default LoginPage;
