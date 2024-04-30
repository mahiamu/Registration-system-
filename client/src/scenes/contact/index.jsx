import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { useValue } from "../../context/ContextProvider";
import { Box } from "@mui/system";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import Header from "../../components/Header";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const {
    dispatch,
  } = useValue();

  const sendEmail = (e) => {
    e.preventDefault();
    dispatch({ type: 'START_LOADING' });

    

    emailjs
      .sendForm(
        "service_hw80o2s",
        "template_1i32mhi",
        form.current,
        "CHMt4VkwEbMLZt3b1"
      )
      .then(        
       (result) => {
            
            dispatch({
                  type: 'UPDATE_ALERT',
                  payload: {
                    open: true,
                    severity: 'success',
                    message: 'Your massage has been sent successfully',
                  },})
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
          dispatch({ type: 'END_LOADING' });
          
        },
        (error) => {
          console.log(error.text);
          dispatch({
            type: 'UPDATE_ALERT',
            payload: {
              open: true,
              severity: 'error',
              message: error.message,
            },
          });
          dispatch({ type: 'END_LOADING' });

        }
      );
      
  };

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="CONTACT US" subtitle="send us your message here we will be in toche us soon us possible ." />
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
    </Box>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid #93a8a0;
      color:#93a8a0;

      &:focus {
        border: 2px solid #93a8a0;
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid #93a8a0;
      color:#93a8a0;

      &:focus {
        border: 2px solid #93a8a0;
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #5cc69c;
      color: white;
      border: none;
    }
  }
`;