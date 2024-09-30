// incomplete
import Email from "../sections/Email.jsx";

function Contact() {
  return (
    <div className="page">
      <h4>How can you contact me?</h4>
      <div className="content">
        <div className="send-email contact-info">
          <div>
            <h3>Send an email!</h3>
            <Email />
          </div>
        </div>
        <div className="send-number contact-info">
          <div>
            <h3>Text or Call:</h3>
            <p>+1 253-380-3673</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
