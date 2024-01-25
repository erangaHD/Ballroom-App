import React from 'react'
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ContactForm = () => {

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

  return (
    <form action="">
        <h2>Join our classes</h2>
        <div className="name">
            <label htmlFor="">Name</label>
            <input type="text" name='name' placeholder='Your Name' />
        </div>
        <div className="bDay">
            <label htmlFor="">BirthDate</label>
            <DatePicker selected={selectedDate} onChange={handleDateChange}/>
        </div>
        <div className="gender">
            <p>Gender</p>
            <input type="radio" id="male" name="gender" value="male"/>
            <label htmlFor="">Male</label>
            <input type="radio" id="female" name="gender" value="female"/>
            <label htmlFor="">Female</label>
        </div>
        <div className="address">
            <label htmlFor="">Address</label>
            <input type="text" placeholder='Address Line 1'/>
            <input type="text" placeholder='Address Line 2'/>
            <input type="text" placeholder='Address Line 3'/>
        </div>
        <div className="phoneNo">
            <div className="mobile">
                <label htmlFor="">Mobile</label>
                <input type="number" name='mobileNum' placeholder='Your Mobile' />
            </div>
            <div className="mobile">
                <label htmlFor="">Home</label>
                <input type="number" name='recidentNum' placeholder='Your Home Telephone'/>
            </div>            
        </div>
        <div className="email">
            <label htmlFor="">Email</label>
            <input type="email" name='email' placeholder='Your email'/>
        </div>
        <div className="email">
            <label htmlFor="">Email</label>
            <input type="email" name='email' placeholder='Your email'/>
        </div>
        <div className="level">
            <label for="cars">Class Category</label>

                <select name="level" id="level">
                <option value="kid">Kid</option>
                <option value="beginner">Beginner</option>
                <option value="Professional">Professional</option>
                </select>
        </div>
        {/* have to render relevent classe according to the level */}
    </form>
  )
}

export default ContactForm