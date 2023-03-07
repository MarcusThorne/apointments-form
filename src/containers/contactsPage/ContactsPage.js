import React, { useState, useEffect } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm'
import { TileList } from '../../components/tileList/TileList'

export const ContactsPage = ({contacts, addContact}) => {
    const [duplicate, setDuplicate] = useState(false)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        const newContact = {
             name: name,
             phone: phone,
             email: email
        };

       if ( !duplicate ) {
           addContact(newContact);
       };

        setName('');
        setPhone('');
        setEmail('');
        setDuplicate(false);
    };

    useEffect(() => {
        for (let i; i < contacts.length; i++) {
            if (contacts[i].name === name) {
                setDuplicate(true)
                alert('Name is already on Contact List!')
            }
        }
    }, [name, contacts]);

    return (
        <div>
        <section>
            <h2>Add Contact</h2>
            <ContactForm setName={setName} name={name} setPhone={setPhone} phone={phone} setEmail={setEmail} email={email} handleSubmit={handleSubmit} />
        </section>
        <hr />
        <section>
            <h2>Contacts</h2>
                { contacts !== [] && <TileList objects={contacts} /> }
        </section>
        </div>
    );
};
