import React from "react";

export const ContactForm = ({ name, setName, phone, setPhone, email, setEmail, handleSubmit }) => {
    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label >Name</label>
                <input
                    type='text'
                    value={name}
                    onChange={handleNameChange}
                    placeholder='Name Here'
                    id='name'
                    />
                <label >Phone</label>
                <input
                    type='text'
                    onChange={handlePhoneChange}
                    id='phone'
                    placeholder='Phone Here'
                    value={phone}
                    />
                <label >Email</label>
                <input
                    type='text'
                    onChange={handleEmailChange}
                    id='email'
                    placeholder='Email Here'
                    value={email}
                />

                <input type='submit' value='Add Contact' />
            </form>
        </>
    );
};
