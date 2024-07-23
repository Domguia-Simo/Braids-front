import React, { useState, useLayoutEffect, useEffect, useMemo } from 'react'
import { Link, NavLink } from 'react-router-dom';

const StickyMenu = () => {

    const [display, setDisplay] = useState(null)

    useLayoutEffect(() => {
        window.addEventListener('scroll', (e) => {
            try {
                let sticky = document.querySelector('.drop-down-motion')
                if (window.scrollY > 200) {
                    sticky.style.transform = 'translateY(0px)'
                } else {
                    sticky.style.transform = 'translateY(-65px)'
                }
            } catch (error) {

            }
        })

    })

    useMemo(() => {
        if (window.innerWidth < 900) {
            setDisplay('none')
        }
    }, [0])


    return (
        <React.Fragment>
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    width: '100%',
                    zIndex: 10000,
                    display: display ? 'none' : 'flex',
                    justifyContent: 'center',
                    backgroundColor: 'var(--primary)',


                }}
                className='drop-down-motion'
            >
                <div
                    style={{
                        // border:'solid 1px red',
                        display: 'flex',
                        width: '90%',
                        height: '45px',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        padding: '7px 5px',
                        border: 'solid 1px transparent',
                        color: 'white',
                        fontFamily: 'sans-serif',
                        transition: 'all 0.2s ease-in-out'
                    }}
                >
                    {/* <Link to="/home"> */}
                    {/* <div style={{
                        position: 'fixed',
                        left: 0,
                        top: 0,
                        // width:'70px',
                        // height:'70px',
                        // overflow:'hidden'
                    }}>
                        <img
                            style={{
                                borderBottomRightRadius: '25px',
                                boxShadow: '2px 2px 5px rgba(0,0,0,0.5)',
                                borderRight: 'solid 3px white'
                            }}
                            src={require('../assets/img/brand/download.jpeg')}
                            alt="IAI logo"
                            width={'70px'}
                            height={'60px'}
                        />
                    </div> */}
                    {/* </Link> */}
                    <NavLink to='/'> <div style={{ color: 'white' }} > <i className='fas fa-home'> Home</i></div></NavLink>
                    <NavLink to='/design'> <div style={{ color: 'white' }} > <i className='fas fa-check'> DESign</i></div></NavLink>
                    <NavLink to='/aboutus'> <div style={{ color: 'white' }} > <i className='fas fa-archive'> About us</i></div></NavLink>

                </div>

            </div>
        </React.Fragment>
    )
}

export default StickyMenu