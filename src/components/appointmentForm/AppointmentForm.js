import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker'

export const AppointmentForm = ({title, date, time, contact, contacts, setTitle, setDate, setTime, setContact, handleSubmit, }) => {

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleDateChange = (event) => {
        setDate(event.target.value)
    }

    const handleTimeChange = (event) => {
        setTime(event.target.value)
    }

    const handleContact = (event) => {
        setContact(event.target.value)
    }

    const getTodayString = () => {
        const [month, day, year] = new Date()
            .toLocaleDateString("en-US")
            .split("/");
        return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for='title'>Title</label>
                <input
                    type='text'
                    value={title}
                    onChange={handleTitleChange}
                    placeholder='Appointment Title'
                    id='title' />
                <label for='date'>Date</label>
                <input
                    type='date'
                    value={date}
                    onChange={handleDateChange}
                    placeholder='Enter Date'
                    id='date' />
                <label for='time'>Time</label>
                <input
                    type='time'
                    value={time}
                    onChange={handleTimeChange}
                    placeholder='Enter Time'
                    id='time'
                    min={getTodayString}
                />
                <label for='contact'>Contact</label>
                <ContactPicker
                    value={contact}
                    onChange={handleContact}
                    contacts={contacts}
                    id='contact' />

                <input type='submit' value='Add Contact' />
            </form>
        </div>
    );
};
