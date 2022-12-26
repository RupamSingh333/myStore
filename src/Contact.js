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
      title="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14299.335034968906!2d84.3355865!3d26.3642384!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbddf189172e3e8e!2sBhawani%20Electronic%20Mirganj!5e0!3m2!1sen!2sin!4v1672070534271!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>

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
