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
      <div className="form-group">
        <input
          required={true}
          type="text"
          name="name"
          placeholder="Your Name"
        />
      </div>
      <div className="form-group">
        <input
          required={true}
          type="email"
          name="email"
          placeholder="Your Email"
        />
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
      <div className="form-group">
        <button type="submit">Send Message</button>
      </div>
    </form>
  );
}

export default EmailForm;
