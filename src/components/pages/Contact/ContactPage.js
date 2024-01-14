import React from 'react';
import mail from '../../../svg/mail.svg';
import ContactForm from './ContactForm';
import ContactCards from './ContactCards';

const ContactPage = () => {
  return (
    <div className="contact-page-wrapper">
      <div className="contact-wrapper">
        <div className="contact-form-wrapper">
          <ContactForm />
        </div>
        <div className="contact-image">
          <img src={mail} alt="Contact Us" className="mail-image" />
        </div>
      </div>
      <div className="contact-cards-wrapper">
        <ContactCards />
      </div>
    </div>
  );
};

export default ContactPage;
