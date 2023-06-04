import React from "react";
import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import { SiGmail } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import Form from "react-bootstrap/Form";


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_igsr84d",
        "template_i0k9zbb",
        form.current,
        "QxK-BFlgdhcy49DwI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="contact" id="contactA">
      <section className="contact_left">
        <h1>
          Contact <span>Me</span>
        </h1>
        <p>
          <span>
            <SiGmail className="icon_contact" />
          </span>
          shawanup5760@gmail.com
        </p>
        <p>
          <span>
            <MdCall className="icon_contact" />
          </span>
          8017048904
        </p>
        <section className="social">
          <a
            href="https://instagram.com/anupshaw3382?igshid=MzNlNGNkZWQ4Mg=="
            target="blank"
          >
            <AiFillInstagram className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/anup-shaw-60b20b207/"
            target="blank"
          >
            <BsLinkedin className="icon" />
          </a>
          <a
            href="https://www.facebook.com/aditya.shaw.9440?mibextid=ZbWKwL"
            target="blank"
          >
            <BsFacebook className="icon" />
          </a>
        </section>
      </section>
      <section className="contact_right">
        <Form autoComplete="off" ref={form} onSubmit={sendEmail}>
          <Form.Control type="text" placeholder="Your Name" name="name" />
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Your Email" name="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Your Message"
              name="message"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </section>

    </div>
  );
}

export default Contact;
