import { MDBCol, MDBRipple, MDBRow, MDBTabs, MDBTabsItem } from 'mdb-react-ui-kit'
import React, { useState, useMemo, useEffect } from 'react'
import { useLocation, useLoaderData, useNavigate, Link, Outlet, NavLink } from 'react-router-dom'
import StickyMenu from './StickyMenu'
import logo from "../assets/image/logo.png"

const Header = () => {

    let location = useLocation()
    const navigate = useNavigate()
    const user = useLoaderData();
    // const location = useLocation();
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleChange = () => {
        setScreenWidth(window.innerWidth)
    }


    useEffect(() => {
        window.addEventListener('resize', handleChange);
        return () => {
            window.removeEventListener('resize', handleChange);
        };
    }, [])
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const [menu, setMenu] = useState(false)
    const [hide, setHide] = useState(false)
    // console.log("Userheader", User);
    useMemo(() => {
        if (location.pathname === '/login' || location.pathname === '/dashboard') {
            setHide(true)
        }
    }, [useLocation()])
    const Logout = async () => {
        await fetch('http://localhost:5000/api/admin/logout', {
            headers: {
                'content-type': 'application/json',
                'accept': 'applicaion/json',
                'access-control-origin': '*',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("token", '')
                localStorage.clear()
                window.location.pathname = "/"
                // navigate("/");

            })
            .catch(err => {
            })
    }

    function mouseOver(e) {
        e.target.style.color = 'white'
    }
    function mouseLeave(e) {
        e.target.style.color = 'goldenrod'
    }

    return (
        <React.Fragment>
            <div
                className='headerTop'
                style={{
                    padding: '0px 0px',
                    marginTop: "0px",
                    fontWeight: 'bold',
                    letterSpacing: '1px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: "rgba(0,0,0,0.85)",
                    color: "goldenrod",
                    minHeight: "50px",
                }}>

                <>
                    {screenWidth > 600 ? (
                        <div style={{
                            padding: '0px 50px', width: "100%", display: "flex",
                            flexDirection: 'row', color: " goldenrod",
                            justifyContent: 'space-between',
                        }}>

                            <div>
                                <i className='fas fa-clock'></i> 8am
                                - 9pm
                            </div>

                            <a
                                onMouseEnter={(e) => mouseOver(e)}
                                onMouseLeave={(e) => mouseLeave(e)}
                                href='https://yelp.to/B3qCNNNSNO'
                                target={"_blank"}
                                style={{ textDecoration: "none", display: "flex", color: " goldenrod", alignItems: 'center' }}
                            >
                                <span className='fab fa-yelp'></span>
                                Yelp
                            </a>

                            <a
                                onMouseEnter={(e) => mouseOver(e)}
                                onMouseLeave={(e) => mouseLeave(e)}
                                href='https://www.instagram.com/gorgeous_braids_by_carol?igsh=MzRlODBiNWFlZA=='
                                target={"_blank"}
                                style={{ textDecoration: "none", display: "flex", color: " goldenrod", alignItems: 'center' }}
                            >
                                <span className='fab fa-instagram'></span>
                                Instagram
                            </a>

                            {/* <Link to="#" style={{ color: "goldenrod", }}  > */}
                            <div >
                                <i className='fas fa-location-dot'> </i>
                                3701 S.Cooper Ste.153 Arlington, Tx 76015 #4
                            </div>
                            {/* </Link> */}

                            {/* <Link to="#" style={{ color: "goldenrod", }}  > */}
                            <div>
                                <i className='fas fa-square-phone'> </i>
                                (602)475-2943
                            </div>
                            {/* </Link> */}
                        </div>
                    ) : (
                        <>
                            {/* <div>
                            <div>
                                <i className='fas fa-clock'></i> 8am
                                <i className='fas fa-clock-four'></i> 6pm
                            </div>
                                <div style={{ display: "flex", justifyContent: "space-around", padding: "10px 0px" }}>
                                    <a
                                       href='https://yelp.to/B3qCNNNSNO'
                                        className='fab fa-yelp headerLink'
                                        target={"_blank"}
                                        style={{
                                            textDecoration: "none",
                                            color: " goldenrod",
                                            fontSize: "30px"
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.classList.add("headerLink");
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.classList.remove("headerLink");
                                        }}
                                    ></a>
                                    <a
                                        className='fab fa-instagram '
                                        href='https://www.instagram.com/gorgeous_braids_by_carol?igsh=MzRlODBiNWFlZA=='
                                        target={"_blank"}
                                        style={{ textDecoration: "none", color: " goldenrod", fontSize: "30px" }}
                                        onMouseEnter={(e) => {
                                            e.target.classList.add("headerLink");
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.classList.remove("headerLink");
                                        }}
                                    ></a>
                                    <Link to="#" style={{ color: "goldenrod", }}  ><i className='fas fa-square-phone'>(602)475-2943</i></Link>
                                </div>
                                <Link to="#" style={{ color: "goldenrod", }}  ><i className='fas fa-location-dot'></i>3701 S.Cooper Ste.153 Arlington, Tx 76015 #4</Link>
                            </div> */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', margin: 'auto', columnGap: '10px', padding: '5px' }}>
                                <span><i className='fas fa-clock'></i> 8am-9pm</span>
                                <span>G.B.C.  Braids Fashion</span>
                            </div>
                        </>
                    )}
                </>
            </div>
            <div style={{
                backgroundImage: "repeating-linear-gradient(45deg,rgba(19, 13, 13, 0.284),rgba(19, 13, 13, 0.284) 1px, transparent 1px, transparent 30px)",
                backgroundSize: '4px 6px',
                backgroundColor: 'rgba(235,235,235,1)'
                // background: "repeating-radial-gradient(closest-side at 13px 4px,transparent 3px,rgba(19, 13, 13, 0.284), transparent 5px,rgba(19, 13, 13, 0.284) 1px )",
            }}>

                <div
                    style={{
                        width: "95%",
                        margin: "0 auto",

                    }}>

                    <div className='header'
                        style={{
                            padding: '5px 30px',
                            height: '50px',
                            color: 'black',
                            fontWeight: 'bold',
                            letterSpacing: '1px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                        {menu ? (
                            <div className='headermenu'>
                                <div
                                    style={{
                                        height: '50px',
                                        color: 'black',
                                        fontWeight: 'bold',
                                        letterSpacing: '1px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }}>
                                    <h2 onClick={() => { setMenu(false); navigate('/') }} style={{ cursor: "pointer" }}>BRAIDS</h2>
                                    <h1 onClick={() => { setMenu(false) }} className='fas fa-close edit' ></h1>
                                </div>
                                <div onClick={() => { setMenu(false); navigate('/') }} className='menuItem'>HOME</div>
                                <div onClick={() => { setMenu(false); navigate('/design') }} className='menuItem'>DESIGNS</div>
                                <div onClick={() => { setMenu(false); navigate('/aboutus') }} className='menuItem'>ABOUT US</div>
                            </div>
                        ) : (

                            <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow'>
                                <img
                                    src={logo}
                                    width={"50px"}
                                    height={"50px"}
                                    style={{
                                        // borderRadius: "50%",
                                    }}
                                />
                                <a href='#!' onClick={() => {
                                    navigate('/')
                                }} >
                                    <div className='mask'
                                        style={{
                                            backgroundColor: 'rgba(32, 29, 1, 0.495)'
                                            // backgroundColor: 'rgba(236, 205, 29, 0.5)' 
                                        }}
                                    >
                                    </div>
                                </a>
                            </MDBRipple>

                        )}

                        <div
                            style={{
                                margin: 'auto',
                                display: 'flex', columnGap: '15px'
                            }}
                        >
                            <span onClick={() => navigate('/')}
                                style={{
                                    cursor: 'pointer',
                                    border: 'solid 1px grey',
                                    padding: '5px 12px',
                                    borderRadius: '5px',
                                    backgroundColor: useLocation().pathname == '/' ? 'rgba(0,0,0,0.9)' : 'rgba(255,255,255,0.7)',
                                    color: useLocation().pathname == '/' ? 'white' : 'black',
                                    transition: 'al 0.2s ease-in-out'
                                }}>
                                Home
                            </span>

                            <span onClick={() => navigate('/design')}
                                style={{
                                    cursor: 'pointer',
                                    border: 'solid 1px grey',
                                    padding: '5px 12px',
                                    borderRadius: '5px',
                                    backgroundColor: useLocation().pathname == '/design' ? 'rgba(0,0,0,0.9)' : 'rgba(255,255,255,0.7)',
                                    color: useLocation().pathname == '/design' ? 'white' : 'black',
                                    transition: 'al 0.2s ease-in-out'
                                }}>
                                Designs
                            </span>
                            {user.isLogin ? (
                                <>
                                    <span onClick={() => navigate('/dashbroad')}
                                        style={{
                                            cursor: 'pointer',
                                            border: 'solid 1px grey',
                                            padding: '5px 12px',
                                            borderRadius: '5px',
                                            backgroundColor: location.pathname == '/dashbroad' ? 'rgba(0,0,0,0.9)' : 'rgba(255,255,255,0.7)',
                                            color: location.pathname == '/dashbroad' ? 'white' : 'black',
                                            transition: 'al 0.2s ease-in-out'
                                        }}>
                                        Dashbroad
                                    </span>
                                    <span
                                        className='fas fa-door-open'
                                        onClick={() =>{
                                            Logout();
                                        }}
                                        style={{
                                            cursor: 'pointer',
                                            border: 'solid 1px grey',
                                            padding: '5px 12px',
                                            fontSize:"20px",
                                            borderRadius: '5px',
                                            backgroundColor: 'rgba(255,255,255,0.7)',
                                            color: 'black',
                                            transition: 'al 0.2s ease-in-out'
                                        }}>
                                    </span>
                                </>
                            ) : (<></>)}

                            {/* <NavLink to="/" >HOME</NavLink>
                                &nbsp;&nbsp;
                                <NavLink to="design">DESIGNS</NavLink>
                                &nbsp;&nbsp; */}
                            {/* <NavLink to="aboutus" >ABOUT US</NavLink> */}
                            {/* &nbsp;&nbsp; */}
                            {/* <NavLink to="cart" ><i className='fas fa-shopping-cart'></i></NavLink> */}
                        </div>

                    </div>
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div style={{
                display: 'flex',
                flexDirection: screenWidth < 700 ? 'column' : 'row',
                rowGap: '20px',
                justifyContent: 'space-around',
                letterSpacing: '1px',
                backgroundColor: "rgba(0,0,0,0.85)",
                color: 'rgba(245,245,245,1)',
                marginTop: "5px",
                padding: '20px 10px'

            }}>

                <div>
                    <h4 style={{ color: " goldenrod" }}>Our Contact & Location</h4>

                    <div style={{ display: "flex", flexDirection: 'column', alignItems: "left" }}>
                        <span >
                            <i className='fas fa-location-dot'></i> 3701 S.Cooper Ste.153 Arlington, Tx 76015 #4
                        </span>

                        <span >
                            <i className='fas fa-square-phone'></i> (602)475-2943
                        </span>
                    </div>

                </div>

                <div>
                    <h4 style={{ color: " goldenrod" }}>Follow us</h4>

                    <div style={{ display: "flex", flexDirection: 'column', alignItems: "left" }}>
                        <a
                            onMouseEnter={(e) => mouseOver(e)}
                            onMouseLeave={(e) => mouseLeave(e)}
                            href='https://yelp.to/B3qCNNNSNO'
                            target={"_blank"}
                            style={{ textDecoration: "none", color: "rgba(245,245,245,1)", display: "flex", alignItems: "center" }}
                        >
                            <span className='fab fa-yelp'></span>
                            yelp
                        </a>

                        <a
                            onMouseEnter={(e) => mouseOver(e)}
                            onMouseLeave={(e) => mouseLeave(e)}
                            href='https://www.instagram.com/gorgeous_braids_by_carol?igsh=MzRlODBiNWFlZA=='
                            target={"_blank"}
                            style={{ textDecoration: "none", color: "rgba(245,245,245,1)", display: "flex", alignItems: "center" }}
                        >
                            <span className='fab fa-instagram'></span>
                            instagram
                        </a>
                    </div>
                </div>

                <div>
                    <h4 style={{ color: " goldenrod" }}>General</h4>
                    <div style={{ display: "flex", flexDirection: 'column', alignItems: "left" }}>
                        <span>Terms and Conditions</span>
                        <span>Privacy and Confidentiality</span>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header
