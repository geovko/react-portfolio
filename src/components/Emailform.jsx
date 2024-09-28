import emailjs from "@emailjs/browser";

function EmailForm() {
  function sendEmail(e) {
    e.preventDefault();
    const emailService = "service_1ls9hpk";
    const emailTemplate = "template_eugr8ff";
    const userId = "Ind4AifagJFaRC9A-";

    emailjs.sendForm(emailService, emailTemplate, e.target, userId).then(
      (result) => {
        alert("Email sent successfully");
        document.location.reload();
      },
      (error) => {
        console.log(error.text);
      }
    );
  }

  return (
    <form className="php-email-form" onSubmit={sendEmail}>
      <div className="form-row">
        <div className="col-md-6 form-group">
          <input
            required={true}
            type="text"
            name="name"
            placeholder="Your Name"
          />
        </div>
        <div className="col-md-6 form-group">
          <input
            required={true}
            type="email"
            name="email"
            placeholder="Your Email"
          />
        </div>
      </div>
      <div className="form-group">
        <input
          required={true}
          type="text"
          name="subject"
          placeholder="Subject"
        />
      </div>
      <div className="form-group">
        <textarea
          required={true}
          name="message"
          rows="5"
          placeholder="Message"
        />
      </div>
      <div className="text-center">
        <button type="submit">Send Message</button>
      </div>
    </form>
  );
}

export default EmailForm;

// import { useState } from "react";
// import emailjs from "@emailjs/browser";

// function EmailForm() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [stateMessage, setStateMessage] = useState(null);

//   const sendEmail = (e) => {
//     e.persist();
//     e.preventDefault();
//     setIsSubmitting(true);
//     emailjs
//       .sendForm(
//         process.env.REACT_APP_SERVICE_ID,
//         process.env.REACT_APP_TEMPLATE_ID,
//         e.target,
//         process.env.REACT_APP_PUBLIC_KEY
//       )
//       .then(
//         (result) => {
//           setStateMessage("Message sent!");
//           setIsSubmitting(false);
//           setTimeout(() => {
//             setStateMessage(null);
//           }, 5000); // hide message after 5 seconds
//         },
//         (error) => {
//           setStateMessage("Something went wrong, please try again later");
//           setIsSubmitting(false);
//           setTimeout(() => {
//             setStateMessage(null);
//           }, 5000); // hide message after 5 seconds
//         }
//       );

//     // Clears the form after sending the email
//     e.target.reset();
//   };

//   return (
//     <form onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" disabled={isSubmitting} />
//       {stateMessage && <p>{stateMessage}</p>}
//     </form>
//   );
// }

// export default EmailForm;
