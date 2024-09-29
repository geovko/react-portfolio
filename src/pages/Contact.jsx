// incomplete
import Email from "../components/Email.jsx";

function Contact() {
  return (
    <div className="page">
      <h2>Contact</h2>
      <div className="content">
        <div className="send-email">
          <h3>Send an email!</h3>
          <Email />
        </div>
      </div>
    </div>
  );
}

export default Contact;
