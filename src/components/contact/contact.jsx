import "./contact.scss"
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import {
  createTheme,
  MuiThemeProvider,
  Button
} from '@material-ui/core';

const colortheme = createTheme({
  palette: {
    primary: {
        main: "#A8DADC",
        contrastText: "#fff",
    },
  },
});

export default function Contact() {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'email_template', form.current, 'user_K6koj2kJalZeVBE2h5He6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      form.current.reset();
  };
  
  return (
    <div className="contact" id="contact">

        <div className="right">
          <div className="bkg">
            
          </div>
            <h2>Contact Me</h2>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder="Name" name="user_name" />
                <input type="email" placeholder="Email" name="user_email" />
                <textarea name="message" placeholder="Message"  />
                {/* <input type="submit" value="Send" /> */}
                <MuiThemeProvider theme={colortheme}>
                  <Button variant="contained" color="primary" type="submit">Send</Button>
                </MuiThemeProvider>
            </form>
        </div>
    </div>



  );
};

// {/* <form onSubmit={sendEmail}>
//     <input type="text" placeholder="Name" name="user_name" id="user_name"/>
//     <input type="email" placeholder="Email" name="user_email" id="user_email"/>
//     <input type="text" placeholder="Subject" name="subject" id="subject"/>
//     <textarea placeholder="Message" name="message" id="message"/>
//     <input type="submit" value="Send" id="button"/>
