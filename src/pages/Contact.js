
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/Contact.css";
import "aos/dist/aos.css";
import contact from '../pictures/contact.jpg'



export default function ContactUs() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setResponseMessage("");
    setIsSuccess(null);
    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);

    try {
      const res = await fetch("https://formspree.io/f/meoznkap", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (res.ok) {
        setIsSuccess(true);
        setResponseMessage("✅ Thank you! Your message was sent successfully.");
        setName("");
        setPhone("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        const errorData = await res.json();
        setIsSuccess(false);
        setResponseMessage(errorData.error || "❌ Error sending message. Try again.");
      }
    } catch (error) {
      console.error(error);
      setIsSuccess(false);
      setResponseMessage("⚠️ Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div
        className="contact-hero d-flex align-items-center justify-content-center text-center text-white"
        style={{
          backgroundImage: `url(${contact})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
        }}
      >
        
      </div>

      {/* Contact Section */}
      <div className="container py-5">
        <div className="row g-4">
          {/* Contact Form */}
          <div className="col-md-6">
            <div className="contact-box p-4 rounded-4 shadow-sm">
              <h4 className="text-center fw-bold text-purple mb-4">
                Contact Us
              </h4>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Full Name</label>
                  <input
                    type="text"
                    className="form-control contact-input"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control contact-input"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Email (optional)</label>
                  <input
                    type="email"
                    className="form-control contact-input"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Subject</label>
                  <input
                    type="text"
                    className="form-control contact-input"
                    placeholder="Enter subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Message</label>
                  <textarea
                    className="form-control contact-input"
                    rows="3"
                    placeholder="Write your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-purple w-100 py-2 fw-bold"
                  disabled={loading || (!phone && !email)}
                  title={!phone && !email ? "Please enter either phone or email" : ""}
                >
                  {loading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>

              {responseMessage && (
                <div className="text-center mt-3">
                  <p
                    style={{
                      color: isSuccess ? "green" : "red",
                      fontWeight: "bold",
                    }}
                  >
                    {responseMessage}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Official Info */}
          <div className="col-md-6">
            <div className="contact-box p-4 rounded-4 shadow-sm">
              <h4 className="text-center fw-bold text-purple mb-4">
                Official Information
              </h4>
              <p>
                <strong>Email:</strong><br />
                timeslessmining@gmail.com
              </p>
              <p>
                <strong>Contact:</strong><br />
                0393001802
              </p>
              <p>
                <strong>Location:</strong><br />
                Ntinda Complex Block D, Room GF 13
              </p>
              <p>
                <strong>Working Hours:</strong><br />
                Mon – Fri, 8:00am–5:00pm
              </p>
              <p>
                <strong>About Our Contacts:</strong><br />
                Feel free to reach out to us weather its an inquiry, <br/> a question,concern or any and also <br/>incase u want to volunteer or become apartner.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <h1 style={{textAlign:'center'}}>You can use this map for physical directions </h1>
      <div className="map-container" style={{justifyContent:'center', display:'flex'}}>

        <iframe
        
          title="Timeless Mining Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.862447909388!2d32.60513637457558!3d0.35504389960826744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc4e1e2a8fcd%3A0x6b36419a8b9b9c11!2sNtinda%20Complex!5e0!3m2!1sen!2sug!4v1708451128000!5m2!1sen!2sug"
          width="100%"
          height="400"
          style={{width:'70%', border:'2px solid purple', borderRadius:'10px' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <br/><br/>
    </div>
  );
}
