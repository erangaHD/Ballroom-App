import React from 'react'
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './ContactForm.css'

import kid from '../../data/classSedules/kid.json'
import beg from '../../data/classSedules/beginnner.json'
import prof from '../../data/classSedules/prof.json'

const ContactForm = () => {

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedOption, setSelectedOption] = useState("kid");

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

  return (
    <form action="" className='container formContainer'>
        <div className="formContent">

            <h2 className='contentTitle'>Join Our Classes</h2>
            <div className="name fieldContainer">
                <label htmlFor="" className='label'>Name</label>
                <input type="text" name='name' placeholder='Student Name' className='input'/>
            </div>
            <div className="bDay fieldContainer">
                <label htmlFor="" className='label'>BirthDate</label>
                <div className='dayPicker input'>
                    <DatePicker selected={selectedDate} onChange={handleDateChange} />
                </div>
            </div>
            <div className="gender fieldContainer">
                <p className='label genderLabel'>Gender</p>
                <dir className="input genderInput">
                    <div className="genderRadio">
                        <input type="radio" id="male" name="gender" value="male"/>                
                        <label htmlFor="">Male</label>
                    </div>
                    <div className="genderRadio">
                            <input type="radio" id="female" name="gender" value="female"/>
                            <label htmlFor="">Female</label>
                    </div>
                </dir>
            </div>
            <div className="fieldContainer">
                <label htmlFor="" className='label'>Address</label>
                <div className="address input">
                    
                    <input type="text" placeholder='Address Line 1'className='addressLine'/>
                    <input type="text" placeholder='Address Line 2'className='addressLine'/>
                    <input type="text" placeholder='Address Line 3' className='addressLine'/>
                </div>
            </div>
            <div className="phoneNo">
                <div className="mobile phoneContainer">
                    <label htmlFor="" className='label'>Contact No: Mobile</label>
                    <input type="text" name='mobileNum' placeholder='Student Mobile' className='input' />
                </div>
                <div className="mobile phoneContainer">
                    <label htmlFor="" className='label'>Contact No: Home</label>
                    <input type="text" name='recidentNum' placeholder='Student Home Telephone'className='input'/>
                </div>            
            </div>
            <div className="email fieldContainer">
                <label htmlFor="" className='label'>Email</label>
                <input type="email" name='email' placeholder='Your email' className='input'/>
            </div>
            
            <div className="level fieldContainer">
                
                    <label for="cars" className='label'>Select Your Level</label>

                    <div className="input select">
                        <select className='levelSelect' name="level" id="level" onChange={(e) => setSelectedOption(e.target.value)}>
                            <option value="kid">Kid</option>
                            <option value="beginner">Beginner</option>
                            <option value="Professional">Professional</option>
                        </select>
                    </div>

            </div>
            <div className="classTime fieldContainer">
                <label htmlFor="" className='label'>Select the Class</label>

                <div className="input select">

                    <select className='classSelect'>
                        {selectedOption === 'kid' && kid.map((option, index) => (
                            <option key={index} value={`${option.day}-${option.start}`}>{`${option.day}-${option.start}`}</option>
                        ))}
                        {selectedOption === 'beginner' && beg.map((option, index) => (
                            <option key={index} value={`${option.day}-${option.start}`}>{`${option.day}-${option.start}`}</option>
                        ))}
                        {selectedOption === 'Professional' && prof.map((option, index) => (
                            <option key={index} value={`${option.day}-${option.start}`}>{`${option.day}-${option.start}`}</option>
                        ))}
                    </select>
                </div>

            </div>

            <button className="BtnPrimary" type='submit'>Submit</button>
        </div>
        
    </form>
  )
}

export default ContactForm