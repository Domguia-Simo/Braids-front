import React, { useState } from 'react'
import img from "../assets/img/women/2.jpeg"
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';
import DatePicker from 'react-datepicker';

export default function AboutUs() {
    const [selectedDate, setSelectedDate] = useState(null);
    function isDateValid(dateToCheck) {
        const validDateToCheck = new Date(dateToCheck);
        const startDate = new Date();
        const endDate = new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000);

        if (isNaN(validDateToCheck.getTime()) || isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
            console.error('Invalid date provided');
            return false;
        }
        return validDateToCheck >= startDate && validDateToCheck <= endDate;
    }
    function isHourValid(date, startHour, endHour) {
        const hour = date.getHours();
        if (startHour > endHour) {
            endHour += 24;
        }
        return startHour <= hour && hour <= endHour;
    }

    const handleDateChange = (date) => {
        console.log(date);
        if (isDateValid(date)) {
            if (isHourValid(date, 8, 18)) {
                setSelectedDate(date);
                setData({ ...data, [date]: date });
            } else {
                setSelectedDate(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 0, 0))
                setData({ ...data, [date]: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 0, 0) })
            }
        }
    };
    const [basicModal, setBasicModal] = useState(false);
    const [data, setData] = useState()
    function handleChange(e) {
        if (e.target.type == 'text' || e.target.type == 'email') {
            setData({ ...data, [e.target.name]: e.target.value })
        } else {
            setData({ ...data, [e.target.name]: !data.confirm })
        }
    }

    const toggleOpen = () => setBasicModal(!basicModal);
    const submit = async () => {
        try {
            await fetch('http://localhost:5000/api/book/orderBook', {
                method: 'post',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                    'access-control-origin': '*',
                    // 'Authorisation': `Bearer ${localStorage.getItem('token') || ''}`
                },
                body: JSON.stringify({
                    date: data.date,
                    name: data.name,
                    phone: data.phone,
                    email: data.email
                })
            })
                .then(res => res.json())
                .then(respond => {
                    console.log(respond)
                })
                .catch(err => {
                    console.log(err)
                })
        } catch (e) {
            console.log("err", e)
            console.log('Verify your internet connection')
            // setLoading(false)
        }
    }
    return (

        <div
            style={{ display: "flex", justifyContent: "center" }}
        >
           <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Book form</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <MDBRow>
                                <MDBCol>
                                    <DatePicker
                                        placeholderText='Choice a Date'
                                        id='choiceDate'
                                        selected={selectedDate}
                                        onChange={handleDateChange}
                                        minDate={new Date()}
                                        maxDate={new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000)}
                                        disabledDays={[0]} // Disable Sundays (0-indexed, starting with Sunday)
                                        showTimeSelect
                                        dateFormat="yyyy-MM-dd HH:mm"
                                        minTime={new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 8, 0, 0)}
                                        maxTime={new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 18, 0, 0)}
                                    />
                                </MDBCol>
                                <MDBCol>
                                    <input type="email" placeholder='Email' name="email" onChange={e => handleChange(e)} required />
                                </MDBCol>
                                <MDBCol>
                                    <input type="text" placeholder='Name' name="name" onChange={e => handleChange(e)} required />
                                </MDBCol>
                                <MDBCol>
                                    <input type="text" placeholder='Phone' name="phone" onChange={e => handleChange(e)} required />
                                </MDBCol>

                            </MDBRow>
                        </MDBModalBody>

                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={toggleOpen}>
                                Close
                            </MDBBtn>
                            <MDBBtn style={{backgroundColor:'goldenrod'}} onClick={() => { submit() }}>SUBMIT</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>

            <div style={{ margin: "0 auto" }}>
                <center>
                    <h2>ksakjakjksaj</h2>
                    <img
                        src={img}
                        alt={".."}
                        // width={(screenWidth / 2) - 50}
                        width={"500px"}
                        height={"400px"}
                    // style={{ borderRadius: "10px" }}
                    />
                    <br />
                    {/**description 2 or 3 paragraphy */}
                    <h3>Testing</h3>
                    <p style={{ width: "60%" }}>
                        4 dsjashsasdajmnsajkgs auhdfuisb asug sGYAgjd nd vnass
                        snkjdhja sjkcavdha dcjvdhvj cjahanfm, naklncklna vkjlabnvlkj
                        kj sn v kjan  jbmnjklfdjajklvfa akljnklabddjv j abjk
                    </p>
                </center>
                <br />
                <button
                    className='submit2'
                    style={{ margin: "0 auto" }}
                    onClick={toggleOpen}
                >
                    BOOK
                </button>
            </div>
        </div>
    )
}
