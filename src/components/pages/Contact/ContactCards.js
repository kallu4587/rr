import React from 'react';
import { ContactCard } from '../../common/cards/ContactCard';
import { contacts } from '../../../config';

const ContactCards = (props) => {
  return (
    <div>
      <h1 className="contact-header">Want To Talk</h1>
      <div className="contact-cards">
        {contacts.map((contact, index) => (
          <ContactCard key={`contact-${index}`} {...contact} />
        ))}
      </div>
    </div>
  );
};

export default ContactCards;
