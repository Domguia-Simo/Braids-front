import React, { useEffect, useState ,useRef } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MDBCard, MDBCardBody, MDBCardFooter, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBFooter, MDBRipple, MDBRow } from 'mdb-react-ui-kit'
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
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from "mdb-react-ui-kit";
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import ScrollToTop from './ScrollToTop/ScrollToTop'
import logo from "../assets/image/logo.png"

//service
import img5 from "../assets/realImages/fwdpioup/14.jpg"
import img6 from "../assets/realImages/fwdpioup/two.jpg"
import img8 from "../assets/image/Box_braids/box braids1.jpg"
//carousel
import img1 from "../assets/image/pic.jpg"
import img2 from "../assets/image/22.jpg"
import img3 from "../assets/image/21.jpg"

import img9 from "../assets/realImages/fwdpioup/3.jpg"
import img11 from "../assets/image/Sengalese_twist/sene.jpg"
import img12 from "../assets/image/Sengalese_twist/1.jpg"

import img15 from "../assets/realImages/fwdpioup/3.jpg"

import imgM3 from "../assets/image/install_wigs/wig.jpg"
import imgM6 from "../assets/image/Knotless_braids/knockless.jpg"
import imgM9 from "../assets/image/Passion_twist/passio twist.jpg"
//Boho Braids
import bohoBraids1 from "../assets/image/Boho braids/1.jpg"
import bohoBraids2 from "../assets/image/Boho braids/bohoo.jpg"
import bohoBraids3 from "../assets/image/Boho braids/bohoo.jpg"
//Knotless Braids
import knotlessBraids1 from "../assets/image/Knotless_braids/1.jpg"
import knotlessBraids2 from "../assets/image/Knotless_braids/2.jpg"

//Cornrows
import cornRows1 from "../assets/image/Cornrows/1.jpg"
import cornRows2 from "../assets/image/Cornrows/2.jpg"
//Box Braids
import boxBraids1 from "../assets/image/Box_braids/9.jpeg"
import boxBraids2 from "../assets/image/Box_braids/2.jpg"
//Two Strands twist
import twoStrandsTwist1 from "../assets/image/Two_strands/1.jpg"
import twoStrandsTwist2 from "../assets/image/Two_strands/Tt.jpg"
//Crochet braids
import crochetBraids1 from "../assets/image/Crochet_braids/1.jpg"
//Install wigs
import installWig1 from "../assets/image/install_wigs/1.jpg"
import installWig2 from "../assets/image/install_wigs/2.jpg"

//Passion braids
import passionBraids1 from "../assets/image/Passion_twist/passion.jpg"

//Twist
import twist1 from "../assets/image/Twist/3.jpg"
//Sengalese twist
import sengaleseTwist from "../assets/image/Sengalese_twist/sene.jpg"

import defaultLogo from '../assets/image/logo.jpg';

const itemList = [
    {
        id: 0,
        name: "Install Wigs",
        description: "Are you looking to achieve a flawless and effortless hairstyle? Our wig installation service is here to fulfill your needs! Our qualified hair experts are dedicated to providing an exceptional wig installation experience, helping you achieve the desired look you've always wanted.",
        catagory: 'Women',
        image: [installWig1, installWig2, imgM3],
        price: 120,
    },
    {
        id: 1,
        name: "Boho Braids",
        description: " Transform your hairstyle with elegant and timeless Boho Braids. Our team of experienced hairstylists creates unique bohemian braids that will instantly give you a boho-chic look.",
        catagory: 'Women',
        image: [bohoBraids1, bohoBraids2, bohoBraids3],
        price: 220,
    },
    {
        id: 2,
        name: "Knotless Braids",
        description: "Elevate your style with flawless knotless braids. Our skilled braiders create seamless, natural-looking braids that enhance your beauty and protect your hair. Experience the difference today!",
        catagory: 'Women',
        image: [knotlessBraids1, knotlessBraids2, imgM6],
        price: 200,
    },
    {
        id: 3,
        name: "Cornrows",
        description: "Get runway-ready with our expertly crafted cornrows. Our talented stylists meticulously weave intricate patterns, delivering sleek and stylish cornrow designs that won't disappoint. Book now for a trendy transformation!",
        catagory: 'Women',
        image: [cornRows1, cornRows2, img9],
        price: 180,
    },
    {
        id: 4,
        name: "Box Braids",
        description: "Embrace the beauty and versatility of box braids. Our skilled braiders meticulously create stunning braided patterns that not only look amazing but also protect and enhance your natural hair. Book today and slay effortlessly!",
        catagory: 'Women',
        image: [img8, boxBraids1, boxBraids2],
        price: 180,
    },
    {
        id: 5,
        name: "Two Strands twist",
        description: "Elevate your hair game with stylish two-strand braids. Our talented stylists intricately weave twin braids, delivering a chic and sophisticated look that's perfect for any occasion. Book now for a fabulous hair transformation!",
        catagory: 'Men',
        image: [img6, twoStrandsTwist1],
        price: 120,
    },
    {
        id: 6,
        name: "Crochet braids",
        description: "Get an amazing hair transformation with crochet braids. Our experts use hair extensions to create unique and versatile hairstyles that make you shine. Book now for an unforgettable hair experience!",
        catagory: 'Women',
        image: [crochetBraids1],
        price: 160,
    },
    {
        id: 7,
        name: "Passion twists",
        description: "Experience the beauty of passion twists, a trendy and elegant hairstyle. Our talented professionals create flawless twists for a glamorous and effortless look. Book now for your dream hairstyle!",
        catagory: 'Women',
        image: [passionBraids1, , imgM9],
        price: 200,
    },
    {
        id: 8,
        name: "Twist",
        description: "Experience the best of twists for a unique and modern style. Our experts create flawless twists that enhance your personality and beauty. Book now for an exceptional hair transformation!",
        catagory: 'Men',
        image: [twist1, twist1, twist1],
        price: 120,
    },
    {
        id: 9,
        name: "Senegalese twist",
        description: "Get beautifully crafted Senegalese twists for a trendy and protective look. Our talented professionals will provide you with an authentic and elegant style. Book now for an exceptional hair transformation!",
        catagory: 'Women',
        image: [img12, sengaleseTwist, img11],
        price: 220,
    },

]


export default function Home() {
    let item = useLoaderData();
    // const [item, setItem] = useState(itemList.length > 0 ? itemList : items)
    // console.log("itemList", itemList);
    // if (!item) {
    //     item = items
    // }
    // const [item, setItem] = useState([])
    const target = useRef(null)
    const service = useRef(null) 

    const navigate = useNavigate();
    let cardWidth = (window.innerWidth / 4)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const handleChanges = () => {
        setScreenWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleChanges);
        return () => {
            window.removeEventListener('resize', handleChanges);
        };
    }, [])
    const [selectedDate, setSelectedDate] = useState(null);

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
                        designID: data.designID,
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
    const [basicModal, setBasicModal] = useState(false);
    const toggleOpen = () => setBasicModal(!basicModal);
    const [data, setData] = useState({
        name: '',
        phone: "",
        designID: ''
    })
    function isDateValid(dateToCheck) {
        const validDateToCheck = new Date(dateToCheck);
        const startDate = new Date();
        const endDate = new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000 + 21 * 60 * 60 * 1000);

        if (isNaN(validDateToCheck.getTime()) || isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
            console.log('Invalid date provided');
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
    function handleChange(e) {
        if (e.target.type == 'text' || e.target.type == 'email') {
            setData({ ...data, [e.target.name]: e.target.value })
        } else {
            setData({ ...data, [e.target.name]: !data.confirm })
        }
    }

    function Service() {
        return (
            <div style={{
                color: 'black',
                width: "100%",
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow'
                    style={{ borderRadius: "50%", }}>
                    <img
                        src={item[0].image[1]}
                        // src={`http://localhost:5000/Design/${item[0].designID}/${item[0].image[1]}`}
                        width={"150px"}
                        height={"150px"}
                        style={{
                            borderRadius: "50%",
                        }}
                    />
                    <a href='#!' onClick={() => {
                        setData({ ...data, ["designID"]: 1 })
                        setBasicModal(true)
                    }}>
                        <div className='mask' style={{
                            padding: "20px 20px",
                            backgroundColor: 'rgba(236, 205, 29, 0.5)',
                            color: "white",
                            fontWeight: "1200"
                        }}
                        >
                            <h3>{item[0].name}</h3>
                            {/* <h3>{item[0].name.slice(0, item[0].name.lastIndexOf(' ') - 1)}</h3> */}
                            <h3>${item[0].price}</h3>
                        </div>
                    </a>
                </MDBRipple>
                <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow'
                    style={{ borderRadius: "50%", }}>
                    <img
                        src={item[1].image[1]}
                        // src={`http://localhost:5000/Design/${item[1].designID}/${item[1].image[1]}`}
                        width={"150px"}
                        height={"150px"}
                        style={{
                            borderRadius: "50%",
                        }}
                    />
                    <a href='#!' onClick={() => {
                        setData({ ...data, ["designID"]: 2 })
                        setBasicModal(true)
                    }}>
                        <div className='mask' style={{
                            padding: "20px 20px",
                            backgroundColor: 'rgba(236, 205, 29, 0.5)',
                            color: "white",
                            fontWeight: "1200"
                        }}
                        >
                            <h3>{item[1].name.slice(0, item[1].name.lastIndexOf(' '))}</h3>
                            <h3>${item[1].price}</h3>
                        </div>
                    </a>
                </MDBRipple>
                <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow'
                    style={{ borderRadius: "50%", }}>
                    <img
                        src={item[2].image[1]}
                        // src={`http://localhost:5000/Design/${item[2].designID}/${item[2].image[1]}`}
                        width={"150px"}
                        height={"150px"}
                        style={{
                            borderRadius: "50%",
                        }}
                    />
                    <a href='#!' onClick={() => {
                        setData({ ...data, ["designID"]: 3 })
                        setBasicModal(true)
                    }}>
                        <div className='mask' style={{
                            padding: "20px 20px",
                            backgroundColor: 'rgba(236, 205, 29, 0.5)',
                            color: "white",
                            fontWeight: "1200"
                        }}
                        >
                            <h3>{item[2].name.slice(0, item[2].name.lastIndexOf(' '))}</h3>
                            <h3>${item[2].price}</h3>
                        </div>
                    </a>
                </MDBRipple>
                <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow'
                    style={{ borderRadius: "50%", }}>
                    <img
                        src={item[3].image[1]}
                        // src={`http://localhost:5000/Design/${item[3].designID}/${item[3].image[1]}`}
                        width={"150px"}
                        height={"150px"}
                        style={{
                            borderRadius: "50%",
                        }}
                    />
                    <a href='#!' onClick={() => {
                        setData({ ...data, ["designID"]: 4 })
                        setBasicModal(true)
                    }}>
                        <div className='mask' style={{
                            padding: "40px 0px",
                            backgroundColor: 'rgba(236, 205, 29, 0.5)',
                            color: "white",
                            fontWeight: "1200"
                        }}
                        >
                            <h3>{item[3].name.slice(0, item[3].name.lastIndexOf(' '))}</h3>
                            <h3>${item[3].price}</h3>
                        </div>
                    </a>
                </MDBRipple>
                <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow'
                    style={{ borderRadius: "50%", }}>
                    <img
                        src={item[4].image[1]}
                        // src={`http://localhost:5000/Design/${item[4].designID}/${item[4].image[1]}`}
                        width={"150px"}
                        height={"150px"}
                        style={{
                            borderRadius: "50%",
                        }}
                    />
                    <a href='#!' onClick={() => {
                        setData({ ...data, ["designID"]: 5 })
                        setBasicModal(true)
                    }}>
                        <div className='mask' style={{
                            padding: "20px 20px",
                            backgroundColor: 'rgba(236, 205, 29, 0.5)',
                            color: "white",
                            fontWeight: "1200"
                        }}
                        >
                            {/* <h3>{item[4].name}</h3> */}
                            <h3>{item[4].name}</h3>
                            {/* <h3>{nameitle.slice(0, item[4].name.lastIndexOf(' ') - 1)}</h3> */}
                            <h3>${item[4].price}</h3>
                        </div>
                    </a>
                </MDBRipple>

            </div>
        )
    }
    function Design({ design, ind }) {
        let shortText
        if (design.description.length > 100) {
            shortText = design.description.slice(0, 100) + '...'
        } else {
            shortText = design.description
        }
        // let logoImage = defaultLogo
        // console.log();
        let logoImage = design.image.length > 0 ?
            design.image[0]
            : defaultLogo;
        return (
            <MDBCol >
                <MDBCard className='h-100'>
                    <center style={{ paddingTop: '10px', border: 'solid 1px rgba(0,0,0,0.3)', borderRadius: '10px' }}>
                        <div className='bg-image hover-overlay'
                            style={{
                                width: "200px",
                                height: "200px",
                                borderRadius: "50%",
                            }}>
                            <img
                                className=' pink-circular-fill2'
                                // src='https://mdbootstrap.com/img/new/standard/city/062.webp'
                                src={logoImage}
                                alt='...'
                                width={"200px"}
                                height={"200px"}
                            />
                            <div
                                className='mask'
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    background: 'linear-gradient(45deg, rgba(236, 205, 29, 0.5), rgba(79, 59, 4, 0.5) 100%)',
                                }}
                            >
                                <button
                                    className='submit2'
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        fontSize:'small'

                                    }}
                                    onClick={toggleOpen}
                                >
                                    BOOK NOW
                                </button>
                            </div>
                        </div>
                        <MDBCardBody style={{ height: "200px" }}>
                            <MDBCardTitle><b>{design.name}</b></MDBCardTitle>
                            <MDBCardText style={{ height: "80px", textAlign: 'left' }}>
                                {shortText}
                            </MDBCardText>
                            <div style={{
                                display: "flex",
                                justifyContent: "flex-end"

                            }}>
                                {/* <a href='#detail'> */}
                                <button
                                    style={{
                                        border: 'solid 1px grey', backgroundColor: 'rgba(0,0,0,0.75)',
                                        fontSize: 'medium', color: 'white', fontWeight: 'lighter',
                                        padding: '5px 10px', borderRadius: '7px'
                                    }}
                                    className='direction'
                                    onClick={() => {
                                        console.log(design.designID);
                                        let i = parseInt(design.designID) - 1
                                        // let i = parseInt(ind)
                                        // navigate('/design/' + i)
                                        // old
                                        // navigate('/' + i)
                                        // new
                                        scrollToTarget()
                                        navigate("/"+design.id)
                                    }}>
                                    More..<i className='fas fa-long-arrow-down'></i>
                                </button>
                                {/* </a> */}
                            </div>
                        </MDBCardBody>
                        <MDBCardFooter style={{ color: "goldenrod" }}>
                            <h4 className='' style={{ color: "goldenrod" }} >${design.price}</h4>
                        </MDBCardFooter>
                    </center>
                </MDBCard>
            </MDBCol>
        )
    }
    const settings = {
        dots: false, // Show navigation dots
        infinite: true, // Infinite loop the slides
        speed: 2000, // Transition speed in milliseconds
        slidesToShow: 4, // Number of slides to show at a time
        slidesToScroll: 2, // Number of slides to scroll at a time
        autoplay: true, // Auto-play the slide
        autoplaySpeed: 10000, // Auto-play speed in milliseconds
    };
    if (screenWidth > 1200) {
        cardWidth = (screenWidth / 4) - 20
        settings.slidesToShow = 4
    } else if (screenWidth > 968) {
        cardWidth = (screenWidth / 3) - 20
        settings.slidesToShow = 3
    } else if (screenWidth > 568) {
        cardWidth = (screenWidth / 2) - 30
        settings.slidesToShow = 2
    } else {
        cardWidth = (screenWidth / 1) - 20
        settings.slidesToShow = 1
    }

    function scrollToTarget(){
        if(target){
        target.current.scrollIntoView({behaviour:'smooth' ,block:'start'})
    }
    }

    function scrollToService(){
        if(service){
        service.current.scrollIntoView({behaviour:'smooth' ,block:'start'})
    }
    }


    return (
        <div>
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
                                        placeholderText='Choose a Date'
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
                                    <img src={require('../assets/images/loader.gif')} width={'30px'} alt="loader" />
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
            <ScrollToTop />
            <MDBCarousel
                showIndicators
                showControls
                fade
                light
                fadeautoplay={true}
                interval={100000}
                keyboard={true}
            // pause={true}
            >
                <MDBCarouselItem itemId={1}>
                    {/* <img
                        src={img2}
                        className='d-block w-100'
                        alt='...'
                        height={520}
                        style={{
                            opacity: '0.8 grey'
                        }}
                    /> */}
                    <MDBRipple rippleTag='div' className='bg-image overlay hover-zoom hover-shadow' style={{ width: "100%" }}>
                        <img
                            src={img2}
                            className='d-block w-100'
                            alt='...'
                            height={520}
                            style={{
                                opacity: '0.8 grey'
                            }}
                        />
                        <a href='#!' onClick={() => {
                            // setBasicModal(true)
                        }}>
                            <div className='mask' style={{
                                display: screenWidth < 700 ? 'block' : 'none', fontFamily: 'tahoma',
                                color: 'white', backgroundColor: 'rgba(0,0,0,0.15)', height: 'fit-content',
                                fontWeight: 'lighter', top: '50%', left: '50%', width: '70%',
                                transform: 'translate(-50% ,-50%)', textAlign: 'center', fontSize: 'x-large'
                            }}> Welcome To Gorgeous braids by Carol<br /><span style={{ color: 'orange' }}>Beauty at your service</span></div>
                        </a>
                    </MDBRipple>
                    <MDBCarouselCaption>
                        {/* <div style={{marginTop:"-400px"}}> */}
                        <center style={{ border: 'solid 1px transparent', marginLeft: '200px' }}>
                            <h1 className='h1Carousel'>Welcome To Gorgeous braids by Carol</h1>
                            <h1 className='h1Carousel2'>Beauty at your service</h1>
                            <p>Our braids all kinds offers you a unique and personalized style that will make you shine
                                from the inside and give you confidence in yourself, while highlighting your natural beauty.
                            </p>
                            {/* <button
                                className='submit2'
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                                onClick={toggleOpen}
                            >
                                Make An Appoinment
                            </button> */}
                        </center>
                        <Service />
                        {/* </div> */}
                    </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId={2}>
                    <MDBRipple rippleTag='div' className='bg-image overlay hover-zoom hover-shadow' style={{ width: "100%" }}>
                        <img
                            src={img1}
                            className='d-block w-100'
                            alt='...'
                            height={520}
                            style={{
                                opacity: '0.8 grey'
                            }}
                        />
                        <a href='#!' onClick={() => {
                            // setBasicModal(true)
                        }}>
                            <div className='mask' style={{
                                display: screenWidth < 700 ? 'block' : 'none', fontFamily: 'tahoma',
                                color: 'white', backgroundColor: 'rgba(0,0,0,0.15)', height: 'fit-content',
                                fontWeight: 'lighter', top: '50%', left: '50%', width: '70%',
                                transform: 'translate(-50% ,-50%)', textAlign: 'center', fontSize: 'x-large'
                            }}>Welcome To Gorgeous braids by Carol<br /><span style={{ color: 'orange' }}>Beauty at your service</span></div>
                        </a>
                    </MDBRipple>
                    <MDBCarouselCaption>
                        {/* <div style={{ textAlign: "right" }}> */}
                        <center style={{ border: 'solid 1px transparent', marginRight: '200px', marginLeft: '-50px' }}>
                            <h1 className='h1Carousel'>Welcome To Gorgeous braids by Carol</h1>
                            <h1 className='h1Carousel2'>Beauty at your service</h1>
                            <p>Our braids company of all kinds offers you a unique and personalized style that will make you shine
                                from the inside and give you confidence in yourself, while highlighting your natural beauty.
                            </p>
                            <div style={{
                                display: "flex",
                                justifyContent: "flex-end"
                            }}>
                                {/* <button
                                    className='submit2'
                                    style={{
                                        textAlign: "right"
                                    }}
                                    onClick={toggleOpen}
                                >
                                    Make An Appoinment
                                </button> */}
                            </div>
                            {/* </div> */}
                        </center>
                        <Service />
                    </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId={3}>
                    <MDBRipple rippleTag='div' className='bg-image overlay hover-zoom hover-shadow' style={{ width: "100%" }}>
                        <img
                            src={img3}
                            className='d-block w-100'
                            alt='...'
                            height={520}
                            style={{
                                opacity: '0.8 grey'
                            }}
                        />
                        <a href='#!' onClick={() => {
                            // setBasicModal(true)
                        }}>
                            <div className='mask' style={{
                                display: screenWidth < 700 ? 'block' : 'none', fontFamily: 'tahoma',
                                color: 'white', backgroundColor: 'rgba(0,0,0,0.15)', height: 'fit-content',
                                fontWeight: 'lighter', top: '50%', left: '50%', width: '70%',
                                transform: 'translate(-50% ,-50%)', textAlign: 'center', fontSize: 'x-large'
                            }}>Welcome To Gorgeous braids by Carol<br /><span style={{ color: 'orange' }}>Beauty at your service</span></div>
                        </a>
                    </MDBRipple>
                    <MDBCarouselCaption>
                        <div style={{ textAlign: "left" }}>
                            {/* <center> */}
                            <h1 className='h1Carousel'>Welcome To Gorgeous braids by Carol</h1>
                            <h1 className='h1Carousel2'>Beauty at your service</h1>
                            <p>Our braids company of all kinds offers you a unique and personalized style that will make you shine
                                from the inside and give you confidence in yourself, while highlighting your natural beauty.
                            </p>
                            {/* <button
                                className='submit2'
                                style={{
                                    textAlign: "right"
                                }}
                                onClick={toggleOpen}
                            >
                                Make An Appoinment
                            </button> */}
                        </div>
                        {/* </center> */}
                        <Service />
                    </MDBCarouselCaption>
                </MDBCarouselItem>
            </MDBCarousel>
            <br />
            <center >
                <h1 ref={service}>Our Services</h1>
                <p style={{ width: screenWidth < 600 ? '85%' : "60%" }}>
                    Our company offers unique and trendy hairstyles for all hair types.
                    Our experts provide their talent and expertise for beautiful and long-lasting braids.
                    Discover a style that will make you stand out!
                </p>
            </center >
            <br />
            <center >
                {/* <MDBCardGroup> */}
                <Slider {...settings}>
                    {item.map((items, i) => (
                        <MDBRow style={{ widith: "100%", background: "red" }}>
                            <Design design={items} ind={i} scrollToTarget={scrollToTarget}/>
                        </MDBRow>
                    ))}
                </Slider>
                {/* </MDBRow> */}
                {/* </MDBCardGroup> */}
            </center>
            <br />

            <div id='target' ref={target}>
                <Outlet context={scrollToService} />
            </div>
            
            
            {/* <div>
                <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
                    <MDBCol>
                        <button
                            className='submit2'
                            style={{ margin: "0 auto" }}
                            onClick={toggleOpen}
                        >
                            BOOK
                        </button>
                        <br />
                        <MDBCard className='h-200'>
                            <MDBCardImage
                                src={img15}
                                alt='...'
                                position='top'
                                height={"400px"}
                            />
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <button
                            className='submit2'
                            style={{ margin: "0 auto" }}
                            onClick={() => {
                                navigate('/design')
                            }}>
                            DESIGN
                        </button>
                        <br />
                        <MDBCard className='h-200'>
                            <MDBCardImage
                                src={img16}
                                alt='...'
                                position='top'
                                width={"200px"}
                                // width={cardWidth}
                                height={"400px"}
                            />
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </div> */}
            <div style={{ paddingBottom: '90px', marginBottom: '-10px' }}>
                <MDBCard
                    className="h-100"
                    style={{
                        background: "rgba(255, 255, 230, 0.9)",
                    }}
                >
                    <MDBCardBody>
                        <center>
                            <MDBCardTitle><h3>About us</h3></MDBCardTitle>
                        </center>
                        <div className="round">
                            <MDBCardImage
                                src={logo}
                                alt='...'
                                // fluid
                                height={"150px"}
                                width={"150px"}
                                style={{
                                    minHeight: "150px",
                                    minWidth: "150px",
                                }}
                            />
                        </div>
                        <p className='aboutusP'>
                            Imagine a company that draws inspiration from the ancestral
                            art of African hair braiding to create unique and elegant braids.
                            With us, each braid is a work of art, meticulously crafted by our hair styling experts.
                            Whether you choose traditional braids, thin braids, cornrow braids, or bold patterned braids,
                            our talented team is ready to give you an exceptional look. By using refined braiding techniques and top-quality materials,
                            we guarantee durable and comfortable braids. Discover the unique experience of our passionate
                            braiders and let your hairstyle reflect your style and inner beauty.
                        </p>
                    </MDBCardBody>
                </MDBCard>
            </div>


        </div >
    )
}

export const homeLoader = async () => {
    const res = await fetch(`http://192.168.100.25:5000/api/design/getAllDesign`, {
        headers: {
            'content-type': 'application/json',
            'accept': 'applicaion/json',
            'access-control-origin': '*',
            // 'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    // console.log(res);
    if (!res.ok) {
        return itemList;
        // throw Error('An error occur while fetch for Designs')
    }
    // console.log("res.json()", res);
    let result = await res.json();
    let items = [];
    // console.log("result", result);
    for (let index = 0; index < result.design.length; index++) {
        const element = result.design[index];
        if (result.design[index].images) {
            element.image = result.design[index].images.split(",").map((item) => (
                `http://192.168.100.25:5000/Design/${result.design[index].designID}/${item}`
            ))
        } else {
            element.image = [];
        }
        // console.log("result2", element);
        items.push(element);
    }
    if (items.length > 0) {
        console.log("items", items);
        return items;
    } else {
        // console.log("itemsList", itemList);
        return itemList;
    }
}