import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    //  const name = event.target.name;22
    // const value = event.target.value;
    setForm({ ...form, [name]: value });
  };
  // service_r62pd1f
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_r62pd1f",
        "template_902ez8e",
        {
          from_name: form.name,
          to_name: "Gaurav",
          from_email: form.email,
          to_email: "singhgaurav.y@gmail.com",
          message: form.message,
        },
        "2MxoneFOgNGyvTkEu"
      );
      setLoading(false);
      alert("Your message has been sent!");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong !");
    }
  };
  return (
    <section className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text">Let's Talk</h3>
          <p className="text-lg text-white-600">
            Need a website that stands out and performs flawlessly? I’m here to
            design, develop, and deliver exactly that.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label"> Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Gaurav Singh"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label"> Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="singhgaurav.y@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label"> Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi, I wanna give you a job ..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
      {/* <h3 className="head-text">Contact Me</h3> */}
    </section>
  );
};

export default Contact;
