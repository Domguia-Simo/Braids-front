import React, { useState } from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBFooter, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle, MDBRow } from 'mdb-react-ui-kit'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import Slider from 'react-slick';
import defaultLogo from '../../assets/image/logo.jpg';

// const imagess = [1, 1, 2, 4]
export default function DashbroadDesign() {
    const designList = useLoaderData();
    const navigate = useNavigate()
    const [hideMenu, setHideMenu] = useState([])
    const [editMode, setEditMode] = useState(false);
    const [data, setData] = useState({})
    const [basicModal, setBasicModal] = useState(false);
    const toggleOpen = () => setBasicModal(!basicModal);
    const [imageModal, setImageModal] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const toggleOpenImage = () => setImageModal(!imageModal);
    function handleChange(e) {
        if (e.target.type == 'number') {
            if (!isNaN(parseInt(e.target.value))) {
                setData({ ...data, [e.target.name]: parseInt(e.target.value) })
            }
        } else
            setData({ ...data, [e.target.name]: e.target.value })
    }

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)

    const [selectedImages, setSelectedImages] = useState([]);
    const [designImages, setDesignImages] = useState([]);
    console.log(designImages);
    const handleFileChange = (event) => {
        const files = event.target.files;
        setSelectedImages([...selectedImages, ...files]);
    };
    const handleSubmit = async (event) => {
        // event.preventDefault();
        if (data.catagory === ""
            || data.description === ""
            || data.designID === ""
            || data.duration === ""
            || data.images === ""
            || data.name === ""
            || data.price === ""
        ) {
            // console.log("Enter every field");
            setError("Enter all form field");
        } else {
            setLoading(true);
            if (editMode) {
                const url = "http://localhost:5000/api/design/updateDesign/" + data.designID;
                await fetch(url, {
                    method: 'put',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        "Access-Control-Origin": "*",
                    },
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .then(async (res) => {
                        console.log(res);
                        if (res.message == "Design updated successfully") {
                            setSuccess(res.message)
                            setTimeout(() => {
                                setLoading(false);
                                setBasicModal(false);
                                navigate('.', { replace: true })
                            }, 1500);
                        }
                    })
                    .catch(err => {
                        setError(err.message);
                    });
            } else {
                const url = "http://localhost:5000/api/design/createDesign"
                await fetch(url, {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        "Access-Control-Origin": "*",
                    },
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .then(async (res) => {
                        console.log(res);
                        if (res.message == "design created successfully") {
                            setSuccess(res.message)
                            setTimeout(() => {
                                setLoading(false);
                                setBasicModal(false);
                                navigate('.', { replace: true })
                            }, 1500);
                        }
                    })
                    .catch(err => {
                        setError(err.message);
                    });
            }
        }
    };
    const handleImageSubmit = async (id) => {
        const formData = new FormData();
        console.log(selectedImages.length);
        // formData.append('images', selectedImages[0]);
        console.log(data);
        for (let i = 0; i < selectedImages.length; i++) {
            formData.append('images', selectedImages[i]);
        }
        // Set the boundary delimiter.
        formData.set('boundary', '----WebKitFormBoundary7MAtFqSxYWLi4eQB');

        // Parse the form data.
        fetch(`http://localhost:5000/api/uploadFile/${id}`, {
            method: 'PosT',
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    console.log('Image uploaded successfully');
                    setSuccess('Image uploaded successfully')
                    setSelectedImages([])
                    setTimeout(() => {
                        setImageModal(false);
                        navigate('.', { replace: true });
                    }, 1500);
                } else {
                    setError('Error uploading image');
                }
            })
            .catch((error) => {
                setError('Error uploading image');
                // console.log(error);
            });
    }
    const handleDelete = async (id) => {
        // console.log(body);
        // setLoading(true)
        const url = "http://localhost:5000/api/design/deleteDesign/" + id
        await fetch(url, {
            method: 'delete',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Access-Control-Origin": "*",
            },
            // body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(async (res) => {
                console.log(res);
                if (res.message == "Design was deleted successfully!") {
                    setSuccess(res.message);
                    setTimeout(() => {
                        setImageModal(false);
                        navigate('.', { replace: true });
                    }, 1500);
                }
            })
            .catch(err => {
                setError('Error while Deleting');
            });
    }
    function Design({ item, ind }) {
        let logoImage = item.images ?
            `http://localhost:5000/Design/${item.designID}/${item.images.split(",")[0]}`
            : defaultLogo;
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
                                    src={logoImage}
                                    alt='...'
                                    // fluid
                                    height={"115px"}
                                    width={"100%"}
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
                                        {!hideMenu[ind] ? <span style={{ background: "", width: "100%" }}>{item.name}</span>:''}
                                        {hideMenu[ind] ? (
                                            <>
                                                <div id="desginHideMenu"
                                                    onMouseLeave={() => {
                                                        // let load = [];
                                                        // load = hideMenu.map((value) => false);
                                                        // setHideMenu(load);
                                                    }}
                                                    style={{
                                                        border:'solid 0px rgba(0,0,0,0.3)',display:'flex',
                                                        fontSize:'small'
                                                    }}
                                                >

                                                    <Link className="btn text-white btn-floating "
                                                        style={{ margin: "0px 5px", backgroundColor: "#f44336" }}
                                                        onClick={() => {
                                                            setData(item)
                                                            setIsDeleting(true);
                                                            setImageModal(true);
                                                        }}
                                                    >
                                                        <i className="fas fa-delete-left"></i>
                                                    </Link>
                                                    <Link className="btn text-white btn-floating" style={{ margin: "0px 5px", backgroundColor: "#35fd92" }}
                                                        onClick={() => {
                                                            setData(item)
                                                            console.log(item.images);
                                                            setDesignImages(item.images ? item.images.split(",") : [])
                                                            setSelectedImages([])
                                                            setIsDeleting(false);
                                                            setImageModal(true);
                                                        }}
                                                    >
                                                        <i className="fas fa-file-edit"></i>
                                                    </Link>
                                                    <Link className="btn text-white btn-floating" style={{ margin: "0px 0px", backgroundColor: "#3564fd" }}
                                                        onClick={() => {
                                                            setData(item)
                                                            setEditMode(true);
                                                            setBasicModal(true);
                                                        }}
                                                    >
                                                        <i className="fas fa-edit"></i>
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
                                    </MDBCardTitle>
                                    <MDBCardText style={{
                                        marginTop: "-15px"
                                    }}>
                                        <div style={{display:'flex' ,flexDirection:'column' ,rowGap:5}}>
                                            <span style={{display:'flex' ,alignItems:'center' ,columnGap:5}}>
                                                <i className="fa fa-money-check-dollar" style={{ font: "26px" }}></i>
                                                <span>{item.price} $</span>
                                            </span>

                                            <span style={{display:'flex' ,alignItems:'center' ,columnGap:5}}>
                                                <i className="fa fa-clock" style={{ font: "26px" }}></i>
                                                <span>{item.duration} mins </span>
                                            </span>
                                        </div>

                                        {/* <span className="fa fa-phone" style={{ font: "26px" }}>&nbsp;+1 (523) 1245678</span> */}
                                        {/* <span className="fa fa-clock" style={{font:"26px"}}>&nbsp;{new Date().toDateString()}</span> */}

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
    const ImageMenu = ({ row }) => {
        const handleDelete = async () => {
            let body = {
                image: row,
                images: data.images
            }
            console.log(body);
            // setLoading(true)
            const url = "http://localhost:5000/api/deleteFile/" + data.designID
            await fetch(url, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Access-Control-Origin": "*",
                },
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .then(async (res) => {
                    console.log(res);
                    if (res.message == "Design image delete successfully") {
                        data.images = res.images
                        setData(data);
                        setDesignImages(res.images.split(","))
                    }
                })
                .catch(err => console.log(err));
        };
        return (
            <Link className="btn text-white btn-floating "
                style={{ marginBottom: "-35px", marginRight: "7px", backgroundColor: "#f44336" }}
                onClick={handleDelete}
            >
                <i className="fas fa-delete-left"></i>
            </Link>
        );
    };
    const settings = {
        dots: false, // Show navigation dots
        infinite: true, // Infinite loop the slides
        speed: 2000, // Transition speed in milliseconds
        slidesToShow: 2, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll at a time
        autoplay: true, // Auto-play the slide
        autoplaySpeed: 10000, // Auto-play speed in milliseconds
    };
    return (
        <div>
            <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Design form</MDBModalTitle>
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
                                    <input type="text" placeholder='Name' name="name" value={data.name} onChange={e => handleChange(e)} required />
                                </MDBCol>
                                <MDBCol>
                                    <input type="number" placeholder='Price' name="price" value={data.price} onChange={e => handleChange(e)} required />
                                </MDBCol>
                                <MDBCol>
                                    <input type="number" placeholder='Duration' name="duration" value={data.duration} onChange={e => handleChange(e)} required />
                                </MDBCol>
                                <MDBCol>
                                    <select type="select" placeholder='Catagory' name="catagory" value={data.catagory} onChange={e => handleChange(e)} >
                                        <option value="">Select a catagory</option>
                                        <option value="MEN">MEN</option>
                                        <option value="WOMEN">WOMEN</option>
                                    </select>
                                </MDBCol>
                                <MDBCol>
                                    <textarea type="text" cols={43} rows={5} placeholder='Description' name="description" value={data.description} onChange={e => handleChange(e)} required />
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
                                <MDBBtn style={{ backgroundColor: 'goldenrod' }} onClick={() => {
                                    handleSubmit()
                                    console.log(data);
                                }}>SUBMIT</MDBBtn>
                            </MDBModalFooter>
                        )}
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
            <MDBModal open={imageModal} setOpen={setImageModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Design form</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleOpenImage}></MDBBtn>
                        </MDBModalHeader>
                        {isDeleting ? (
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
                                <MDBRow style={{ margin: "10px" }}>
                                    <h1>Do you want yo Delete the Design name "{data.name}"</h1>
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
                                <MDBRow style={{ margin: "10px" }}>
                                    <MDBCol>
                                        <input type="file" multiple onChange={handleFileChange} />
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className="col d-flex justify-content-center">
                                    {designImages.length > 0 ? (
                                        <>
                                            <Slider {...settings}>
                                                {designImages.map((item) => (
                                                    <div className="slider" key={item} style={{ margin: "10px", width: "300px", height: "300px" }}>
                                                        <div className="d-flex flex-row-reverse">
                                                            <ImageMenu row={item} />
                                                        </div>
                                                        <img
                                                            src={`http://localhost:5000/Design/${data.designID}/${item}`}
                                                            // src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp'
                                                            alt=''
                                                            style={{ width: "230px", height: "300px", marginTop: "-30px" }} />
                                                    </div>
                                                ))}
                                            </Slider>
                                        </>
                                    ) : (<></>)}
                                </MDBRow>
                            </MDBModalBody>
                        )}
                        {loading ? (
                            <MDBModalFooter>
                                <MDBBtn color='secondary' >
                                    Close
                                </MDBBtn>
                                {isDeleting ? (
                                    <MDBBtn style={{ backgroundColor: 'rgba(235, 210, 146, 0.897)' }} >
                                        <img src={require('../../assets/images/loader.gif')} width={'30px'} alt="loader" />
                                    </MDBBtn>
                                ) : (
                                    <MDBBtn style={{ backgroundColor: 'rgba(235, 210, 146, 0.897)' }} >
                                        <img src={require('../../assets/images/loader.gif')} width={'30px'} alt="loader" />
                                    </MDBBtn>
                                )}
                            </MDBModalFooter>
                        ) : (
                            <MDBModalFooter>
                                <MDBBtn color='secondary' onClick={toggleOpenImage}>
                                    Close
                                </MDBBtn>
                                {isDeleting ? (
                                    <MDBBtn style={{ backgroundColor: 'goldenrod' }} onClick={() => {
                                        handleDelete(data.designID);

                                    }}>YES</MDBBtn>
                                ) : (
                                    <MDBBtn style={{ backgroundColor: 'goldenrod' }} onClick={() => {
                                        handleImageSubmit(data.designID);
                                    }}>SUBMIT</MDBBtn>
                                )}
                            </MDBModalFooter>
                        )}
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
            <div className='d-flex flex-row-reverse'>
                <button
                    style={{
                        cursor: 'pointer',
                        border: 'solid 1px grey',
                        padding: '5px 12px',
                        borderRadius: '5px',
                        backgroundColor: 'rgba(0,0,0,0.9)',
                        color: 'white',
                        margin: "20px"
                        // transition:'al 0.2s ease-in-out'
                    }}
                    onClick={() => {
                        setData({
                            catagory: "",
                            description: "",
                            designID: '',
                            duration: '',
                            images: '',
                            name: "",
                            price: '',
                        });
                        setEditMode(false);
                        setBasicModal(true);
                    }}
                >
                    new
                </button>
            </div>
            <MDBRow className='row-cols-1 row-cols-md-3 g-3 '>
            {/* <div> */}

                {designList.design.map((items, i) => (
                    <Design item={items} ind={i} />
                ))}
            {/* </div> */}
            </MDBRow>
        </div>
    )
}
export const dashboardDesignLoader = async () => {
    const res = await fetch(`http://localhost:5000/api/design/getAllDesign`, {
        headers: {
            'content-type': 'application/json',
            'accept': 'applicaion/json',
            'access-control-origin': '*',
            // 'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    // console.log(res);
    if (!res.ok) {
        throw Error('An error occur while fetch for Designs')
    }
    console.log("res.json()", res);
    return res.json()
}
