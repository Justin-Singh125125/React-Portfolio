import React from "react";

const ContactForm = props => {
    return (
        <div className="contact">
            <input type="text" className="contact__firstName" placeholder="First Name" />
            <input type="text" className="contact__lastName" placeholder="First Name" />
            <input type="email" className="contact__email" placeholder="Your Email" />

            <textarea className="contact__message" cols="30" rows="10" placeholder="Your message"></textarea>
            <button className="contact__btn btn btn--green">Send Message</button>
        </div>
    )
}

export default ContactForm;