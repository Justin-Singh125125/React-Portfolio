import React from "react";

const ContactForm = props => {
    return (
        <div className="contact">
            <input type="text" className="contact__firstName" placeholder="First Name" />
            <input type="text" className="contact__lastName" placeholder="First Name" />
            <input type="email" className="contact__email" placeholder="Your Email" />

            <textarea className="contact__message" cols="30" rows="10" placeholder="Your message"></textarea>
            <a href="mailto:justin.singh125125@gmail.com?Subject=Web%20Development" className="contact__btn btn btn--green">Send Message</a>
        </div>
    )
}

export default ContactForm;