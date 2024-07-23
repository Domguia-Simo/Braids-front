import React, { useState } from 'react'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import defaultLogo from '../../assets/image/logo.jpg';
import moment from 'moment';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBFooter, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle, MDBRow } from 'mdb-react-ui-kit'
import ReactDatePicker from 'react-datepicker';

export default function DashbroadBook() {
    const bookList = useLoaderData();
    const navigate = useNavigate()
    const [hideMenu, setHideMenu] = useState([])
    const [data, setData] = useState({})
    const [basicModal, setBasicModal] = useState(false);
    const [isValidating, setIsValidating] = useState(false);
    const toggleOpen = () => setBasicModal(!basicModal);
    const [selectedDate, setSelectedDate] = useState(null);

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)

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
    const handleChangeOrderDate = async (id) => {
        console.log(selectedDate);
        setError('');
        setSuccess('');
        if (selectedDate === '') {
            setError("Enter the date")
        } else {
            setLoading(true);
            const url = "http://localhost:5000/api/book/changeOrder/" + id
            await fetch(url, {
                method: 'put',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Access-Control-Origin": "*",
                },
                body: JSON.stringify({ date: selectedDate })
            })
                .then(res => res.json())
                .then(async (res) => {
                    console.log(res);
                    if (res.message == "Book updated successfully") {
                        setSuccess(res.message)
                        setTimeout(() => {
                            setSelectedDate('');
                            setLoading(false);
                            setBasicModal(false);
                            navigate('.', { replace: true })
                        }, 1500);
                    }
                })
                .catch(err => {
                    setError("An error occur please check you connection and try later.");
                });
        }
    }
    const handleValidOrder = async (id) => {
        setLoading(true);
        setError('');
        setSuccess('');
        console.log(selectedDate);
        const url = "http://localhost:5000/api/book/validOrder/" + id
        await fetch(url, {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Access-Control-Origin": "*",
            },
            // body: JSON.stringify({ date: selectedDate })
        })
            .then(res => res.json())
            .then(async (res) => {
                console.log(res);
                if (res.message == "Book validated successfully") {
                    setSuccess(res.message)
                    setTimeout(() => {
                        setSelectedDate('');
                        setLoading(false);
                        setBasicModal(false);
                        navigate('.', { replace: true })
                    }, 1500);
                }
            })
            .catch(err => {
                setError("An error occur please check you connection and try later.");
            });
    }
    function Design({ item, ind }) {
        let logoImage = item.images ?
            `http://localhost:5000/Design/${item.designID}/${item.images.split(",")[0]}`
            : defaultLogo;
        const formattedDate = new Date(item.date).toISOString()
            .replace(/T/, ' ')
            .replace(/\..+/, '');
        let dateColor = 'green';
        let diff = moment(formattedDate).diff(moment(), 'hours');
        console.log(diff);
        if (diff < 48) {
            dateColor = 'orange'
        }
        if (diff < 0 && !item.done) {
            dateColor = 'red'
        }
        return (
            <>
                <MDBCol >
                    <MDBCard
                        className="h-110"
                        style={{
                            background: "rgba(255, 255, 230, 0.9)",
                            border:'solid 1px rgba(0,0,0,0.3)',padding:'2px'
                        }}
                    >
                        <MDBRow style={{display:'flex'}}>
                            <MDBCol md={3} style={{flex:1,justifyItems:'center'}}>
                                <MDBCardImage
                                    // src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp'
                                    src={logoImage}
                                    alt='...'
                                    // fluid
                                    width={"100%"}
                                    height={"115px"}
                                />
                            </MDBCol >
                            <MDBCol md={9} style={{
                                flex:2,border:'solid 0px grey',
                                justifyContent:'flex-start',
                            }} >
                                <MDBCardBody
                                    style={{
                                        padding: 0,
                                        minHeight: 75,
                                        maxHeight: 75,
                                    }}>
                                    <MDBCardTitle className="d-flex justify-content-between" style={{ background: "", overflow: "hidden", width: "100%", minHeight: "40px", maxHeight: "40px" }} >
                                        {!hideMenu[ind] ? <span style={{ background: "", width: "100%" }}>{item.designName}</span>:''}
                                        {hideMenu[ind] ? (
                                            <>
                                                <div id="desginHideMenu"
                                                    onMouseLeave={() => {
                                                        // let load = [];
                                                        // load = hideMenu.map((value) => false);
                                                        // setHideMenu(load);
                                                    }}
                                                >

                                                    <Link className="btn text-white btn-floating "
                                                        style={{ margin: "0px 5px", backgroundColor: "#f44336" }}
                                                        onClick={() => {
                                                            setError('');
                                                            setSuccess('');
                                                            setSelectedDate('');
                                                            setData(item);
                                                            setBasicModal(true);
                                                            setIsValidating(false)
                                                        }}
                                                    >
                                                        <i className="fas fa-clock-rotate-left"></i>
                                                    </Link>
                                                    <Link className="btn text-white btn-floating"
                                                        style={{ margin: "0px 5px", backgroundColor: "#35fd92" }}
                                                        onClick={() => {
                                                            setError('');
                                                            setSuccess('');
                                                            setData(item);
                                                            setBasicModal(true);
                                                            setIsValidating(true)
                                                        }}
                                                    >
                                                        <i className="fas fa-check"></i>
                                                    </Link>
                                                </div>
                                            </>
                                        ) : (
                                            ''
                                        )}
                                            <>
                                                <span className="fa fa-ellipsis-h"
                                                    onClick={() => {
                                                        if(!hideMenu[ind]){
                                                            let load = [];
                                                            load = hideMenu.map((value) => false);
                                                            load[ind] = true;
                                                            setHideMenu(load);
                                                        }else{
                                                             let load = [];
                                                            load = hideMenu.map((value) => false);
                                                            setHideMenu(load);
                                                        }
                                                    }}
                                                    style={{marginRight:'10px',cursor:'pointer', background: "", fontSize: "30px", flexDirection: "row-reverse" }}
                                                ></span>
                                            </>
                                            <br/>
                                    </MDBCardTitle>
                                    <MDBCardText style={{
                                        marginTop: "-15px"
                                    }}>
                                        <div style={{display:'flex' ,flexDirection:'column' ,rowGap:5}}>
                                            <span style={{display:'flex' ,columnGap:'5px'}}>
                                                <span style={{display:'flex' ,alignItems:'center' ,columnGap:5}}>
                                                    <i className="fa fa-user" style={{ font: "26px" }}></i>
                                                    <span>{item.name}</span>
                                                </span>
                                                <span style={{display:'flex' ,alignItems:'center' ,columnGap:5}}>
                                                    <i className="fa fa-phone" style={{ font: "26px" }}></i>
                                                    <span>{item.phone}</span>
                                                </span>
                                            </span>

                                            <span style={{display:'flex' ,alignItems:'center' ,columnGap:5}}>
                                                <i className="fa fa-clock" style={{ font: "26px", color: dateColor }}></i>
                                                <span>{formattedDate}</span>
                                            </span>
                                        </div>

                                    </MDBCardText>
                                    {/* <MDBCardText>
                                        <small className='text-muted'>Last updated 3 mins ago</small>
                                    </MDBCardText> */}
                                </MDBCardBody>
                                {/* <MDBFooter className="d-flex flex-row-reverse">
                                    <span className="fa fa-star" style={{font:"26px"}}></span>
                                </MDBFooter> */}
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </MDBCol>
            </>
        )
    }
    return (
        <div>
            <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Design form</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
                        </MDBModalHeader>
                        {isValidating ? (
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
                                    <h1>Do you want to validated the Book as already done</h1>
                                </MDBRow>
                            </MDBModalBody>
                        ) : (
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
                                        <ReactDatePicker
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
                                </MDBRow>
                            </MDBModalBody>
                        )}

                        {loading ? (
                            <MDBModalFooter>
                                <MDBBtn color='secondary' >
                                    Close
                                </MDBBtn>
                                {isValidating ? (
                                    <MDBBtn style={{ backgroundColor: 'rgba(235, 210, 146, 0.897)' }} >
                                        <img src={require('../../assets/images/loader.gif')} width={'30px'} alt="loader" />
                                    </MDBBtn>
                                ) : (
                                    <MDBBtn style={{ backgroundColor: 'rgba(235, 210, 146, 0.897)' }}>
                                        <img src={require('../../assets/images/loader.gif')} width={'30px'} alt="loader" />
                                    </MDBBtn>
                                )}

                            </MDBModalFooter>
                        ) : (
                            <MDBModalFooter>
                                <MDBBtn color='secondary' onClick={toggleOpen}>
                                    Close
                                </MDBBtn>
                                {isValidating ? (
                                    <MDBBtn style={{ backgroundColor: 'goldenrod' }} onClick={() => {
                                        handleValidOrder(data.bookID)
                                        console.log(data);
                                    }}>YES</MDBBtn>
                                ) : (
                                    <MDBBtn style={{ backgroundColor: 'goldenrod' }} onClick={() => {
                                        handleChangeOrderDate(data.bookID)
                                        console.log(data);
                                    }}>SUBMIT</MDBBtn>
                                )}

                            </MDBModalFooter>
                        )}
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
            <MDBRow className='row-cols-1 row-cols-md-3 g-3 '>
                {bookList.book.map((items, i) => (
                    <Design item={items} ind={i} />
                ))}
            </MDBRow>
        </div>
    )
}

export const dashboardBookLoader = async () => {
    const res = await fetch(`http://localhost:5000/api/book/getAllBook`, {
        headers: {
            'content-type': 'application/json',
            'accept': 'applicaion/json',
            'access-control-origin': '*',
            // 'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    // console.log(res);
    if (!res.ok) {
        throw Error('An error occur while fetch for Books')
    }
    console.log("res.json()", res);
    return res.json()
}
