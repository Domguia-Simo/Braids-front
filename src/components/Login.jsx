import React, { useState, useEffect, useMemo } from 'react'
import { useNavigate, useLoaderData, Link } from 'react-router-dom'
import logo from "../assets/image/logo.png"


// Styling 
import '../assets/styles/global.css'

export default function Login() {
    const navigate = useNavigate()
    // const User = useLoaderData()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [respond, setRespond] = useState('')
    const [success, setSuccess] = useState('')
    const [smallScreen, setSmallScreen] = useState(false)

    useMemo(() => {
        if (window.innerWidth < 1200) {
            setSmallScreen(true)
        } else {
            setSmallScreen(false)
        }
    }, [0])
    useMemo(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth < 1440) {
                setSmallScreen(true)
            } else {
                setSmallScreen(false)
            }
        })
    }, [])

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    async function submit() {
        console.log(data)
        if (data.email == '' || data.password == '') {
            setError("Enter all value")
            return
        }
        setError('')
        setRespond('')
        setSuccess('')
        setLoading(true)

        await fetch(`http://localhost:5000/api/admin/login`, {
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'accept': 'applicaion/json',
                'access-control-origin': '*'
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        })
            .then(res => res.json())
            .then(async (data) => {
                console.log("data", data)
                if (data.token) {
                    setSuccess(data.message)
                    await localStorage.setItem('token', data.token)
                    window.location.pathname = "/dashbroad/booklist"
                } else {
                    setError(data.error)
                }
                setLoading(false)
            })
            .catch(e => {
                // console.log(e)
                setError("Verify your internet connection")
                setLoading(false)
            })

    }

    function handleChange(e) {
        if (e.target.type == 'text' || e.target.type == 'password' || e.target.type == 'email') {
            setData({ ...data, [e.target.name]: e.target.value })
        } else {
            setData({ ...data, [e.target.name]: !data.confirm })
        }
    }

    // const toDashboard = () => {
    //     setTimeout(() => {
    //         navigate("/dashboard", { replace: true, state: { name: User.name } })
    //     }, 200)
    // }
    // if (!User.isLogin) {
    return (
        <div style={{
            display: 'flex',
            height: '100%',
            justifyContent: 'space-between',

        }}>

            <section className="vh-100 loginContainer" style={{
                border: 'solid 1px transparent', width: '100%',
                paddingTop: '50px',
                // backgroundImage: `url('../assets/')` ,
            }}>
                <div className="container-fluid" style={{ border: 'solid 1px transparent' }}>
                    <div className="row"
                        style={{
                            border: 'solid 1px transparent', display: 'flex',
                            flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            // backgroundColor: "red" 

                        }}
                    >
                        <div style={{
                            display: 'flex',
                            // border: 'solid 1px rgba(0,0,0,0.2)',
                            // backgroundColor: 'rgba(250,250,250,0.5)',
                            borderRadius: '10px',
                            flexDirection: 'column',
                            margin: '30px 0px',
                            // marginLeft: '-260px',
                            width: 'fit-content'
                        }}>
                            {/* <div style={{ display: "flex",justifyContent:"start" }}> */}
                            <img
                                src={logo}
                                alt="G.B.C logo"
                                width={75}
                                height={75}
                                style={{
                                    borderRadius: '10px',
                                    boxShadow: '5px 5px 10px grey',
                                    marginTop: '0px', zIndex: 4
                                }}
                            />
                            {/* </div> */}
                            <form style={{ width: "fit-content", backgroundColor: "", opacity: "0.5" }}>

                                <div style={{marginTop:"40px"}}>
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

                                <h3 className='fw-normal mb-3 pb-2' style={{ letterSpacing: "2px", textAlign: 'left', padding: '7px' }}>Log in</h3>

                                <div >
                                    <input type="email"
                                        id="form2Example18"
                                        className="" placeholder='Email Address'
                                        name="email" onChange={e => handleChange(e)} required
                                        style={{ border: 'solid 1px rgba(0,0,0,0.2)', outline: 'none', width: '280px', backgroundColor: 'rgb(250,250,250)' }}
                                    />

                                </div>

                                <div className="form-outline mb-4">
                                    <input
                                        type="password"
                                        id="form2Example28"
                                        className="" placeholder='Password'
                                        name="password" onChange={e => handleChange(e)} required
                                        style={{ border: 'solid 1px rgba(0,0,0,0.2)', outline: 'none', width: '280px', backgroundColor: 'rgb(250,250,250)' }}
                                    />

                                </div>

                                <div className="" style={{ width: '280px', border: 'solid 1px transparent', textAlign: 'center' }}>
                                    <button
                                        disabled={loading ? true : false}
                                        className=""
                                        style={{ border: 'solid 1px grey', padding: '5px 10px', width: '90%', borderRadius: '5px', color: 'white', backgroundColor: '#54b4d3' }}
                                        type="button"
                                        onClick={() => {
                                            submit();
                                        }}
                                    >Login{' '}
                                        {
                                            loading ?
                                                <img src={require('../assets/images/loader.gif')} width={'20px'} /> : ''
                                        }
                                    </button>
                                </div>

                                {/* <p className=""><a className="text-muted" href="#!">Forgot password?</a></p> */}
                                {/* <p>Don't have an account? <Link to="register" className="link-info">Register here</Link></p> */}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
    // } else {
    //     toDashboard();
    // }

}

export const loginLoader = async ({ params }) => {
    let token = localStorage.getItem('token')
    const res = await fetch('http://localhost:5000/api/admin/isLogin', {
        headers: {
            'content-type': 'application/json',
            'accept': 'applicaion/json',
            'access-conteol-origin': '*',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })

    if (!res.ok) {
        throw Error('Could not find that getting voter.')
    }
    // console.log("res.json()",res.json());
    let response = await res.json()
    // let response2 = await res2.json()
    let data = {
        isLogin: response.isLogin,
        name: response.name,
    }
    return data

}