import { MDBCarousel, MDBCarouselItem, MDBCol, MDBFooter, MDBRow } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useNavigate, useParams ,useOutletContext } from 'react-router-dom'
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';
import DatePicker from 'react-datepicker';
//service
import img5 from "../../assets/realImages/fwdpioup/14.jpg"
import img6 from "../../assets/realImages/fwdpioup/two.jpg"
import img8 from "../../assets/image/Box_braids/box braids1.jpg"
//carousel
import img1 from "../../assets/image/22.png"
import img2 from "../../assets/image/22.jpg"
import img3 from "../../assets/image/20.webp"

import img9 from "../../assets/realImages/fwdpioup/3.jpg"
import img11 from "../../assets/image/Sengalese_twist/Sn.jpg"
import img12 from "../../assets/image/Sengalese_twist/1.jpg"
import img13 from "../../assets/image/Crochet_braids/3.jpg"

import imgM3 from "../../assets/image/Boho braids/2.jpeg"

import imgM6 from "../../assets/image/Knotless_braids/knockless.jpg"
import imgM9 from "../../assets/image/Passion_twist/passio twist.jpg"
//Boho Braids
import bohoBraids1 from "../../assets/image/Boho braids/1.jpg"
import bohoBraids2 from "../../assets/image/Boho braids/bohoo.jpg"
//Knotless Braids
import knotlessBraids1 from "../../assets/image/Knotless_braids/1.jpg"
import knotlessBraids2 from "../../assets/image/Knotless_braids/2.jpg"
//Cornrows
import cornRows1 from "../../assets/image/Cornrows/1.jpg"
import cornRows2 from "../../assets/image/Cornrows/2.jpg"
//Box Braids
import boxBraids1 from "../../assets/image/Box_braids/9.jpeg"
import boxBraids2 from "../../assets/image/Box_braids/2.jpg"
//Two Strands twist
import twoStrandsTwist1 from "../../assets/image/Two_strands/Tt.jpg"
import twoStrandsTwist2 from "../../assets/image/Two_strands/two.webp"

//Crochet braids
import crochetBraids1 from "../../assets/image/Crochet_braids/1.jpg"
import crochetBraids2 from "../../assets/image/Crochet_braids/2.jpg"
import crochetBraids3 from "../../assets/image/Crochet_braids/4.jpg"
//Install wigs
import installWig1 from "../../assets/image/install_wigs/1.jpg"
import installWig2 from "../../assets/image/install_wigs/2.jpg"
import installWig3 from "../../assets/image/install_wigs/wig.jpg"
//Passion braids
import passionBraids1 from "../../assets/image/Passion_twist/passion.jpg"
import passionBraids2 from "../../assets/image/Passion_twist/3.webp"
//Twist
import twist1 from "../../assets/image/Twist/3.jpg"
import twist2 from "../../assets/image/Twist/12.jpg"
import twist3 from "../../assets/image/Twist/twist1.jpg"
//Sengalese twist
import sengaleseTwist from "../../assets/image/Sengalese_twist/senegalese.jpg"
import { ViewsDetialError } from '../error';
const item = [
    {
        id: 0,
        title: "Install Wigs",
        description: "Are you looking to achieve a flawless and effortless hairstyle? Our wig installation service is here to fulfill your needs! Our qualified hair experts are dedicated to providing an exceptional wig installation experience, helping you achieve the desired look you've always wanted.",
        catagory: 'Women',
        image: [installWig3, installWig2, installWig1],
        prix: 120,
    },
    {
        id: 1,
        title: "Boho Braids",
        description: "Transform your hairstyle with elegant and timeless Boho Braids. Our team of experienced hairstylists creates unique bohemian braids that will instantly give you a boho-chic look.",
        catagory: 'Women',
        image: [bohoBraids1, bohoBraids2, imgM3],
        prix: 220,
    },
    {
        id: 2,
        title: "Knotless Braids",
        description: "Elevate your style with flawless knotless braids. Our skilled braiders create seamless, natural-looking braids that enhance your beauty and protect your hair. Experience the difference today!",
        catagory: 'Women',
        image: [knotlessBraids1, knotlessBraids2, imgM6],
        prix: 200,
    },
    {
        id: 3,
        title: "Cornrows",
        description: "Get runway-ready with our expertly crafted cornrows. Our talented stylists meticulously weave intricate patterns, delivering sleek and stylish cornrow designs that won't disappoint. Book now for a trendy transformation!",
        catagory: 'Women',
        image: [cornRows1, cornRows2, img9],
        prix: 180,
    },
    {
        id: 4,
        title: "Box Braids",
        description: "Embrace the beauty and versatility of box braids. Our skilled braiders meticulously create stunning braided patterns that not only look amazing but also protect and enhance your natural hair. Book today and slay effortlessly!",
        catagory: 'Women',
        image: [img8, boxBraids1, boxBraids2],
        prix: 180,
    },
    {
        id: 5,
        title: "Two Strands twist",
        description: "Elevate your hair game with stylish two-strand braids. Our talented stylists intricately weave twin braids, delivering a chic and sophisticated look that's perfect for any occasion. Book now for a fabulous hair transformation!",
        catagory: 'Men',
        image: [twoStrandsTwist1, img6, twoStrandsTwist2],
        prix: 120,
    },
    {
        id: 6,
        title: "Crochet braids",
        description: "Get an amazing hair transformation with crochet braids. Our experts use hair extensions to create unique and versatile hairstyles that make you shine. Book now for an unforgettable hair experience!",
        catagory: 'Women',
        image: [crochetBraids1, crochetBraids3, crochetBraids2],
        prix: 160,
    },
    {
        id: 7,
        title: "Passion twist",
        description: "Experience the beauty of passion twists, a trendy and elegant hairstyle. Our talented professionals create flawless twists for a glamorous and effortless look. Book now for your dream hairstyle!",
        catagory: 'Women',
        image: [passionBraids1, imgM9, passionBraids2],
        prix: 200,
    },
    {
        id: 8,
        title: "Twist",
        description: "Experience the best of twists for a unique and modern style. Our experts create flawless twists that enhance your personality and beauty. Book now for an exceptional hair transformation!",
        catagory: 'Men',
        image: [twist1, twist3, twist2],
        prix: 120,
    },
    {
        id: 9,
        title: "Senegalese twist",
        description: "Get beautifully crafted Senegalese twists for a trendy and protective look. Our talented professionals will provide you with an authentic and elegant style. Book now for an exceptional hair transformation!",
        catagory: 'Women',
        image: [img12, sengaleseTwist, img11],
        prix: 220,
    }

]


export default function DesignDetail() {
    const navigate = useNavigate();

    const scrollToService = useOutletContext()
    console.log("The scrooll service : "+useOutletContext())

    const item = useLoaderData();
    let { id } = useParams()
    const [selectedDate, setSelectedDate] = useState(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const handleChangeWidth = () => {
        setScreenWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleChangeWidth);
        return () => {
            window.removeEventListener('resize', handleChangeWidth);
        };
    }, [])
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
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)

    const submit = async () => {
        setError('')
        setSuccess('')
        setLoading(true)
        if (selectedDate === ''
            || data.name === ''
            || data.phone === '') {
            setError("Fill all the form fields");
            setLoading(false)
        } else {
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
                        date: selectedDate,
                        name: data.name,
                        phone: data.phone,
                        designID: parseInt(id) + 1,
                        // email: data.email
                    })
                })
                    .then(res => res.json())
                    .then(respond => {
                        console.log(respond)
                        if (respond.message === "book created successfully") {
                            setSuccess(respond.message)
                            setSelectedDate('')
                            setData({
                                date: "",
                                name: "",
                                phone: ""
                            })
                            setLoading(false)
                            setBasicModal(false);
                        } else {
                            setError("Something went wrong check you connection and try again");
                        }
                    })
                    .catch(err => {
                        setError("Something went wrong check you connection and try again");
                        setLoading(false);
                    })
            } catch (e) {
                console.log(e);
                setError("Something went wrong check you connection and try again");
                setLoading(false)
            }
        }

    }
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
    const [basicModal, setBasicModal] = useState(false);
    const [data, setData] = useState({
        name:'',
        phone:""
    })
    function handleChange(e) {
        if (e.target.type == 'text' || e.target.type == 'email') {
            setData({ ...data, [e.target.name]: e.target.value })
        } else {
            setData({ ...data, [e.target.name]: !data.confirm })
        }
    }

    const toggleOpen = () => setBasicModal(!basicModal);
    try {

        return (
            <div id='detail'>
                <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
                    <MDBModalDialog>
                        <MDBModalContent>
                            <MDBModalHeader>
                                <MDBModalTitle>Book form</MDBModalTitle>
                                <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
                            </MDBModalHeader>
                            <MDBModalBody>
                                <MDBRow>
                                    <div>
                                        {error ?
                                            <center style={{ color: 'darkred' }}>
                                                {error} &nbsp;
                                                {/* <i className='fas fa-wifi' style={{textDecoration:'line-through' ,color:'darkred'}}></i> */}
                                            </center>
                                            : ''}
                                        {
                                            success != '' ? <span style={{ color: 'green' }}>{success}</span> : ''
                                        }
                                    </div>
                                </MDBRow>
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
                                    {/* <MDBCol>
                                        <input type="email" placeholder='Email' name="email" onChange={e => handleChange(e)} required />
                                    </MDBCol> */}
                                    <MDBCol>
                                        <input type="text" placeholder='Name' name="name" onChange={e => handleChange(e)} required />
                                    </MDBCol>
                                    <MDBCol>
                                        <input type="text" placeholder='Phone' name="phone" onChange={e => handleChange(e)} required />
                                    </MDBCol>

                                </MDBRow>
                            </MDBModalBody>
                            {loading ? (
                                <MDBModalFooter>
                                    <MDBBtn color='secondary' >
                                        Close
                                    </MDBBtn>
                                    <MDBBtn style={{ backgroundColor: 'rgba(235, 210, 146, 0.897)' }} >
                                        <img src={require('../../assets/images/loader.gif')} width={'30px'} alt="loader" />
                                    </MDBBtn>
                                </MDBModalFooter>
                            ) : (
                                <MDBModalFooter>
                                    <MDBBtn color='secondary' onClick={toggleOpen}>
                                        Close
                                    </MDBBtn>
                                    <MDBBtn style={{ backgroundColor: 'goldenrod' }} onClick={() => { submit() }}>SUBMIT</MDBBtn>
                                </MDBModalFooter>
                            )}
                        </MDBModalContent>
                    </MDBModalDialog>
                </MDBModal>
                <MDBRow>
                    <MDBCol md={5}>
                        <h1>{item[id].name}</h1>
                        <MDBCarousel
                            showIndicators
                            showControls
                            // fade
                            light
                            // fadeautoplay={true}
                            interval={10000}
                            keyboard={true}
                        // pause={true}
                        >
                            <MDBCarouselItem itemId={1}>
                                <img
                                    src={item[id].image[0]}
                                    // src={`http://localhost:5000/Design/${item[id].designID}/${item[id].image[0]}`}
                                    className='d-block w-100'
                                    alt='...'
                                    height={400}
                                />
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId={2}>
                                <img
                                    src={item[id].image[1]}
                                    // src={`http://localhost:5000/Design/${item[id].designID}/${item[id].image[1]}`}
                                    className='d-block w-100'
                                    alt='...'
                                    height={400}
                                />
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId={3}>
                                <img
                                    src={item[id].image[2]}
                                    // src={`http://localhost:5000/Design/${item[id].designID}/${item[id].image[2]}`}
                                    className='d-block w-100'
                                    alt='...'
                                    height={400}
                                />
                            </MDBCarouselItem>
                        </MDBCarousel>
                    </MDBCol>
                    <MDBCol md={5}>
                        <br /><br />
                        <MDBRow className='pb-1'>
                            <p style={{
                                width: "100%",
                                height: screenWidth < 750 ? "fit-content" : "300px",
                                overflowY: "auto"
                            }}>
                                {item[id].description}
                            </p>
                        </MDBRow>
                        <MDBFooter className='d-flex justify-content-arround'
                            // className='d-flex justify-content-arround'
                            style={{ marginTop: "-20px" }}
                        >

                            <div style={{border:'solid 0px grey' ,display:'flex' ,columnGap:20 ,fontSize:'large'}}>
                                <span style={{display:'flex' ,columnGap:5 ,alignItems:'center'}}>
                                    <i className='fa fa-money-check-dollar' style={{ color: "goldenrod" }} ></i>
                                    <strong>${item[id].price}</strong>
                                </span>
                                <span style={{display:'flex' ,columnGap:5 ,alignItems:'center'}}>
                                    <i className='fa fa-clock' style={{ color: "goldenrod" }} ></i>
                                    <strong>{item[id].duration} mins</strong>
                                </span>
                            </div>

                        </MDBFooter>

                        <MDBFooter className='d-flex justify-content-arround'>
                            <button
                                className='submit2'
                                style={{ margin: "0 auto" ,fontSize:'small'}}
                                onClick={toggleOpen}
                            >
                                BOOK
                            </button>
                            <button
                                className='direction'
                                style={{
                                    border: 'solid 1px grey', backgroundColor: 'rgba(0,0,0,0.75)',
                                    fontSize: 'medium', color: 'white', fontWeight: 'lighter',
                                    padding: '3px 7px', borderRadius: '7px'
                                }}
                                onClick={() => {
                                    scrollToService()
                                    navigate('/')
                                }}>
                                Less <i className='fas fa-long-arrow-up'></i>
                            </button>
                        </MDBFooter>
                    </MDBCol>
                </MDBRow>
                <br />
                <div className='header'
                    style={{
                        padding: '5px 30px',
                        height: '50px',
                        color: 'black',
                        fontWeight: 'bold',
                        letterSpacing: '1px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                    {parseInt(id) === 0 ? (
                        // <button className='direction'
                        //     style={{
                        //          color: "rgb(191, 186, 186)"

                        //          }}
                        // >
                        //     <i className='fas fa-long-arrow-left'></i>prev
                        // </button>
                        ''
                    ) : (
                        <span>
                            <button className='direction'
                                onClick={() => {
                                    let i = id - 1
                                    navigate('/' + i)
                                }}
                                style={{
                                    border: 'solid 1px grey', backgroundColor: 'rgba(0,0,0,0.75)',
                                    fontSize: 'medium', color: 'white', fontWeight: 'lighter',
                                    padding: '5px 10px', borderRadius: '7px'
                                }}
                            >
                                <i className='fas fa-long-arrow-left'></i> prev
                            </button>
                        </span>
                    )}
                    {parseInt(id) === (item.length - 1) ? (
                        // <button
                        //     className='direction'
                        //     style={{ color: "rgb(191, 186, 186)" }}
                        // >
                        //     next<i className='fas fa-long-arrow-right'></i>
                        // </button>
                        ''
                    ) : (
                        <span>
                            <button
                                className='direction'
                                style={{
                                    border: 'solid 1px grey', backgroundColor: 'rgba(0,0,0,0.75)',
                                    fontSize: 'medium', color: 'white', fontWeight: 'lighter',
                                    padding: '5px 10px', borderRadius: '7px'
                                }}
                                onClick={() => {
                                    let i = parseInt(id) + 1
                                    // navigate('/design/' + i)
                                    navigate('/' + i)
                                }}>
                                next <i className='fas fa-long-arrow-right'></i>
                            </button>
                        </span>
                    )}
                </div>
                <br />

            </div>
        )
    } catch (error) {
        // throw Error('An error occur while fetch for Designs');
        navigate('/', { replace: true })
    }
}
