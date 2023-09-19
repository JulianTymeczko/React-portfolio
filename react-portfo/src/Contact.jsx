import { useState } from "react";
import "./App.css";
import "./Contact.css";
import Validate from "./contact.js";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <h1>Contact</h1>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            onChange={() => {
              setName(document.getElementById("name").value);
            }}
            id="name"
            name="name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            onChange={() => {
              setEmail(document.getElementById("email").value);
            }}
            name="email"
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            onChange={() => {
              setMessage(document.getElementById("message").value);
            }}
            name="message"
            rows="4"
            required
          ></textarea>
        </div>
        <div>
          <button
            id="submit"
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              Validate(name, email, message);
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
