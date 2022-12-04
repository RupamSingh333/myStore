import styled from "styled-components";
import * as React from "react";
const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
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

  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56901.89118423892!2d75.71323803125!3d26.955237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3b6dd2e4bf1%3A0xa88b79e3657e3dfa!2sDoomshell%20Softwares%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1669921626218!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form action="" method="post" className="contact-inputs">
            <input
              name="username"
              placeholder="User Name"
              autoComplete="off"
              required
              type="text"
            />
            <input
              name="email"
              placeholder="Email"
              autoComplete="off"
              required
              type="email"
            />
            <textarea
              name="message"
              cols={30}
              rows={10}
              required
              autoComplete="off"
              placeholder="Enter Your messages"
            />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
